const fs = require('node:fs/promises');
const path = require('node:path');

const origin = 'https://ara3dgen.com/assets/';
const destination = process.argv[2];
if (!destination || !path.isAbsolute(destination)) throw new Error('Supply an absolute output directory');

async function get(relative) {
  const response = await fetch(new URL(relative, origin));
  if (!response.ok) throw new Error(`${relative}: HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  const catalogBytes = await get('catalog.json');
  const catalog = JSON.parse(catalogBytes);
  const files = new Set(['base.pack', 'targets.pack', catalog.eyeMesh, catalog.eyeMesh.replace('high-poly', 'low-poly')]);
  function collect(value) {
    if (!value || typeof value !== 'object') return;
    for (const [key, item] of Object.entries(value)) {
      if (typeof item === 'string' && key === 'file') files.add(item);
      else if (typeof item === 'string' && key === 'thumb') files.add(item);
      else if (typeof item === 'string' && (key === 'diffuse' || key === 'normal')) files.add('textures/' + item);
      else collect(item);
    }
  }
  collect(catalog);
  for (const name of files) if (typeof name !== 'string' || !/^[a-zA-Z0-9_.\/-]+$/.test(name) || name.includes('..')) throw new Error('Unexpected asset path');
  await fs.mkdir(destination, {recursive:true});
  await fs.writeFile(path.join(destination, 'catalog.json'), catalogBytes);
  const queue = [...files];
  let completed = 0;
  async function worker() {
    while (queue.length) {
      const file = queue.shift();
      const target = path.join(destination, file);
      await fs.mkdir(path.dirname(target), {recursive:true});
      await fs.writeFile(target, await get(file));
      completed++;
    }
  }
  await Promise.all(Array.from({length:6}, worker));
  console.log(`Downloaded ${completed} catalog assets`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
