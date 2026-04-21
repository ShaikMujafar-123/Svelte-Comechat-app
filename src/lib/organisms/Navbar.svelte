<script lang="ts">
	import type { NavbarBlok } from '$lib/types/storyblok';
	import Button from '$lib/atoms/Button.svelte';
	import NavLink from '$lib/atoms/NavLink.svelte';
	import '$lib/assets/css/navbar-section.css';

	let { data }: { data: NavbarBlok } = $props();
	let open = $state(false);
</script>

<header class="site-header">
	<div class="site-header-inner">
		<a href="/" aria-label="CometChat home">
			<img src={data.logo.filename} alt={data.logo.alt} width="129" height="20" />
		</a>
		<nav class="primary-navigation" aria-label="Primary">
			{#each data.links as link (link.label)}
				<NavLink label={link.label} href={link.url} />
			{/each}
		</nav>
		<div class="header-actions">
			<NavLink label="Log in" />
			<Button variant="primary" size="sm" label="Schedule a demo" />
		</div>
		<div class="mobile-header-actions">
			<NavLink label="Log in" />
			<button
				type="button"
				class="mobile-menu-toggle"
				aria-expanded={open}
				aria-controls="mobile-navigation-drawer"
				aria-label="Toggle menu"
				onclick={() => (open = !open)}
			>
				<span></span><span></span><span></span>
			</button>
		</div>
	</div>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={`mobile-overlay ${open ? 'mobile-overlay-visible' : ''}`}
		role="presentation"
		onclick={() => (open = false)}
		onkeydown={(e) => e.key === 'Escape' && (open = false)}
	></div>
	<nav
		id="mobile-navigation-drawer"
		class={`mobile-drawer ${open ? 'mobile-drawer-visible' : ''}`}
		aria-label="Mobile navigation"
	>
		{#each data.links as link (link.label)}
			<NavLink label={link.label} href={link.url} />
		{/each}
		<div class="mobile-drawer-actions">
			<NavLink label="Log in" />
			<Button variant="primary" size="sm" label="Schedule a demo" />
		</div>
	</nav>
</header>
