import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import AboutPage from '@/components/pages/about';
import app from '@/config/app';
import { getLearns } from '@/endpoints/learns';
import { getResume } from '@/endpoints/resumes';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getLearnsQueryKey } from '@/query/learns';
import { getResumeQueryKey } from '@/query/resumes';

export const metadata = generateMetadata(
	{ title: 'About Me' },
	{ withSuffix: true },
);

export const revalidate = app.revalidate;

export default async function Page() {
	const queryClient = getQueryClient();

	await Promise.all([
		queryClient.prefetchQuery({
			queryKey: getResumeQueryKey(),
			queryFn: getResume,
		}),
		queryClient.prefetchQuery({
			queryKey: getLearnsQueryKey(),
			queryFn: getLearns,
		}),
	]);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<AboutPage />
		</HydrationBoundary>
	);
}
