<script lang="ts">
	import type { MarketingPageContent } from '$lib/types/storyblok';
	import Navbar from "$lib/organisms/Navbar.svelte";
	import HeroSection from "$lib/organisms/HeroSection.svelte";
	import Banner from "$lib/organisms/Banner.svelte";
	import PlugLogicComp from "$lib/organisms/PlugLogicComp.svelte";
	import ChatIntregartionComp from "$lib/organisms/ChatIntregartionComp.svelte";
	import AgenBuilder from "$lib/organisms/AgenBuilder.svelte";
	import Footer from "$lib/organisms/Footer.svelte";
	import ClientLogos from "$lib/organisms/ClientLogos.svelte";

	let { content }: { content: MarketingPageContent } = $props();
</script>

<Navbar data={content.navbar} />

<main id="main-content">
	<HeroSection data={content.hero} />
	<ClientLogos data={content.client_logos} />
	<div class="all-banners-content">
		{#each content.banners as bannerData, i}
			<Banner data={bannerData} index={i} />
		{/each}
	</div>
	<PlugLogicComp data={content.plug_logic} />
	<ChatIntregartionComp data={content.chat_integration} />
	<AgenBuilder data={content.agent_builder} />
</main>

<Footer data={content.footer} />
