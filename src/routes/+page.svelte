<script lang="ts">
	import MarketingPageTemplate from '$lib/templates/MarketingPageTemplate.svelte';
</script>

<svelte:head>
	<title>CometChat – Full Stack AI Agent Platform | Chat SDK, UI Kits & APIs</title>
	<meta
		name="description"
		content="Ship production-ready AI agents with CometChat's full-stack platform. Chat UI, notifications, analytics, moderation — all built in. SDKs, UI Kits & APIs for every framework."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.cometchat.com" />

	<meta property="og:title" content="CometChat – Full Stack AI Agent Platform" />
	<meta
		property="og:description"
		content="Ship production-ready AI agents with CometChat's full-stack platform. Chat UI, notifications, analytics, moderation — all built in."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.cometchat.com" />
	<meta property="og:image" content="https://www.cometchat.com/images/og-cover.png" />
	<meta property="og:site_name" content="CometChat" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="CometChat – Full Stack AI Agent Platform" />
	<meta
		name="twitter:description"
		content="Ship production-ready AI agents with CometChat's full-stack platform."
	/>
	<meta name="twitter:image" content="https://www.cometchat.com/images/og-cover.png" />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "CometChat",
		"url": "https://www.cometchat.com",
		"logo": "https://www.cometchat.com/images/logo-cometchat.svg",
		"sameAs": [
			"https://www.facebook.com/CometChat",
			"https://www.linkedin.com/company/cometchat",
			"https://twitter.com/CometChat",
			"https://github.com/cometchat"
		]
	})}</script>`}
</svelte:head>

<MarketingPageTemplate />
