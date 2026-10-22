"use strict";
/**
 * LangSteps v1.2.0 offline worker.
 * This is the TypeScript source of the root-level sw.js deployed on GitHub Pages.
 * Only caches belonging to LangSteps are ever deleted during upgrades.
 */
const scope = self;
const CACHE_NAME = 'langsteps-v1.2.0';
const CORE_ASSETS = [
    './',
    './index.html',
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
scope.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => scope.skipWaiting()));
});
scope.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.filter(key => key.startsWith('langsteps-') && key !== CACHE_NAME)
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
        event.respondWith(fetch(request).catch(async () => (await caches.match(request)) ||
            (await caches.match('./index.html')) ||
            Response.error()));
        return;
    }
    event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
