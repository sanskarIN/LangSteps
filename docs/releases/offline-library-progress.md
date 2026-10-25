# Offline Library — Post-v1.3.0 Development

**Status:** Feature PR; not a separately tagged LangSteps release.

## What is implemented

- New accessible `offline-library.html` with ten paths, text labels, progress announcements, keyboard controls and a JavaScript-disabled course-link fallback.
- Strict TypeScript source `src/curriculum/offline-library.ts` compiled to `curriculum/offline-library.js`, with generated-code drift checked by CI.
- Per-course, opt-in CacheStorage bundles, each limited to an audited set of first-party documents, styles, scripts and images.
- Save, retry, cancel and remove actions; partial downloads are labeled instead of incorrectly claiming completion.
- Browser storage estimate (when supported) with a reminder that the estimate includes all projects on the shared origin.
- Only HTTPS/secure-context, Service Worker and CacheStorage-capable browsers enable saving; normal course links remain useful without JavaScript.
- Service-worker install precaches the library interface. Activation preserves `langsteps-library-v1-*` caches while deleting only obsolete LangSteps-managed non-library caches.
- No account, remote progress upload, automatic downloading, or changes to existing `langsteps:v1.1.0:mastery:<slug>` keys.

## Limits and privacy

The ten courses include assets from external providers (for example, code-editor scripts or fonts). This feature deliberately never downloads those third-party assets. A saved course means the **listed local files** have been verified in that course's cache, **not** that every tool or interactive demonstration works offline. Some core and previously visited pages remain cached even after removing an explicit bundle. CacheStorage can be evicted or cleared by the browser.

Files are fetched only on explicit user interaction. Responses with HTTP errors, `Cache-Control: private/no-store`, non-basic response types, redirects, unexpected HTML content types, over-5-MiB individual files or over-20-MiB cumulative bundles are rejected. Failed/cancelled downloads retain verified partial files for retry.

## Verification requirements

```sh
npm run validate:curriculum
npm test
npm run typecheck:curriculum
npm run typecheck:sw
npm run build:curriculum
npm run build:sw
git diff --exit-code -- curriculum/offline-library.js sw.js
npm run test:browser
```

Browser tests cover saving a real course, per-course removal without impacting unrelated caches or learning progress, and offline loading of the library interface.

## Next refinements

- Better bundle dependency discovery and validation for legacy modules.
- Clear breakdown of externally hosted dependencies before saving.
- Storage-pressure recovery UI and reliable background-update notifications.
- End-to-end cancellation and non-cacheable-response integration tests across browsers.
