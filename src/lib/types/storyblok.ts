
export interface SbImage {
	filename: string;
	alt: string;
}

export interface SbLink {
	url: string;
	cached_url: string;
}


export interface NavLinkItem {
	label: string;
	url: string;
}

export interface NavbarBlok {
	component: 'navbar';
	logo: SbImage;
	links: NavLinkItem[];
}

export interface HeroBlok {
	component: 'hero';
	eyebrow: string;
	heading: string;
	heading_highlight: string;
	descriptions: string[];
	image: SbImage;
}

export interface ClientLogosBlok {
	component: 'client_logos';
	logos: SbImage[];
	cta_text: string;
}

export interface BannerBlok {
	component: 'banner';
	label: string;
	heading: string;
	subtitle: string;
	features: string[];
	footer: string;
	image: SbImage;
}

export interface PlugLogicCardBlok {
	component: 'plug_logic_card';
	icon: SbImage;
	title: string;
	features: string[];
	cta_text: string;
}

export interface PlugLogicBlok {
	component: 'plug_logic';
	heading: string;
	subtitle: string;
	image: SbImage;
	cards: PlugLogicCardBlok[];
}

export interface ChatIntegrationCardBlok {
	component: 'chat_integration_card';
	icon: SbImage;
	title: string;
	features: string[];
	cta_text: string;
}

export interface ChatIntegrationBlok {
	component: 'chat_integration';
	label: string;
	heading: string;
	subtitle: string;
	cards: ChatIntegrationCardBlok[];
}

export interface AgentBuilderBlok {
	component: 'agent_builder';
	heading: string;
	description: string;
	icon: SbImage;
	primary_cta: { label: string; url: string };
	secondary_cta: { label: string; url: string };
}

export interface FooterLinkItem {
	label: string;
	url: string;
}

export interface FooterColumnBlok {
	component: 'footer_column';
	title: string;
	subtitle: string;
	links: FooterLinkItem[];
}

export interface SocialLinkItem {
	label: string;
	url: string;
}

export interface FooterBlok {
	component: 'footer';
	columns: FooterColumnBlok[];
	social_links: SocialLinkItem[];
}

// --- Page content type ---

export interface MarketingPageContent {
	component: 'marketing_page';
	navbar: NavbarBlok;
	hero: HeroBlok;
	client_logos: ClientLogosBlok;
	banners: BannerBlok[];
	plug_logic: PlugLogicBlok;
	chat_integration: ChatIntegrationBlok;
	agent_builder: AgentBuilderBlok;
	footer: FooterBlok;
	seo: SeoBlok;
}

export interface SeoBlok {
	component: 'seo';
	title: string;
	description: string;
	og_title: string;
	og_description: string;
	og_image: string;
	canonical_url: string;
}



export interface SbStory<T = MarketingPageContent> {
	name: string;
	slug: string;
	full_slug: string;
	content: T;
	published_at: string;
}
