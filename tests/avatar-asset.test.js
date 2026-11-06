const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

for (const asset of ['asian-casual.glb', 'asian-casual-woman.glb', 'cyberpunk.glb']) {
  test(asset + ' includes a skin and the movement clips needed by the cafe', () => {
    const file = fs.readFileSync('assets/avatars/' + asset);
    assert.equal(file.toString('ascii', 0, 4), 'glTF');
    const json = JSON.parse(file.subarray(20, 20 + file.readUInt32LE(12)).toString('utf8'));
    assert.ok(json.skins.length > 0);
    for (const name of ['Idle', 'Walk', 'Run', 'Sit idle (chair)', 'Wave']) {
      assert.ok(json.animations.some(clip => clip.name === name), name);
    }
  });
}
