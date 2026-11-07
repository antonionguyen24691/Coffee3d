'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const root = path.resolve(__dirname, '..');
const requireVendor = createRequire(path.join(root, 'vendor', 'ara3dgen', 'package.json'));
const sharp = requireVendor('sharp');
const models = ['asian-casual.glb', 'asian-casual-woman.glb', 'cyberpunk.glb', 'adventurer.glb'];
const tiers = [512, 1024];

function align4(value) {
  return (value + 3) & ~3;
}

function readGlb(bytes) {
  assert.equal(bytes.readUInt32LE(0), 0x46546c67, 'Not a GLB file');
  assert.equal(bytes.readUInt32LE(4), 2, 'Only GLB v2 is supported');
  assert.equal(bytes.readUInt32LE(8), bytes.length, 'Invalid GLB length');
  let json;
  let binary;
  for (let offset = 12; offset < bytes.length;) {
    const length = bytes.readUInt32LE(offset);
    const kind = bytes.readUInt32LE(offset + 4);
    offset += 8;
    const chunk = bytes.subarray(offset, offset + length);
    if (kind === 0x4e4f534a) json = JSON.parse(chunk.toString('utf8'));
    else if (kind === 0x004e4942) binary = chunk;
    else throw new Error(`Unsupported GLB chunk 0x${kind.toString(16)}`);
    offset += length;
  }
  assert.ok(json && binary, 'GLB must contain JSON and BIN chunks');
  assert.equal(json.buffers.length, 1, 'Only one embedded buffer is supported');
  return { json, binary };
}

function encodeGlb(json, binary) {
  const jsonData = Buffer.from(JSON.stringify(json), 'utf8');
  const jsonPadded = Buffer.alloc(align4(jsonData.length), 0x20);
  jsonData.copy(jsonPadded);
  const binPadded = Buffer.alloc(align4(binary.length));
  binary.copy(binPadded);
  const total = 12 + 8 + jsonPadded.length + 8 + binPadded.length;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(total, 8);
  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(jsonPadded.length, 0);
  jsonHeader.writeUInt32LE(0x4e4f534a, 4);
  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(binPadded.length, 0);
  binHeader.writeUInt32LE(0x004e4942, 4);
  return Buffer.concat([header, jsonHeader, jsonPadded, binHeader, binPadded]);
}

function viewBytes(binary, view) {
  const start = view.byteOffset || 0;
  return binary.subarray(start, start + view.byteLength);
}

function sha(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

async function resizeImage(input, mimeType, maxDimension) {
  let pipeline = sharp(input).resize({width: maxDimension, height: maxDimension, fit: 'inside', withoutEnlargement: true});
  if (mimeType === 'image/jpeg') pipeline = pipeline.jpeg({quality: 90, mozjpeg: true});
  else if (mimeType === 'image/png') pipeline = pipeline.png({compressionLevel: 9});
  else throw new Error(`Unsupported avatar image type: ${mimeType}`);
  return pipeline.toBuffer();
}

async function optimize(sourcePath, outputPath, maxDimension) {
  const original = fs.readFileSync(sourcePath);
  const {json, binary} = readGlb(original);
  const originalJson = JSON.parse(JSON.stringify(json));
  const imageViews = new Map();
  for (const image of json.images || []) {
    assert.ok(Number.isInteger(image.bufferView), 'Avatar image must use an embedded bufferView');
    const view = json.bufferViews[image.bufferView];
    assert.ok(view && view.buffer === 0 && !view.byteStride && !view.target, 'Image bufferView overlaps geometry or is external');
    if (imageViews.has(image.bufferView)) assert.equal(imageViews.get(image.bufferView).mimeType, image.mimeType);
    else imageViews.set(image.bufferView, {mimeType: image.mimeType, data: viewBytes(binary, view)});
  }

  const accessorViews = new Set();
  for (const accessor of json.accessors || []) {
    if (accessor.bufferView != null) accessorViews.add(accessor.bufferView);
    for (const sparse of [accessor.sparse && accessor.sparse.indices, accessor.sparse && accessor.sparse.values]) {
      if (sparse && sparse.bufferView != null) accessorViews.add(sparse.bufferView);
    }
  }
  for (const viewIndex of imageViews.keys()) assert.ok(!accessorViews.has(viewIndex), 'Image bufferView is also used by an accessor');

  const replacements = new Map();
  let decodedPixelsBefore = 0;
  let decodedPixelsAfter = 0;
  for (const [viewIndex, image] of imageViews) {
    const metadata = await sharp(image.data).metadata();
    decodedPixelsBefore += metadata.width * metadata.height;
    const data = Math.max(metadata.width, metadata.height) > maxDimension
      ? await resizeImage(image.data, image.mimeType, maxDimension)
      : image.data;
    const resized = await sharp(data).metadata();
    assert.ok(Math.max(resized.width, resized.height) <= maxDimension, 'Texture exceeds requested cap');
    decodedPixelsAfter += resized.width * resized.height;
    replacements.set(viewIndex, data);
  }

  const outputParts = [];
  const binaryHashes = new Map();
  let binaryLength = 0;
  for (let index = 0; index < json.bufferViews.length; index++) {
    const view = json.bufferViews[index];
    assert.equal(view.buffer, 0, 'Only one embedded buffer is supported');
    const source = replacements.has(index) ? replacements.get(index) : viewBytes(binary, view);
    const padding = align4(binaryLength) - binaryLength;
    if (padding) outputParts.push(Buffer.alloc(padding));
    const byteOffset = binaryLength + padding;
    outputParts.push(source);
    binaryLength = byteOffset + source.length;
    view.byteOffset = byteOffset;
    view.byteLength = source.length;
    if (!imageViews.has(index)) binaryHashes.set(index, sha(source));
  }
  json.buffers[0].byteLength = binaryLength;
  const output = encodeGlb(json, Buffer.concat(outputParts, binaryLength));
  const parsed = readGlb(output);
  for (const key of ['meshes', 'animations', 'nodes', 'skins', 'accessors', 'materials', 'textures']) {
    assert.deepEqual(parsed.json[key], originalJson[key], `${key} changed during texture optimization`);
  }
  for (const [index, hash] of binaryHashes) assert.equal(sha(viewBytes(parsed.binary, parsed.json.bufferViews[index])), hash, `Geometry bufferView ${index} changed`);
  assert.equal(parsed.json.images.length, originalJson.images.length, 'Image count changed');
  fs.mkdirSync(path.dirname(outputPath), {recursive: true});
  fs.writeFileSync(outputPath, output);
  return {inputBytes: original.length, outputBytes: output.length, maxDimension, decodedMiBBefore: Math.round(decodedPixelsBefore * 4 / 1048576), decodedMiBAfter: Math.round(decodedPixelsAfter * 4 / 1048576)};
}

(async () => {
  for (const tier of tiers) {
    for (const model of models) {
      const result = await optimize(path.join(root, 'assets', 'avatars', model), path.join(root, 'assets', 'avatars', `q${tier}`, model), tier);
      console.log(JSON.stringify({model, ...result}));
    }
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
