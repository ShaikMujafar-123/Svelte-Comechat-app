<script lang="ts">
	import { resolve } from '$app/paths';

	type NavLinkProps = {
		label?: string;
		href?: string;
	};

	let { label = '', href = '#' }: NavLinkProps = $props();
</script>

<a class="nav-link" href={resolve(href)}>{label}</a>

<style>
	.nav-link {
		font-size: var(--font-sm);
		font-weight: 600;
		line-height: 1.4000000272478377;
		letter-spacing: 0.02em;
		color: rgba(250, 250, 255, 0.84);
	}
</style>
