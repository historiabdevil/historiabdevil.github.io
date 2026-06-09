import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		draft: z.boolean(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
		complexity: z.string().optional(), // 포스트 성격/깊이 (예: 'Deep Dive', 'Quick Tip')
		metrics: z.array(
			z.object({
				label: z.string(),
				value: z.string()
			})
		).optional() // 핵심 성능 지표 (사이드 프로젝트 등에서 활용)
	}),
});

export const collections = { blog };
