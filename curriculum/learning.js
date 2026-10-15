/* LangSteps 1.1.0 - static, privacy-friendly curriculum viewer. No remote execution. */
(() => {
  'use strict';
  const course = window.LANGSTEPS_COURSE;
  if (!course || !Array.isArray(course.lessons) || !course.lessons.length) {
    document.getElementById('lesson-content').textContent = 'This curriculum is unavailable.';
    return;
  }
  const byId = id => document.getElementById(id);
  const sidebar = byId('lesson-list'), search = byId('lesson-search');
  const category = byId('lesson-category'), progress = byId('progress');
  const total = course.lessons.length, key = 'langsteps:v1.1.0:mastery:' + course.slug;
  let learned = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(saved)) learned = new Set(saved.filter(id => course.lessons.some(l => l.id === id)));
  } catch { /* storage may be disabled */ }
  let current = null;
  byId('course-title').textContent = course.title;
  byId('course-summary').textContent = course.summary;
  document.title = course.title + ' | LangSteps';
  const categories = [...new Set(course.lessons.map(lesson => lesson.category))];
  categories.forEach(name => {
    const option = document.createElement('option');
    option.value = name; option.textContent = name;
    category.append(option);
  });
  const slug = () => decodeURIComponent(location.hash.replace(/^#/, ''));
  const filtered = () => course.lessons.filter(l =>
    (category.value === 'all' || l.category === category.value) &&
    [l.title, l.category, l.summary, l.explanation, l.code].join(' ').toLowerCase().includes(search.value.trim().toLowerCase())
  );
  function updateProgress() {
    progress.value = learned.size; progress.max = total;
    byId('progress-label').textContent = learned.size + ' / ' + total + ' lessons completed';
  }
  function renderList() {
    sidebar.replaceChildren();
    const items = filtered();
    byId('result-count').textContent = items.length + ' lessons';
    if (!items.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No matching lessons. Try another search.';
      sidebar.append(empty);
    }
    for (const lesson of items) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-link' + (lesson.id === current ? ' active' : '');
      button.setAttribute('aria-current', lesson.id === current ? 'true' : 'false');
      button.textContent = (learned.has(lesson.id) ? '✓ ' : '') + lesson.title;
      button.addEventListener('click', () => { location.hash = encodeURIComponent(lesson.id); show(lesson.id); });
      sidebar.append(button);
    }
  }
  function show(id) {
    const lesson = course.lessons.find(l => l.id === id) || course.lessons[0];
    current = lesson.id;
    const parent = byId('lesson-content');
    parent.replaceChildren();
    function element(tag, text, className) {
      const e = document.createElement(tag);
      if (text !== undefined) e.textContent = text;
      if (className) e.className = className;
      parent.append(e); return e;
    }
    element('p', lesson.category + ' · ' + lesson.level, 'eyebrow');
    element('h2', lesson.title);
    element('p', lesson.summary, 'lead');
    element('h3', 'Why it matters');
    element('p', lesson.explanation);
    element('h3', 'Worked example');
    const pre = element('pre');
    const code = document.createElement('code');
    code.textContent = lesson.code; pre.append(code);
    const copy = element('button', 'Copy example', 'action secondary');
    copy.type = 'button';
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(lesson.code); copy.textContent = 'Copied!'; }
      catch { copy.textContent = 'Select the example to copy'; }
    });
    element('h3', 'Try it yourself');
    element('p', lesson.challenge);
    const mark = element('button', learned.has(lesson.id) ? '✓ Completed — undo' : 'Mark lesson complete', 'action');
    mark.type = 'button'; mark.addEventListener('click', () => {
      if (learned.has(lesson.id)) learned.delete(lesson.id); else learned.add(lesson.id);
      try { localStorage.setItem(key, JSON.stringify([...learned])); } catch {}
      updateProgress(); show(lesson.id);
    });
    renderList();
  }
  search.addEventListener('input', renderList);
  category.addEventListener('change', renderList);
  window.addEventListener('hashchange', () => show(slug()));
  updateProgress(); show(slug());
})();
