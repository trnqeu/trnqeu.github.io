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
        lang: z.string(),
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
        lang: z.string(),
    }),
});

const shortstories = defineCollection({
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
        lang: z.string(),
        originalDate: z.coerce.date().optional(),
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
        lang: z.string(),
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
        lang: z.string(),
    }),
});

const promptsoncanvas = defineCollection({
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
            frameStyle: z.enum(['simple', 'classic', 'gilded']),
            lang: z.string(),
            }),
});



export const collections = { ideas, murderheprompted, shortstories, drafts, ilcommissariogpt, promptsoncanvas};