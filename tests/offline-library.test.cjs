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
    assert.match(source, new RegExp('(?:legacy|guided)\\(\\x27' + course + '\\x27'));
    assert.equal(fs.existsSync(path.join(root, course, 'index.html')), true);
  }
  assert.match(read('offline-library.html'), /id="offline-library-status"/);
  assert.match(read('offline-library.html'), /id="offline-library-cancel"/);
  assert.match(read('offline-library.html'), /curriculum\\/offline-library\\.js/);
});

test('offline downloads do not touch progress, other apps or cross-origin resources', () => {
  const source = read('src/curriculum/offline-library.ts');
  const sw = read('src/sw.ts');
  assert.match(source, /credentials: 'omit'/);
  assert.match(source, /url\\.origin !== base\\.origin/);
  assert.match(source, /private\\|no-store/);
  assert.match(source, /controller\\?\\.abort\\(\\)/);
  assert.match(source, /caches\\.delete\\(cacheName\\(course\\)\\)/);
  assert.doesNotMatch(source, /localStorage\\.(?:setItem|removeItem|clear)/);
  assert.match(sw, /!key\\.startsWith\\(LIBRARY_CACHE_PREFIX\\)/);
  assert.match(sw, /\\.\\/offline-library\\.html/);
  assert.match(read('index.html'), /href="\\.\\/offline-library\\.html"/);
});

test('build and CI track the published offline library script', () => {
  assert.match(read('.github/workflows/verify.yml'), /curriculum\\/offline-library\\.js/);
  assert.match(read('tsconfig.curriculum.json'), /src\\/curriculum\\/\\*\\.ts/);
  const html = read('offline-library.html');
  assert.match(html, /<noscript|<ul id="offline-course-list"/);
  assert.match(html, /Browser|browser/);
});
