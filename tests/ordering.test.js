const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function game() {
  const html = fs.readFileSync('index.html', 'utf8');
  const section = (start, end) => html.slice(html.indexOf(start), html.indexOf(end));
  let now = 2000;
  const timers = [];
  const drinks = { 1: {id:1, n:'Coffee', e:'', f:null}, 2: {id:2, n:'Cake', e:'', f:'cake'} };
  const noop = () => {};
  const context = {
    me: {d:1, f:0, sipN:0, biteN:0, sp:[0,''], name:'A'},
    mine: {rig:{}}, MENU_BY_ID: drinks, SV:{coins:100}, F:null,
    $: () => ({style:{display:'none'}}), PRICE: () => 1, setCoins:noop,
    setHeld:noop, applyEquip:noop, eqArr:() => [], hideModal:noop, toast:noop,
    sfxDing:noop, updHud:noop, push:noop, QE:noop, addXP:noop, sfxPop:noop,
    Date: {now:() => now}, setTimeout: fn => timers.push(fn)
  };
  context.setCoins = delta => { context.SV.coins += delta; };
  vm.createContext(context);
  vm.runInContext(section('var heldEpoch=', '/* ---------- shop / bag ---------- */') +
    section('var lastSip=0;', '/* ---------- plant care'), context);
  context.renderHand = noop;
  return {context, drinks, timers, advance: () => {now += 1200;}};
}

test('finishing an old drink does not remove a freshly ordered drink of the same kind', () => {
  const {context, drinks, timers, advance} = game();
  for (let i = 0; i < 6; i++) { context.sipDrink(); advance(); }
  assert.equal(timers.length, 1);
  context.orderItem(drinks[1]);
  timers[0]();
  assert.equal(context.me.d, 1);
  assert.equal(context.me.sipN, 0);
});

test('ordering checks funds before changing the held item', () => {
  const {context, drinks} = game();
  context.SV.coins = 0;
  context.orderItem(drinks[2]);
  assert.equal(context.SV.coins, 0);
  assert.equal(context.me.f, 0);
  context.SV.coins = 10;
  context.orderItem(drinks[2]);
  assert.equal(context.SV.coins, 9);
  assert.equal(context.me.f, 2);
});

test('a drink cannot be consumed again while its final sip is finishing', () => {
  const {context, timers, advance} = game();
  for (let i = 0; i < 6; i++) { context.sipDrink(); advance(); }
  context.sipDrink();
  assert.equal(context.me.sipN, 6);
  assert.equal(timers.length, 1);
});

test('finishing an old cake does not remove a newly ordered cake', () => {
  const {context, drinks, timers, advance} = game();
  context.me.f = 2;
  for (let i = 0; i < 4; i++) { context.biteFood(); advance(); }
  context.orderItem(drinks[2]);
  timers[0]();
  assert.equal(context.me.f, 2);
  assert.equal(context.me.biteN, 0);
});

test('an emptied drink is removed when it has not been replaced', () => {
  const {context, timers, advance} = game();
  for (let i = 0; i < 6; i++) { context.sipDrink(); advance(); }
  timers[0]();
  assert.equal(context.me.d, 0);
  assert.equal(context.me.sipN, 0);
});
