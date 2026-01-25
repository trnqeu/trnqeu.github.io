import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    addBook: defineAction({
        accept: 'form',
        input: z.object({
            title: z.string(),
            author: z.string(),
            description: z.string().optional(),
            coverURL: z.string().optional(),
            token: z.string(), // JWT token obtained from /api/login
        }),
        handler: async (input) => {
            const response = await fetch('https://book-api.trnq.eu/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${input.token}`
                },
                body: JSON.stringify(input),
            });

            if (!response.ok) {
                throw new Error ('Error saving on database');
            }
            return await response.json();
        },
    }),
}