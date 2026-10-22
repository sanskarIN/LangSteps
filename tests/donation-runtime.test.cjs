'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const runtime = fs.readFileSync(path.join(__dirname, '../curriculum/donation.js'), 'utf8');

function mountDialog() {
  const listeners = new Map();
  const document = {
    activeElement: null,
    body: { style: { overflow: 'auto' } },
    addEventListener(type, handler) { listeners.set(type, handler); },
    getElementById(id) { return nodes[id]; }
  };

  class Element {
    constructor(name) {
      this.name = name;
      this.listeners = new Map();
      this.isConnected = true;
      this.attributes = new Map();
      this.classNames = new Set();
      this.classList = {
        add: name => this.classNames.add(name),
        remove: name => this.classNames.delete(name),
        contains: name => this.classNames.has(name)
      };
    }
    addEventListener(type, handler) { this.listeners.set(type, handler); }
    emit(type, event = {}) {
      const handler = this.listeners.get(type);
      assert.ok(handler, this.name + ' missing ' + type + ' listener');
      handler(event);
    }
    focus() { document.activeElement = this; }
    getAttribute(name) { return this.attributes.get(name) ?? null; }
  }

  const overlay = new Element('overlay');
  const modal = new Element('modal');
  const trigger = new Element('trigger');
  const close = new Element('close');
  const dismiss = new Element('dismiss');
  const razorpay = new Element('razorpay');
  const paypal = new Element('paypal');
  const nodes = {
    'donate-overlay': overlay,
    'donate-nav-btn': trigger,
    'donate-close': close,
    'donate-close-btn': dismiss
  };
  overlay.querySelector = selector => selector === '.donate-modal' ? modal : null;
  modal.querySelectorAll = () => [razorpay, paypal, close, dismiss];
  trigger.focus();

  vm.runInNewContext(runtime, { document, HTMLElement: Element }, { timeout: 1000 });
  return { overlay, trigger, close, dismiss, razorpay, paypal, modal, document, listeners };
}

test('TypeScript donation controller opens on demand and restores focus and scroll', () => {
  const ui = mountDialog();
  assert.equal(ui.overlay.classList.contains('active'), false);
  ui.trigger.emit('click');
  assert.equal(ui.overlay.classList.contains('active'), true);
  assert.equal(ui.document.activeElement, ui.razorpay);
  assert.equal(ui.document.body.style.overflow, 'hidden');
  ui.dismiss.emit('click');
  assert.equal(ui.overlay.classList.contains('active'), false);
  assert.equal(ui.document.activeElement, ui.trigger);
  assert.equal(ui.document.body.style.overflow, 'auto');
});

test('Escape, outside click, and focus trap remain accessible', () => {
  const ui = mountDialog();
  ui.trigger.emit('click');
  const key = ui.listeners.get('keydown');
  assert.equal(typeof key, 'function');
  let prevented = 0;
  const preventDefault = () => { prevented++; };
  ui.dismiss.focus();
  key({ key: 'Tab', shiftKey: false, preventDefault });
  assert.equal(ui.document.activeElement, ui.razorpay);
  ui.razorpay.focus();
  key({ key: 'Tab', shiftKey: true, preventDefault });
  assert.equal(ui.document.activeElement, ui.dismiss);
  assert.equal(prevented, 2);
  ui.overlay.emit('click', { target: ui.modal });
  assert.equal(ui.overlay.classList.contains('active'), true);
  key({ key: 'Escape', preventDefault });
  assert.equal(ui.overlay.classList.contains('active'), false);
  ui.trigger.emit('click');
  ui.overlay.emit('click', { target: ui.overlay });
  assert.equal(ui.overlay.classList.contains('active'), false);
  ui.trigger.emit('click');
  ui.close.emit('click');
  assert.equal(ui.overlay.classList.contains('active'), false);
});

test('All updated privacy/terms pages load TypeScript output instead of duplicated inline handler', () => {
  for (const prefix of ['', 'HTML/', 'CSS/', 'JavaScript/', 'React/']) {
    for (const name of ['privacy.html', 'terms.html']) {
      const html = fs.readFileSync(path.join(__dirname, '..', prefix + name), 'utf8');
      const src = (prefix ? '../' : '') + 'curriculum/donation.js';
      assert.ok(html.includes('src="' + src + '"'), prefix + name + ': shared runtime missing');
      assert.doesNotMatch(html, /const overlay = document.getElementById\('donate-overlay'\)/);
      assert.match(html, /role="dialog" aria-modal="true" aria-labelledby="donate-dialog-title"/);
    }
  }
});
