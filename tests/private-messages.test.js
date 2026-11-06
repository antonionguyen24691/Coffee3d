const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('direct messages use recipient inbox and retain the sender identity', async () => {
  const source = fs.readFileSync('index.html', 'utf8').match(/<script>\s*(\/\* ===== Firebase Realtime Database room adapter ===== \*\/[\s\S]*?)<\/script>/)[1];
  const writes = [];
  const listeners = {};
  function ref(path) {
    return {
      child(key) { return ref(path + '/' + key); },
      set() { return Promise.resolve(); }, remove() { return Promise.resolve(); },
      onDisconnect() { return { remove() {} }; },
      on(event, fn) { listeners[path + ':' + event] = fn; },
      limitToLast() { return this; }, once() { return Promise.resolve({val: () => ({})}); },
      push(value) { writes.push({path, value}); return Promise.resolve(); }
    };
  }
  const auth = {currentUser:{uid:'sender'}, onAuthStateChanged(fn){fn(this.currentUser);}, signInAnonymously(){return Promise.resolve();}};
  const firebase = {initializeApp(){}, database:Object.assign(() => ({ref}), {ServerValue:{TIMESTAMP:1}}), auth:() => auth};
  const window = {firebase, FIREBASE_CONFIG:{apiKey:'test'}, addEventListener(){}};
  vm.runInNewContext(source, {window, firebase, document:{getElementById(){return null;}}, setTimeout(){return 1;}, setInterval(){}, Date, Math, Promise, JSON});
  const room = await window.claude.use('room');
  const peerEvents = [];
  const unsubscribe = room.onPeers(event => peerEvents.push(event.peers.length));
  assert.equal(peerEvents[0], 1, 'subscribers receive the current player immediately');
  unsubscribe();
  await room.postDirect('recipient_tab123', 'An', 'Hello');
  assert.equal(writes[0].path, 'rooms/main/direct/recipient');
  assert.equal(writes[0].value.u, 'sender');
  assert.equal(writes[0].value.to, 'recipient_tab123');
  assert.equal(writes[0].value.t, 'Hello');
  assert.ok(listeners['rooms/main/direct/sender:child_added']);
  const received = [];
  room.onDirect(message => received.push(message));
  const deliver = listeners['rooms/main/direct/sender:child_added'];
  deliver({val:() => ({to:'sender_other', t:'wrong tab'})});
  deliver({val:() => ({to:writes[0].value.from, t:'reply'})});
  assert.equal(received.length, 1);
  assert.equal(received[0].t, 'reply');
  await assert.rejects(room.postDirect('invalid', 'An', 'Hello'));
});
