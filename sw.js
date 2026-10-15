/* Path-relative caching is required for project sites at /LangSteps/. */
const CACHE_NAME = 'langsteps-v1.1.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './curriculum/learning.css',
  './curriculum/learning.js',
  './Go/index.html',
  './Go/data.js',
  './SQL/index.html',
  './SQL/data.js',
  './CSharp/index.html',
  './CSharp/data.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key === 'wdm-v3' || (key.startsWith('langsteps-') && key !== CACHE_NAME))
        .map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Do not cache backend/API responses or cross-origin responses.
  if (url.origin !== self.location.origin || url.pathname.includes('/api/')) return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
