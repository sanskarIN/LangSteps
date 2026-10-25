"use strict";
/**
 * Opt-in, first-party offline course snapshots.
 * Saves only an audited list of static assets; external dependencies are never downloaded.
 * Offline Library cache names are per course so "Remove" cannot delete other courses.
 */
(() => {
    const shared = ['online-status.css', 'online-status.js', 'splash.png'];
    const legacy = (slug, title, extra = [], external = true) => ({
        slug: slug.toLowerCase(),
        title,
        assets: [`${slug}/index.html`, `${slug}/style.css`, `${slug}/script.js`, ...extra, ...shared],
        external
    });
    const guided = (slug, title) => ({
        slug: slug.toLowerCase(),
        title,
        assets: [
            `${slug}/index.html`, `${slug}/data.js`,
            'curriculum/learning.css', 'curriculum/progress.js',
            'curriculum/navigation.js', 'curriculum/learning.js',
            'curriculum/offline-register.js', ...shared
        ],
        external: false
    });
    const courses = [
        legacy('HTML', 'HTML'),
        legacy('CSS', 'CSS'),
        legacy('JavaScript', 'JavaScript', ['JavaScript/css_logo.svg']),
        legacy('React', 'React', ['React/react-logo.svg']),
        legacy('Python', 'Python'),
        legacy('TypeScript', 'TypeScript'),
        legacy('Rust', 'Rust'),
        guided('Go', 'Go'),
        guided('SQL', 'SQL'),
        guided('CSharp', 'C# & .NET')
    ];
    const dependencyNotes = {
        'html': 'CodeMirror editor scripts and styles, Google Fonts, and translation tools load from external services.',
        'css': 'CodeMirror editor scripts and styles, Google Fonts, translation tools, and some examples load external resources.',
        'javascript': 'CodeMirror, Google Fonts, optional animation effects, translation, and network examples may require internet.',
        'react': 'CodeMirror, Google Fonts, and interactive React/Babel demonstrations load third-party scripts.',
        'python': 'Google Fonts and network-request exercises may require internet.',
        'typescript': 'CodeMirror editor scripts and styles, Google Fonts, translation, and some API examples may require internet.',
        'rust': 'Google Fonts and Font Awesome icons are loaded externally; the reading text uses local files.',
        'go': 'The guided course viewer and lesson data are local. Quiz links and other courses are not included.',
        'sql': 'The guided course viewer and lesson data are local. Quiz links and other courses are not included.',
        'csharp': 'The guided course viewer and lesson data are local. Quiz links and other courses are not included.'
    };
    const CACHE_PREFIX = 'langsteps-library-v1-';
    const MAX_FILE_BYTES = 5 * 1024 * 1024;
    const MAX_BUNDLE_BYTES = 20 * 1024 * 1024;
    const base = new URL('./', window.location.href);
    const list = document.getElementById('offline-course-list');
    const message = document.getElementById('offline-library-status');
    const cancel = document.getElementById('offline-library-cancel');
    const storage = document.getElementById('offline-library-storage');
    if (!(list instanceof HTMLElement) || !(message instanceof HTMLElement) ||
        !(cancel instanceof HTMLButtonElement) || !(storage instanceof HTMLElement))
        return;
    const cancelButton = cancel;
    const storageLabel = storage;
    const cards = [];
    let busy = false;
    let supported = false;
    let controller = null;
    const cacheName = (course) => CACHE_PREFIX + course.slug;
    const resolveAsset = (asset) => {
        const url = new URL(asset, base);
        if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname) ||
            url.search || url.hash)
            throw new Error('Invalid course asset path');
        return url.href;
    };
    const announce = (value) => { message.textContent = value; };
    function setBusy(value) {
        busy = value;
        cancelButton.hidden = !value;
        for (const card of cards) {
            card.save.disabled = value || !supported;
            card.remove.disabled = value || !supported;
        }
    }
    async function countSaved(course) {
        if (!(await caches.keys()).includes(cacheName(course)))
            return 0;
        const store = await caches.open(cacheName(course));
        let count = 0;
        for (const asset of course.assets) {
            if (await store.match(resolveAsset(asset)))
                count++;
        }
        return count;
    }
    async function reportStorage() {
        if (!navigator.storage?.estimate) {
            storageLabel.textContent = 'Storage estimate unavailable in this browser.';
            return;
        }
        try {
            const estimate = await navigator.storage.estimate();
            if (typeof estimate.usage === 'number' && typeof estimate.quota === 'number') {
                const mb = (value) => (value / (1024 * 1024)).toFixed(1);
                const pressure = estimate.quota > 0 && estimate.usage / estimate.quota >= 0.9
                    ? ' Storage is almost full; downloads may fail.'
                    : '';
                storageLabel.textContent = `Browser origin storage: ${mb(estimate.usage)} MiB used of ${mb(estimate.quota)} MiB estimated. This includes other projects on this origin.` + pressure;
            }
        }
        catch {
            storageLabel.textContent = 'The browser did not provide a storage estimate.';
        }
    }
    async function refresh() {
        if (!supported)
            return;
        for (const card of cards) {
            try {
                const saved = await countSaved(card.course);
                const total = card.course.assets.length;
                const entryCached = saved === 0
                    ? Boolean(await caches.match(resolveAsset(card.course.assets[0]), { ignoreSearch: true }))
                    : false;
                card.state.textContent = saved === 0
                    ? entryCached
                        ? 'Entry page cached from a visit or preload; course bundle not saved'
                        : 'Not saved by Offline Library'
                    : saved === total
                        ? `Saved: ${saved}/${total} local files`
                        : `Partial download: ${saved}/${total} local files`;
            }
            catch {
                // CacheStorage can reject in private browsing or under storage pressure.
                card.state.textContent = 'Saved-file status unavailable. Try reopening this page.';
            }
        }
        await reportStorage();
    }
    async function saveCourse(course) {
        if (busy || !supported)
            return;
        if (!navigator.onLine) {
            announce('Connect to the internet before downloading a course.');
            return;
        }
        setBusy(true);
        controller = new AbortController();
        let completed = 0;
        let totalBytes = 0;
        try {
            const store = await caches.open(cacheName(course));
            for (const asset of course.assets) {
                if (controller.signal.aborted)
                    throw new Error('Download cancelled');
                const url = resolveAsset(asset);
                announce(`Saving ${course.title}: ${completed + 1}/${course.assets.length} local files…`);
                // Continue partial downloads without repeating files already saved in this bundle.
                if (await store.match(url)) {
                    completed++;
                    continue;
                }
                const response = await fetch(url, {
                    signal: controller.signal, cache: 'no-cache', credentials: 'omit', redirect: 'error'
                });
                const directives = response.headers.get('cache-control') || '';
                if (!response.ok || response.type !== 'basic' ||
                    /(?:^|,)\s*(?:private|no-store)\b/i.test(directives)) {
                    throw new Error(`Unavailable or non-cacheable resource: ${asset}`);
                }
                if (asset.endsWith('.html') &&
                    !response.headers.get('content-type')?.includes('text/html')) {
                    throw new Error(`Unexpected HTML response: ${asset}`);
                }
                const bytes = await response.clone().arrayBuffer();
                totalBytes += bytes.byteLength;
                if (bytes.byteLength > MAX_FILE_BYTES || totalBytes > MAX_BUNDLE_BYTES) {
                    throw new Error('Download exceeded the local storage safety limit');
                }
                if (controller.signal.aborted)
                    throw new Error('Download cancelled');
                await store.put(url, response);
                completed++;
            }
            if (controller.signal.aborted)
                throw new Error('Download cancelled');
            announce(`${course.title}: saved ${completed} local files. External tools may still require internet.`);
        }
        catch (error) {
            const detail = error instanceof Error
                ? error.name === 'QuotaExceededError'
                    ? 'Not enough browser storage. Free space or remove a saved course, then retry'
                    : error.name === 'AbortError' || controller.signal.aborted
                        ? 'Download cancelled'
                        : error.message
                : 'Unknown error';
            announce(`${course.title}: ${detail}. Successfully saved files are kept; you can retry.`);
        }
        finally {
            controller = null;
            setBusy(false);
            await refresh();
        }
    }
    async function removeCourse(course) {
        if (busy || !supported)
            return;
        setBusy(true);
        try {
            await caches.delete(cacheName(course));
            announce(`Removed the Offline Library download for ${course.title}. Files from earlier visits or core precaching may still be available.`);
        }
        catch {
            announce(`Could not remove the ${course.title} download. Please retry.`);
        }
        finally {
            setBusy(false);
            await refresh();
        }
    }
    // Real course links work even when downloads are unavailable.
    list.textContent = '';
    for (const course of courses) {
        const item = document.createElement('li');
        const heading = document.createElement('h2');
        const link = document.createElement('a');
        link.href = resolveAsset(course.assets[0]);
        link.textContent = course.title;
        heading.append(link);
        const note = document.createElement('p');
        note.textContent = dependencyNotes[course.slug] || 'Some features require a connection.';
        note.dataset.dependencyNote = course.slug;
        const state = document.createElement('p');
        state.dataset.courseStatus = course.slug;
        state.textContent = 'Checking offline availability…';
        const save = document.createElement('button');
        save.type = 'button';
        save.textContent = `Save ${course.title}`;
        save.disabled = true;
        save.addEventListener('click', () => { void saveCourse(course); });
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'secondary';
        remove.textContent = `Remove ${course.title}`;
        remove.disabled = true;
        remove.addEventListener('click', () => { void removeCourse(course); });
        item.append(heading, note, state, save, remove);
        list.append(item);
        cards.push({ course, state, save, remove });
    }
    cancelButton.addEventListener('click', () => { controller?.abort(); });
    window.addEventListener('online', () => { void refresh(); });
    (async () => {
        if (!window.isSecureContext || !('caches' in window) || !('serviceWorker' in navigator)) {
            announce('Offline downloads require HTTPS and a browser supporting service workers and CacheStorage.');
            return;
        }
        try {
            await navigator.serviceWorker.register('./sw.js', { scope: './' });
            supported = true;
            setBusy(false);
            announce('Choose Save to download first-party learning files. Nothing downloads automatically.');
            await refresh();
        }
        catch {
            announce('Service worker registration was blocked. Online course links remain available.');
        }
    })();
})();
