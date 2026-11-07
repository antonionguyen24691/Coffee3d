const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('emissive materials with distinct light intensities do not share a cached material', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const source = html.slice(html.indexOf('const matCache='), html.indexOf('function add(par,geo,mat'));
  class Material { constructor(options) { Object.assign(this, options); } }
  const context = {THREE:{MeshStandardMaterial:Material, FrontSide:0}};
  vm.runInNewContext(source, context);
  const bright = context.M('#fff2c8', {e:'#ffcf80', ei:3});
  const soft = context.M('#fff2c8', {e:'#ffcf80', ei:2});
  assert.notEqual(bright, soft);
  assert.equal(bright.emissiveIntensity, 3);
  assert.equal(soft.emissiveIntensity, 2);
  assert.equal(context.M('#fff2c8', {e:'#ffcf80', ei:2}), soft);
});

test('day and night lighting updates every material in a multi-material avatar', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const source = html.slice(html.indexOf('function applyNightMaterials('), html.indexOf('function nightFactor('));
  const context = {};
  vm.runInNewContext(source, context);
  const body = {isMeshStandardMaterial:true, envMapIntensity:1, userData:{}};
  const clothes = {isMeshStandardMaterial:true, envMapIntensity:2, userData:{}};
  const root = {traverse:fn => fn({material:[body, clothes]})};
  context.applyNightMaterials(root, 1);
  assert.ok(Math.abs(body.envMapIntensity - .15) < 1e-9);
  assert.ok(Math.abs(clothes.envMapIntensity - .3) < 1e-9);
  context.applyNightMaterials(root, 0);
  assert.equal(body.envMapIntensity, 1);
  assert.equal(clothes.envMapIntensity, 2);
});
