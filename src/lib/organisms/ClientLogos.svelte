<script lang="ts">
	import type { ClientLogosBlok } from '$lib/types/storyblok';
	import '$lib/assets/css/client-logos-section.css';

	let { data }: { data: ClientLogosBlok } = $props();
</script>

<div class="client-logos-wrapper">
	<section class="container">
		<div class="client-logos">
			<span class="client-logos__corner client-logos__corner--tl"></span>
			<span class="client-logos__corner client-logos__corner--tr"></span>
			<span class="client-logos__corner client-logos__corner--bl"></span>
			<span class="client-logos__corner client-logos__corner--br"></span>

			<div class="client-logos__track">
				{#each { length: 2 } as _}
					{#each data.logos as logo}
						<img src={logo.filename} alt={logo.alt} width="150" height="32" loading="lazy" />
					{/each}
				{/each}
			</div>

			<div class="client-logos__overlay">
				<a href="/" class="client-logos__cta">{data.cta_text}</a>
			</div>
		</div>
	</section>
</div>
