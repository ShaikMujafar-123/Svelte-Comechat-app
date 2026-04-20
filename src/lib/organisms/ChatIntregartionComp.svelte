<script lang="ts">
	import { resolve } from '$app/paths';
	import '$lib/assets/css/chat-integration-section.css';

	const cards = [
		{
			icon: '/images/chat-integration-icon-chat-builder.svg',
			title: 'Chat Builder',
			features: [
				'Visual interface for styling and configuring chat',
				'Drop into any web or mobile app with a single snippet',
				'Integrates with auth, analytics, and third-party tools',
				'Great for prototypes, pilots, or teams with limited frontend resources'
			],
			cta: 'Try Builder',
		},
		{
			icon: '/images/chat-integration-icon-ui-kits.svg',
			title: 'UI Kits',
			features: [
				'Available for all popular frameworks',
				'Theming, layout, and logic hooks exposed',
				'Save time on structure, focus on experience',
				'Ideal for teams who want speed and polish'
			],
			cta: 'Try Builder',
		},
		{
			icon: '/images/chat-integration-icon-sdks.svg',
			title: 'SDKs & APIs',
			features: [
				'Available for all popular frameworks',
				'Theming, layout, and logic hooks exposed',
				'Save time on structure, focus on experience',
				'Ideal for teams who want speed and polish'
			],
			cta: 'Try Builder',
		}
	];
</script>

<section class="chat-integration-section container" aria-label="Chat integration options">
	<div class="chat-integration-section-title-wrapper">
		<p class="chat-integration-section-category-label">Chat integration options</p>
		<h2>Your launch, your way. Done right.</h2>
		<p class="chat-integration-section-description-text">
			Start with what gets you to production fastest - or matches your needs the best. Swap it out
			or level it up later.
		</p>
	</div>

	<div class="chat-integration-section-card-grid">
		{#each cards as card (card.title)}
			<article class="chat-integration-section-card">
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-top-left"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-top-right"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-bottom-left"></span>
				<span class="chat-integration-section-corner-dot chat-integration-section-corner-bottom-right"></span>
				<div class="chat-integration-section-accent-glow"></div>
				<div class="chat-integration-section-card-body">
					<img class="chat-integration-section-card-icon" src={card.icon} alt="" width="64" height="64" loading="lazy" />
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
					<a href={resolve('/')}>{card.cta}</a>
				</div>
			</article>
		{/each}
	</div>
</section>
