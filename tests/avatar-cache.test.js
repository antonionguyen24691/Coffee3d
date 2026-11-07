const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const factory=html.match(/function createAvatarCache\(limit,dispose\)\{[\s\S]*?\n\}/)[0];
function make(limit){const disposed=[];const ctx={Map,Promise,Array};vm.createContext(ctx);vm.runInContext(factory,ctx);return {cache:ctx.createAvatarCache(limit,v=>disposed.push(v)),disposed};}
test('cache shares pending builds and never disposes resources while used',async()=>{
  const {cache,disposed}=make(1);let builds=0;const load=()=>{builds++;return 'avatarA';};
  const a=cache.acquire('a',load),b=cache.acquire('a',load);await Promise.all([a.promise,b.promise]);assert.equal(builds,1);
  const c=cache.acquire('b',()=>Promise.resolve('avatarB'));await c.promise;c.release();assert.deepEqual(disposed,['avatarB']);
  a.release();a.release();assert.deepEqual(disposed,['avatarB']);b.release();assert.deepEqual(disposed,['avatarB']);
});
test('least recently used idle asset is disposed after the limit is exceeded',async()=>{
  const {cache,disposed}=make(1);const a=cache.acquire('a',()=>Promise.resolve('A'));await a.promise;a.release();const b=cache.acquire('b',()=>Promise.resolve('B'));await b.promise;assert.deepEqual(disposed,['A']);b.release();
});
test('released pending build is disposed when it finishes if cache is over limit',async()=>{
  const {cache,disposed}=make(0);let resolve;const a=cache.acquire('a',()=>new Promise(r=>{resolve=r;}));await Promise.resolve();a.release();resolve('A');await a.promise;assert.deepEqual(disposed,['A']);
});
test('failed build can be retried',async()=>{
  const {cache}=make(1);const a=cache.acquire('a',()=>Promise.reject(new Error('offline')));await assert.rejects(a.promise);a.release();const b=cache.acquire('a',()=>Promise.resolve('ok'));assert.equal(await b.promise,'ok');b.release();
});
test('priority follows active local leases for a shared pending build',async()=>{
  const {cache}=make(1);let wanted,priority,resolve;const remote=cache.acquire('a',(w,p)=>{wanted=w;priority=p;return new Promise(r=>{resolve=r;});},false);await Promise.resolve();
  const local=cache.acquire('a',()=>{throw Error('should share');},true);assert.equal(wanted(),true);assert.equal(priority(),true);local.release();assert.equal(priority(),false);remote.release();assert.equal(wanted(),false);resolve('A');await remote.promise;
});
test('asset disposal visits shared geometry, textures and materials only once',()=>{
  const source=html.match(/function disposeAvatarAsset\(asset\)\{[^\n]+\}/)[0];const ctx={Set,Object,Array};vm.createContext(ctx);vm.runInContext(source,ctx);let counts={g:0,m:0,t:0,s:0};const t={isTexture:true,dispose(){counts.t++;}},m={map:t,dispose(){counts.m++;}},g={dispose(){counts.g++;}},s={dispose(){counts.s++;}};ctx.disposeAvatarAsset({scene:{traverse(fn){fn({geometry:g,material:m,skeleton:s});fn({geometry:g,material:[m],skeleton:s});}}});assert.deepEqual(counts,{g:1,m:1,t:1,s:1});
});
