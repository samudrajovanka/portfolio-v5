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
import type { CompanyExperience } from '@/types/experiences';
import WorkExperienceCard from './WorkExperienceCard';

const experiences: CompanyExperience[] = [
	{
		companyName: 'TechCorp Inc.',
		totalDuration: '2 yrs 5 mos',
		roles: [
			{
				title: 'Senior Full Stack Developer',
				startDate: 'Jan 2023',
				endDate: 'Present',
				totalDuration: '1 yr 5 mos',
				type: 'Full-time',
				description:
					'Leading the development of the core enterprise platform. Architecting scalable solutions using microservices.',
				techStack: ['React', 'Next.js', 'Node.js', 'GraphQL', 'AWS'],
			},
			{
				title: 'Full Stack Developer',
				startDate: 'Jan 2022',
				endDate: 'Dec 2022',
				totalDuration: '1 yr',
				type: 'Full-time',
				description:
					'Developed key features for the customer dashboard and improved application performance by 40%.',
				techStack: ['React', 'Express', 'PostgreSQL', 'Redis'],
			},
		],
	},
	{
		companyName: 'Creative Studios',
		totalDuration: '1 yr 7 mos',
		roles: [
			{
				title: 'Frontend Engineer',
				startDate: 'Jun 2020',
				endDate: 'Dec 2021',
				totalDuration: '1 yr 7 mos',
				type: 'Contract',
				description:
					'Implemented pixel-perfect designs and complex animations for award-winning marketing sites.',
				techStack: ['React', 'Gatsby', 'Framer Motion', 'Tailwind CSS'],
			},
		],
	},
	{
		companyName: 'StartUp Ltd.',
		totalDuration: '1 yr 5 mos',
		roles: [
			{
				title: 'Junior Web Developer',
				startDate: 'Jan 2019',
				endDate: 'May 2020',
				totalDuration: '1 yr 5 mos',
				type: 'Full-time',
				description:
					'Assisted in building client websites and maintaining legacy codebases.',
				techStack: ['HTML', 'SCSS', 'JavaScript', 'jQuery', 'PHP'],
			},
		],
	},
];

const WorkExperience = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

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
				</div>
			</Carousel>
		</Container>
	);
};

export default WorkExperience;
