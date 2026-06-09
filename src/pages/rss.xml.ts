import rss from '@astrojs/rss';
import { getPosts } from '../utils/post';
import { siteConfig } from '../data/site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site || 'https://blog.hyeond.cloud',
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
	});
}
