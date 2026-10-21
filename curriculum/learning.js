/* LangSteps 1.1.1: resilient, privacy-friendly static curriculum viewer.
 * Progress keys intentionally remain v1.1.0 so existing achievements survive upgrades.
 * This viewer displays examples; it never executes untrusted source code.
 */
(() => {
  'use strict';

  const course = window.LANGSTEPS_COURSE;
  const byId = id => document.getElementById(id);
  const parent = byId('lesson-content');
  if (!course || !Array.isArray(course.lessons) || course.lessons.length === 0) {
    parent.textContent = 'This curriculum is unavailable.';
    return;
  }

  const sidebar = byId('lesson-list');
  const search = byId('lesson-search');
  const category = byId('lesson-category');
  const progress = byId('progress');
  const total = course.lessons.length;
  const progressStore = window.LangStepsProgress.createStore(course.slug);
  const allowedIds = new Set(course.lessons.map(lesson => lesson.id));
  const lessonsById = new Map(course.lessons.map(lesson => [lesson.id, lesson]));

  let learned = progressStore.read(allowedIds);

  let current = null;
  byId('course-title').textContent = course.title;
  byId('course-summary').textContent = course.summary;
  document.title = course.title + ' | LangSteps';

  const categories = [...new Set(course.lessons.map(lesson => lesson.category))];
  for (const name of categories) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    category.append(option);
  }

  function hashId() {
    return window.LangStepsNavigation.readHash(window.location.hash);
  }

  function filteredLessons() {
    const term = search.value.trim().toLocaleLowerCase();
    return course.lessons.filter(lesson =>
      (category.value === 'all' || lesson.category === category.value) &&
      [lesson.title, lesson.category, lesson.summary, lesson.explanation, lesson.code]
        .join(' ').toLocaleLowerCase().includes(term)
    );
  }

  function saveProgress() {
    progressStore.write(learned);
  }

  function updateProgress() {
    progress.value = learned.size;
    progress.max = total;
    byId('progress-label').textContent = learned.size + ' / ' + total + ' lessons completed';
  }

  function navigate(id) {
    const targetHash = '#' + encodeURIComponent(id);
    if (window.location.hash === targetHash) {
      show(id, true);
    } else {
      // The hashchange listener performs the render and handles browser Back/Forward.
      window.location.hash = targetHash;
    }
  }

  function renderList() {
    sidebar.replaceChildren();
    const items = filteredLessons();
    byId('result-count').textContent = items.length + (items.length === 1 ? ' lesson' : ' lessons');
    if (!items.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No matching lessons. Try another search or category.';
      sidebar.append(empty);
    }

    for (const lesson of items) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-link' + (lesson.id === current ? ' active' : '');
      if (lesson.id === current) button.setAttribute('aria-current', 'page');
      button.textContent = (learned.has(lesson.id) ? '✓ ' : '') + lesson.title;
      button.addEventListener('click', () => navigate(lesson.id));
      sidebar.append(button);
    }
  }

  function show(id, focusHeading = false) {
    const lesson = lessonsById.get(id) || course.lessons[0];
    current = lesson.id;
    parent.replaceChildren();

    function element(tag, text, className) {
      const item = document.createElement(tag);
      if (text !== undefined) item.textContent = text;
      if (className) item.className = className;
      parent.append(item);
      return item;
    }

    element('p', lesson.category + ' · ' + lesson.level, 'eyebrow');
    const heading = element('h2', lesson.title);
    heading.tabIndex = -1;
    element('p', lesson.summary, 'lead');
    element('h3', 'Why it matters');
    element('p', lesson.explanation);
    element('h3', 'Worked example');

    const pre = element('pre');
    const code = document.createElement('code');
    code.textContent = lesson.code;
    pre.append(code);

    const copyStatus = element('p', '', 'copy-status');
    copyStatus.setAttribute('role', 'status');
    copyStatus.setAttribute('aria-live', 'polite');
    const copy = element('button', 'Copy example', 'action secondary');
    copy.type = 'button';
    copy.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          throw new Error('Clipboard API unavailable');
        }
        await navigator.clipboard.writeText(lesson.code);
        copyStatus.textContent = 'Example copied to clipboard.';
      } catch {
        // Copy should remain useful on insecure origins and restrictive browsers.
        const selection = typeof window.getSelection === 'function' ? window.getSelection() : null;
        if (selection && typeof document.createRange === 'function') {
          const range = document.createRange();
          range.selectNodeContents(code);
          selection.removeAllRanges();
          selection.addRange(range);
          copyStatus.textContent = 'Example selected. Press Ctrl+C (or Cmd+C on Mac) to copy.';
        } else {
          copyStatus.textContent = 'Clipboard access is unavailable. Select the code above to copy it.';
        }
      }
    });

    element('h3', 'Try it yourself');
    element('p', lesson.challenge);
    const mark = element('button',
      learned.has(lesson.id) ? '✓ Completed — undo' : 'Mark lesson complete', 'action');
    mark.type = 'button';
    mark.setAttribute('aria-pressed', String(learned.has(lesson.id)));
    mark.addEventListener('click', () => {
      if (learned.has(lesson.id)) learned.delete(lesson.id);
      else learned.add(lesson.id);
      saveProgress();
      updateProgress();
      // Update in place so the completion button retains keyboard focus.
      // Rebuilding the lesson here used to detach the focused button.
      mark.textContent = learned.has(lesson.id) ? '✓ Completed — undo' : 'Mark lesson complete';
      mark.setAttribute('aria-pressed', String(learned.has(lesson.id)));
      renderList();
    });

    const neighbors = window.LangStepsNavigation.neighbors(course.lessons.map(item => item.id), lesson.id);
    if (neighbors.previous) {
      const previous = element('button', '← Previous lesson', 'action secondary');
      previous.type = 'button';
      previous.addEventListener('click', () => navigate(neighbors.previous));
    }
    if (neighbors.next) {
      const next = element('button', 'Next lesson →', 'action secondary');
      next.type = 'button';
      next.addEventListener('click', () => navigate(neighbors.next));
    }

    renderList();
    if (focusHeading && typeof heading.focus === 'function') {
      heading.focus({ preventScroll: true });
    }
  }

  search.addEventListener('input', renderList);
  category.addEventListener('change', renderList);
  window.addEventListener('hashchange', () => show(hashId(), true));
  updateProgress();
  show(hashId());
})();
