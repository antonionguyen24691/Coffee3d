const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('movement events reuse unchanged peer state and still deliver updates', async () => {
  const source = fs.readFileSync('index.html', 'utf8').match(/<script>\s*(\/\* ===== Firebase Realtime Database room adapter ===== \*\/[\s\S]*?)<\/script>/)[1];
  const listeners = {};
  function ref(path) { return {child:k=>ref(path+'/'+k),set:()=>Promise.resolve(),remove:()=>Promise.resolve(),onDisconnect:()=>({remove(){}}),on:(event,fn)=>{listeners[path+':'+event]=fn;},limitToLast(){return this;},once:()=>Promise.resolve({val:()=>({})})}; }
  const auth = {currentUser:{uid:'self'},onAuthStateChanged(fn){fn(this.currentUser);},signInAnonymously(){return Promise.resolve();}};
  const firebase = {initializeApp(){},database:Object.assign(()=>({ref}),{ServerValue:{TIMESTAMP:1}}),auth:()=>auth};
  const window = {firebase,FIREBASE_CONFIG:{apiKey:'test'},addEventListener(){}};
  let parses=0, deliveries=0, nextTimer=0;const timers=new Map();
  const json={parse(s){parses++;return JSON.parse(s);},stringify:JSON.stringify};
  vm.runInNewContext(source,{window,firebase,document:{getElementById(){return null;}},setTimeout(fn,ms){const id=++nextTimer;if(ms===50)timers.set(id,fn);return id;},clearTimeout(id){timers.delete(id);},setInterval(){},Date,Math,Promise,JSON:json});
  const room=await window.claude.use('room'); let snapshot=[]; room.onPeers(e=>{snapshot=e.peers;deliveries++;});
  const emit=(event,id,value)=>listeners['rooms/main/players:'+event]({key:id,val:()=>value});
  const states=[];
  for(let i=0;i<50;i++){states[i]={m:{x:i,z:0},s:JSON.stringify({n:'peer'+i,cr:'a'.repeat(2500)}),t:Date.now()};emit('child_added','p'+i,states[i]);}
  const before=deliveries;
  for(let i=0;i<200;i++){const id=i%50;states[id]={...states[id],m:{x:100+i,z:0}};emit('child_changed','p'+id,states[id]);}
  assert.equal(deliveries,before,'movement bursts wait for the coalescing window');
  assert.equal(timers.size,1,'one delivery is scheduled');const flush=[...timers.values()][0];timers.clear();flush();
  assert.equal(deliveries,before+1,'a burst produces one delivery');
  assert.equal(parses,50,'only new or changed serialized state is parsed');
  assert.equal(snapshot.length,51);assert.equal(snapshot.find(p=>p.peer==='p49').presence.x,299);
  states[0]={...states[0],s:JSON.stringify({n:'updated'})};emit('child_changed','p0',states[0]);
  assert.equal(parses,51);assert.equal(snapshot.find(p=>p.peer==='p0').presence.n,'updated');
  states[1]={...states[1],m:{x:500,z:0}};emit('child_changed','p1',states[1]);assert.equal(timers.size,1);
  states[0]={...states[0],s:JSON.stringify({n:'changed immediately'})};emit('child_changed','p0',states[0]);
  assert.equal(snapshot.find(p=>p.peer==='p1').presence.x,500);assert.equal(timers.size,0,'semantic change flushes pending movement');
  const immediate=deliveries;
  states[0]={...states[0],s:JSON.stringify({n:'attacking',at:1})};emit('child_changed','p0',states[0]);
  states[0]={...states[0],s:JSON.stringify({n:'attacking',at:2})};emit('child_changed','p0',states[0]);
  assert.equal(deliveries,immediate+2,'consecutive action changes are both delivered');
  states[1]={...states[1],m:{x:600,z:0}};emit('child_changed','p1',states[1]);
  emit('child_removed','p0',null);assert.equal(snapshot.length,50);assert.equal(timers.size,0);assert.equal(snapshot.find(p=>p.peer==='p1').presence.x,600);
  emit('child_added','p0',states[0]);assert.equal(parses,55,'removed player cache is discarded');
  states[0]={...states[0],s:'not json'};emit('child_changed','p0',states[0]);assert.equal(snapshot.length,50);
});
