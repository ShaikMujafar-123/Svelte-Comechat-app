import type { SbStory, MarketingPageContent } from '$lib/types/storyblok';
import { marketingPageStory } from './content';

// ─── Mock Storyblok Client ───
// Mimics the Storyblok Content Delivery API response shape.
//
// To connect to real Storyblok, replace this file with:
//
//   import StoryblokClient from 'storyblok-js-client';
//
//   const client = new StoryblokClient({
//       accessToken: import.meta.env.STORYBLOK_ACCESS_TOKEN
//   });
//
//   export async function getStory(slug: string) {
//       const { data } = await client.get(`cdn/stories/${slug}`, { version: 'published' });
//       return data.story;
//   }

export async function getStory(slug: string): Promise<SbStory<MarketingPageContent>> {
	await new Promise((r) => setTimeout(r, 50));

	if (slug === '' || slug === 'home') {
		return marketingPageStory;
	}

	throw new Error(`Story not found: ${slug}`);
}
