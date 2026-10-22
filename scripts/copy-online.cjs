'use strict';
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'build-online', 'online-status.js');
const target = path.join(root, 'online-status.js');
if (!fs.existsSync(source)) throw new Error('No compiled banner output. Run tsc --project tsconfig.online.json.');
fs.copyFileSync(source, target);
console.log('Generated sitewide online-status.js from TypeScript.');
