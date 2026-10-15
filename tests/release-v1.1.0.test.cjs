'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const expected = [
  ['Go', 'go'], ['SQL', 'sql'], ['CSharp', 'csharp']
];

for (const [directory, slug] of expected) {
  test(directory + ' lesson page is linked and has valid local assets', () => {
    const page = read(directory + '/index.html');
    assert.match(page, /<main class="layout">/);
    assert.match(page, /src="data\.js"/);
    assert.match(page, /src="\.\.\/curriculum\/learning\.js"/);
    assert.match(page, /href="\.\.\/curriculum\/learning\.css"/);
    assert.match(read('index.html'), new RegExp('href="' + directory + '/index\\.html"'));
    assert.doesNotMatch(page, /<script[^>]+(?:https?:\/\/)/);
  });
  test(directory + ' lessons have unique ids and meaningful teaching content', () => {
    const window = {};
    vm.runInNewContext(read(directory + '/data.js'), { window }, { timeout: 500 });
    const course = window.LANGSTEPS_COURSE;
    assert.equal(course.slug, slug);
    assert.ok(course.lessons.length >= 15, 'At least 15 lessons are required');
    assert.equal(new Set(course.lessons.map(l => l.id)).size, course.lessons.length);
    for (const lesson of course.lessons) {
      for (const field of ['id','category','title','summary','explanation','code','challenge','level']) {
        assert.equal(typeof lesson[field], 'string', field);
        assert.ok(lesson[field].trim().length > 2, field);
      }
      assert.match(lesson.id, /^[a-z0-9-]+$/);
    }
  });
}

test('Viewer and course JavaScript parse without syntax errors', () => {
  for (const filename of ['curriculum/learning.js', ...expected.map(([dir]) => dir + '/data.js')]) {
    assert.doesNotThrow(() => new vm.Script(read(filename), { filename }));
  }
});

test('Sensitive feedback endpoint is not publicly readable', () => {
  const server = read('server/LangSteps.Server/Program.cs');
  assert.doesNotMatch(server, /MapGet\("\/api\/feedback\/all"/);
  assert.doesNotMatch(server, /AllowAnyOrigin\(\)/);
});

test('ASP.NET API catalog includes every released v1.1.0 module', () => {
  const content = read('server/LangSteps.Server/Services/ContentService.cs');
  for (const [dir, slug] of expected) {
    assert.ok(content.includes('"' + slug + '"'));
    assert.ok(content.includes('"' + dir + '/index.html"'));
  }
});
