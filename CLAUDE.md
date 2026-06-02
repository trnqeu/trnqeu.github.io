# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Production build → ./dist
npm run preview      # Preview production build locally
npm run check        # TypeScript type checking (astro check)
npm run lint         # ESLint (JS, TS, Astro files)
npm run format       # Prettier formatting
npm test:features    # Run Playwright E2E tests (requires dev server)
```

## Architecture

**Astro 5 static site** (trnq.eu) — personal blog/portfolio for Stefano Trinchero. Italian is the default language; English is secondary (`/en/` prefix).

### Content Collections (`src/content/`)

Six collections, all using Markdown/MDX with Zod-validated frontmatter defined in `src/content/config.ts`:

| Collection | Route prefix | Purpose |
|---|---|---|
| `ideas/` | `/blog/` | Essays & ideas |
| `shortstories/` | `/shortstories/` | Fiction |
| `promptsoncanvas/` | `/promptsoncanvas/` | AI art & prompts |
| `murderheprompted/` | `/murderheprompted/` | Prompt-based narratives |
| `ilcommissariogpt/` | `/ilcommissariogpt/` | Content series |
| `drafts/` | (excluded from routes) | Unpublished |

Standard frontmatter fields: `title`, `description`, `date`, `lang`, `categories`, `tags`, `author`, `image`, `excerpt`.

### Pages & Routing (`src/pages/`)

Dynamic routes use `import.meta.glob()` to load posts. The collection name determines the URL route. Language routing is URL-based: `/en/` prefix = English, no prefix = Italian.

The admin panel at `/pages/admin/` manages the book library (`/projects/eblioteque`) via Google Books API.

### Components & Layout

`Layout.astro` wraps everything (Header + Sidebar + Footer). All pages pass props: `title`, `description`, `showSidebar`, `image`, `type`, `publishedTime`, `canonical`, `lang`.

### Styling (`src/styles/global.css`)

CSS Custom Properties throughout. Dark mode controlled via `data-theme="dark"` on root. Spacing uses `--grid-unit` (8px). Responsive breakpoint at 1024px.

### Search

Pre-built JSON index generated at build time (`pages/search.json.js`). Supports both text search and semantic search (Gemma integration). Index lives in `public/search.json`.

## Environment Variables

```env
PUBLIC_GOOGLE_BOOKS_API_KEY=   # Required for /projects/eblioteque book covers
SITE=https://trnq.eu           # Deployment URL (used in astro.config.mjs)
```

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Requires `PUBLIC_GOOGLE_BOOKS_API_KEY` secret in the repo.

## Key Config Files

- `astro.config.mjs` — integrations (MDX, Sitemap), i18n, Shiki syntax highlighting
- `src/config.ts` — site title, author, social links
- `src/content/config.ts` — all content collection Zod schemas