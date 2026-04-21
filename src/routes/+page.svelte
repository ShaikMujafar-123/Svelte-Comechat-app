<script lang="ts">
	import MarketingPageTemplate from '$lib/templates/MarketingPageTemplate.svelte';

	let { data } = $props();
	const story = $derived(data.story);
	const seo = $derived(story.content.seo);
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={seo.canonical_url} />

	<meta property="og:title" content={seo.og_title} />
	<meta property="og:description" content={seo.og_description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={seo.canonical_url} />
	<meta property="og:image" content={seo.og_image} />
	<meta property="og:site_name" content="CometChat" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.og_title} />
	<meta name="twitter:description" content={seo.og_description} />
	<meta name="twitter:image" content={seo.og_image} />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "CometChat",
		"url": seo.canonical_url,
		"logo": "https://www.cometchat.com/images/logo-cometchat.svg",
		"sameAs": [
			"https://www.facebook.com/CometChat",
			"https://www.linkedin.com/company/cometchat",
			"https://twitter.com/CometChat",
			"https://github.com/cometchat"
		]
	})}</script>`}

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "CometChat",
		"url": seo.canonical_url,
		"potentialAction": {
			"@type": "SearchAction",
			"target": seo.canonical_url + "/search?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	})}</script>`}

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": seo.title,
		"description": seo.description,
		"url": seo.canonical_url,
		"publisher": {
			"@type": "Organization",
			"name": "CometChat",
			"logo": "https://www.cometchat.com/images/logo-cometchat.svg"
		}
	})}</script>`}
</svelte:head>

<MarketingPageTemplate content={story.content} />
