<script lang="ts">
	import type { BannerData } from '$lib/data/bannerData';
	import '$lib/assets/css/banner-section.css';

	let { data, index = -1 }: { data: BannerData; index?: number } = $props();
</script>

{#if index === 1}
	<h2 id="sticky-banner-heading" class="container">Everything you'd end up <br /><span>already done.</span></h2>
{/if}

<section
	class="banner-section container"
	aria-label={data.label || data.heading}
>
	<div class="banner-section-content-wrapper">
		<div class="banner-section-heading-group">
			<p class="banner-section-category-label">{data.label}</p>
			{#if index !== 1}
				<h2>{data.heading}</h2>
			{/if}
		</div>

		<p class="banner-section-description-text">{data.subtitle}</p>

		<ul class="banner-section-feature-list">
			{#each data.features as feature}
				<li>
					<img src="/images/banner-bullet-icon.svg" alt="" width="16" height="16" />{feature}
				</li>
			{/each}
		</ul>

		<p class="banner-section-description-text">{data.footer}</p>
	</div>

	<div class="banner-section-image-container">
		<img src={data.image.src} alt={data.image.alt} width="640" height="640" loading="lazy" />
	</div>
</section>
