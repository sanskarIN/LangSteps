'use strict';

const { test, expect } = require('@playwright/test');

// Exercise real browser layout, focus and storage instead of the stub DOM in Node tests.
test('Go lessons preserve old mastery keys and support real browser navigation', async ({ page }) => {
  await page.goto('/Go/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#lesson-content h2')).toHaveText('Your first Go program');

  const mark = page.getByRole('button', { name: 'Mark lesson complete' });
  await mark.click();
  await expect(page.locator('#progress-label')).toHaveText('1 / 15 lessons completed');
  expect(await page.evaluate(() => localStorage.getItem('langsteps:v1.1.0:mastery:go')))
    .toBe('["hello"]');

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('button', { name: /Completed.*undo/ })).toBeVisible();
  await page.getByRole('button', { name: /Next lesson/ }).click();
  await expect(page).toHaveURL(/#variables$/);
  await expect(page.locator('#lesson-content h2')).toHaveText('Variables and constants');

  await page.goBack({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#lesson-content h2')).toHaveText('Your first Go program');
});

test('All three curricula render actual lesson content and filter by keyword', async ({ page }) => {
  for (const [course, heading] of [
    ['Go', 'Your first Go program'],
    ['SQL', ''],
    ['CSharp', '']
  ]) {
    await page.goto('/' + course + '/index.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#lesson-list button')).toHaveCount(15);
    if (heading) await expect(page.locator('#lesson-content h2')).toHaveText(heading);
    else await expect(page.locator('#lesson-content h2')).not.toBeEmpty();
    await page.locator('#lesson-search').fill('something-that-will-not-match-83642');
    await expect(page.locator('#result-count')).toHaveText('0 lessons');
    await expect(page.locator('#lesson-list')).toContainText('No matching lessons');
  }
});

test('API Reference works with JavaScript disabled, including native details', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('/api-reference.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.api-item')).toHaveCount(15);
    await page.locator('.api-item summary').first().click();
    await expect(page.locator('.api-item').first()).toHaveAttribute('open', '');
    await expect(page.locator('.api-item').first().locator('pre code')).toBeVisible();
  } finally {
    await context.close();
  }
});

test('API Reference keyboard search and category filtering use accessible controls', async ({ page }) => {
  await page.goto('/api-reference.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#api-result-count')).toHaveText('15 of 15 APIs shown');

  await page.keyboard.press('/');
  await expect(page.locator('#api-search')).toBeFocused();
  await page.locator('#api-search').fill('Web Crypto');
  await expect(page.locator('.api-item:visible')).toHaveCount(1);
  await expect(page.locator('#api-result-count')).toHaveText('1 of 15 APIs shown');

  await page.getByRole('button', { name: 'Expand visible' }).click();
  await expect(page.locator('.api-item:visible')).toHaveAttribute('open', '');
  await page.locator('#api-search').fill('nothing-like-any-api-49327');
  await expect(page.locator('#api-empty')).toBeVisible();
  await page.locator('#api-clear').click();
  await expect(page.locator('#api-result-count')).toHaveText('15 of 15 APIs shown');
});

test('Donation dialog opens by choice, offers all providers, and restores keyboard focus', async ({ page }) => {
  await page.goto('/privacy.html', { waitUntil: 'domcontentloaded' });
  const trigger = page.locator('#donate-nav-btn');
  const dialog = page.getByRole('dialog', { name: /Support LangSteps/ });

  await expect(dialog).toBeHidden();
  await trigger.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('a[href*="razorpay.me"]')).toHaveCount(1);
  await expect(dialog.locator('a[href*="buymeacoffee.com"]')).toHaveCount(1);
  await expect(dialog.locator('a[href*="paypal.me"]')).toHaveCount(1);

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('All guided curricula fit mobile widths while code remains horizontally scrollable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const course of ['Go', 'SQL', 'CSharp']) {
    await page.goto('/' + course + '/index.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#lesson-content h2')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Mark lesson complete' })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      inner: window.innerWidth,
      document: document.documentElement.scrollWidth,
      code: document.querySelector('#lesson-content pre').getBoundingClientRect().width
    }));
    expect(dimensions.document, course + ' should not overflow page width')
      .toBeLessThanOrEqual(dimensions.inner + 1);
    expect(dimensions.code, course + ' example should fit its panel')
      .toBeLessThanOrEqual(dimensions.inner);
  }
});

test('v1.1.1 mastery remains after service worker activation and offline reload', async ({ page, context }) => {
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    localStorage.setItem('langsteps:v1.1.0:mastery:go', '["hello"]');
    await navigator.serviceWorker.ready;
  });
  // Wait for the activation claim before testing an actual offline navigation.
  await expect.poll(() => page.evaluate(() =>
    Boolean(navigator.serviceWorker.controller)), { timeout: 15_000 }).toBe(true);

  await page.goto('/Go/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#progress-label')).toHaveText('1 / 15 lessons completed');

  await context.setOffline(true);
  try {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator('#lesson-content h2')).toHaveText('Your first Go program');
    await expect(page.locator('#progress-label')).toHaveText('1 / 15 lessons completed');
  } finally {
    await context.setOffline(false);
  }
});
