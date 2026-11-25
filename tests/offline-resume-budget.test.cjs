'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '../curriculum/offline-library.js'), 'utf8');
const MiB = 1024 * 1024;
const base = 'https://example.test/LangSteps/';
const assets = ['HTML/index.html', 'HTML/style.css', 'HTML/script.js',
  'online-status.css', 'online-status.js', 'splash.png'];

class Element {
  constructor() {
    this.children = [];
    this.dataset = {};
    this.listeners = {};
  }
  append(...children) { this.children.push(...children); }
  addEventListener(name, handler) { this.listeners[name] = handler; }
}
class Button extends Element {}

function response(size) {
  return {
    ok: true,
    type: 'basic',
    headers: { get: name => name === 'content-type' ? 'text/html' : '' },
    arrayBuffer: async () => ({ byteLength: size }),
    clone() { return response(size); }
  };
}

const flush = () => new Promise(resolve => setImmediate(resolve));

async function harness(saved, downloadSize = 1) {
  const entries = new Map(Object.entries(saved).map(([asset, size]) =>
    [base + asset, size]));
  const requested = [];
  const written = [];
  const cache = {
    match: async url => entries.has(url) ? response(entries.get(url)) : undefined,
    put: async (url, value) => {
      written.push(url.slice(base.length));
      entries.set(url, (await value.arrayBuffer()).byteLength);
    }
  };
  const list = new Element();
  const status = new Element();
  const cancel = new Button();
  const storage = new Element();
  const ids = {
    'offline-course-list': list,
    'offline-library-status': status,
    'offline-library-cancel': cancel,
    'offline-library-storage': storage
  };
  const caches = {
    keys: async () => ['langsteps-library-v1-html'],
    open: async () => cache,
    match: async () => undefined
  };
  vm.runInNewContext(script, {
    URL, AbortController, HTMLElement: Element, HTMLButtonElement: Button, caches,
    document: {
      getElementById: id => ids[id],
      createElement: tag => tag === 'button' ? new Button() : new Element()
    },
    window: { location: { href: base + 'offline-library.html' },
      isSecureContext: true, caches, addEventListener() {} },
    navigator: { onLine: true, serviceWorker: { register: async () => {} } },
    fetch: async url => {
      requested.push(url.slice(base.length));
      return response(downloadSize);
    }
  });
  await flush();
  const save = list.children[0].children[3];
  assert.equal(save.disabled, false);
  save.listeners.click();
  await flush();
  assert.equal(save.disabled, false, 'download must settle');
  return { requested, written, entries, status: status.textContent };
}

test('resume counts saved files even when they follow a missing asset', async () => {
  const result = await harness(Object.fromEntries(assets.slice(2).map(a => [a, 5 * MiB])));
  assert.deepEqual(result.requested, [assets[0]]);
  assert.deepEqual(result.written, []);
  assert.equal(result.entries.size, 4);
  assert.match(result.status, /exceeded the local storage safety limit/);
});

test('resume preserves existing assets and fills a bundle within the byte budget', async () => {
  const result = await harness({ [assets[3]]: 5 * MiB, [assets[5]]: 5 * MiB });
  assert.deepEqual(result.requested, assets.filter((_, i) => i !== 3 && i !== 5));
  assert.deepEqual(result.written, result.requested);
  assert.equal(result.entries.size, assets.length);
  assert.match(result.status, /saved 6 local files/);
});

test('oversize legacy bundle is rejected before fetching or writing', async () => {
  const result = await harness(Object.fromEntries(assets.slice(1).map(a => [a, 5 * MiB])));
  assert.deepEqual(result.requested, []);
  assert.deepEqual(result.written, []);
  assert.match(result.status, /remove the course bundle before retrying/);
});

test('an oversize existing individual asset is rejected before network access', async () => {
  const result = await harness({ [assets[5]]: 5 * MiB + 1 });
  assert.deepEqual(result.requested, []);
  assert.deepEqual(result.written, []);
  assert.match(result.status, /remove the course bundle before retrying/);
});

test('a complete bundle at the exact limit requires no new fetch', async () => {
  const result = await harness(Object.fromEntries(assets.map((a, i) => [a, i < 4 ? 5 * MiB : 0])));
  assert.deepEqual(result.requested, []);
  assert.deepEqual(result.written, []);
  assert.match(result.status, /saved 6 local files/);
});
