'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '../curriculum/progress.js'), 'utf8');
const key = slug => 'langsteps:v1.1.0:mastery:' + slug;

function setup(seed = {}, denied = false) {
  const data = new Map(Object.entries(seed));
  const win = {};
  const storage = {
    getItem(name) {
      if (denied) throw new Error('Storage access denied');
      return data.get(name) ?? null;
    },
    setItem(name, value) {
      if (denied) throw new Error('Storage access denied');
      data.set(name, value);
    }
  };
  vm.runInNewContext(script, { window: win, localStorage: storage }, { timeout: 1000 });
  return { api: win.LangStepsProgress, data };
}

test('TypeScript progress module preserves the v1.1.0 storage key and filters old data', () => {
  const { api, data } = setup({ [key('go')]: '["intro","missing","intro",5,null]' });
  const store = api.createStore('go');
  const mastered = store.read(new Set(['intro', 'channels']));
  assert.deepEqual([...mastered], ['intro']);
  assert.equal(store.write(new Set(['intro', 'channels'])), true);
  assert.equal(data.get(key('go')), '["intro","channels"]');
});

test('Courses keep progress isolated and do not overwrite other language mastery', () => {
  const { api, data } = setup();
  api.createStore('go').write(new Set(['hello']));
  api.createStore('sql').write(new Set(['select']));
  assert.equal(data.get(key('go')), '["hello"]');
  assert.equal(data.get(key('sql')), '["select"]');
});

test('Corrupt, unavailable or incorrectly shaped stored data fails safely', () => {
  for (const raw of ['{bad', '"not-an-array"', '{"id":"hello"}']) {
    assert.equal(setup({ [key('go')]: raw }).api.createStore('go').read(new Set(['hello'])).size, 0);
  }
  const { api } = setup({}, true);
  const store = api.createStore('go');
  assert.equal(store.read(new Set(['hello'])).size, 0);
  assert.equal(store.write(new Set(['hello'])), false);
});

test('Reject invalid slugs before constructing local storage keys', () => {
  const { api } = setup();
  for (const slug of ['', '../elsewhere', 'go:bad', 'bad slug']) {
    assert.throws(() => api.createStore(slug), /Invalid course slug/);
  }
});
