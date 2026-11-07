const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const wardrobe = require('../wardrobe.js');

test('wardrobe selections are bounded and malformed room data falls back safely', () => {
  assert.deepEqual(wardrobe.clean(null), [0, 0, 0, 0]);
  assert.deepEqual(wardrobe.clean([1, 2, 3, 4]), [1, 2, 3, 4]);
  assert.deepEqual(wardrobe.clean([999, -1, 1.5, '2']), [0, 0, 0, 0]);
});

test('every real model has supported material targets for its wardrobe controls', () => {
  assert.deepEqual(wardrobe.targets(1, 'outfit'), ['Outfit']);
  assert.deepEqual(wardrobe.targets(3, 'outfit'), ['Techwear jacket']);
  assert.deepEqual(wardrobe.targets(3, 'accent'), ['Techwear pants', 'Straps']);
  assert.deepEqual(wardrobe.targets(4, 'outfit'), ['Tank top']);
  assert.deepEqual(wardrobe.targets(4, 'accent'), ['Cargo shorts']);
  assert.deepEqual(wardrobe.targets(2, 'accent'), []);
  assert.deepEqual(wardrobe.targets(0, 'hair'), []);
});

test('saved outfits only accept recognized models and sanitized colors', () => {
  assert.equal(wardrobe.cleanLook({ style: 99, colors: [1, 2, 3, 4] }), null);
  assert.deepEqual(wardrobe.cleanLook({ style: 4, colors: [1, -1, 3, 4] }), { style: 4, colors: [1, 0, 3, 4] });
});

test('wardrobe material mappings correspond to the actual model assets', () => {
  const files = ['asian-casual.glb', 'asian-casual-woman.glb', 'cyberpunk.glb', 'adventurer.glb'];
  files.forEach((name, index) => {
    const file = fs.readFileSync('assets/avatars/' + name);
    const gltf = JSON.parse(file.subarray(20, 20 + file.readUInt32LE(12)).toString('utf8'));
    const names = gltf.materials.map(material => material.name);
    wardrobe.slots.flatMap(slot => wardrobe.targets(index + 1, slot)).forEach(target => {
      assert.ok(names.includes(target), name + ' is missing material ' + target);
    });
  });
});
