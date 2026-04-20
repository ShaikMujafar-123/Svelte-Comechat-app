<script lang="ts">
	import { resolve } from '$app/paths';

	type ButtonProps = {
		variant?: 'primary' | 'ghost';
		size?: 'sm' | 'md';
		href?: string;
		label?: string;
	};

	let { variant = 'primary', size = 'md', href = '#', label = '' }: ButtonProps = $props();
</script>

<a class={`button ${variant} ${size}`} href={resolve(href)}>{label}</a>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: var(--radius-md);
		font-weight: 600;
		line-height: 1.4000000272478377;
		letter-spacing: 0.02em;
		border: 1px solid transparent;
	}
	.sm {
		padding: 8px 12px;
		border-radius: var(--radius-sm);
	}
	.md {
		padding: 12px 9px;
		border-radius: var(--radius-md);
	}
	.primary {
		background: var(--color-primary);
		color: var(--color-text);
	}
	.ghost {
		background: rgba(250, 250, 255, 0.02);
		border-color: rgba(250, 250, 255, 0.1);
		color: var(--color-text);
	}
</style>
