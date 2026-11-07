const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
test('focus loss clears movement, camera and combat controls', () => {
  const html=fs.readFileSync('index.html','utf8');
  const source=html.match(/function resetInput\(\)\{[^\n]+\}/)[0];
  let blockCalls=0;
  const ctx={keys:{w:1,k:1},jx:1,jy:-1,jid:4,camId:7,knob:{style:{transform:'translate(3px)'}},blockHeld:true,me:{bk:1},setBlock(v){assert.equal(v,0);blockCalls++;ctx.me.bk=0;}};
  vm.createContext(ctx);vm.runInContext(source,ctx);ctx.resetInput();
  assert.equal(Object.keys(ctx.keys).length,0);assert.equal(ctx.jx,0);assert.equal(ctx.jy,0);assert.equal(ctx.jid,null);assert.equal(ctx.camId,null);assert.equal(ctx.knob.style.transform,'none');assert.equal(ctx.blockHeld,false);assert.equal(blockCalls,1);
  ctx.resetInput();assert.equal(blockCalls,1,'release is idempotent');
});
