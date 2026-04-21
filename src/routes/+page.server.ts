import type { PageServerLoad } from './$types';
import { getStory } from '$lib/storyblok/client';

export const load: PageServerLoad = async () => {
	const story = await getStory('home');
	return { story };
};
