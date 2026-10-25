'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const sections = ['', 'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'TypeScript', 'Rust', 'Go', 'SQL', 'CSharp'];
const pages = sections.flatMap(section =>
  fs.readdirSync(path.join(root, section), { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith('.html'))
    .map(entry => path.join(section, entry.name).replaceAll(path.sep, '/'))
);
const code = fs.readFileSync(path.join(root, 'online-status.js'), 'utf8');

test('every LangSteps HTML page announces live online learning', () => {
  assert.equal(pages.length, 98, 'Update this count when publishing new HTML pages');
  for (const file of pages) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    const prefix = file.includes('/') ? '../' : './';
    assert.equal((html.match(/data-ls-online-notice/g) ?? []).length, 1, file);
    assert.match(html, /<strong>LangSteps is online\.<\/strong>/, file);
    assert.match(html, /https:\/\/sanskarin\.github\.io\/LangSteps\//, file);
    assert.ok(html.includes('href="' + prefix + 'online-status.css"'), file + ' stylesheet');
    assert.ok(html.includes('src="' + prefix + 'online-status.js"'), file + ' script');
    assert.match(html, /data-ls-online-dismiss[^>]*type="button"/, file);
    assert.ok(html.indexOf('data-ls-online-notice') > html.indexOf('</head>'), file);
  }
});

test('announcement is visible as semantic content without JavaScript', () => {
  const html = fs.readFileSync(path.join(root, 'Go/index.html'), 'utf8');
  assert.match(html, /<aside class="ls-online-notice"/);
  assert.match(html, /aria-label="LangSteps online availability"/);
  assert.doesNotMatch(html.match(/<aside class="ls-online-notice"[\s\S]*?<\/aside>/)?.[0] ?? '', /\bhidden\b/);
});

test('TypeScript-generated controller remembers dismissal and supports blocked storage', () => {
  let dismissed = false;
  const listeners = new Map();
  const button = { addEventListener(type, callback) { listeners.set(type, callback); } };
  const notice = {
    hidden: false,
    querySelector(selector) { return selector === '[data-ls-online-dismiss]' ? button : null; }
  };
  const document = {
    querySelector(selector) { return selector === '[data-ls-online-notice]' ? notice : null; }
  };
  const storage = new Map();
  const sessionStorage = {
    getItem(k) { return storage.get(k) ?? null; },
    setItem(k, v) { storage.set(k, v); }
  };
  const mount = store => vm.runInNewContext(code, { document, sessionStorage: store }, { timeout: 1000 });

  mount(sessionStorage);
  assert.equal(notice.hidden, false);
  assert.equal(typeof listeners.get('click'), 'function');
  listeners.get('click')();
  assert.equal(notice.hidden, true);
  notice.hidden = false;
  mount(sessionStorage);
  assert.equal(notice.hidden, true);

  notice.hidden = false;
  dismissed = false;
  const blocked = {
    getItem() { throw new Error('storage denied'); },
    setItem() { throw new Error('storage denied'); }
  };
  mount(blocked);
  assert.equal(notice.hidden, false);
  listeners.get('click')();
  dismissed = notice.hidden;
  assert.equal(dismissed, true);
});
