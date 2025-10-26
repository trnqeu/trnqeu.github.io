import { defineCollection, z } from 'astro:content';



const ideas = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date().optional(),
        excerpt: z.string().optional(),
        categories: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
    }),
});

const murderheprompted = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        categories: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
    }),
});

const collectedshortstories = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        categories: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
    }),
});


const drafts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        categories: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
    }),
});

const ilcommissariogpt = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        categories: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
    }),
});

export const collections = { ideas, murderheprompted, collectedshortstories, drafts, ilcommissariogpt };