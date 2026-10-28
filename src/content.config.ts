import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    blurb: z.string(),
    theme: z.string(),
    ages: z.string(),
    accent: z.enum(['sun', 'sky', 'leaf', 'berry', 'grape']),
    emoji: z.string(),
  }),
});

export const collections = { stories };
