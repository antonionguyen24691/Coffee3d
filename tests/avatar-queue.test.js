const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const errorFn=html.match(/function avatarJobError\(code\)\{[^\n]+\}/)[0];
const queueFn=html.match(/function createAvatarBuildQueue\(maxWaiting\)\{[\s\S]*?\n\}/)[0];
function setup(n){const ctx={Promise,Error};vm.createContext(ctx);vm.runInContext(errorFn+'\n'+queueFn,ctx);return ctx.createAvatarBuildQueue(n);}
function deferred(){let resolve;const promise=new Promise(r=>{resolve=r;});return {promise,resolve};}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
test('stale queued builds are skipped and the latest request still runs',async()=>{
  const queue=setup(2),gate=deferred(),runs=[],requests=[],valid=[];
  requests.push(queue.enqueue(()=>{runs.push('active');return gate.promise;},()=>true,()=>false));await tick();
  for(let i=0;i<100;i++){if(i)valid[i-1]=false;valid[i]=true;requests.push(queue.enqueue(()=>{runs.push(i);return i;},()=>valid[i],()=>false));requests[requests.length-1].catch(()=>{});}
  gate.resolve('done');const results=await Promise.allSettled(requests);assert.deepEqual(runs,['active',99]);assert.equal(results.filter(x=>x.status==='fulfilled').length,2);assert.equal(results[1].reason.code,'AVATAR_UNUSED');
});
test('bounded queue prioritizes local work and rejects excess safely',async()=>{
  const queue=setup(2),gate=deferred(),order=[];const active=queue.enqueue(()=>gate.promise,()=>true,()=>false);await tick();
  const a=queue.enqueue(()=>{order.push('a');return 'a';},()=>true,()=>false);a.catch(()=>{});
  const b=queue.enqueue(()=>{order.push('b');return 'b';},()=>true,()=>false);
  const full=queue.enqueue(()=>1,()=>true,()=>false);await assert.rejects(full,e=>e.code==='AVATAR_QUEUE_FULL');
  const local=queue.enqueue(()=>{order.push('local');return 'local';},()=>true,()=>true);
  await assert.rejects(a,e=>e.code==='AVATAR_QUEUE_FULL');gate.resolve('done');await Promise.all([active,b,local]);assert.deepEqual(order,['local','b']);
});
test('a shared waiting job gains priority when a local user requests it',async()=>{
  const queue=setup(3),gate=deferred(),order=[];const active=queue.enqueue(()=>gate.promise,()=>true,()=>false);await tick();let local=false;
  const a=queue.enqueue(()=>{order.push('other');},()=>true,()=>false);
  const b=queue.enqueue(()=>{order.push('shared');},()=>true,()=>local);local=true;gate.resolve();await Promise.all([active,a,b]);assert.deepEqual(order,['shared','other']);
});
