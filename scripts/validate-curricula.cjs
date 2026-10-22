'use strict';

/**
 * Validate static curriculum data without evaluating JavaScript.
 *
 * The browser files deliberately contain a single JSON-literal assignment to
 * window.LANGSTEPS_COURSE. Parsing only that literal prevents CI from running
 * arbitrary instructions that might accidentally be introduced into data.js.
 */
const fs = require('node:fs');
const path = require('node:path');

const COURSE_DIRECTORIES = Object.freeze({
  Go: 'go',
  SQL: 'sql',
  CSharp: 'csharp'
});
const COURSE_FIELDS = Object.freeze(['slug', 'title', 'summary', 'lessons']);
const LESSON_FIELDS = Object.freeze([
  'id', 'title', 'category', 'summary', 'explanation', 'code', 'challenge', 'level'
]);
const LEVELS = new Set(['Beginner', 'Intermediate', 'Advanced']);
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function parseCourseData(source, filename = 'data.js') {
  const match = /^window\.LANGSTEPS_COURSE\s*=\s*(\{[\s\S]*\})\s*;\s*$/.exec(source);
  if (!match) {
    throw new Error(filename + ': expected one JSON-literal window.LANGSTEPS_COURSE assignment');
  }
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    throw new Error(filename + ': invalid course JSON: ' + error.message);
  }
}

function validateCourse(course, expectedSlug) {
  const errors = [];
  if (!isRecord(course)) return ['course must be an object'];

  for (const field of COURSE_FIELDS) {
    if (!(field in course)) errors.push('course.' + field + ' is missing');
  }
  for (const field of Object.keys(course)) {
    if (!COURSE_FIELDS.includes(field)) errors.push('course.' + field + ' is not supported');
  }
  for (const field of ['slug', 'title', 'summary']) {
    if (typeof course[field] !== 'string' || !course[field].trim()) {
      errors.push('course.' + field + ' must be a non-empty string');
    }
  }
  if (typeof course.slug === 'string' && course.slug !== expectedSlug) {
    errors.push('course.slug must be "' + expectedSlug + '"');
  }
  if (!Array.isArray(course.lessons) || course.lessons.length === 0) {
    errors.push('course.lessons must be a non-empty array');
    return errors;
  }

  const ids = new Set();
  const titles = new Set();
  course.lessons.forEach((lesson, index) => {
    const where = 'lessons[' + index + ']';
    if (!isRecord(lesson)) {
      errors.push(where + ' must be an object');
      return;
    }
    for (const field of LESSON_FIELDS) {
      if (typeof lesson[field] !== 'string' || !lesson[field].trim()) {
        errors.push(where + '.' + field + ' must be a non-empty string');
      }
    }
    for (const field of Object.keys(lesson)) {
      if (!LESSON_FIELDS.includes(field)) errors.push(where + '.' + field + ' is not supported');
    }
    if (typeof lesson.id === 'string') {
      if (!ID_PATTERN.test(lesson.id)) errors.push(where + '.id must be URL-fragment-safe kebab-case');
      if (ids.has(lesson.id)) errors.push(where + '.id duplicates "' + lesson.id + '"');
      ids.add(lesson.id);
    }
    if (typeof lesson.title === 'string') {
      const normalizedTitle = lesson.title.trim().toLocaleLowerCase('en');
      if (titles.has(normalizedTitle)) errors.push(where + '.title duplicates "' + lesson.title + '"');
      titles.add(normalizedTitle);
    }
    if (typeof lesson.level === 'string' && !LEVELS.has(lesson.level)) {
      errors.push(where + '.level must be Beginner, Intermediate or Advanced');
    }
  });
  return errors;
}

function validateRepository(root = path.resolve(__dirname, '..')) {
  const errors = [];
  const counts = {};
  for (const [directory, slug] of Object.entries(COURSE_DIRECTORIES)) {
    const filename = directory + '/data.js';
    try {
      const content = fs.readFileSync(path.join(root, filename), 'utf8');
      const course = parseCourseData(content, filename);
      const problems = validateCourse(course, slug);
      for (const problem of problems) errors.push(filename + ': ' + problem);
      counts[slug] = Array.isArray(course.lessons) ? course.lessons.length : 0;
    } catch (error) {
      errors.push(error.message);
    }
  }
  return { errors, counts };
}

if (require.main === module) {
  const { errors, counts } = validateRepository();
  if (errors.length) {
    console.error('Curriculum validation failed:\n' + errors.map(e => ' - ' + e).join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Curriculum validation passed: ' +
      Object.entries(counts).map(([slug, count]) => slug + ': ' + count + ' lessons').join(', '));
  }
}

module.exports = { parseCourseData, validateCourse, validateRepository };
