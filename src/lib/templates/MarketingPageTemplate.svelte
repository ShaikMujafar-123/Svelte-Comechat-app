<script lang="ts">
	import Navbar from "$lib/organisms/Navbar.svelte";
	import HeroSection from "$lib/organisms/HeroSection.svelte";
	import Banner from "$lib/organisms/Banner.svelte";
	import { bannerItems } from "$lib/data/bannerData";
	import PlugLogicComp from "$lib/organisms/PlugLogicComp.svelte";
	import ChatIntregartionComp from "$lib/organisms/ChatIntregartionComp.svelte";
	import AgenBuilder from "$lib/organisms/AgenBuilder.svelte";
	import Footer from "$lib/organisms/Footer.svelte";
	import ClientLogos from "$lib/organisms/ClientLogos.svelte";
</script>

<Navbar />

<main id="main-content">
	<HeroSection />
	<ClientLogos />
	<div class="all-banners-content">
		{#each bannerItems as bannerData, i}
			<Banner data={bannerData} index={i} />
		{/each}
	</div>
	<PlugLogicComp />
	<ChatIntregartionComp />
	<AgenBuilder />
</main>

<Footer />
