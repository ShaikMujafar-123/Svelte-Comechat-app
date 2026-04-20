<script lang="ts">
	import CtaGroup from "$lib/molecules/CtaGroup.svelte";
	import "$lib/assets/css/hero-section.css";
</script>

<section class="hero container" aria-label="Hero">
	<div class="hero-section-main-layout">
		<div class="hero-section-content-block">
			<div class="hero-section-eyebrow-container">
				<img
					class="web-purple-background-spark"
					src="/images/purple-background-spark.png"
					width="40"
					height="40"
					alt=""
					loading="lazy"
				/>
				<p class="hero-section-eyebrow-label">Full Stack AI Agent Platform</p>
			</div>
			<h1>
				Ship the <span>agent.</span><br />Skip the
				<span>plumbing.</span>
			</h1>
			<p class="hero-section-description-text">
				Why are you still stitching together chat UIs, retries,
				moderation, notifications, and analytics - just to get your
				agent into users' hands?
			</p>
			<p class="hero-section-description-text">
				CometChat gives you the entire frontend + infra layer. Full
				stack. Modular. Production-ready.
			</p>
			<CtaGroup />
		</div>
		<div class="hero-section-illustration-wrapper">
			<img
				class="hero-section-background-image"
				src="/images/hero-banner-full.svg"
				alt="CometChat AI agent platform interface preview"
				width="576"
				height="576"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>
