const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const source=html.match(/function updatePeerAvatarBudget\(e,near,now\)\{[\s\S]*?\n\}/)[0];
function setup(){let loaded=0,peak=0;const calls=[];const ctx={useRealAvatar(rig,style,recipe){calls.push({id:rig.id,style,recipe});if(style&&!rig.active){rig.active=true;loaded++;peak=Math.max(peak,loaded);}else if(!style&&rig.active){rig.active=false;loaded--;}}};vm.createContext(ctx);vm.runInContext(source,ctx);return {ctx,calls,get loaded(){return loaded;},get peak(){return peak;}};}
function entity(id){return {rig:{id,active:false},avatarStyle:5,avatarRecipe:'recipe',loadRequested:false};}
test('briefly leaving and returning near does not rebuild the avatar',()=>{const h=setup(),e=entity(1);h.ctx.updatePeerAvatarBudget(e,true,0);h.ctx.updatePeerAvatarBudget(e,false,1000);h.ctx.updatePeerAvatarBudget(e,true,15000);assert.equal(h.calls.length,1);assert.equal(h.loaded,1);});
test('old far avatars are released and can reload when seen again',()=>{const h=setup(),e=entity(1);h.ctx.updatePeerAvatarBudget(e,true,0);h.ctx.updatePeerAvatarBudget(e,false,1000);h.ctx.updatePeerAvatarBudget(e,false,15999);assert.equal(h.loaded,1);h.ctx.updatePeerAvatarBudget(e,false,16000);assert.equal(h.loaded,0);assert.equal(e.loadRequested,false);h.ctx.updatePeerAvatarBudget(e,true,17000);assert.equal(h.loaded,1);assert.equal(h.calls[2].recipe,'recipe');});
test('a remote model rejected by a busy queue retries only after the delay',()=>{const h=setup(),e=entity(1);e.loadRequested=true;e.rig.retryAvatarAt=3000;h.ctx.updatePeerAvatarBudget(e,true,2999);assert.equal(h.calls.length,0);h.ctx.updatePeerAvatarBudget(e,true,3000);assert.equal(h.calls.length,1);h.ctx.updatePeerAvatarBudget(e,true,4000);assert.equal(h.calls.length,1);});
test('passing many peers does not keep every avatar instantiated',()=>{const h=setup(),peers=Array.from({length:50},(_,i)=>entity(i));for(let i=0;i<50;i++){for(let j=0;j<50;j++)h.ctx.updatePeerAvatarBudget(peers[j],i===j,i*1000);}assert.ok(h.peak<=17,`peak ${h.peak}`);for(const e of peers)h.ctx.updatePeerAvatarBudget(e,false,50000);for(const e of peers)h.ctx.updatePeerAvatarBudget(e,false,70000);assert.equal(h.loaded,0);});
