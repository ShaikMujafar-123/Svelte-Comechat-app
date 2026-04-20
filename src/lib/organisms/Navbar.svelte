<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import NavLink from '$lib/atoms/NavLink.svelte';
	import '$lib/assets/css/navbar-section.css';

	let open = $state(false);
	const links = ['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'];
</script>

<header class="site-header">
	<div class="site-header-inner">
		<a href="/" aria-label="CometChat home">
			<img src="/images/logo-cometchat.svg" alt="CometChat logo" width="129" height="20" />
		</a>
		<nav class="primary-navigation" aria-label="Primary">
			{#each links as link (link)}
				<NavLink label={link} />
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
		{#each links as link (link)}
			<NavLink label={link} />
		{/each}
		<div class="mobile-drawer-actions">
			<NavLink label="Log in" />
			<Button variant="primary" size="sm" label="Schedule a demo" />
		</div>
	</nav>
</header>
