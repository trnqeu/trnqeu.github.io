# trnq-eu-astro

The personal website and digital archive of Stefano Trinchero, hosted at [trnq.eu](https://trnq.eu).

This project is a bespoke web application exploring the aesthetic tension between **Bauhaus minimalism** and **monumental typographic design**. It serves as a laboratory for ideas, short stories, and experimental digital projects.

## 🏛️ Design Philosophy: Dissonant Harmony

The site's visual identity is built on the [Volks Typo](https://astro.build/themes/details/volks-typo/) theme for Astro, which utilizes a "Constructivist Grid" system:
- **Typographic Tension**: The classical elegance of Cormorant Garamond (headings) meets the modern utility of Inter and JetBrains Mono.
- **Monumental Aesthetics**: Bold, commanding headers and blood-red rules (`--color-accent`) create a sense of structural permanence.
- **Bauhaus Influence**: A commitment to functionality, left-aligned layouts, and a curated color palette (Hessian/Dark Mode).

## 🚀 Technical Stack

Built with modern web technologies for performance and longevity:
- **Core**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Content**: MDX & Markdown with organized [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Styling**: Vanilla CSS with a global design system for maximum flexibility
- **Typography**: Self-hosted fonts via `@fontsource` (Oswald, Roboto Condensed, Work Sans, JetBrains Mono)
- **Features**: 
  - 🌍 Multi-language support (Italian/English)
  - 🔍 Client-side search implementation
  - 🎨 Dynamic Dark/Light mode
  - 📈 Automated RSS and Sitemap generation

## 📂 Project Structure

- `src/content/`: The heart of the site.
  - `ideas/`: Essays and thoughts on AI, tech, and history.
  - `shortstories/`: Narrative fiction and creative writing.
  - `promptsoncanvas/`: AI-generated art and prompts.
  - `murderheprompted/`: Experimental prompt-based mystery narratives.
- `src/pages/`: Astro components defining the routing and layout.
- `src/components/`: Reusable UI elements (Header, Sidebar, Table of Contents).
- `public/`: Static assets, including PDFs and images.

## 🛠️ Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/)

### Setup and Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` to view the site.

### Key Commands
- `npm run build`: Production build of the site
- `npm run preview`: Preview the production build locally
- `npm run test:features`: Run Playwright tests for core features

## 📝 Adding Content

To add a new "Idea" or "Short Story":
1. Create a new `.md` or `.mdx` file in `src/content/ideas/` or `src/content/shortstories/`.
2. Define the required frontmatter:
   ```yaml
   ---
   title: "Your Title"
   date: "YYYY-MM-DD"
   lang: "it" # or "en"
   description: "Brief summary"
   projects: ["Ideas"]
   categories: ["Category"]
   ---
   ```

## 📜 License
MIT License - Copyright (c) 2025 Stefano Trinchero