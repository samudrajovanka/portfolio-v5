import app from '@/config/app';

interface JsonLdProps {
	data?: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
	const jsonLd = data ?? {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: app.name,
		url: app.url,
		description: app.description,
		author: {
			'@type': 'Person',
			name: 'Jovanka Samudra',
			url: app.url,
		},
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: This is trusted data for SEO
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
