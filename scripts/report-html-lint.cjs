'use strict';

/**
 * Non-blocking inventory of legacy HTMLHint findings for issue #2.
 * Findings are recorded rather than silently ignored; scan failures still fail CI.
 */
const fs = require('node:fs');
const path = require('node:path');
const { HTMLHint } = require('htmlhint');
const root = path.resolve(__dirname, '..');
const excluded = new Set([
  '.git', 'node_modules', 'dist', 'build', 'coverage', 'test-results',
  'playwright-report', 'reports'
]);

function listHtml(dir = root) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!excluded.has(entry.name)) found.push(...listHtml(path.join(dir, entry.name)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      found.push(path.join(dir, entry.name));
    }
  }
  return found.sort();
}

const byRule = new Map();
const files = listHtml().map(absolute => {
  const relative = path.relative(root, absolute).split(path.sep).join('/');
  const messages = HTMLHint.verify(fs.readFileSync(absolute, 'utf8')).map(hint => {
    const rule = (hint.rule && hint.rule.id) || 'unknown';
    byRule.set(rule, (byRule.get(rule) || 0) + 1);
    return {
      line: hint.line,
      column: hint.col,
      severity: hint.type,
      rule,
      message: hint.message
    };
  });
  return { path: relative, findings: messages.length, messages };
});
const rules = [...byRule.entries()]
  .map(([rule, findings]) => ({ rule, findings }))
  .sort((a, b) => b.findings - a.findings || a.rule.localeCompare(b.rule));
const flagged = files.filter(file => file.findings > 0)
  .sort((a, b) => b.findings - a.findings || a.path.localeCompare(b.path));
const report = {
  generated_at: new Date().toISOString(),
  engine: 'HTMLHint.verify, default rules',
  informational_only: true,
  total_files: files.length,
  flagged_files: flagged.length,
  total_findings: rules.reduce((sum, item) => sum + item.findings, 0),
  by_rule: rules,
  files
};
const safe = value => String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
const markdown = [
  '# LangSteps full-repository HTML lint inventory',
  '',
  'Non-blocking legacy diagnostic only. The existing new-course HTML lint remains a required check.',
  '',
  '- Scanned files: **' + report.total_files + '**',
  '- Files with findings: **' + report.flagged_files + '**',
  '- Total findings: **' + report.total_findings + '**',
  '',
  '## Findings by rule',
  '',
  '| Rule | Count |',
  '| --- | ---: |',
  ...rules.map(item => '| ' + safe(item.rule) + ' | ' + item.findings + ' |'),
  '',
  '## Findings by file',
  '',
  '| File | Count |',
  '| --- | ---: |',
  ...flagged.map(item => '| ' + safe(item.path) + ' | ' + item.findings + ' |'),
  '',
  '## Individual diagnostics',
  '',
  ...flagged.flatMap(file => [
    '### ' + file.path,
    '',
    ...file.messages.map(item =>
      '- L' + item.line + ':' + item.column + ' (' + safe(item.rule) + ', ' + safe(item.severity) + '): ' + safe(item.message)),
    ''
  ])
].join('\n');

const output = path.join(root, 'reports');
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'htmlhint-baseline.json'), JSON.stringify(report, null, 2) + '\n');
fs.writeFileSync(path.join(output, 'htmlhint-baseline.md'), markdown + '\n');
console.log('HTMLHint inventory: ' + report.total_findings + ' findings across ' +
  report.flagged_files + '/' + report.total_files + ' HTML files.');
console.log('Reports: reports/htmlhint-baseline.json and reports/htmlhint-baseline.md');
