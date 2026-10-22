"use strict";
(() => {
    'use strict';
    const prefix = 'langsteps:v1.1.0:mastery:';
    function createStore(slug) {
        if (!/^[a-z0-9-]+$/i.test(slug)) {
            throw new Error('Invalid course slug');
        }
        const key = prefix + slug;
        return {
            read(allowedIds) {
                try {
                    const value = JSON.parse(localStorage.getItem(key) ?? '[]');
                    if (!Array.isArray(value))
                        return new Set();
                    return new Set(value.filter((id) => typeof id === 'string' && allowedIds.has(id)));
                }
                catch {
                    // Browsers can deny storage, or a learner might have corrupt data.
                    return new Set();
                }
            },
            write(mastered) {
                try {
                    localStorage.setItem(key, JSON.stringify([...mastered]));
                    return true;
                }
                catch {
                    // Keep in-memory mastery usable even when persistence is unavailable.
                    return false;
                }
            }
        };
    }
    window.LangStepsProgress = { createStore };
})();
