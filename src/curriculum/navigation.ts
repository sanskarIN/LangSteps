/** Type-safe lesson navigation for static Go, SQL and C# courses. */
interface LangStepsNavigationAPI {
  readHash(fragment: string): string;
  neighbors(ids: readonly string[], current: string): { previous: string | null; next: string | null };
}

interface Window {
  LangStepsNavigation: LangStepsNavigationAPI;
}

(() => {
  'use strict';

  function readHash(fragment: string): string {
    try {
      return decodeURIComponent(fragment.replace(/^#/, ''));
    } catch {
      // An invalid percent-encoded fragment is not a valid lesson ID.
      return '';
    }
  }

  function neighbors(ids: readonly string[], current: string) {
    const index = ids.indexOf(current);
    if (index < 0) return { previous: null, next: null };
    return {
      previous: index > 0 ? ids[index - 1]! : null,
      next: index + 1 < ids.length ? ids[index + 1]! : null
    };
  }

  window.LangStepsNavigation = { readHash, neighbors };
})();
