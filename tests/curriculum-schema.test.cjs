'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  COURSE_FIELDS, LESSON_FIELDS, parseCourseData, validateCourse, validateRepository
} = require('../scripts/validate-curricula.cjs');

const root = path.resolve(__dirname, '..');
const fixture = () => parseCourseData(fs.readFileSync(path.join(root, 'Go/data.js'), 'utf8'), 'Go/data.js');
const clone = value => JSON.parse(JSON.stringify(value));
const contains = (problems, fragment) =>
  assert.ok(problems.some(problem => problem.includes(fragment)), problems.join('\n'));

function declaredFields(interfaceName) {
  const declarations = fs.readFileSync(path.join(root, 'src/curriculum/course-schema.d.ts'), 'utf8');
  const section = declarations.match(new RegExp('interface ' + interfaceName + '\\s*\\{([\\s\\S]*?)\\}'));
  assert.ok(section, 'missing TypeScript interface ' + interfaceName);
  return Array.from(section[1].matchAll(/^\s+([a-z]+)\??\s*:/gm), match => match[1]);
}

test('The TypeScript course schema and runtime validator declare identical fields', () => {
  assert.deepEqual(declaredFields('LangStepsCourse'), COURSE_FIELDS);
  assert.deepEqual(declaredFields('LangStepsLesson'), LESSON_FIELDS);
});

test('All published Go, SQL and C# lessons validate without losing their 15-lesson catalogs', () => {
  const { errors, counts } = validateRepository(root);
  assert.deepEqual(errors, []);
  assert.deepEqual(counts, { go: 15, sql: 15, csharp: 15 });
});

test('Course data parser rejects executable source and non-JSON object literals', () => {
  assert.deepEqual(parseCourseData('window.LANGSTEPS_COURSE = {"slug":"go"};\n'), { slug: 'go' });
  assert.throws(
    () => parseCourseData('window.LANGSTEPS_COURSE = {"slug":"go"}; alert("not data");'),
    /expected one JSON-literal/
  );
  assert.throws(
    () => parseCourseData('window.LANGSTEPS_COURSE = {slug: "go"};'),
    /invalid course JSON/
  );
  assert.throws(
    () => parseCourseData('window.LANGSTEPS_COURSE = JSON.parse("{}");'),
    /expected one JSON-literal/
  );
});

test('Malformed lesson fields and difficulty levels fail validation', () => {
  const course = fixture();
  course.lessons[0].code = '';
  course.lessons[1].summary = 42;
  course.lessons[2].level = 'Expert';
  const problems = validateCourse(course, 'go');
  contains(problems, 'lessons[0].code');
  contains(problems, 'lessons[1].summary');
  contains(problems, 'lessons[2].level');
});

test('Duplicate lesson IDs, titles, and non-portable fragment IDs are rejected', () => {
  const course = clone(fixture());
  course.lessons[1].id = course.lessons[0].id;
  course.lessons[1].title = course.lessons[0].title.toUpperCase();
  course.lessons[2].id = 'wrong id / spaces';
  const problems = validateCourse(course, 'go');
  contains(problems, 'duplicates');
  contains(problems, 'URL-fragment-safe');
  contains(problems, '.title duplicates');
});

test('Missing or extra keys, wrong slugs, and absent lessons have actionable errors', () => {
  const course = fixture();
  course.slug = 'wrong';
  course.extra = true;
  delete course.lessons[0].challenge;
  course.lessons[0].surprise = 'untyped';
  let problems = validateCourse(course, 'go');
  contains(problems, 'course.slug must be');
  contains(problems, 'course.extra is not supported');
  contains(problems, '.challenge must be a non-empty string');
  contains(problems, '.surprise is not supported');

  course.lessons = [];
  problems = validateCourse(course, 'go');
  contains(problems, 'non-empty array');
  assert.deepEqual(validateCourse(null, 'go'), ['course must be an object']);
  assert.deepEqual(validateCourse({ lessons: [null] }, 'go').some(p => p.includes('must be an object')), true);
});
