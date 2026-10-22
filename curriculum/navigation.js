"use strict";
(() => {
    'use strict';
    function readHash(fragment) {
        try {
            return decodeURIComponent(fragment.replace(/^#/, ''));
        }
        catch {
            // An invalid percent-encoded fragment is not a valid lesson ID.
            return '';
        }
    }
    function neighbors(ids, current) {
        const index = ids.indexOf(current);
        if (index < 0)
            return { previous: null, next: null };
        return {
            previous: index > 0 ? ids[index - 1] : null,
            next: index + 1 < ids.length ? ids[index + 1] : null
        };
    }
    window.LangStepsNavigation = { readHash, neighbors };
})();
