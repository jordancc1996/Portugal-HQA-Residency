// Astro 7 loads collections from src/content.config.ts (src/content/config.ts is a legacy path and errors).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/pages',
    generateId: ({ data, entry }) => {
      if (typeof data.slug === 'string' && slugPattern.test(data.slug)) {
        return data.slug;
      }

      const filename = entry.split(/[/\\]/).pop() ?? entry;
      return filename.replace(/\.(md|mdx)$/i, '');
    },
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(slugPattern, 'Use a single-segment kebab-case slug with no directory prefix.'),
    metaDescription: z.string(),
    cluster: z.string(),
    parentPage: z.string().optional(),
    siblingPages: z.array(z.string()).optional(),
    childPages: z.array(z.string()).optional(),
  }),
});

export const collections = { pages };
