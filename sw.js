/* LangSteps v1.1.1 offline service worker, scoped to the GitHub Pages project. */
const CACHE_NAME = 'langsteps-v1.2.0-dev1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './curriculum/learning.css',
  './curriculum/learning.js',
  './curriculum/progress.js',
  './curriculum/navigation.js',
  './curriculum/donation.js',
  './privacy.html',
  './terms.html',
  './Go/index.html',
  './Go/data.js',
  './SQL/index.html',
  './SQL/data.js',
  './CSharp/index.html',
  './CSharp/data.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        // Cache storage is shared across projects on the same GitHub Pages origin.
        // Do not delete other applications' caches, even if their names are old.
        keys.filter(key => key.startsWith('langsteps-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const basePath = new URL(self.registration.scope).pathname;

  if (url.origin !== self.location.origin || !url.pathname.startsWith(basePath)) return;
  if (url.pathname.includes('/api/')) return;

  if (request.mode === 'navigate') {
    // Prefer up-to-date HTML while online and use the precached page offline.
    event.respondWith(
      fetch(request).catch(async () =>
        (await caches.match(request)) ||
        (await caches.match('./index.html')) ||
        Response.error()
      )
    );
    return;
  }

  // Immutable lesson assets use a release-versioned cache; network serves cache misses.
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
