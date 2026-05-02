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

export const collections = { ideas, murderheprompted, shortstories, drafts, ilcommissariogpt, promptsoncanvas };
