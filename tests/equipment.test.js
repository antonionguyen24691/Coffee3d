const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('remote food replaces a previously held accessory and removes the old mesh', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const apply = html.slice(html.indexOf('function applyEquip(e,eq,fighting){'), html.indexOf('function rebuildEnt(e,ap)'));
  const update = html.match(/if\(c\.d!==q\.d\|\|c\.f!==q\.f\)\{[^\n]+/)[0];
  const removed = [];
  const toy = {};
  const rig = {heldD:null, heldF:null, armL:{hand:{remove:item => removed.push(item)}}, armR:{hand:{remove(){}}}, root:{remove(){}}};
  const ent = {rig, toy, tId:'book', wId:'', bId:'', petId:''};
  const context = {q:{ent,d:0,f:0}, c:{d:0,f:22}, ITEM:{book:{}}, scene:{remove(){}},
    setHeld(target, drink, food) { target.heldF = food ? {} : null; }};
  vm.createContext(context);
  vm.runInContext(apply + '\n' + update + '\napplyEquip(q.ent,["","","","book"],false);', context);
  assert.equal(ent.toy, null);
  assert.deepEqual(removed, [toy]);
});
