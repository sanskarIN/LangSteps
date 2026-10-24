'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = pathName => fs.readFileSync(path.join(root, pathName), 'utf8');

test('release metadata is consistent across static and optional server code', () => {
  assert.equal(JSON.parse(read('package.json')).version, '1.3.0');
  assert.match(read('src/core/apiClient.ts'), /version: '1\.3\.0'/);
  assert.equal((read('server/LangSteps.Server/Program.cs').match(/Version: "1\.3\.0"/g) || []).length, 2);
  assert.match(read('server/LangSteps.Server/Services/StatsService.cs'), /LangSteps v1\.3\.0/);
  assert.match(read('docs/releases/v1.3.0-public.md'), /LangSteps v1\.3\.0/);
});

test('TypeScript and generated PWA assets use the current scoped caches', () => {
  for (const name of ['src/sw.ts', 'sw.js']) {
    const worker = read(name);
    assert.match(worker, /langsteps-core-v1\.3\.0/);
    assert.match(worker, /langsteps-runtime-v1\.3\.0/);
    assert.match(worker, /MAX_RUNTIME_ENTRIES = 64/);
    assert.match(worker, /docs\/offline\.html/);
    assert.match(worker, /url\.pathname\.startsWith\(basePath\)/);
  }
});

test('all three guided curricula can register offline support directly', () => {
  for (const course of ['Go', 'SQL', 'CSharp']) {
    assert.match(read(course + '/index.html'), /curriculum\/offline-register\.js/);
  }
  assert.match(read('src/curriculum/offline-register.ts'), /serviceWorker\.register/);
  assert.match(read('curriculum/offline-register.js'), /serviceWorker\.register/);
  assert.match(read('.github/workflows/verify.yml'), /curriculum\/offline-register\.js/);
  assert.match(read('docs/offline.html'), /not been saved for offline reading/);
});

test('historical mastery keys and v1.2.0 release notes are preserved', () => {
  assert.match(read('src/curriculum/progress.ts'), /langsteps:v1\.1\.0:mastery:/);
  assert.match(read('docs/releases/v1.2.0-public.md'), /LangSteps v1\.2\.0/);
});
