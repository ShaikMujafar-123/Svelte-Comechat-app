<script lang="ts">
	import '$lib/assets/css/client-logos-section.css';

	const logos = [
		{ src: '/images/haleon-seeklogo.com.svg', alt: 'Client logos group 1' },
		{ src: '/images/kahoot-seeklogo.com.svg', alt: 'Client logos group 2' },
		{ src: '/images/shaadi-seeklogo.com.svg', alt: 'Client logos group 2' },
		{ src: '/images/endeavor.svg', alt: 'Client logos group 2' },
		{ src: '/images/nb_logo_new_trans.svg', alt: 'Client logos group 2' }
	];
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
					{#each logos as logo}
						<img src={logo.src} alt={logo.alt} width="150" height="32" loading="lazy" />
					{/each}
				{/each}
			</div>

			<div class="client-logos__overlay">
				<a href="/" class="client-logos__cta">Check our amazing customer stories</a>
			</div>
		</div>
	</section>
</div>
