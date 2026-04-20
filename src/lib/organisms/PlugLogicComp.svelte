<script lang="ts">
	import { resolve } from '$app/paths';
	import '$lib/assets/css/plug-logic-section.css';
</script>

<section class="plug-logic-section container" aria-label="Plug in your logic section">
	<div class="plug-logic-section-title-block">
		<img src="/images/plug-logic-center-tree.svg" alt="" width="200" height="80" loading="lazy" />
		<h2>Plug In your logic.<br />Or build it here.</h2>
		<p>Two paths. Same full-stack experience.</p>
	</div>

	<div class="plug-logic-section-card-grid">
		<article class="plug-logic-section-card">
			<div class="plug-logic-section-card-content">
				<img
					class="plug-logic-section-card-icon"
					src="/images/plug-logic-card-icon-1.svg"
					alt=""
					width="64"
					height="64"
					loading="lazy"
				/>
				<h3>BYOB - Bring Your Own (Agent) Brain</h3>
				<ul>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Use your existing LLM orchestration</span>
					</li>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Plug into CometChat's UI, mod, notifications, and insights</span>
					</li>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Modular, protocol-compatible, and fast to implement</span>
					</li>
				</ul>
				<a href={resolve('/')}>Learn more</a>
			</div>
			<img class="plug-logic-section-tree-illustration" src="/images/Ai-BYOB.svg" alt="" width="600" height="300" loading="lazy" />
		</article>

		<article class="plug-logic-section-card">
			<div class="plug-logic-section-card-content">
				<img
					class="plug-logic-section-card-icon"
					src="/images/plug-logic-card-icon-2.svg"
					alt=""
					width="64"
					height="64"
					loading="lazy"
				/>
				<h3>Build Inside CometChat</h3>
				<ul>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Visual Agent Builder</span>
					</li>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Design prompt logic, memory, retries, tool use</span>
					</li>
					<li>
						<img src="/images/plug-logic-bullet-icon.svg" alt="" width="16" height="16" loading="lazy" />
						<span>Simulate and ship - all from a single canvas</span>
					</li>
				</ul>
				<a href={resolve('/')}>Learn more</a>
			</div>
			<img class="plug-logic-section-tree-illustration" src="/images/Ai-BYOB.svg" alt="" width="600" height="300" loading="lazy" />
		</article>
	</div>
</section>
