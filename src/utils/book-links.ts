/**
 * Shareable per-book links for the Sottolinee / Underlines pages.
 *
 * Each book is a `<details class="book-entry" id="<slug>">`; opening it puts
 * `#<slug>` in the address bar, and visiting that URL opens and scrolls to it.
 * The page is static, so a hash anchor is all we need (no extra routes).
 */

/** Stable id for a book, derived from its title. The keys in
 *  `all_quotes.json` are positional and shift whenever a book is added. */
export function bookSlug(title: string): string {
  return title
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Client-side wiring; call once from a page script. */
export function initBookLinks(): void {
  const entries = Array.from(
    document.querySelectorAll<HTMLDetailsElement>('details.book-entry[id]'),
  );
  const urlFor = (id: string) => `${location.origin}${location.pathname}#${id}`;

  for (const entry of entries) {
    const link = entry.querySelector<HTMLAnchorElement>('.share-link');
    if (link) {
      link.href = urlFor(entry.id);
      link.textContent = urlFor(entry.id);
    }

    // replaceState keeps the back button from filling up with open/close steps.
    entry.addEventListener('toggle', () => {
      if (entry.open) {
        history.replaceState(null, '', `#${entry.id}`);
      } else if (location.hash === `#${entry.id}`) {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });

    const button = entry.querySelector<HTMLButtonElement>('.copy-link');
    button?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(urlFor(entry.id));
      } catch {
        return;
      }
      const label = button.dataset.label ?? button.textContent ?? '';
      button.textContent = button.dataset.copied ?? label;
      setTimeout(() => {
        button.textContent = label;
      }, 1500);
    });
  }

  const openFromHash = () => {
    let id: string;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    const entry = entries.find((e) => e.id === id);
    if (!entry) return;
    entry.open = true;
    requestAnimationFrame(() => entry.scrollIntoView({ block: 'start' }));
  };

  openFromHash();
  window.addEventListener('hashchange', openFromHash);
}
