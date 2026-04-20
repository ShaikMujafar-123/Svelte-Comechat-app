<script lang="ts">
	import { resolve } from "$app/paths";
	import "$lib/assets/css/footer-section.css";

	const columns = [
		{
			title: "Platform",
			subtitle: "Features",
			links: [
				"Chat & Messaging",
				"Voice & Video Calls",
				"Notifications",
				"Analytics & Insights",
				"Multi-Tenant Chat",
				"UI Kits",
				"SDKs & APIs",
			],
		},
		{
			title: "Solutions",
			subtitle: "By use case",
			links: [
				"On-demand",
				"Online Marketplaces",
				"SaaS Businesses",
				"Healthcare & Telehealth",
				"Community & Social",
				"Dating",
				"CometChat vs Sendbird",
				"Compare Top Chat SDKs",
			],
		},
		{
			title: "Developers",
			subtitle: "Documentation",
			links: [
				"Docs",
				"Sample Apps",
				"APIs",
				"Product Updates",
				"Feature Requests",
				"System Status",
				"Community",
				"Help Center",
			],
		},
		{
			title: "Company",
			subtitle: "Terms and Legal",
			links: [
				"Careers",
				"Partners",
				"Pricing",
				"Implementation Services",
				"Chat with us",
				"Terms of Service",
				"Privacy Policy",
				"Data Processing Addendum",
			],
		},
	];

	const social = ["Facebook", "LinkedIn", "Instagram", "Twitter", "GitHub"];

	let openSections = $state(new Set<string>());

	function toggleSection(title: string) {
		const next = new Set(openSections);
		if (next.has(title)) {
			next.delete(title);
		} else {
			next.add(title);
		}
		openSections = next;
	}
</script>

<footer class="footer">
	<div class="container footer__content">
		<div class="footer__header">
			<h3>comet<strong>chat</strong></h3>
		</div>

		<div class="footer__grid">
			{#each columns as col (col.title)}
				<section class="footer__column">
					<button
						type="button"
						class="footer__accordion-trigger"
						onclick={() => toggleSection(col.title)}
						aria-expanded={openSections.has(col.title)}
						aria-controls={`footer-links-${col.title}`}
					>
						<span class="footer__column-title">{col.title}</span>
						<span class="footer__plus">{openSections.has(col.title) ? "−" : "+"}</span>
					</button>
					<p class="footer__column-subtitle {openSections.has(col.title) ? 'is-open' : ''}">
						{col.subtitle}
					</p>
					<div
						class="footer__links {openSections.has(col.title) ? 'is-open' : ''}"
						id={`footer-links-${col.title}`}
					>
						{#each col.links as link (link)}
							<a href={resolve("/")}>{link}</a>
						{/each}
					</div>
				</section>
			{/each}
		</div>

		<div class="cometchat-logo-title">
			<img
				class="footer__logo"
				src="/images/cometchat-words-transparent.svg"
				alt="CometChat"
				width="800"
				height="120"
				loading="lazy"
			/>
			<p class="footer__brand-text">cometchat</p>
		</div>

		<div class="footer__divider"></div>

		<div class="footer__labels">
			<div class="footer__labels-left">
				<p>2025 © CometChat</p>
				<a href={resolve("/")}>Terms of Use</a>
				<a href={resolve("/")}>Privacy Policy</a>
			</div>
			<div class="footer__labels-right">
				{#each social as item (item)}
					<a href={resolve("/")}>{item}</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
