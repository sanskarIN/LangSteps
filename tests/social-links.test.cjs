'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', 'bin', 'obj', 'coverage']);
const inspectedExtensions = new Set([
  '.html', '.js', '.cjs', '.ts', '.cs', '.css', '.md', '.json', '.xml',
  '.yml', '.yaml', '.txt', '.svg', '.ps1'
]);
const banned = [
  /https?:\/\/(?:www\.)?threads\.(?:com|net)\b/i,
  /\bfa-threads\b/i,
  /\bcard-threads\b/i,
  /aria-label\s*=\s*["']Threads["']/i
];

function* projectSources(folder) {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const fullPath = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) yield* projectSources(fullPath);
    } else if (entry.isFile() && inspectedExtensions.has(path.extname(entry.name).toLowerCase())) {
      yield fullPath;
    }
  }
}

test('Project contains no Threads social links, icons or cards', () => {
  const offenders = [];
  for (const file of projectSources(root)) {
    // This test contains the banned patterns as detection expressions.
    if (file === __filename) continue;
    const source = fs.readFileSync(file, 'utf8');
    if (banned.some(rule => rule.test(source))) {
      offenders.push(path.relative(root, file).replaceAll(path.sep, '/'));
    }
  }
  assert.deepEqual(offenders, [], 'Social links to Threads must not be reintroduced');
});

test('Frontend and optional .NET profile schemas do not expose Threads', () => {
  const ts = fs.readFileSync(path.join(root, 'src/types/profile.ts'), 'utf8');
  const tsValues = fs.readFileSync(path.join(root, 'src/core/profileManager.ts'), 'utf8');
  const dotnet = fs.readFileSync(path.join(root, 'server/LangSteps.Server/Models/ProfileModels.cs'), 'utf8');
  const dotnetValues = fs.readFileSync(path.join(root, 'server/LangSteps.Server/Services/ProfileService.cs'), 'utf8');
  assert.doesNotMatch(ts, /^\s*threads\s*:/m);
  assert.doesNotMatch(tsValues, /^\s*threads\s*:/m);
  assert.doesNotMatch(dotnet, /^\s*string Threads\s*[,)]/m);
  assert.doesNotMatch(dotnetValues, /^\s*Threads\s*:/m);
});
