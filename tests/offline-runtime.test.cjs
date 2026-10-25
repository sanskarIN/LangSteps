'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../sw.js'), 'utf8');
const origin = 'https://sanskarin.github.io';
const root = origin + '/LangSteps/';

function harness() {
  const handlers = new Map();
  const stores = new Map();
  const deleted = [];
  const network = new Map();
  let online = true;
  const keyOf = request => new URL(typeof request === 'string' ? request : request.url, root).href;
  const open = async name => {
    if (!stores.has(name)) stores.set(name, new Map());
    const entries = stores.get(name);
    return {
      addAll: async urls => {
        for (const url of urls) {
          const body = url.includes('offline.html') ? 'Offline lesson explanation' : 'Core: ' + url;
          entries.set(keyOf(url), new Response(body, { headers: { 'content-type': 'text/html' } }));
        }
      },
      match: async request => entries.get(keyOf(request))?.clone(),
      put: async (request, response) => { entries.set(keyOf(request), response.clone()); },
      keys: async () => [...entries.keys()].map(url => ({ url })),
      delete: async request => entries.delete(keyOf(request))
    };
  };
  const caches = {
    open,
    keys: async () => [...stores.keys()],
    delete: async name => { deleted.push(name); return stores.delete(name); },
    match: async (request, options = {}) => {
      const target = new URL(keyOf(request));
      if (options.ignoreSearch) target.search = '';
      for (const cache of stores.values()) {
        for (const [key, response] of cache) {
          const candidate = new URL(key);
          if (options.ignoreSearch) candidate.search = '';
          if (candidate.href === target.href) return response.clone();
        }
      }
      return undefined;
    }
  };
  const self = {
    location: { origin },
    registration: { scope: root },
    addEventListener: (event, cb) => handlers.set(event, cb),
    skipWaiting: async () => {},
    clients: { claim: async () => {} }
  };
  const fetch = async request => {
    if (!online) throw new Error('Network unavailable');
    const response = network.get(keyOf(request)) || new Response('Fresh: ' + keyOf(request), {
      headers: { 'content-type': request.mode === 'navigate' ? 'text/html' : 'text/javascript' }
    });
    Object.defineProperty(response, 'type', { value: 'basic', configurable: true });
    return response;
  };
  vm.runInNewContext(source, { self, URL, Response, caches, fetch }, { timeout: 1500 });
  const send = (event, request) => {
    let output;
    handlers.get(event)({
      request,
      waitUntil: promise => { output = promise; },
      respondWith: promise => { output = promise; }
    });
    return output;
  };
  const request = (path, mode = 'navigate', method = 'GET') =>
    ({ method, mode, url: new URL(path, root).href });
  return { send, request, stores, deleted, network, setOnline: value => { online = value; }, open };
}

test('installation precaches an offline explanation and upgrades only LangSteps caches', async () => {
  const h = harness();
  const unrelated = await h.open('unrelated-project-cache');
  await unrelated.put(h.request('other.html'), new Response('Keep this'));
  await h.open('langsteps-v1.2.0');
  await h.send('install');
  await h.send('activate');
  assert.ok(h.stores.has('langsteps-core-v1.3.0'));
  assert.equal(h.stores.has('langsteps-v1.2.0'), false);
  assert.ok(h.stores.has('unrelated-project-cache'));
  assert.equal(h.stores.get('langsteps-core-v1.3.0').has(root + 'docs/offline.html'), true);
});

test('a visited unprecached lesson works offline, while an unvisited route shows the offline explanation', async () => {
  const h = harness();
  await h.send('install');
  const seen = await h.send('fetch', h.request('Rust/index.html'));
  assert.match(await seen.text(), /Rust\/index.html/);
  h.setOnline(false);
  const saved = await h.send('fetch', h.request('Rust/index.html'));
  assert.match(await saved.text(), /Rust\/index.html/);
  const missed = await h.send('fetch', h.request('Python/never-visited.html'));
  assert.equal(await missed.text(), 'Offline lesson explanation');
});

test('static assets are saved on demand without intercepting APIs, POST or cross-project traffic', async () => {
  const h = harness();
  await h.send('install');
  const asset = h.request('Rust/script.js', 'no-cors');
  assert.match(await (await h.send('fetch', asset)).text(), /Rust\/script.js/);
  h.setOnline(false);
  assert.match(await (await h.send('fetch', asset)).text(), /Rust\/script.js/);
  for (const request of [
    h.request('api/health'),
    h.request('Rust/index.html', 'navigate', 'POST'),
    { method: 'GET', mode: 'navigate', url: origin + '/OtherProject/index.html' },
    { method: 'GET', mode: 'navigate', url: 'https://outside.example/LangSteps/' }
  ]) assert.equal(h.send('fetch', request), undefined);
});

test('non-success and no-store responses do not get persisted', async () => {
  const h = harness();
  await h.send('install');
  h.network.set(root + 'Rust/missing.html', new Response('Not found', { status: 404,
    headers: { 'content-type': 'text/html' } }));
  h.network.set(root + 'Rust/private.html', new Response('Do not cache', {
    headers: { 'content-type': 'text/html', 'cache-control': 'no-store' } }));
  for (const url of ['Rust/missing.html', 'Rust/private.html']) {
    await h.send('fetch', h.request(url));
  }
  h.setOnline(false);
  for (const url of ['Rust/missing.html', 'Rust/private.html']) {
    assert.equal(await (await h.send('fetch', h.request(url))).text(), 'Offline lesson explanation');
  }
});

test('runtime cache has a fixed maximum number of entries', async () => {
  const h = harness();
  await h.send('install');
  for (let i = 0; i < 68; i++) {
    await h.send('fetch', h.request('Rust/page-' + i + '.html'));
  }
  const runtime = h.stores.get('langsteps-runtime-v1.3.0');
  assert.equal(runtime.size, 64);
  assert.equal(runtime.has(root + 'Rust/page-0.html'), false);
  assert.equal(runtime.has(root + 'Rust/page-67.html'), true);
});

test('a temporary server error serves the saved page but does not mask a new error', async () => {
  const h = harness();
  await h.send('install');
  const page = h.request('Rust/index.html');
  await h.send('fetch', page);
  h.network.set(page.url, new Response('Temporary outage', {
    status: 503, headers: { 'content-type': 'text/html' }
  }));
  assert.match(await (await h.send('fetch', page)).text(), /Fresh:.*Rust\/index\.html/);
  const unseen = h.request('Python/new.html');
  h.network.set(unseen.url, new Response('Temporary outage', {
    status: 503, headers: { 'content-type': 'text/html' }
  }));
  const notSaved = await h.send('fetch', unseen);
  assert.equal(notSaved.status, 503);
  assert.equal(await notSaved.text(), 'Temporary outage');
});

test('offline navigation reuses an exact page despite different tracking query strings', async () => {
  const h = harness();
  await h.send('install');
  await h.send('fetch', h.request('Rust/index.html?campaign=first'));
  h.setOnline(false);
  const response = await h.send('fetch', h.request('Rust/index.html?campaign=second'));
  assert.match(await response.text(), /Rust\/index\.html/);
  const other = await h.send('fetch', h.request('Python/index.html?campaign=first'));
  assert.equal(await other.text(), 'Offline lesson explanation');
});

test('private and oversized responses are never persisted', async () => {
  const h = harness();
  await h.send('install');
  const pages = [
    ['Rust/private-header.html', { 'content-type': 'text/html', 'cache-control': 'public, PRIVATE' }],
    ['Rust/huge.html', { 'content-type': 'text/html', 'content-length': '6000000' }]
  ];
  for (const [path, headers] of pages) {
    h.network.set(root + path, new Response('Sensitive or large', { headers }));
    await h.send('fetch', h.request(path));
  }
  h.setOnline(false);
  for (const [path] of pages) {
    assert.equal(await (await h.send('fetch', h.request(path))).text(),
      'Offline lesson explanation');
  }
});

test('API endpoints with and without trailing slash are not intercepted', async () => {
  const h = harness();
  await h.send('install');
  for (const path of ['api', 'api/', 'api/health', 'API/Health']) {
    assert.equal(h.send('fetch', h.request(path)), undefined, path);
  }
});
