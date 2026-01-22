'use client';

import QueryHandling from '@/components/parts/query/QueryHandling';
import Container from '@/components/ui/container';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import { useGetLearnsQuery } from '@/query/learns';
import LearnsAnimation from './LearnsAnimation';

const Learns = () => {
	const learnsQuery = useGetLearnsQuery();

	return (
		<Container
			as="section"
			className="relative max-w-100 md:max-w-200 xl:max-w-200 py-4 md:py-16"
		>
			<div className="absolute top-0 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 size-50 md:size-80 bg-blue-500/30 dark:bg-blue-500/25 blur-[80px] rounded-full -z-10 pointer-events-none" />
			<div className="absolute bottom-0 md:left-1/2 md:-translate-x-1/2 size-50 md:size-80 bg-pink-500/30 dark:bg-pink-500/25 blur-[80px] rounded-full -z-10 pointer-events-none" />

			<div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
				<RevealWrapper className="md:bg-slate-200 md:dark:bg-slate-800 md:p-10 md:rounded-base flex-1 grid place-content-center md:w-100 md:-rotate-2 md:translate-y-3 md:translate-x-2 md:shadow-2xl">
					<Text
						as="h1"
						typography="subheading"
						className="text-center relative z-10"
					>
						Focused on continuous learning by exploring and applying modern
						tools in real projects.
					</Text>
				</RevealWrapper>

				<QueryHandling
					queryResult={learnsQuery}
					render={(learns) => (
						<RevealWrapper
							delay={0.3}
							className="md:bg-slate-100 md:dark:bg-slate-700 md:p-10 md:rounded-base md:w-100 md:rotate-3 md:shadow-2xl md:-translate-x-2 flex-1"
						>
							<LearnsAnimation learns={learns} />
						</RevealWrapper>
					)}
				/>
			</div>
		</Container>
	);
};

export default Learns;
