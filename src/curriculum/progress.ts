/**
 * LangSteps browser-only lesson mastery storage.
 * The v1.1.0 key prefix is deliberately stable across releases.
 * The TypeScript source is compiled into curriculum/progress.js for GitHub Pages.
 */
interface LangStepsProgressStore {
  read(allowedIds: ReadonlySet<string>): Set<string>;
  write(mastered: ReadonlySet<string>): boolean;
}

interface LangStepsProgressAPI {
  createStore(slug: string): LangStepsProgressStore;
}

interface Window {
  LangStepsProgress: LangStepsProgressAPI;
}

(() => {
  'use strict';
  const prefix = 'langsteps:v1.1.0:mastery:';

  function createStore(slug: string): LangStepsProgressStore {
    if (!/^[a-z0-9-]+$/i.test(slug)) {
      throw new Error('Invalid course slug');
    }
    const key = prefix + slug;

    return {
      read(allowedIds: ReadonlySet<string>): Set<string> {
        try {
          const value: unknown = JSON.parse(localStorage.getItem(key) ?? '[]');
          if (!Array.isArray(value)) return new Set<string>();
          return new Set(value.filter(
            (id): id is string => typeof id === 'string' && allowedIds.has(id)
          ));
        } catch {
          // Browsers can deny storage, or a learner might have corrupt data.
          return new Set<string>();
        }
      },
      write(mastered: ReadonlySet<string>): boolean {
        try {
          localStorage.setItem(key, JSON.stringify([...mastered]));
          return true;
        } catch {
          // Keep in-memory mastery usable even when persistence is unavailable.
          return false;
        }
      }
    };
  }

  window.LangStepsProgress = { createStore };
})();
