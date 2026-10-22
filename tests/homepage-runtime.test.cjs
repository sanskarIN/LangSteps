'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

test('homepage JavaScript parses without escaped-template regressions', () => {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
  let checked = 0;
  for (const [, attributes, source] of scripts) {
    if (/\bsrc\s*=|\btype\s*=\s*["']application\/ld\+json["']/i.test(attributes)) continue;
    assert.doesNotThrow(
      () => new vm.Script(source, { filename: 'index.html:inline-' + (++checked) }),
      'homepage inline script must parse as valid JavaScript'
    );
  }
  assert.ok(checked >= 3, 'expected carousel, code editor, and main page scripts');
});

test('interactive preview uses an opaque-origin sandbox instead of document.write', () => {
  assert.match(html, /id="liveCodePreview"[^>]+sandbox="allow-scripts"/);
  assert.match(html, /liveCodePreview\.srcdoc = code/);
  assert.doesNotMatch(html, /iframeDoc\.write\(/);
  assert.doesNotMatch(html, /sandbox="allow-same-origin/);
});

test('homepage search and sharing metadata use official public website', () => {
  assert.match(html, /LangSteps is a free online programming learning website/);
  assert.match(html, /<meta property="og:url" content="https:\/\/sanskarin\.github\.io\/LangSteps\/">/);
});
