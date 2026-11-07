# HTML lint backlog inventory

The historic full-site HTMLHint debt is tracked in [issue #2](https://github.com/sanskarIN/LangSteps/issues/2). The old baseline (263 findings in October 2026) is **not** assumed to be today's count.

## Run locally

After installing dependencies with `npm install`, run:

```sh
npm run audit:html
```

This scans repository HTML files, excluding generated/build/test output and dependencies. It creates:

- `reports/htmlhint-baseline.json`: structured per-file diagnostics and aggregate rule counts.
- `reports/htmlhint-baseline.md`: a readable summary and individual findings.

The `Lint New Curricula HTML` GitHub Actions workflow uploads both files as the `langsteps-htmlhint-baseline` artifact on pull requests. Findings in legacy pages are reported **without** failing this diagnostic job; errors in the scanner itself still fail the job. The existing targeted HTML lint remains blocking.

## Cleanup order

1. Review the reports for invalid or unpaired HTML, broken structure and accessibility-related issues.
2. Fix genuine markup problems in focused PRs. Verify user-facing behavior and browser tests after each batch.
3. Triage HTMLHint false positives from inline code examples separately; use narrowly scoped exceptions only when justified.
4. Once the full repository has a clean, repeatable baseline, make full-repository HTMLHint a required gating check and remove this temporary diagnostic-only policy.

Do not suppress all lint rules or claim that reporting is the same as passing whole-repository lint.
