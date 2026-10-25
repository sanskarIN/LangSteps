# Offline reliability follow-up (unreleased)

This is development work **after stable v1.3.0**, not a new published version.

## Changes under review

- **Temporary upstream failures:** for a previously visited lesson, HTTP 5xx navigation responses can use a cached copy. An unvisited page still receives its actual server error. HTTP 404 responses are *not* disguised as a saved page.
- **Stable-page query variants:** when offline, a visited HTML route can be found even if its query string changes, appropriate for static GitHub Pages lessons. Ordinary online navigation remains network-first.
- **Cache safeguards:** responses marked `Cache-Control: private` or `no-store` are not added to the runtime cache. Content with a declared `Content-Length` above 5 MiB is skipped rather than deliberately retaining known large files.
- **Backend isolation:** same-origin paths `api`, `api/`, and nested `api/...` (case-insensitive) are not intercepted, in addition to cross-project/cross-origin and non-GET exclusion.
- **Compatibility:** no lesson IDs, browser mastery keys, course content or ASP.NET Core endpoints are changed.

## Deliberate limitations

This is **not** an automatic full-curriculum download feature. Storage is still subject to eviction and the 64-item runtime limit; files without a declared size may still be larger than 5 MiB. Some external resources require connectivity. The worker does not treat 404s as transient failures.

## Verification

Run from a full repository checkout:

```sh
npm install --ignore-scripts --no-audit --no-fund
npm test
npm run typecheck:sw
npm run build:sw
git diff --exit-code -- sw.js
npm run validate:curriculum
npm run test:browser
```

The existing Verify LangSteps workflow also checks the TypeScript curricula, generated assets and optional ASP.NET Core build. A tagged stable release requires a separate reviewed release procedure.
