const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const code = html.match(/  if\(document\.hidden\|\|!started\|\|pvOn\|\|elapsed>2\).*$/m)[0];
function environment(overrides = {}) {
  const ctx = { document:{hidden:false}, started:true, pvOn:false, elapsed:0, fpsAcc:0, fpsN:0, qUp:0, qDown:false, T:10, qLock:false, QL:2, low:false, ...overrides };
  ctx.setQuality = q => { ctx.QL = q; };
  vm.createContext(ctx);
  return ctx;
}
function frames(ctx, seconds, fps) {
  for (let i = 0; i < seconds * fps; i++) { ctx.elapsed = 1 / fps; vm.runInContext(code, ctx); }
}
test('quality drops under sustained slow frames and recovers after sustained fast frames', () => {
  const ctx = environment(); frames(ctx, 4, 25); assert.equal(ctx.QL, 1);
  frames(ctx, 16, 60); assert.equal(ctx.QL, 2);
});
test('hidden and paused frames do not lower quality', () => {
  const ctx = environment({document:{hidden:true}}); frames(ctx, 10, 10); assert.equal(ctx.QL, 2);
  ctx.document.hidden = false; ctx.pvOn = true; frames(ctx, 10, 10); assert.equal(ctx.QL, 2);
});
test('manual quality lock prevents changes and weak devices recover only to medium', () => {
  const locked = environment({qLock:true}); frames(locked, 5, 15); assert.equal(locked.QL, 2);
  const weak = environment({low:true, QL:0}); frames(weak, 30, 60); assert.equal(weak.QL, 1);
});
