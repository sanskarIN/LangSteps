'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const viewer = fs.readFileSync(path.join(__dirname, '../curriculum/learning.js'), 'utf8');
const progressModule = fs.readFileSync(path.join(__dirname, '../curriculum/progress.js'), 'utf8');

class Element {
  constructor(tag = 'div') {
    this.tagName = tag; this.children = []; this.attributes = {}; this.listeners = {};
    this._text = ''; this.value = ''; this.max = 0; this.className = '';
    this.focusCount = 0;
  }
  set textContent(value) { this._text = String(value); this.children = []; }
  get textContent() { return this._text + this.children.map(child => child.textContent).join(''); }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this._text = ''; this.children = [...items]; }
  addEventListener(type, listener) { (this.listeners[type] ??= []).push(listener); }
  dispatch(type) { for (const fn of this.listeners[type] || []) fn(); }
  click() { this.dispatch('click'); }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  getAttribute(name) { return this.attributes[name]; }
  focus() { this.focusCount++; }
}

const course = {
  slug: 'go',
  title: 'Go Mastery',
  summary: 'Go concepts',
  lessons: [
    { id: 'hello', category: 'Foundations', title: 'Hello', level: 'Beginner',
      summary: 'Start here', explanation: 'First lesson', code: 'fmt.Println("Hi")', challenge: 'Print another message' },
    { id: 'channels', category: 'Concurrency', title: 'Channels', level: 'Intermediate',
      summary: 'Send data', explanation: 'Use a channel', code: 'ch := make(chan int)', challenge: 'Write a sender' }
  ]
};

function mount({ hash = '', saved = '[]', storageDisabled = false, clipboard = null } = {}) {
  const ids = ['lesson-content','lesson-list','lesson-search','lesson-category',
    'progress','progress-label','result-count','course-title','course-summary'];
  const elements = Object.fromEntries(ids.map(id => [id, new Element()]));
  elements['lesson-category'].value = 'all';
  const stored = new Map([['langsteps:v1.1.0:mastery:go', saved]]);
  const storage = {
    getItem: key => { if (storageDisabled) throw new Error('Storage denied'); return stored.get(key) || null; },
    setItem: (key, value) => { if (storageDisabled) throw new Error('Storage denied'); stored.set(key, value); }
  };
  const doc = {
    title: '', getElementById: id => elements[id] || null,
    createElement: tag => new Element(tag), createRange: () => ({
      selectNodeContents: element => { selected = element.textContent; }
    })
  };
  let selected = null;
  const events = {};
  const loc = {
    _hash: hash,
    get hash() { return this._hash; },
    set hash(next) {
      if (next !== this._hash) {
        this._hash = next;
        (events.hashchange || []).forEach(fn => fn());
      }
    }
  };
  const selection = { removeAllRanges: () => {}, addRange: () => {} };
  const win = {
    LANGSTEPS_COURSE: course, location: loc,
    getSelection: () => selection,
    addEventListener: (type, fn) => (events[type] ??= []).push(fn)
  };
  const sandbox = { window: win, document: doc, localStorage: storage, navigator: { clipboard } };
  vm.runInNewContext(progressModule, sandbox, { timeout: 1000, filename: 'progress.js' });
  vm.runInNewContext(viewer, sandbox, { timeout: 1000, filename: 'learning.js' });
  const content = elements['lesson-content'];
  return {
    elements, stored, loc, selected: () => selected,
    buttons: () => content.children.filter(el => el.tagName === 'button'),
    lessonButtons: () => elements['lesson-list'].children.filter(el => el.tagName === 'button'),
    content
  };
}

test('Invalid or malformed lesson fragments fall back without crashing', () => {
  for (const hash of ['#%ZZ', '#unknown', '#hello%GG']) {
    const app = mount({ hash });
    assert.match(app.content.textContent, /Hello/);
    app.loc.hash = '#channels';
    assert.match(app.content.textContent, /Channels/);
  }
});

test('Back/Forward fragment navigation updates lesson and keyboard focus', () => {
  const app = mount({ hash: '#hello' });
  app.lessonButtons()[1].click();
  assert.equal(app.loc.hash, '#channels');
  assert.match(app.content.textContent, /Channels/);
  assert.equal(app.content.children.filter(c => c.tagName === 'h2').length, 1);
  assert.equal(app.content.children.find(c => c.tagName === 'h2').focusCount, 1);
  app.loc.hash = '#hello';
  assert.match(app.content.textContent, /Hello/);
});

test('Progress remains backward compatible across patch releases', () => {
  const key = 'langsteps:v1.1.0:mastery:go';
  const app = mount({ saved: '["hello","missing","hello"]' });
  assert.equal(app.elements['progress'].value, 1);
  assert.equal(app.elements['progress-label'].textContent, '1 / 2 lessons completed');
  const mark = app.buttons().find(btn => /Completed/.test(btn.textContent));
  assert.equal(mark.getAttribute('aria-pressed'), 'true');
  mark.click();
  assert.equal(app.elements['progress'].value, 0);
  assert.equal(app.stored.get(key), '[]');
  app.buttons().find(btn => btn.textContent === 'Mark lesson complete').click();
  assert.equal(app.stored.get(key), '["hello"]');
  const reloaded = mount({ saved: app.stored.get(key) });
  assert.equal(reloaded.elements['progress'].value, 1);
});

test('Disabled or corrupted storage does not block lesson rendering', () => {
  assert.match(mount({ saved: '{not-json' }).content.textContent, /Hello/);
  const app = mount({ storageDisabled: true });
  app.buttons().find(btn => btn.textContent === 'Mark lesson complete').click();
  assert.equal(app.elements['progress'].value, 1);
});

test('Search and category filters update available lessons safely', () => {
  const app = mount();
  app.elements['lesson-search'].value = 'channels';
  app.elements['lesson-search'].dispatch('input');
  assert.equal(app.elements['result-count'].textContent, '1 lesson');
  assert.equal(app.lessonButtons().length, 1);
  app.elements['lesson-category'].value = 'Foundations';
  app.elements['lesson-category'].dispatch('change');
  assert.equal(app.lessonButtons().length, 0);
  assert.match(app.elements['lesson-list'].textContent, /No matching lessons/);
});

test('Copy button provides a selectable fallback without clipboard permissions', async () => {
  const app = mount();
  app.buttons().find(btn => btn.textContent === 'Copy example').click();
  await Promise.resolve();
  assert.equal(app.selected(), 'fmt.Println("Hi")');
  assert.match(app.content.textContent, /Press Ctrl\+C/);
});

test('When available, clipboard receives exact source text', async () => {
  const writes = [];
  const app = mount({ clipboard: { writeText: async source => { writes.push(source); } } });
  app.buttons().find(btn => btn.textContent === 'Copy example').click();
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(writes, ['fmt.Println("Hi")']);
  assert.match(app.content.textContent, /Example copied to clipboard/);
});

test('Completing a lesson updates the pressed state without detaching the focused button', () => {
  const app = mount();
  const button = app.buttons().find(btn => btn.textContent === 'Mark lesson complete');
  const heading = app.content.children.find(el => el.tagName === 'h2');
  button.focus();
  button.click();
  assert.equal(button.focusCount, 1);
  assert.ok(app.buttons().includes(button), 'the focused button should remain mounted');
  assert.ok(app.content.children.includes(heading), 'the displayed lesson should not be rebuilt');
  assert.equal(button.getAttribute('aria-pressed'), 'true');
  assert.match(button.textContent, /Completed/);
  assert.equal(app.elements['progress'].value, 1);

  button.click();
  assert.ok(app.buttons().includes(button));
  assert.equal(button.getAttribute('aria-pressed'), 'false');
  assert.equal(button.textContent, 'Mark lesson complete');
  assert.equal(app.elements['progress'].value, 0);
});
