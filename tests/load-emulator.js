const {performance} = require('node:perf_hooks');

async function signup() {
  const response = await fetch('http://127.0.0.1:19099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake', {
    method:'POST', headers:{'content-type':'application/json'}, body:'{"returnSecureToken":true}'
  });
  if (!response.ok) throw new Error('Emulator signup failed: ' + response.status);
  return response.json();
}
async function writeMovement(user, round) {
  const url = new URL('http://127.0.0.1:19000/rooms/loadtest/players/' + user.localId + '_test/m.json');
  url.searchParams.set('ns','demo-coffee3d-default-rtdb');
  url.searchParams.set('auth',user.idToken);
  const start = performance.now();
  const response = await fetch(url,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({x:round,z:round,w:0,q:0,y:0})});
  const elapsed = performance.now() - start;
  if (!response.ok) throw new Error('Movement write failed: ' + response.status);
  return elapsed;
}
(async function() {
  const users = await Promise.all(Array.from({length:20}, signup));
  const times=[];
  for (let round=0;round<5;round++) times.push(...await Promise.all(users.map(user => writeMovement(user,round))));
  times.sort((a,b)=>a-b);
  console.log(JSON.stringify({environment:'local Firebase Emulator',users:users.length,writes:times.length,concurrency:users.length,p50Ms:times[Math.floor(times.length*.5)],p95Ms:times[Math.floor(times.length*.95)],errors:0}));
})().catch(error=>{console.error(error);process.exitCode=1;});
