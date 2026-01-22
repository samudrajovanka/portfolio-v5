import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import AboutPage from '@/components/pages/about';
import app from '@/config/app';
import { getResume } from '@/endpoints/resumes';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getResumeQueryKey } from '@/query/resumes';

export const metadata = generateMetadata(
	{ title: 'About Me' },
	{ withSuffix: true },
);

export const revalidate = app.revalidate;

export default async function Page() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: getResumeQueryKey(),
		queryFn: getResume,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<AboutPage />
		</HydrationBoundary>
	);
}
