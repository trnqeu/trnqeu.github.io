/**
 * Shared helpers for the IT/EN translation system.
 *
 * Content lives in a single flat collection per content type; each entry
 * carries its own `lang`. Two entries that are translations of each other
 * share the same `translationKey` in frontmatter. Entries without a
 * `translationKey` are treated as untranslated (a group of one).
 *
 * These helpers work on the plain objects returned by
 * `import.meta.glob(..., { eager: true })`, which expose `file` and
 * `frontmatter`, matching the data-loading pattern already used across
 * `src/pages/**`.
 */

export type Locale = 'it' | 'en';

export interface GlobPost {
  file: string;
  frontmatter: {
    lang: string;
    translationKey?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

/** Derives the route slug from a glob-imported file path. */
export function slugFromFile(file: string): string {
  return file.split('/').pop()!.replace(/\.(md|mdx)$/, '');
}

function groupKey(post: GlobPost): string {
  return post.frontmatter.translationKey ?? slugFromFile(post.file);
}

export interface Localized<T> {
  post: T;
  /** True when no entry exists for the requested locale and this is the
   *  original-language entry being shown as a fallback. */
  isFallback: boolean;
}

/**
 * Collapses a list of posts (possibly containing multiple languages of the
 * same piece) into one entry per translation group, for a given locale:
 * the entry in that locale when it exists, otherwise whichever entry is
 * available, marked as a fallback.
 */
export function localize<T extends GlobPost>(posts: T[], locale: Locale): Localized<T>[] {
  const groups = new Map<string, T[]>();
  for (const post of posts) {
    const key = groupKey(post);
    const group = groups.get(key);
    if (group) {
      group.push(post);
    } else {
      groups.set(key, [post]);
    }
  }

  return [...groups.values()].map((group) => {
    const match = group.find((p) => p.frontmatter.lang === locale);
    return match ? { post: match, isFallback: false } : { post: group[0], isFallback: true };
  });
}

/**
 * Finds the real (non-fallback) translation of `post` in `targetLocale`,
 * if one exists among `allPosts`.
 */
export function translationSibling<T extends GlobPost>(
  post: T,
  allPosts: T[],
  targetLocale: Locale
): T | undefined {
  const key = groupKey(post);
  return allPosts.find(
    (p) => p !== post && groupKey(p) === key && p.frontmatter.lang === targetLocale
  );
}
