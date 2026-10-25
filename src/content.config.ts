import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Anonymous'),
    image: z.string().optional(),
    lang: z.string(),
    // Links this entry to its translation(s): entries sharing the same
    // translationKey are treated as the same post in different languages.
    translationKey: z.string().optional(),
});

const ideas = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/ideas' }),
    schema: baseSchema,
});

const murderheprompted = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/murderheprompted' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
    }),
});

const shortstories = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/shortstories' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
        originalDate: z.coerce.date().optional(),
    }),
});

const drafts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/drafts' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
    }),
});

const ilcommissariogpt = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/ilcommissariogpt' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
    }),
});

const promptsoncanvas = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/promptsoncanvas' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
        frameStyle: z.enum(['simple', 'classic', 'gilded']),
    }),
});

// Pieces published on other sites (Multivrss, Undurable…): frontmatter only,
// no body and no page on trnq.eu. They show up in the home and archive lists
// and link straight to `url`.
const elsewhere = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/elsewhere' }),
    schema: baseSchema.extend({
        date: z.coerce.date(),
        url: z.url(),
        source: z.string(),
    }),
});

export const collections = { elsewhere, ideas, murderheprompted, shortstories, drafts, ilcommissariogpt, promptsoncanvas };
