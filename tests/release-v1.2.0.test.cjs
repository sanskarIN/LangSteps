'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('v1.2.0 metadata agrees in package, typed fallback and optional backend', () => {
  assert.equal(JSON.parse(read('package.json')).version, '1.2.0');
  assert.match(read('src/core/apiClient.ts'), /version: '1\.2\.0'/);
  assert.equal((read('server/LangSteps.Server/Program.cs').match(/Version: "1\.2\.0"/g) || []).length, 2);
  assert.match(read('server/LangSteps.Server/Services/StatsService.cs'), /LangSteps v1\.2\.0/);
});

test('v1.2.0 TypeScript worker builds a versioned scoped offline cache', () => {
  assert.match(read('src/sw.ts'), /langsteps-v1\.2\.0/);
  assert.match(read('sw.js'), /langsteps-v1\.2\.0/);
  assert.match(read('src/sw.ts'), /key\.startsWith\('langsteps-'\)/);
  assert.match(read('src/sw.ts'), /url\.pathname\.startsWith\(basePath\)/);
  assert.match(read('.github/workflows/verify.yml'), /npm run build:sw && git diff --exit-code -- sw\.js/);
});

test('The release does not change historical learner mastery storage identifiers', () => {
  assert.match(read('src/curriculum/progress.ts'), /langsteps:v1\.1\.0:mastery:/);
  assert.match(read('docs/releases/v1.1.1.md'), /v1\.1\.1/);
});
