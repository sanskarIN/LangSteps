'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

test('all ten courses are named in the opt-in offline library', () => {
  const source = read('src/curriculum/offline-library.ts');
  for (const course of ['HTML', 'CSS', 'JavaScript', 'React', 'Python',
    'TypeScript', 'Rust', 'Go', 'SQL', 'CSharp']) {
    assert.ok(source.includes("legacy('" + course + "'") ||
      source.includes("guided('" + course + "'"), course);
    assert.equal(fs.existsSync(path.join(root, course, 'index.html')), true);
  }
  assert.ok(read('offline-library.html').includes('id="offline-library-status"'));
  assert.ok(read('offline-library.html').includes('id="offline-library-cancel"'));
  assert.ok(read('offline-library.html').includes('curriculum/offline-library.js'));
});

test('offline downloads do not touch progress, other apps or cross-origin resources', () => {
  const source = read('src/curriculum/offline-library.ts');
  const sw = read('src/sw.ts');
  for (const required of ["credentials: 'omit'", 'url.origin !== base.origin',
    'private|no-store', 'controller?.abort()', 'caches.delete(cacheName(course))']) {
    assert.ok(source.includes(required), required);
  }
  assert.doesNotMatch(source, /localStorage[.](?:setItem|removeItem|clear)/);
  assert.ok(sw.includes('!key.startsWith(LIBRARY_CACHE_PREFIX)'));
  assert.ok(sw.includes("'./offline-library.html'"));
  assert.ok(read('index.html').includes('href="./offline-library.html"'));
});

test('build and CI track the published offline library script', () => {
  assert.ok(read('.github/workflows/verify.yml').includes('curriculum/offline-library.js'));
  assert.ok(read('tsconfig.curriculum.json').includes('src/curriculum/*.ts'));
  const html = read('offline-library.html');
  assert.ok(html.includes('<ul id="offline-course-list"'));
  assert.ok(html.includes('browser'));
});
