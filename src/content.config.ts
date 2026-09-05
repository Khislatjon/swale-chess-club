import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    /** Date the report was published on the club site. */
    date: z.coerce.date(),
    summary: z.string(),
    /** Pinned items show above the rest on the news index. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { news };
