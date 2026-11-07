const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const assets = ['asian-casual.glb', 'asian-casual-woman.glb', 'cyberpunk.glb', 'adventurer.glb'];
function loadAsset(asset) {
  const file = fs.readFileSync('assets/avatars/' + asset);
  assert.equal(file.toString('ascii', 0, 4), 'glTF');
  return JSON.parse(file.subarray(20, 20 + file.readUInt32LE(12)).toString('utf8'));
}
for (const asset of assets) {
  test(asset + ' includes a skin and the movement clips needed by the cafe', () => {
    const json = loadAsset(asset);
    assert.ok(json.skins.length > 0);
    for (const name of ['Idle', 'Walk', 'Run', 'Sit idle (chair)', 'Wave']) {
      const clip = json.animations.find(item => item.name === name);
      assert.ok(clip, name);
      for (const bone of ['LeftArm', 'LeftForeArm', 'RightArm', 'RightForeArm']) {
        assert.ok(clip.channels.some(channel => json.nodes[channel.target.node].name === bone && channel.target.path === 'rotation'), name + ': ' + bone);
      }
    }
  });
}

test('all realistic models use the same named skeleton with hand attachment points', () => {
  const skeletons = assets.map(asset => {
    const json = loadAsset(asset);
    return json.skins[0].joints.map(index => json.nodes[index].name);
  });
  for (const skeleton of skeletons) {
    assert.deepEqual(skeleton, skeletons[0]);
    for (const bone of ['Hips', 'Head', 'LeftHand', 'RightHand', 'LeftFoot', 'RightFoot']) {
      assert.ok(skeleton.includes(bone), bone);
    }
  }
});
