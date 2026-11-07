const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('idle presence checks are throttled while forced changes remain immediate', () => {
  const html = fs.readFileSync('index.html','utf8');
  const push = html.match(/function push\(force\)\{[\s\S]*?\n\}/)[0];
  let now=0, built=0, sent=0, position=0;
  const ctx={started:true,room:{presence(){sent++;return Promise.resolve();}},performance:{now:()=>now},lastSend:0,lastKey:'',myState(){built++;return {x:position};},JSON};
  vm.createContext(ctx);vm.runInContext(push,ctx);
  for(let i=0;i<=60;i++){now=i*1000/60;ctx.push(false);}
  assert.ok(built<=9,`idle state was built ${built} times`);assert.equal(sent,1);
  position=1;now+=1;ctx.push(true);assert.equal(sent,2,'forced update is not delayed');
  position=2;now+=10;ctx.push(false);assert.equal(sent,2,'ordinary update respects throttle');
  now+=121;ctx.push(false);assert.equal(sent,3,'latest position eventually sent');
});
