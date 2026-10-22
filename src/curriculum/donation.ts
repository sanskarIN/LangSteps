/**
 * Accessible donation dialog shared by LangSteps Privacy and Terms pages.
 * Compile with npm run build:curriculum and commit curriculum/donation.js.
 * Donations are optional, and navigation never starts a payment automatically.
 */
((): void => {
  'use strict';

  const overlay = document.getElementById('donate-overlay');
  const modal = overlay?.querySelector<HTMLElement>('.donate-modal');
  const trigger = document.getElementById('donate-nav-btn');
  const close = document.getElementById('donate-close');
  const dismiss = document.getElementById('donate-close-btn');

  if (!overlay || !modal || !trigger || !close || !dismiss) return;

  let returnFocus: HTMLElement | null = null;
  let previousOverflow = '';

  const focusable = (): HTMLElement[] => Array.from(modal.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(element => element.getAttribute('aria-hidden') !== 'true');

  function openDialog(): void {
    if (overlay!.classList.contains('active')) return;
    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : trigger as HTMLElement;
    previousOverflow = document.body.style.overflow;
    overlay!.classList.add('active');
    document.body.style.overflow = 'hidden';
    (focusable()[0] ?? modal)?.focus();
  }

  function closeDialog(): void {
    if (!overlay!.classList.contains('active')) return;
    overlay!.classList.remove('active');
    document.body.style.overflow = previousOverflow;
    if (returnFocus?.isConnected) returnFocus.focus();
  }

  trigger.addEventListener('click', openDialog);
  close.addEventListener('click', closeDialog);
  dismiss.addEventListener('click', closeDialog);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeDialog();
  });
  document.addEventListener('keydown', event => {
    if (!overlay.classList.contains('active')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusable();
    if (items.length === 0) {
      event.preventDefault();
      modal.focus();
      return;
    }
    const first = items[0]!;
    const last = items[items.length - 1]!;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
