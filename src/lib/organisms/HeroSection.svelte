<script lang="ts">
	import type { HeroBlok } from '$lib/types/storyblok';
	import CtaGroup from "$lib/molecules/CtaGroup.svelte";
	import "$lib/assets/css/hero-section.css";

	let { data }: { data: HeroBlok } = $props();
</script>

<section class="hero container" aria-label="Hero">
	<div class="hero-section-main-layout">
		<div class="hero-section-content-block">
			<div class="hero-section-eyebrow-container">
				<img
					class="web-purple-background-spark"
					src="/images/purple-background-spark.webp"
					width="40"
					height="40"
					alt=""
					loading="lazy"
				/>
				<p class="hero-section-eyebrow-label">{data.eyebrow}</p>
			</div>
			<h1>
				Ship the <span>agent.</span><br />Skip the
				<span>plumbing.</span>
			</h1>
			{#each data.descriptions as desc}
				<p class="hero-section-description-text">{desc}</p>
			{/each}
			<CtaGroup />
		</div>
		<div class="hero-section-illustration-wrapper">
			<img
				class="hero-section-background-image"
				src={data.image.filename}
				alt={data.image.alt}
				width="576"
				height="576"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>
