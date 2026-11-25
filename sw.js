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
const MAX_CACHE_ENTRY_BYTES = 5 * 1024 * 1024;
const LIBRARY_CACHE_PREFIX = 'langsteps-library-v1-';
const CORE_ASSETS = [
    './',
    './index.html',
    './docs/offline.html',
    './offline-library.html',
    './offline-library.css',
    './curriculum/offline-library.js',
    './manifest.json',
    './online-status.css',
    './online-status.js',
    './curriculum/learning.css',
    './curriculum/learning.js',
    './curriculum/progress.js',
    './curriculum/navigation.js',
    './curriculum/offline-register.js',
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
// CacheStorage is origin-wide; read only caches owned by this application.
async function matchOwned(request, ignoreSearch = false) {
    try {
        const names = await caches.keys();
        const candidates = [RUNTIME_CACHE, CORE_CACHE, ...names.filter(name => name.startsWith(LIBRARY_CACHE_PREFIX))];
        for (const cacheName of candidates) {
            if (!names.includes(cacheName))
                continue;
            const response = await caches.match(request, { cacheName, ignoreSearch });
            if (response)
                return response;
        }
    }
    catch {
        // Cache access can be denied or evicted; network requests must still work.
    }
    return undefined;
}
async function storeRuntime(request, response) {
    // Never persist private responses, even when other directives permit caching.
    const directives = response.headers.get('cache-control') || '';
    if (!response.ok || response.type !== 'basic' || /(?:^|,)\s*(?:no-store|private)\b/i.test(directives))
        return;
    // The header is advisory: avoid known oversize files without buffering responses.
    const length = response.headers.get('content-length');
    if (length !== null && Number(length) > MAX_CACHE_ENTRY_BYTES)
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
        .filter(key => key.startsWith('langsteps-') && !key.startsWith(LIBRARY_CACHE_PREFIX) && key !== CORE_CACHE && key !== RUNTIME_CACHE)
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
    // Keep backend routes outside this static site's offline cache.
    const route = url.pathname.slice(basePath.length).toLowerCase();
    if (route === 'api' || route.startsWith('api/'))
        return;
    // Explicit Offline Library downloads must validate a live response, not a stale cache hit.
    // The controller owns these writes and their size, type and cache-control checks.
    if (request.cache === 'no-cache' && request.credentials === 'omit' && request.redirect === 'error') {
        return;
    }
    if (request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const response = await fetch(request);
                // A temporary server outage should not hide a visited lesson.
                // True 404 responses remain visible rather than masking broken links.
                if (response.status >= 500 && response.status < 600) {
                    return (await matchOwned(request, true)) || response;
                }
                if (response.headers?.get('content-type')?.includes('text/html')) {
                    await storeRuntime(request, response);
                }
                return response;
            }
            catch {
                // Do not substitute the homepage for an unrelated, uncached lesson.
                return (await matchOwned(request, true)) ||
                    (await matchOwned('./docs/offline.html')) || Response.error();
            }
        })());
        return;
    }
    // No executable endpoints, unbounded media, or cross-origin requests in the cache.
    if (!/\.(?:html?|css|js|json|svg|png|webp|ico)$/i.test(url.pathname))
        return;
    event.respondWith((async () => {
        // Respect the browser's normal HTTP cache while online. A CacheStorage
        // hit alone must not indefinitely pin a script or stylesheet to old code.
        try {
            const response = await fetch(request);
            if (response.status >= 500 && response.status < 600) {
                return (await matchOwned(request)) || response;
            }
            await storeRuntime(request, response);
            return response;
        }
        catch {
            return (await matchOwned(request)) || Response.error();
        }
    })());
});
