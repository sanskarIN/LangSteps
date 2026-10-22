'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const generated = path.join(root, 'build-sw', 'sw.js');
const destination = path.join(root, 'sw.js');
if (!fs.existsSync(generated)) {
  throw new Error('TypeScript worker output is missing; run tsc -p tsconfig.sw.json first');
}
fs.copyFileSync(generated, destination);
process.stdout.write('Generated GitHub Pages worker: sw.js\n');
