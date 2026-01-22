import type { MetadataRoute } from 'next';

import app from '@/config/app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: app.url,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${app.url}/projects`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${app.url}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];
}
