const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const loop=html.match(/    var k=Math\.min\(1,dt\*9\);q\.x\+=[\s\S]*?if\(qon\)petUpdate\(q\.ent,dt,q\.x,q\.z,q\.yaw,q\.spd>\.5,sit\);/)[0];
function setup(visible){const calls={anim:0,post:0,pet:0,fallback:null};const ctx={Math,dt:.1,now:100,T:1,SEATS:[],HIP_Y:1,realPeers:new Set(['peer']),peerBounds:{center:{set(){}}},peerFrustum:{intersectsSphere(){return visible;}},peerVisible(){return true;},angDiff:(a,b)=>a-b,clamp:(x,a,b)=>Math.max(a,Math.min(b,x)),updatePeerAvatarBudget(){},animateChar(){calls.anim++;},postAnim(e,dt){calls.post++;e.actionTime+=dt;},updateRealAvatar(r,dt,s,fallback){calls.fallback=fallback;},petUpdate(){calls.pet++;}};vm.createContext(ctx);vm.runInContext('function step(q){'+loop+'}',ctx);const root={position:{y:0,set(x,y,z){this.y=y;}},rotation:{},visible:true};const q={id:'peer',x:0,z:0,y:0,tx:1,tz:0,ty:0,yaw:0,tyaw:0,px:0,pz:0,spd:0,seat:-1,wave:0,ent:{rig:{root,scale:1},avatarStyle:1,loadRequested:true,pet:{visible:true},actionTime:0},fg:null,hp:100};return {ctx,q,calls};}
test('offscreen peers skip pose work while action time still advances',()=>{const {ctx,q,calls}=setup(false);ctx.step(q);assert.equal(calls.anim,0);assert.equal(calls.pet,0);assert.equal(calls.post,1);assert.equal(q.ent.actionTime,.1);assert.equal(q.ent.pet.visible,false);assert.equal(calls.fallback,true);assert.ok(q.x>0);});
test('visible peers still animate and update pets',()=>{const {ctx,q,calls}=setup(true);ctx.step(q);assert.equal(calls.anim,1);assert.equal(calls.pet,1);assert.equal(calls.post,1);assert.equal(q.ent.pet.visible,true);assert.equal(calls.fallback,false);});
