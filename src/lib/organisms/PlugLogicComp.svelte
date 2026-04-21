<script lang="ts">
	import type { PlugLogicBlok } from '$lib/types/storyblok';
	import { resolve } from '$app/paths';
	import '$lib/assets/css/plug-logic-section.css';

	let { data }: { data: PlugLogicBlok } = $props();
</script>

<section class="plug-logic-section container" aria-label="Plug in your logic section">
	<div class="plug-logic-section-title-block">
		<img src={data.image.filename} alt={data.image.alt} width="200" height="80" loading="lazy" />
		<h2>{@html data.heading}</h2>
		<p>{data.subtitle}</p>
	</div>

	<div class="plug-logic-section-card-grid">
		{#each data.cards as card}
			<article class="plug-logic-section-card">
				<div class="plug-logic-section-card-content">
					<img
						class="plug-logic-section-card-icon"
						src={card.icon.filename}
						alt={card.icon.alt}
						width="64"
						height="64"
						loading="lazy"
					/>
					<h3>{card.title}</h3>
					<ul>
						{#each card.features as feature}
							<li>
								<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
					<a href={resolve('/')}>{card.cta_text}</a>
				</div>
				<img class="plug-logic-section-tree-illustration" src="/images/Ai-BYOB.svg" alt="" width="600" height="300" loading="lazy" />
			</article>
		{/each}
	</div>
</section>
