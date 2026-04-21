import type { SbStory, MarketingPageContent } from '$lib/types/storyblok';

// This file contains all page content structured as a Storyblok story.
// When connecting to real Storyblok, this file becomes unnecessary —
// the same shape comes from the Storyblok Content Delivery API.

export const marketingPageStory: SbStory<MarketingPageContent> = {
	name: 'Home',
	slug: 'home',
	full_slug: '',
	published_at: new Date().toISOString(),
	content: {
		component: 'marketing_page',

		seo: {
			component: 'seo',
			title: 'CometChat – Full Stack AI Agent Platform | Chat SDK, UI Kits & APIs',
			description:
				"Ship production-ready AI agents with CometChat's full-stack platform. Chat UI, notifications, analytics, moderation — all built in. SDKs, UI Kits & APIs for every framework.",
			og_title: 'CometChat – Full Stack AI Agent Platform',
			og_description:
				"Ship production-ready AI agents with CometChat's full-stack platform. Chat UI, notifications, analytics, moderation — all built in.",
			og_image: 'https://www.cometchat.com/images/og-cover.png',
			canonical_url: 'https://www.cometchat.com'
		},

		navbar: {
			component: 'navbar',
			logo: { filename: '/images/logo-cometchat.svg', alt: 'CometChat logo' },
			links: [
				{ label: 'Platform', url: '/' },
				{ label: 'Solutions', url: '/' },
				{ label: 'Developers', url: '/' },
				{ label: 'Resources', url: '/' },
				{ label: 'Pricing', url: '/' }
			]
		},

		hero: {
			component: 'hero',
			eyebrow: 'Full Stack AI Agent Platform',
			heading: 'Ship the ',
			heading_highlight: 'agent.',
			descriptions: [
				"Why are you still stitching together chat UIs, retries, moderation, notifications, and analytics - just to get your agent into users' hands?",
				'CometChat gives you the entire frontend + infra layer. Full stack. Modular. Production-ready.'
			],
			image: {
				filename: '/images/hero-banner-full.svg',
				alt: 'CometChat AI agent platform interface preview'
			}
		},

		client_logos: {
			component: 'client_logos',
			logos: [
				{ filename: '/images/haleon-seeklogo.com.svg', alt: 'Haleon' },
				{ filename: '/images/kahoot-seeklogo.com.svg', alt: 'Kahoot' },
				{ filename: '/images/shaadi-seeklogo.com.svg', alt: 'Shaadi' },
				{ filename: '/images/endeavor.svg', alt: 'Endeavor' },
				{ filename: '/images/nb_logo_new_trans.svg', alt: 'NB' }
			],
			cta_text: 'Check our amazing customer stories'
		},

		banners: [
			{
				component: 'banner',
				label: '',
				heading: 'Everything your agent needs to go from prototype to product - fixed.',
				subtitle: 'Modular when you want control. All-in-one when you just need to launch.',
				features: [],
				footer: '',
				image: { filename: '/images/everything-need-img.svg', alt: 'everything-need-img' }
			},
			{
				component: 'banner',
				label: '',
				heading: "Everything you\u2019d end up already done.",
				subtitle: 'Data you can act on, not just stare at.',
				features: [
					'A complete frontend and system layer for AI agents. Plug in your LLM backend or build the brain with ours.',
					'CometChat is the only full stack agent platform that combines logic, UI, moderation, notifications, and insights - without glue code.',
					'Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.'
				],
				footer: "You can't improve what you can't measure. We give you both.",
				image: {
					filename: '/images/everything-already-done.svg',
					alt: 'everything-already-done'
				}
			},
			{
				component: 'banner',
				label: 'Production-ready chat UI',
				heading:
					'The UX layer your agent deserves. Built for LLM-native interactions, out of the box.',
				subtitle:
					"Forget cobbling together buttons and hoping users \u2018get it\u2019. Our chat layer is purpose-built for how agents think - and how humans expect them to respond.",
				features: [
					'Token streaming with dynamic \u201Cthinking\u2026\u201D states',
					'Retry/stop buttons with full control logic',
					'Memory pills, prompt banners, and agent selectors',
					'Structured tool replies with inline citations',
					'Slash commands, modals, and frontend triggers',
					'Low/No-code Chat Builder, or more control via UI Kits and SDKs',
					'Fully AG-UI protocol compatible - including tool call rendering, memory markers, and fallback patterns'
				],
				footer:
					"It's not just a pretty shell. It's UX that teaches trust, guides behavior, and makes your agent feel alive..",
				image: {
					filename: '/images/Production-ready-chat-UI.svg',
					alt: 'Production-ready chat-UI'
				}
			},
			{
				component: 'banner',
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
				image: {
					filename: '/images/banner-notification-image.webp',
					alt: 'Multichannel notifications interface'
				}
			},
			{
				component: 'banner',
				label: 'Insights dashboard',
				heading:
					'Ship the agent. Then make it better. Without needing Mixpanel, Segment, or BI setups.',
				subtitle:
					'From day one, you get built-in visibility into what your agent is doing - and how people are responding.',
				features: [
					'Resolution rates, fallback frequency, retry counts, latency',
					'Tool usage breakdowns, prompt paths, knowledge base hits',
					'Conversation-level analytics: drop-off points, re-engagement, success outcomes',
					'Sentiment markers and feedback loops',
					'Exportable, filterable, and privacy-respectful'
				],
				footer: "You can't improve what you can't see. With us, you never ship blind.",
				image: { filename: '/images/Insights-dashboard.svg', alt: 'Insights-dashboard' }
			}
		],

		plug_logic: {
			component: 'plug_logic',
			heading: 'Plug In your logic.<br />Or build it here.',
			subtitle: 'Two paths. Same full-stack experience.',
			image: { filename: '/images/plug-logic-center-tree.svg', alt: '' },
			cards: [
				{
					component: 'plug_logic_card',
					icon: { filename: '/images/plug-logic-card-icon-1.svg', alt: '' },
					title: 'BYOB - Bring Your Own (Agent) Brain',
					features: [
						'Use your existing LLM orchestration',
						"Plug into CometChat's UI, mod, notifications, and insights",
						'Modular, protocol-compatible, and fast to implement'
					],
					cta_text: 'Learn more'
				},
				{
					component: 'plug_logic_card',
					icon: { filename: '/images/plug-logic-card-icon-2.svg', alt: '' },
					title: 'Build Inside CometChat',
					features: [
						'Visual Agent Builder',
						'Design prompt logic, memory, retries, tool use',
						'Simulate and ship - all from a single canvas'
					],
					cta_text: 'Learn more'
				}
			]
		},

		chat_integration: {
			component: 'chat_integration',
			label: 'Chat integration options',
			heading: 'Your launch, your way. Done right.',
			subtitle:
				'Start with what gets you to production fastest - or matches your needs the best. Swap it out or level it up later.',
			cards: [
				{
					component: 'chat_integration_card',
					icon: { filename: '/images/chat-integration-icon-chat-builder.svg', alt: '' },
					title: 'Chat Builder',
					features: [
						'Visual interface for styling and configuring chat',
						'Drop into any web or mobile app with a single snippet',
						'Integrates with auth, analytics, and third-party tools',
						'Great for prototypes, pilots, or teams with limited frontend resources'
					],
					cta_text: 'Try Builder'
				},
				{
					component: 'chat_integration_card',
					icon: { filename: '/images/chat-integration-icon-ui-kits.svg', alt: '' },
					title: 'UI Kits',
					features: [
						'Available for all popular frameworks',
						'Theming, layout, and logic hooks exposed',
						'Save time on structure, focus on experience',
						'Ideal for teams who want speed and polish'
					],
					cta_text: 'Try Builder'
				},
				{
					component: 'chat_integration_card',
					icon: { filename: '/images/chat-integration-icon-sdks.svg', alt: '' },
					title: 'SDKs & APIs',
					features: [
						'Available for all popular frameworks',
						'Theming, layout, and logic hooks exposed',
						'Save time on structure, focus on experience',
						'Ideal for teams who want speed and polish'
					],
					cta_text: 'Try Builder'
				}
			]
		},

		agent_builder: {
			component: 'agent_builder',
			heading: "You don't need to build it<br />all to ship it all",
			description:
				"Start with chat. Or go full stack. Build fast, scale securely, and focus on what your agent does - not what it's missing.",
			icon: { filename: '/images/Cometchat-icon.svg', alt: 'CometChat' },
			primary_cta: { label: 'Try the Agent Builder', url: '/' },
			secondary_cta: { label: 'Talk to Us', url: '/' }
		},

		footer: {
			component: 'footer',
			columns: [
				{
					component: 'footer_column',
					title: 'Platform',
					subtitle: 'Features',
					links: [
						{ label: 'Chat & Messaging', url: '/platform/chat-messaging' },
						{ label: 'Voice & Video Calls', url: '/platform/voice-video' },
						{ label: 'Notifications', url: '/platform/notifications' },
						{ label: 'Analytics & Insights', url: '/platform/analytics' },
						{ label: 'Multi-Tenant Chat', url: '/platform/multi-tenant' },
						{ label: 'UI Kits', url: '/platform/ui-kits' },
						{ label: 'SDKs & APIs', url: '/platform/sdks-apis' }
					]
				},
				{
					component: 'footer_column',
					title: 'Solutions',
					subtitle: 'By use case',
					links: [
						{ label: 'On-demand', url: '/solutions/on-demand' },
						{ label: 'Online Marketplaces', url: '/solutions/marketplaces' },
						{ label: 'SaaS Businesses', url: '/solutions/saas' },
						{ label: 'Healthcare & Telehealth', url: '/solutions/healthcare' },
						{ label: 'Community & Social', url: '/solutions/community' },
						{ label: 'Dating', url: '/solutions/dating' },
						{ label: 'CometChat vs Sendbird', url: '/compare/sendbird' },
						{ label: 'Compare Top Chat SDKs', url: '/compare/chat-sdks' }
					]
				},
				{
					component: 'footer_column',
					title: 'Developers',
					subtitle: 'Documentation',
					links: [
						{ label: 'Docs', url: '/docs' },
						{ label: 'Sample Apps', url: '/developers/sample-apps' },
						{ label: 'APIs', url: '/developers/apis' },
						{ label: 'Product Updates', url: '/developers/updates' },
						{ label: 'Feature Requests', url: '/developers/feature-requests' },
						{ label: 'System Status', url: '/status' },
						{ label: 'Community', url: '/community' },
						{ label: 'Help Center', url: '/help' }
					]
				},
				{
					component: 'footer_column',
					title: 'Company',
					subtitle: 'Terms and Legal',
					links: [
						{ label: 'Careers', url: '/careers' },
						{ label: 'Partners', url: '/partners' },
						{ label: 'Pricing', url: '/pricing' },
						{ label: 'Implementation Services', url: '/services' },
						{ label: 'Chat with us', url: '/contact' },
						{ label: 'Terms of Service', url: '/legal/terms' },
						{ label: 'Privacy Policy', url: '/legal/privacy' },
						{ label: 'Data Processing Addendum', url: '/legal/dpa' }
					]
				}
			],
			social_links: [
				{ label: 'Facebook', url: 'https://www.facebook.com/CometChat' },
				{ label: 'LinkedIn', url: 'https://www.linkedin.com/company/cometchat' },
				{ label: 'Instagram', url: 'https://www.instagram.com/cometchat' },
				{ label: 'Twitter', url: 'https://twitter.com/CometChat' },
				{ label: 'GitHub', url: 'https://github.com/cometchat' }
			]
		}
	}
};
