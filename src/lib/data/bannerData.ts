export interface BannerData {
	label: string;
	heading: string;
	subtitle: string;
	features: string[];
	footer: string;
	image: { src: string; alt: string };
}

export const bannerItems: BannerData[] = [
	
	{
		label: '',
		heading: 'Everything your agent needs to go from prototype to product - fixed.',
		subtitle: 'Modular when you want control. All-in-one when you just need to launch.',
		features: [
			
		],
		footer:"",
		image: { src: '/images/everything-need-img.svg', alt: 'everything-need-img' }
	},
	{
		label: '',
		heading: 'Everything you’d end up already done.',
		subtitle: 'Data you can act on, not just stare at.',
		features: [
			'A complete frontend and system layer for AI agents. Plug in your LLM backend or build the brain with ours.',
			'CometChat is the only full stack agent platform that combines logic, UI, moderation, notifications, and insights - without glue code.',
			'Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.'
		],
		footer:
			"You can't improve what you can't measure. We give you both.",
		image: { src: '/images/everything-already-done.svg', alt: 'everything-already-done' }
	},
	{
		label: 'Production-ready chat UI',
		heading: 'The UX layer your agent deserves. Built for LLM-native interactions, out of the box.',
		subtitle: 'Forget cobbling together buttons and hoping users ‘get it’. Our chat layer is purpose-built for how agents think - and how humans expect them to respond.',
		features: [
			'Token streaming with dynamic “thinking…” states',
			'Retry/stop buttons with full control logic',
			'Memory pills, prompt banners, and agent selectors',
			'Structured tool replies with inline citations',
			'Slash commands, modals, and frontend triggers',
			'Low/No-code Chat Builder, or more control via UI Kits and SDKs',
			'Fully AG-UI protocol compatible - including tool call rendering, memory markers, and fallback patterns'
		],
		footer:
			"It’s not just a pretty shell. It’s UX that teaches trust, guides behavior, and makes your agent feel alive..",
		image: { src: '/images/Production-ready-chat-UI.svg', alt: 'Production-ready chat-UI' }
	},
	{
		label: 'Multichannel notifications engine',
		heading: 'Your agent is only helpful if people come back to talk to it.',
		subtitle: "Most agents get ghosted. Yours won't.",
		features: [
			'Native push, email, and SMS support',
			'Retry logic, delivery throttling, and batching',
			'Trigger-based delivery rules - unread X mins, fallback triggered, user went silent',
			'Threaded email replies (yes, replies go back to chat!)',
			'Integrates with SendGrid, Twilio, or your custom providers',
			'User-level frequency + preference settings'
		],
		footer:
			"Notifications aren't a growth hack. They're UX glue. And we built them so you wouldn't have to.",
		image: { src: '/images/banner-notification-image.png', alt: 'Multichannel notifications interface' }
	},
	{
		label: 'Insights dashboard',
		heading: 'Ship the agent. Then make it better. Without needing Mixpanel, Segment, or BI setups.',
		subtitle: "From day one, you get built-in visibility into what your agent is doing - and how people are responding.",
		features: [
			'Resolution rates, fallback frequency, retry counts, latency',
			'Tool usage breakdowns, prompt paths, knowledge base hits',
			'Conversation-level analytics: drop-off points, re-engagement, success outcomes',
			'Sentiment markers and feedback loops',
			'Exportable, filterable, and privacy-respectful',
		],
		footer:
			"You can’t improve what you can’t see. With us, you never ship blind.",
		image: { src: '/images/Insights-dashboard.svg', alt: 'Insights-dashboard' }
	},
];
