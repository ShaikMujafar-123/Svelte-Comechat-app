<script lang="ts">
	import type { AgentBuilderBlok } from '$lib/types/storyblok';
	import { resolve } from '$app/paths';
	import '$lib/assets/css/agent-builder-section.css';

	let { data }: { data: AgentBuilderBlok } = $props();
</script>

<section class="agent-builder-section" aria-label="Agent builder section">
	<div class="agent-builder-section-purple-blur"></div>
	<div class="agent-builder-section-planet-glow"></div>

	<div class="agent-builder-section-center-icon">
		<img src={data.icon.filename} alt={data.icon.alt} width="274" height="274" loading="lazy" />
	</div>

	<div class="agent-builder-section-content-wrapper">
		<h2>{@html data.heading}</h2>
		<p>{data.description}</p>
		<div class="agent-builder-section-actions-group">
			<a class="agent-builder-section-button agent-builder-section-button-secondary" href={resolve(data.secondary_cta.url)}>{data.secondary_cta.label}</a>
			<a class="agent-builder-section-button agent-builder-section-button-primary" href={resolve(data.primary_cta.url)}>{data.primary_cta.label}</a>
		</div>
	</div>
</section>
