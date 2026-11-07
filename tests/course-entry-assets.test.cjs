'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const entryPages = [
  'index.html',
  ...['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'TypeScript', 'Rust',
    'Go', 'SQL', 'CSharp'].map(course => course + '/index.html')
];

function localAsset(page, reference) {
  // Remote services, canonical URLs, data URLs and fragment navigation are not
  // resources that the static GitHub Pages deployment owns.
  if (/^(?:[a-z][\w+.-]*:|\/\/|\/|#)/i.test(reference)) return null;
  const relative = reference.split(/[?#]/, 1)[0];
  if (!relative) return null;
  const target = path.resolve(root, path.dirname(page), decodeURIComponent(relative));
  assert.ok(target.startsWith(root + path.sep),
    page + ': asset must stay inside the repository: ' + reference);
  return target;
}

test('all ten course entry pages reference existing local linked assets', () => {
  for (const page of entryPages) {
    const html = fs.readFileSync(path.join(root, page), 'utf8');
    const tags = html.match(/<(?:link|script)\b[^>]*>/gi) || [];
    for (const tag of tags) {
      const match = tag.match(/\b(?:href|src)\s*=\s*(["'])([^"']*)\1/i);
      if (!match) continue;
      const target = localAsset(page, match[2]);
      if (!target) continue;
      assert.ok(fs.existsSync(target) && fs.statSync(target).isFile(),
        page + ': missing linked local asset ' + match[2]);
    }
  }
});

test('course PWA manifest links share the root manifest with a valid scope', () => {
  const manifestPath = path.join(root, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert.equal(manifest.scope, './');
  assert.equal(manifest.start_url, './index.html');
  for (const icon of manifest.icons) {
    assert.ok(fs.existsSync(path.resolve(root, icon.src)),
      'Missing PWA manifest icon: ' + icon.src);
  }

  let referenced = 0;
  for (const page of entryPages) {
    const html = fs.readFileSync(path.join(root, page), 'utf8');
    const tags = html.match(/<link\b[^>]*>/gi) || [];
    for (const tag of tags) {
      if (!/\brel\s*=\s*(["'])manifest\1/i.test(tag)) continue;
      referenced++;
      const match = tag.match(/\bhref\s*=\s*(["'])([^"']+)\1/i);
      assert.ok(match, page + ': manifest link must have a valid href');
      const target = localAsset(page, match[2]);
      assert.equal(target, manifestPath, page + ': manifest must resolve to the shared root file');
    }
  }
  assert.ok(referenced >= 4, 'Expected homepage and three legacy course manifest links');
});
