'use client';

import { useEffect, useMemo, useState } from 'react';
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Container from '@/components/ui/container';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useGetExperiencesQuery } from '@/query/experiences';
import QueryHandling from '../query/QueryHandling';
import WorkExperienceCard from './WorkExperienceCard';

const WorkExperience = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const experiencesQuery = useGetExperiencesQuery();

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const maskClass = useMemo(() => {
		if (!api) return '';

		if (current === count)
			return 'md:mask-[linear-gradient(to_right,transparent_0%,black_10%,black_100%)]';

		return 'md:mask-[linear-gradient(to_right,black_83%,transparent_100%)]';
	}, [api, current, count]);

	return (
		<Container as="section">
			<QueryHandling
				queryResult={experiencesQuery}
				render={(experiences) => (
					<Carousel
						setApi={setApi}
						opts={{
							align: 'start',
							loop: false,
						}}
					>
						<RevealWrapper className="flex gap-6 justify-between items-center mb-6">
							<Text as="h1" typography="heading" color="highlight">
								Where I&apos;ve Worked
							</Text>

							<div className="hidden md:flex gap-3">
								<CarouselPrevious
									variant="secondary"
									className="static translate-y-0"
								/>
								<CarouselNext
									variant="secondary"
									className="static translate-y-0"
								/>
							</div>
						</RevealWrapper>

						<div className={cn('transition-all duration-500', maskClass)}>
							<RevealWrapper>
								<CarouselContent className="-ml-2 md:-ml-4">
									{experiences.map((experience, index) => (
										<CarouselItem
											// biome-ignore lint/suspicious/noArrayIndexKey: use index as key
											key={index}
											className="pl-2 md:pl-4 basis-[93%] md:basis-[85%] lg:basis-[90%]"
										>
											<div className="p-1">
												<WorkExperienceCard experience={experience} />
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</RevealWrapper>
						</div>
					</Carousel>
				)}
			/>
		</Container>
	);
};

export default WorkExperience;
