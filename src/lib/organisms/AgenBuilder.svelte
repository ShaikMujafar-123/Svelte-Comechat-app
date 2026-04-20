<script lang="ts">
	import { resolve } from '$app/paths';
	import '$lib/assets/css/agent-builder-section.css';
</script>

<section class="agent-builder-section" aria-label="Agent builder section">
	<div class="agent-builder-section-purple-blur"></div>
	<div class="agent-builder-section-planet-glow"></div>

	<div class="agent-builder-section-center-icon">
		<img src="/images/Cometchat-icon.svg" alt="CometChat" width="274" height="274" loading="lazy" />
	</div>

	<div class="agent-builder-section-content-wrapper">
		<h2>You don't need to build it<br />all to ship it all</h2>
		<p>
			Start with chat. Or go full stack. Build fast, scale securely, and focus on what your
			agent does - not what it's missing.
		</p>
		<div class="agent-builder-section-actions-group">
			<a class="agent-builder-section-button agent-builder-section-button-secondary" href={resolve('/')}>Talk to Us</a>
			<a class="agent-builder-section-button agent-builder-section-button-primary" href={resolve('/')}>Try the Agent Builder</a>
		</div>
	</div>
</section>
