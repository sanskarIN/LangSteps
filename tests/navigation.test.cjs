'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const script = fs.readFileSync(path.join(__dirname, '../curriculum/navigation.js'), 'utf8');
const window = {};
vm.runInNewContext(script, { window, decodeURIComponent }, { timeout: 1000 });

test('navigation correctly decodes valid lesson fragments', () => {
  assert.equal(window.LangStepsNavigation.readHash('#hello%20world'), 'hello world');
  assert.equal(window.LangStepsNavigation.readHash('#%ZZ'), '');
  assert.equal(window.LangStepsNavigation.readHash(''), '');
});

test('navigation returns ordered neighbors and respects curriculum boundaries', () => {
  const ids = ['one', 'two', 'three'];
  const start = window.LangStepsNavigation.neighbors(ids, 'one');
  const middle = window.LangStepsNavigation.neighbors(ids, 'two');
  const end = window.LangStepsNavigation.neighbors(ids, 'three');
  assert.equal(start.previous, null);
  assert.equal(start.next, 'two');
  assert.equal(middle.previous, 'one');
  assert.equal(middle.next, 'three');
  assert.equal(end.previous, 'two');
  assert.equal(end.next, null);
  const unknown = window.LangStepsNavigation.neighbors(ids, 'unknown');
  assert.equal(unknown.previous, null);
  assert.equal(unknown.next, null);
});
