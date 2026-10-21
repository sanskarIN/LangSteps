'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '../api-reference.html'), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
const source = scripts.map(match => match[1]).filter(Boolean).at(-1);

test('API reference inline JavaScript is syntactically executable', () => {
  assert.ok(source, 'expected an inline script');
  assert.doesNotThrow(() => new vm.Script(source, { filename: 'api-reference.html' }));
});

test('API reference renders API cards, filters them, and toggles details', () => {
  const list = { innerHTML: '' };
  const input = { value: '' };
  const accordions = new Map();
  const document = {
    getElementById(id) {
      if (id === 'apiList') return list;
      if (id === 'search') return input;
      if (!accordions.has(id)) {
        const names = new Set();
        accordions.set(id, {
          classList: {
            add(name) { names.add(name); },
            remove(name) { names.delete(name); },
            toggle(name) { names.has(name) ? names.delete(name) : names.add(name); },
            contains(name) { return names.has(name); }
          }
        });
      }
      return accordions.get(id);
    }
  };
  const context = vm.createContext({ document });
  new vm.Script(source, { filename: 'api-reference.html' }).runInContext(context);
  assert.equal((list.innerHTML.match(/class="accordion-item"/g) || []).length, 6);
  assert.match(list.innerHTML, /Fetch API/);
  assert.match(list.innerHTML, /Clipboard API/);

  input.value = 'clipboard';
  vm.runInContext('filterApis()', context);
  assert.equal((list.innerHTML.match(/class="accordion-item"/g) || []).length, 1);
  assert.match(list.innerHTML, /Clipboard API/);
  assert.doesNotMatch(list.innerHTML, /Fetch API/);

  vm.runInContext('toggleAcc(0)', context);
  assert.equal(accordions.get('content-0').classList.contains('active'), true);
  vm.runInContext('toggleAcc(0)', context);
  assert.equal(accordions.get('content-0').classList.contains('active'), false);

  input.value = '';
  vm.runInContext('filterApis()', context);
  assert.equal((list.innerHTML.match(/class="accordion-item"/g) || []).length, 6);
});
