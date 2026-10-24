"use strict";
/**
 * LangSteps v1.3.0 offline worker (source of the generated root sw.js).
 * Core resources are precached; successfully visited HTML pages and same-origin
 * static assets are cached on demand. The worker never caches API responses.
 */
const scope = self;
const CORE_CACHE = 'langsteps-core-v1.3.0';
const RUNTIME_CACHE = 'langsteps-runtime-v1.3.0';
const MAX_RUNTIME_ENTRIES = 64;
const CORE_ASSETS = [
    './',
    './index.html',
    './offline.html',
    './manifest.json',
    './online-status.css',
    './online-status.js',
    './curriculum/learning.css',
    './curriculum/learning.js',
    './curriculum/progress.js',
    './curriculum/navigation.js',
    './curriculum/donation.js',
    './privacy.html',
    './terms.html',
    './api-reference.html',
    './curriculum/api-reference.js',
    './Go/index.html',
    './Go/data.js',
    './SQL/index.html',
    './SQL/data.js',
    './CSharp/index.html',
    './CSharp/data.js'
];
async function storeRuntime(request, response) {
    if (!response.ok || response.type !== 'basic' || response.headers.get('cache-control')?.includes('no-store'))
        return;
    try {
        const cache = await caches.open(RUNTIME_CACHE);
        await cache.put(request, response.clone());
        const entries = await cache.keys();
        for (const old of entries.slice(0, Math.max(0, entries.length - MAX_RUNTIME_ENTRIES))) {
            await cache.delete(old);
        }
    }
    catch {
        // Storage quota or privacy restrictions must not block live learning.
    }
}
scope.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CORE_CACHE)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => scope.skipWaiting()));
});
scope.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys()
        .then(keys => Promise.all(keys
        .filter(key => key.startsWith('langsteps-') && key !== CORE_CACHE && key !== RUNTIME_CACHE)
        .map(key => caches.delete(key))))
        .then(() => scope.clients.claim()));
});
scope.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET')
        return;
    const url = new URL(request.url);
    const basePath = new URL(scope.registration.scope).pathname;
    if (url.origin !== scope.location.origin || !url.pathname.startsWith(basePath))
        return;
    if (url.pathname.includes('/api/'))
        return;
    if (request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const response = await fetch(request);
                if (response.headers?.get('content-type')?.includes('text/html')) {
                    await storeRuntime(request, response);
                }
                return response;
            }
            catch {
                // Do not substitute the homepage for an unrelated, uncached lesson.
                return (await caches.match(request)) ||
                    (await caches.match('./offline.html')) || Response.error();
            }
        })());
        return;
    }
    // No executable endpoints, unbounded media, or cross-origin requests in the cache.
    if (!/\.(?:html?|css|js|json|svg|png|webp|ico)$/i.test(url.pathname))
        return;
    event.respondWith((async () => {
        const cached = await caches.match(request);
        if (cached)
            return cached;
        const response = await fetch(request);
        await storeRuntime(request, response);
        return response;
    })());
});
