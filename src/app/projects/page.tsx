import ProjectsPage from '@/components/pages/projects';
import { projects } from '@/components/pages/projects/data';
import JsonLd from '@/components/parts/schema/JsonLd';
import app from '@/config/app';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata(
	{
		title: 'My Projects',
		description:
			'Explore a collection of my latest projects, featuring web applications, design systems, and creative experiments.',
		keywords: [
			'projects',
			'portfolio',
			'web development',
			'react',
			'next.js',
			'typescript',
			'creative coding',
		],
	},
	{ withSuffix: true },
);

export default function Page() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'My Projects',
		description:
			'Explore a collection of my latest projects, featuring web applications, design systems, and creative experiments.',
		url: `${app.url}/projects`,
		hasPart: projects.map((project) => ({
			'@type': 'CreativeWork',
			name: project.title,
			description: project.description,
			url: `${app.url}/projects`,
			image: project.image,
		})),
	};

	return (
		<>
			<JsonLd data={jsonLd} />
			<ProjectsPage />
		</>
	);
}
