'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const lessonData = directory => JSON.parse(
  read(directory + '/data.js').replace(/^window\.LANGSTEPS_COURSE = /, '').replace(/;\s*$/, '')
);

test('Patch version is consistent across npm, TypeScript, ASP.NET Core and service worker', () => {
  assert.equal(JSON.parse(read('package.json')).version, '1.1.1');
  assert.match(read('src/core/apiClient.ts'), /version: '1\.1\.1'/);
  assert.match(read('server/LangSteps.Server/Program.cs'), /Version: "1\.1\.1"/);
  assert.match(read('server/LangSteps.Server/Services/StatsService.cs'), /LangSteps v1\.1\.1/);
  // The development service worker uses a new cache to avoid stale v1.1.1 assets.
  // Published API/package metadata remains pinned until the v1.2.0 release.
  assert.match(read('sw.js'), /langsteps-v1\.2\.0-dev[0-9]+/);
});

test('Original lesson IDs and progress key are preserved in maintenance release', () => {
  const viewer = read('curriculum/learning.js');
  assert.match(read('src/curriculum/progress.ts'), /langsteps:v1\.1\.0:mastery:/);
  assert.match(viewer, /LangStepsProgress\.createStore/);
  for (const directory of ['Go', 'SQL', 'CSharp']) {
    const course = lessonData(directory);
    assert.equal(course.lessons.length, 15);
    assert.equal(new Set(course.lessons.map(item => item.id)).size, 15);
  }
});

test('Published Go category list matches actual curriculum', () => {
  const courses = lessonData('Go').lessons;
  const categories = [...new Set(courses.map(item => item.category))];
  assert.equal(categories.length, 7);
  const backend = read('server/LangSteps.Server/Services/ContentService.cs');
  assert.match(backend, /"Go\/index\.html", 15, 7/);
  for (const category of categories) {
    assert.ok(backend.includes('"' + category + '"'), category);
  }
});

test('C# top-level statement examples put file-level records after statements', () => {
  const byId = Object.fromEntries(lessonData('CSharp').lessons.map(item => [item.id, item]));
  assert.ok(byId.records.code.indexOf('public record Student') > byId.records.code.indexOf('Console.WriteLine'));
  assert.ok(byId.modelbinding.code.indexOf('record CreateNote') > byId.modelbinding.code.indexOf('app.Run()'));
  assert.match(byId.security.code, /var builder = WebApplication\.CreateBuilder/);
  assert.match(byId.security.code, /var app = builder\.Build\(\)/);
  assert.match(byId.security.code, /app\.UseCors\("Site"\)/);
});

test('Go HTTP tutorial reports server and encoding failures', () => {
  const lesson = lessonData('Go').lessons.find(item => item.id === 'http');
  assert.match(lesson.code, /log\.Fatal\(http\.ListenAndServe/);
  assert.match(lesson.code, /if err := json\.NewEncoder/);
});

test('Optional API rejects arbitrary leaderboard XP and nonexistent quiz languages', () => {
  const program = read('server/LangSteps.Server/Program.cs');
  const quiz = read('server/LangSteps.Server/Services/QuizService.cs');
  assert.doesNotMatch(program, /MapPost\("\/api\/leaderboard"/);
  assert.match(program, /GetQuestions\(request\.Language\)\.Count == 0/);
  assert.match(program, /request\.TimeSpentSeconds < 0/);
  assert.doesNotMatch(quiz, /InitializeLeaderboard\(/);
  assert.doesNotMatch(read('src/core/apiClient.ts'), /DevPioneer|AsyncCoder/);
});

function workerHarness({ online = true } = {}) {
  const handlers = new Map();
  const deletions = [];
  const keys = ['langsteps-v1.1.0', 'langsteps-v1.1.1', 'wdm-v3', 'other-project-v1'];
  const cached = { url: 'cached page' };
  let networkRequests = 0;
  const self = {
    location: { origin: 'https://sanskarin.github.io' },
    registration: { scope: 'https://sanskarin.github.io/LangSteps/' },
    addEventListener: (type, callback) => handlers.set(type, callback),
    clients: { claim: async () => {} },
    skipWaiting: async () => {}
  };
  const caches = {
    keys: async () => keys,
    delete: async key => { deletions.push(key); return true; },
    open: async () => ({ addAll: async () => {} }),
    match: async request => {
      if (typeof request === 'string' && request === './index.html') return cached;
      if (request && request.url?.includes('/Go/index.html')) return cached;
      return undefined;
    }
  };
  const fetch = async request => {
    networkRequests++;
    if (!online) throw new Error('network unavailable');
    return { url: 'fresh page:' + request.url };
  };
  vm.runInNewContext(read('sw.js'), { self, caches, fetch, URL, Response: { error: () => ({ error: true }) } }, { timeout: 1000 });
  return { handlers, deletions, networkRequests: () => networkRequests, cached };
}

test('Service worker cleans only its own previous caches', async () => {
  const h = workerHarness();
  let wait;
  h.handlers.get('activate')({ waitUntil: promise => { wait = promise; } });
  await wait;
  assert.deepEqual(h.deletions, ['langsteps-v1.1.0', 'langsteps-v1.1.1']);
});

test('Service worker leaves other GitHub Pages projects and API requests untouched', () => {
  const h = workerHarness();
  let invoked = false;
  for (const url of [
    'https://sanskarin.github.io/OtherProject/index.html',
    'https://sanskarin.github.io/LangSteps/api/health',
    'https://unrelated.example/LangSteps/index.html'
  ]) {
    h.handlers.get('fetch')({
      request: { method: 'GET', url, mode: 'navigate' },
      respondWith: () => { invoked = true; }
    });
  }
  assert.equal(invoked, false);
});

test('Online pages are fetched freshly, but an offline lesson uses the cache', async () => {
  const request = { method: 'GET', url: 'https://sanskarin.github.io/LangSteps/Go/index.html', mode: 'navigate' };
  const online = workerHarness({ online: true });
  let response;
  online.handlers.get('fetch')({ request, respondWith: promise => { response = promise; } });
  assert.match((await response).url, /fresh page/);
  assert.equal(online.networkRequests(), 1);

  const offline = workerHarness({ online: false });
  offline.handlers.get('fetch')({ request, respondWith: promise => { response = promise; } });
  assert.equal(await response, offline.cached);
});
