'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'api-reference.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'curriculum/api-reference.js'), 'utf8');

test('API Reference shows fifteen fully documented, accessible entries without JavaScript', () => {
  assert.match(html, /<h1>Web APIs Reference<\/h1>/);
  assert.equal((html.match(/<details class="api-item"/g) ?? []).length, 15);
  assert.equal((html.match(/<summary>/g) ?? []).length, 15);
  assert.equal((html.match(/class="docs-link"/g) ?? []).length, 15);
  assert.equal((html.match(/<pre><code>/g) ?? []).length, 15);
  assert.match(html, /Fetch API/);
  assert.match(html, /Clipboard API/);
  assert.match(html, /IndexedDB API/);
  assert.match(html, /Service Worker API/);
  assert.match(html, /Web Crypto API/);
  assert.match(html, /id="api-result-count" role="status" aria-live="polite"/);
  assert.match(html, /<script src="\.\/curriculum\/api-reference\.js" defer><\/script>/);
  assert.doesNotMatch(html, /onkeyup=|onclick=|<script>\s*const apis/);
});

class FakeElement {
  constructor(textContent = '') {
    this.textContent = textContent;
    this.hidden = false;
    this.open = false;
    this.disabled = false;
    this.dataset = {};
    this.listeners = new Map();
    this.value = '';
    this.focused = false;
  }
  addEventListener(type, handler) { this.listeners.set(type, handler); }
  fire(type, event = {}) {
    const handler = this.listeners.get(type);
    assert.ok(handler, 'expected a ' + type + ' listener');
    handler(event);
  }
  focus() { this.focused = true; }
  closest() { return null; }
}

function mount() {
  const cards = [
    new FakeElement('Fetch API Network HTTP requests JSON'),
    new FakeElement('Clipboard API Browser copy text'),
    new FakeElement('IndexedDB API Storage offline data')
  ];
  cards.forEach((card, i) => {
    card.dataset.category = ['Network', 'Browser', 'Storage'][i];
    card.dataset.search = card.textContent;
  });
  const elements = Object.fromEntries([
    'apiList','api-search','api-category','api-result-count',
    'api-empty','api-clear','api-expand','api-collapse'
  ].map(id => [id, new FakeElement()]));
  elements.apiList.querySelectorAll = () => cards;
  elements['api-category'].value = 'all';
  const listeners = new Map();
  const document = {
    getElementById: id => elements[id] ?? null,
    addEventListener(type, handler) { listeners.set(type, handler); }
  };
  const context = vm.createContext({ document, HTMLElement: FakeElement });
  new vm.Script(script, { filename: 'curriculum/api-reference.js' }).runInContext(context, { timeout: 1000 });
  return { cards, elements, listeners };
}

test('TypeScript filtering updates visible entries, results and empty state', () => {
  const { cards, elements } = mount();
  assert.equal(elements['api-result-count'].textContent, '3 of 3 APIs shown');
  assert.equal(elements['api-clear'].disabled, true);
  elements['api-search'].value = 'clipboard';
  elements['api-search'].fire('input');
  assert.deepEqual(cards.map(x => x.hidden), [true, false, true]);
  assert.equal(elements['api-result-count'].textContent, '1 of 3 APIs shown');
  assert.equal(elements['api-clear'].disabled, false);
  elements['api-search'].value = 'nonexistent';
  elements['api-search'].fire('input');
  assert.equal(elements['api-empty'].hidden, false);
  assert.equal(elements['api-result-count'].textContent, '0 of 3 APIs shown');

  elements['api-search'].value = '';
  elements['api-category'].value = 'Storage';
  elements['api-category'].fire('change');
  assert.deepEqual(cards.map(x => x.hidden), [true, true, false]);
  elements['api-clear'].fire('click');
  assert.deepEqual(cards.map(x => x.hidden), [false, false, false]);
  assert.equal(elements['api-category'].value, 'all');
  assert.equal(elements['api-search'].focused, true);
});

test('TypeScript supports expanding visible cards, collapsing and slash search shortcut', () => {
  const { cards, elements, listeners } = mount();
  elements['api-category'].value = 'Browser';
  elements['api-category'].fire('change');
  elements['api-expand'].fire('click');
  assert.deepEqual(cards.map(x => x.open), [false, true, false]);
  elements['api-collapse'].fire('click');
  assert.deepEqual(cards.map(x => x.open), [false, false, false]);

  let prevented = 0;
  listeners.get('keydown')({ key: '/', altKey: false, ctrlKey: false, metaKey: false,
    target: new FakeElement(), preventDefault() { prevented++; } });
  assert.equal(prevented, 1);
  assert.equal(elements['api-search'].focused, true);
  const input = new FakeElement();
  input.closest = () => input;
  listeners.get('keydown')({ key: '/', altKey: false, ctrlKey: false, metaKey: false,
    target: input, preventDefault() { prevented++; } });
  assert.equal(prevented, 1, 'typing in an input should retain the slash key');
});
