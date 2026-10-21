'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pages = ['privacy.html', 'terms.html'].flatMap(name =>
  ['', 'HTML/', 'CSS/', 'JavaScript/', 'React/'].map(prefix => prefix + name)
);

const providers = [
  ['Razorpay', 'https://razorpay.me/@SanskarCodes'],
  ['Buy Me a Coffee', 'https://buymeacoffee.com/SanskarCodes'],
  ['PayPal', 'https://paypal.me/SanskarCodes']
];

for (const page of pages) {
  test(page + ' has visible, safe donation choices in its modal', () => {
    const html = fs.readFileSync(path.join(root, page), 'utf8');
    const start = html.indexOf('<!-- Donate Overlay -->');
    const end = html.indexOf('<!-- Footer -->', start);
    assert.ok(start >= 0 && end > start, 'donation modal markers must exist');
    const modal = html.slice(start, end);
    assert.match(modal, /id="donate-overlay"/);
    for (const [name, url] of providers) {
      const matches = modal.match(new RegExp('href="' + url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"', 'g')) || [];
      assert.equal(matches.length, 1, name + ' must appear exactly once in donation dialog');
      const link = modal.match(new RegExp('<a\\b[^>]*href="' + url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"[^>]*>'));
      assert.ok(link, 'a real link is required for ' + name);
      assert.match(link[0], /target="_blank"/);
      assert.match(link[0], /rel="noopener noreferrer"/);
    }
    assert.match(modal, /id="donate-close-btn"[^>]*>Maybe Later<\/button>/);
  });
}
