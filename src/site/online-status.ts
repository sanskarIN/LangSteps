/**
 * Accessible site-wide announcement: LangSteps is available online.
 * This optional TypeScript enhancement only handles dismissal. The message
 * is static HTML so it remains visible if JavaScript is unavailable.
 */
((): void => {
  const key = 'langsteps:online-announcement-dismissed:v1.2.0';
  const notice = document.querySelector<HTMLElement>('[data-ls-online-notice]');
  if (!notice) return;

  try {
    if (sessionStorage.getItem(key) === '1') {
      notice.hidden = true;
      return;
    }
  } catch {
    // Privacy settings may block browser storage. The banner still works.
  }

  const closeButton = notice.querySelector<HTMLButtonElement>('[data-ls-online-dismiss]');
  closeButton?.addEventListener('click', () => {
    notice.hidden = true;
    try {
      sessionStorage.setItem(key, '1');
    } catch {
      // Dismissal remains functional for the current page.
    }
  });
})();
