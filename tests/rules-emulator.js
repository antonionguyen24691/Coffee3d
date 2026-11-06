const assert = require('node:assert/strict');

async function signup() {
  const response = await fetch('http://127.0.0.1:19099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake', {
    method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({returnSecureToken:true})
  });
  assert.equal(response.status, 200);
  return response.json();
}
async function request(path, token, method, value) {
  const url = new URL('http://127.0.0.1:19000/' + path + '.json');
  url.searchParams.set('ns','demo-coffee3d-default-rtdb');
  if (token) url.searchParams.set('auth',token);
  return fetch(url, {method, headers:{'content-type':'application/json'}, body:value === undefined ? undefined : JSON.stringify(value)});
}
(async function() {
  const alice = await signup(), bob = await signup();
  const message = {u:alice.localId,from:alice.localId+'_a',to:bob.localId+'_b',n:'Alice',t:'hello',at:{'.sv':'timestamp'}};
  let response = await request('rooms/main/direct/'+bob.localId+'/message1',alice.idToken,'PUT',message);
  assert.equal(response.status,200,'sender can write recipient inbox');
  response = await request('rooms/main/direct/'+bob.localId,alice.idToken,'GET');
  assert.equal(response.status,401,'sender cannot read recipient inbox');
  response = await request('rooms/main/direct/'+bob.localId,bob.idToken,'GET');
  assert.equal(response.status,200,'recipient can read own inbox');
  response = await request('rooms/main/direct/'+bob.localId+'/message2',alice.idToken,'PUT',{...message,extra:'bad'});
  assert.equal(response.status,401,'unknown message fields are rejected');
  const media = {id:'abcdefghijk',live:false,at:{'.sv':'timestamp'},by:alice.localId};
  response = await request('rooms/main/media',alice.idToken,'PUT',media);
  assert.equal(response.status,200,'authenticated user can share valid media');
  response = await request('rooms/main/media',alice.idToken,'PUT',{...media,id:'bad'});
  assert.equal(response.status,401,'invalid video id is rejected');
  response = await request('rooms/main/media',null,'GET');
  assert.equal(response.status,401,'anonymous request cannot read room media');
  response = await request('saves/EXAMPLECODE12',alice.idToken,'GET');
  assert.equal(response.status,401,'legacy saves remain closed');
  console.log('Firebase emulator permission checks passed');
})().catch(error => {console.error(error);process.exitCode=1;});
