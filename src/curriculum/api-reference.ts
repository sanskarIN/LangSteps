/**
 * Progressive enhancement for the static Web APIs Reference.
 * API entries are real <details> elements in HTML and work without JavaScript.
 * Generated browser asset: curriculum/api-reference.js (npm run build:curriculum).
 */
((): void => {
  'use strict';

  const list = document.getElementById('apiList');
  const search = document.getElementById('api-search') as HTMLInputElement | null;
  const category = document.getElementById('api-category') as HTMLSelectElement | null;
  const count = document.getElementById('api-result-count');
  const empty = document.getElementById('api-empty');
  const clear = document.getElementById('api-clear') as HTMLButtonElement | null;
  const expand = document.getElementById('api-expand') as HTMLButtonElement | null;
  const collapse = document.getElementById('api-collapse') as HTMLButtonElement | null;

  if (!list || !search || !category || !count || !empty || !clear || !expand || !collapse) return;

  const entries = Array.from(list.querySelectorAll<HTMLDetailsElement>('.api-item'));

  function update(): void {
    const query = search!.value.trim().toLocaleLowerCase();
    const selected = category!.value;
    let visible = 0;

    for (const entry of entries) {
      const searchable = (entry.dataset.search ?? entry.textContent ?? '').toLocaleLowerCase();
      const matches = (selected === 'all' || entry.dataset.category === selected) &&
        (!query || searchable.includes(query));
      entry.hidden = !matches;
      if (matches) visible++;
    }

    count!.textContent = `${visible} of ${entries.length} APIs shown`;
    empty!.hidden = visible !== 0;
    clear!.disabled = !query && selected === 'all';
  }

  search.addEventListener('input', update);
  category.addEventListener('change', update);
  clear.addEventListener('click', () => {
    search.value = '';
    category.value = 'all';
    update();
    search.focus();
  });
  expand.addEventListener('click', () => {
    for (const entry of entries) if (!entry.hidden) entry.open = true;
  });
  collapse.addEventListener('click', () => {
    for (const entry of entries) entry.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key !== '/' || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target instanceof HTMLElement &&
        target.closest('input, textarea, select, [contenteditable="true"]')) return;
    event.preventDefault();
    search.focus();
  });

  update();
})();
