import type { Metadata } from 'next';

import app from '@/config/app';

import type { GenerateMetadataOptions } from './types';

const generateMetadata = (
	metadata?: Partial<Metadata>,
	options?: GenerateMetadataOptions,
): Metadata => {
	let title = metadata?.title ?? app.name;
	const description = metadata?.description ?? app.description;

	if (options?.withSuffix) {
		title += ` | ${app.name}`;
	}

	const metadataResult: Metadata = {
		...metadata,
		title,
		description,
		keywords: metadata?.keywords ?? app.keywords,
		applicationName: app.name,
		authors: [{ name: 'Jovanka Samudra', url: app.url }],
		creator: 'Jovanka Samudra',
		publisher: 'Jovanka Samudra',
		metadataBase: metadata?.metadataBase ?? new URL(app.url),
		openGraph: {
			title,
			description,
			type: 'website',
			siteName: app.name,
			url: app.url,
			locale: 'en_US',
			images: [
				{
					url: `${app.url}/images/logo.webp`,
					width: 1200,
					height: 630,
					alt: title as string,
				},
			],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [`${app.url}/images/logo.webp`],
		},
	};

	return metadataResult;
};

export default generateMetadata;
