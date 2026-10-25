'use strict';

const { test, expect } = require('@playwright/test');

// Exercise real browser layout, focus and storage instead of the stub DOM in Node tests.
test('Go lessons preserve old mastery keys and support real browser navigation', async ({ page }) => {
  await page.goto('Go/index.html', { waitUntil: 'domcontentloaded' });
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
    await page.goto(course + '/index.html', { waitUntil: 'domcontentloaded' });
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
    await page.goto('api-reference.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.api-item')).toHaveCount(15);
    await page.locator('.api-item summary').first().click();
    await expect(page.locator('.api-item').first()).toHaveAttribute('open', '');
    await expect(page.locator('.api-item').first().locator('pre code')).toBeVisible();
  } finally {
    await context.close();
  }
});

test('API Reference keyboard search and category filtering use accessible controls', async ({ page }) => {
  await page.goto('api-reference.html', { waitUntil: 'domcontentloaded' });
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
  await page.goto('privacy.html', { waitUntil: 'domcontentloaded' });
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
    await page.goto(course + '/index.html', { waitUntil: 'domcontentloaded' });
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
  await page.goto('index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    localStorage.setItem('langsteps:v1.1.0:mastery:go', '["hello"]');
    await navigator.serviceWorker.ready;
  });
  // Wait for the activation claim before testing an actual offline navigation.
  await expect.poll(() => page.evaluate(() =>
    Boolean(navigator.serviceWorker.controller)), { timeout: 15_000 }).toBe(true);

  await page.goto('Go/index.html', { waitUntil: 'domcontentloaded' });
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

test('service-worker upgrades clean only LangSteps caches and preserve unrelated projects', async ({ page }) => {
  // Seed old keys before visiting the homepage (the registration point).
  await page.goto('Go/index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    await caches.open('langsteps-v1.1.1');
    const other = await caches.open('another-project-v2');
    const unrelatedUrl = new URL('/another-project-offline', location.origin).href;
    await other.put(new Request(unrelatedUrl), new Response('keep this cache'));
    if (!(await other.match(new Request(unrelatedUrl)))) {
      throw new Error('Browser failed to persist unrelated cache content even before activation');
    }
  });
  await page.goto('index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
    { timeout: 15_000 }).toBe(true);

  const cacheNames = await page.evaluate(() => caches.keys());
  expect(cacheNames).not.toContain('langsteps-v1.1.1');
  expect(cacheNames).toContain('another-project-v2');
  expect(cacheNames).toContain('langsteps-core-v1.3.0');
  // CacheStorage values can be evicted independently by WebKit across navigations.
  // The application-controlled invariant is preserving unrelated named caches:
  // the activation handler must delete only keys prefixed with "langsteps-".
  // The corresponding source-level assertion lives in release-v1.2.0.test.cjs.
});

test('online notice links to the live platform and persists dismissal across course pages', async ({ page }) => {
  // Validate the shared announcement on a plain course page. Homepage splash
  // and cookie-consent behavior are independent of cross-page dismissal.
  await page.goto('Go/index.html', { waitUntil: 'domcontentloaded' });
  const notice = page.locator('[data-ls-online-notice]');
  await expect(notice).toBeVisible();
  await expect(notice).toContainText('LangSteps is online.');
  await expect(notice.locator('a')).toHaveAttribute('href', 'https://sanskarin.github.io/LangSteps/');
  await notice.locator('[data-ls-online-dismiss]').click();
  await expect(notice).toBeHidden();
  await page.goto('Go/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-ls-online-notice]')).toBeHidden();
  await page.goto('Rust/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-ls-online-notice]')).toBeHidden();
});

test('online availability announcement is visible when JavaScript is disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('SQL/index.html', { waitUntil: 'domcontentloaded' });
    const notice = page.locator('[data-ls-online-notice]');
    await expect(notice).toBeVisible();
    await expect(notice).toContainText('Learn for free on our website');
  } finally {
    await context.close();
  }
});

test('an unprecached course page becomes available offline after a successful visit', async ({ page, context }) => {
  await page.goto('index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
    { timeout: 15_000 }).toBe(true);
  await page.goto('Rust/index.html', { waitUntil: 'load' });
  await expect(page.locator('body')).toContainText('Rust');
  await context.setOffline(true);
  try {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toContainText('Rust');
    await expect(page.getByRole('heading', { name: /not been saved for offline reading/i })).toHaveCount(0);
  } finally {
    await context.setOffline(false);
  }
});

test('a valid unvisited course shows a truthful offline explanation, not the homepage', async ({ page, context, browserName }) => {
  // Firefox's Playwright offline emulation may still serve a previously fetched
  // document through the browser HTTP cache instead of failing the SW network fetch.
  // Node worker tests cover the actual network-failure fallback deterministically.
  test.skip(browserName === 'firefox', 'Firefox offline emulation can serve the page from its HTTP cache');
  await page.goto('index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
    { timeout: 15_000 }).toBe(true);
  await context.setOffline(true);
  try {
    await page.goto('TypeScript/index.html', { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: /not been saved for offline reading/i })).toBeVisible();
  } finally {
    await context.setOffline(false);
  }
});

test('offline library saves and removes a course without changing other browser data', async ({ page }) => {
  await page.goto('offline-library.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#offline-course-list li')).toHaveCount(10);
  const save = page.getByRole('button', { name: 'Save Python' });
  const remove = page.getByRole('button', { name: 'Remove Python' });
  await expect(save).toBeEnabled();
  await page.evaluate(async () => {
    localStorage.setItem('langsteps:v1.1.0:mastery:go', '["hello"]');
    const other = await caches.open('unrelated-app-offline-data');
    await other.put(new Request(new URL('/unrelated-app/test', location.origin)),
      new Response('preserve this'));
  });
  await save.click();
  await expect(page.locator('[data-course-status="python"]')).toContainText('Saved:');
  const saved = await page.evaluate(async () => {
    const cache = await caches.open('langsteps-library-v1-python');
    return Boolean(await cache.match(new URL('./Python/index.html', location.href)));
  });
  expect(saved).toBe(true);
  await remove.click();
  await expect(page.locator('[data-course-status="python"]'))
    .toHaveText('Not saved by Offline Library');
  const state = await page.evaluate(async () => ({
    cacheNames: await caches.keys(),
    mastery: localStorage.getItem('langsteps:v1.1.0:mastery:go')
  }));
  expect(state.cacheNames).toContain('unrelated-app-offline-data');
  expect(state.cacheNames).not.toContain('langsteps-library-v1-python');
  expect(state.mastery).toBe('["hello"]');
});

test('offline library itself remains readable after worker installation', async ({ page, context }) => {
  await page.goto('offline-library.html', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('button', { name: 'Save Go', exact: true })).toBeEnabled();
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
    { timeout: 15_000 }).toBe(true);
  await context.setOffline(true);
  try {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Offline Library' })).toBeVisible();
    await expect(page.locator('#offline-course-list li')).toHaveCount(10);
  } finally {
    await context.setOffline(false);
  }
});

test('offline library recovers from a simulated browser storage quota error', async ({ page }) => {
  await page.goto('offline-library.html', { waitUntil: 'domcontentloaded' });
  const save = page.getByRole('button', { name: 'Save Python' });
  const status = page.locator('#offline-library-status');
  await expect(save).toBeEnabled();

  await page.evaluate(() => {
    const originalPut = Cache.prototype.put;
    let rejectOnce = true;
    Cache.prototype.put = async function(request, response) {
      if (rejectOnce && String(request.url || request).endsWith('/Python/style.css')) {
        rejectOnce = false;
        throw new DOMException('Insufficient storage', 'QuotaExceededError');
      }
      return originalPut.call(this, request, response);
    };
    const originalFetch = window.fetch.bind(window);
    window.__pythonIndexFetches = 0;
    window.fetch = (input, options) => {
      if (String(input).endsWith('/Python/index.html')) window.__pythonIndexFetches++;
      return originalFetch(input, options);
    };
  });

  await save.click();
  await expect(status).toContainText('Not enough browser storage');
  await expect(save).toBeEnabled();
  await expect(page.locator('[data-course-status="python"]')).toContainText('Partial download');

  await save.click();
  await expect(page.locator('[data-course-status="python"]')).toContainText('Saved:');
  await expect(status).toContainText('saved');
  expect(await page.evaluate(() => window.__pythonIndexFetches)).toBe(1);
});

test('offline library cancels an interrupted download and resumes its partial cache', async ({ page }) => {
  await page.goto('offline-library.html', { waitUntil: 'domcontentloaded' });
  const save = page.getByRole('button', { name: 'Save Python' });
  const cancel = page.getByRole('button', { name: 'Cancel download' });
  const status = page.locator('#offline-library-status');
  await expect(save).toBeEnabled();

  await page.evaluate(() => {
    const original = window.fetch.bind(window);
    let delayOnce = true;
    window.fetch = (input, options) => {
      if (delayOnce && String(input).endsWith('/Python/style.css')) {
        delayOnce = false;
        return new Promise((resolve, reject) => {
          options.signal.addEventListener('abort', () => {
            reject(new DOMException('Cancelled', 'AbortError'));
          }, { once: true });
        });
      }
      return original(input, options);
    };
  });
  await save.click();
  await expect(status).toContainText('Saving Python: 2/');
  await cancel.click();
  await expect(status).toContainText('Download cancelled');
  await expect(save).toBeEnabled();
  await expect(page.locator('[data-course-status="python"]')).toContainText('Partial download');

  await save.click();
  await expect(page.locator('[data-course-status="python"]')).toContainText('Saved:');
});

test('offline library does not report an evicted bundle as fully saved', async ({ page }) => {
  await page.goto('offline-library.html', { waitUntil: 'domcontentloaded' });
  const save = page.getByRole('button', { name: 'Save Go', exact: true });
  await expect(save).toBeEnabled();
  await save.click();
  await expect(page.locator('[data-course-status="go"]')).toContainText('Saved:');
  await page.evaluate(async () => {
    const cache = await caches.open('langsteps-library-v1-go');
    await cache.delete(new URL('./Go/data.js', location.href));
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-course-status="go"]')).toContainText('Partial download');
});
