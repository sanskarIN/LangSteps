'use strict';

// Minimal dependency-free fixture server that mirrors the /LangSteps/ GitHub Pages
// project path. It serves only files from the checkout and never lists directories.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const prefix = '/LangSteps/';
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

function respond(res, status, body = '') {
  res.writeHead(status, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return respond(res, 405, 'Method not allowed');
  let pathname;
  try {
    pathname = new URL(req.url || '/', 'http://127.0.0.1').pathname;
  } catch {
    return respond(res, 400, 'Invalid URL');
  }
  if (pathname === '/LangSteps') {
    res.writeHead(308, { location: prefix });
    return res.end();
  }
  if (!pathname.startsWith(prefix)) return respond(res, 404, 'Outside LangSteps scope');

  let relative;
  try {
    relative = decodeURIComponent(pathname.slice(prefix.length));
  } catch {
    return respond(res, 400, 'Malformed path');
  }
  if (relative.includes('\\') || relative.includes('\0') ||
      relative.split('/').some(segment => segment === '..' || segment === '.')) {
    return respond(res, 400, 'Unsafe path');
  }
  if (!relative || relative.endsWith('/')) relative += 'index.html';

  const filename = path.resolve(root, relative);
  if (!filename.startsWith(root + path.sep)) return respond(res, 403, 'Outside checkout');
  let stat;
  try {
    stat = fs.statSync(filename);
  } catch {
    return respond(res, 404, 'Not found');
  }
  if (!stat.isFile()) return respond(res, 404, 'Not a file');

  res.writeHead(200, {
    'content-type': types[path.extname(filename)] || 'application/octet-stream',
    'content-length': stat.size,
    'cache-control': 'no-store'
  });
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(filename).pipe(res);
});

server.listen(port, '127.0.0.1', () => {
  process.stdout.write('LangSteps test server at http://127.0.0.1:' + port + prefix + '\n');
});
