/** Register the scoped offline worker on direct visits to guided courses. */
((): void => {
    if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
    window.addEventListener('load', () => {
        void navigator.serviceWorker.register('../sw.js', { scope: '../' }).catch(() => {
            // Learning remains available online if registration is denied.
        });
    });
})();
