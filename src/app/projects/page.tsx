import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import ProjectsPage from '@/components/pages/projects';
import JsonLd from '@/components/parts/schema/JsonLd';
import app from '@/config/app';
import { getProjects } from '@/endpoints/projects';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getProjectsQueryKey } from '@/query/projects';

export const metadata = generateMetadata(
	{
		title: 'My Projects',
		description:
			'Explore a collection of my latest projects, featuring web applications, design systems, and creative experiments.',
		keywords: ['projects', 'portfolio', 'web development', 'creative coding'],
		alternates: {
			canonical: `${app.url}/projects`,
		},
	},
	{ withSuffix: true },
);

export const revalidate = 84_400; // 1 day

export default async function Page() {
	const queryClient = getQueryClient();
	const projectsData = await getProjects();

	await queryClient.prefetchQuery({
		queryKey: getProjectsQueryKey(),
		queryFn: () => projectsData,
	});

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'My Projects',
		description:
			'Explore a collection of my latest projects, featuring web applications, design systems, and creative experiments.',
		url: `${app.url}/projects`,
		hasPart: projectsData.map((project) => ({
			'@type': 'CreativeWork',
			name: project.name,
			description: project.description,
			url: `${app.url}/projects`,
			image: project.imageUrl,
		})),
	};

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<JsonLd data={jsonLd} />
			<ProjectsPage />
		</HydrationBoundary>
	);
}
