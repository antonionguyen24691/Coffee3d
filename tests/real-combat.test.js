const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const ctx={Math};
vm.createContext(ctx);
for(const name of ['realHeldSources','realCombatReach']){
  const match=html.match(new RegExp('function '+name+'\\([^\\n]+\\}'));
  if(match)vm.runInContext(match[0],ctx);
}
test('combat replaces held food and drink with the equipped weapon, then restores them',()=>{
  const drink={},food={},toy={},weapon={},rig={heldD:drink,heldF:food};
  let held=ctx.realHeldSources(rig,{toy});
  assert.equal(held.drink,drink);assert.equal(held.food,food);
  held=ctx.realHeldSources(rig,{fight:true,weapon,toy});
  assert.equal(held.drink,weapon);assert.equal(held.food,null);
  held=ctx.realHeldSources(rig,{fight:true,toy});
  assert.equal(held.drink,null);assert.equal(held.food,null);
  held=ctx.realHeldSources(rig,{toy});
  assert.equal(held.drink,drink);assert.equal(held.food,food);
});
test('attack reach is bounded and returns to guard after the attack',()=>{
  assert.equal(ctx.realCombatReach(null),0);
  assert.equal(ctx.realCombatReach({k:'hit',t:.2,d:.4}),0);
  assert.equal(ctx.realCombatReach({k:'atk',t:0,d:.4}),0);
  assert.ok(ctx.realCombatReach({k:'atk',t:.2,d:.4})>.99);
  assert.ok(Math.abs(ctx.realCombatReach({k:'atk',t:.4,d:.4}))<1e-12);
  assert.equal(ctx.realCombatReach({k:'atk',t:2,d:.4}),0);
});
