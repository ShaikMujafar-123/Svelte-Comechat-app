<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
</script>

<div class="cta">
	<Button variant="ghost" label="Schedule a Demo" />
	<Button variant="primary" label="Try the Agent Builder" />
</div>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
</style>
