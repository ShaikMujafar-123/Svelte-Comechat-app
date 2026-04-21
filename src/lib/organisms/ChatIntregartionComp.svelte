<script lang="ts">
	import type { ChatIntegrationBlok } from '$lib/types/storyblok';
	import { resolve } from '$app/paths';
	import '$lib/assets/css/chat-integration-section.css';

	let { data }: { data: ChatIntegrationBlok } = $props();
</script>

<section class="chat-integration-section container" aria-label="Chat integration options">
	<div class="chat-integration-section-title-wrapper">
		<p class="chat-integration-section-category-label">{data.label}</p>
		<h2>{data.heading}</h2>
		<p class="chat-integration-section-description-text">{data.subtitle}</p>
	</div>

	<div class="chat-integration-section-card-grid">
		{#each data.cards as card (card.title)}
			<article class="chat-integration-section-card">
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-top-left"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-top-right"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-bottom-left"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-bottom-right"></span>
				<div class="chat-integration-section-accent-glow"></div>
				<div class="chat-integration-section-card-body">
					<img class="chat-integration-section-card-icon" src={card.icon.filename} alt={card.icon.alt} width="64" height="64" loading="lazy" />
					<div class="chat-integration-section-card-initial-content">
						<h3>{card.title}</h3>
						<ul class="chat-integration-section-card-feature-preview">
							<li>
								<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" />
								<span>{card.features[0]}</span>
							</li>
						</ul>
					</div>
					<ul class="chat-integration-section-card-feature-list-remaining">
						{#each card.features.slice(1) as feature}
							<li>
								<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
					<a href={resolve('/')}>{card.cta_text}</a>
				</div>
			</article>
		{/each}
	</div>
</section>
