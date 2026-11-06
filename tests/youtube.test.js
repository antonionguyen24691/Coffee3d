const test = require('node:test');
const assert = require('node:assert/strict');
const {videoId, embedUrl} = require('../youtube.js');

test('accepts YouTube video, short and live links and rejects lookalike sites', () => {
  assert.equal(videoId('https://www.youtube.com/watch?v=abcdefghijk'), 'abcdefghijk');
  assert.equal(videoId('https://youtu.be/abcdefghijk?t=1'), 'abcdefghijk');
  assert.equal(videoId('https://youtube.com/live/abcdefghijk'), 'abcdefghijk');
  assert.equal(videoId('https://youtube.com.evil.test/watch?v=abcdefghijk'), null);
  assert.equal(videoId('https://youtube.com/watch?v=bad'), null);
});

test('creates a YouTube embed with elapsed start only for recorded videos', () => {
  assert.match(embedUrl({id:'abcdefghijk', live:false, at:1000}, 11000), /start=10/);
  assert.doesNotMatch(embedUrl({id:'abcdefghijk', live:true, at:1000}, 11000), /start=/);
  assert.equal(embedUrl({id:'bad'}, 11000), null);
});
