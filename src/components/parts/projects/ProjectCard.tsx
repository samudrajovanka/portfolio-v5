'use client';

import { Eye, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CometCard } from '@/components/ui/comet-card';
import Container from '@/components/ui/container';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import Tag from '@/components/ui/tag';
import { Text } from '@/components/ui/text';
import type { ProjectCardProps } from './types';

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	const isEven = index % 2 === 0;

	return (
		<section className="h-dvh w-full snap-start shrink-0 flex items-center justify-center relative overflow-hidden text-black dark:text-white transition-colors duration-500">
			<Container className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
				<div className="flex-1 space-y-2 md:space-y-8 text-center md:text-left">
					<RevealWrapper delay={0.2}>
						<div className="relative inline-block">
							<Text
								className="absolute -left-8 -top-8 md:-top-16 text-6xl md:text-8xl font-bold opacity-10 dark:opacity-5 blur-[2px] md:blur-xs pointer-events-none select-none text-slate-500"
								resetTypography
								aria-hidden="true"
							>
								{(index + 1).toString().padStart(2, '0')}
							</Text>
							<Text
								as="h2"
								typography="heading"
								className="tracking-tight relative z-10"
							>
								{project.title}
							</Text>
						</div>
					</RevealWrapper>

					<div className="min-h-20">
						<RevealWrapper delay={0.4}>
							<Text
								typography="subheading"
								color="subtitle"
								className="mx-auto md:mx-0 font-normal"
							>
								{project.description}
							</Text>
						</RevealWrapper>
					</div>

					<RevealWrapper
						delay={0.6}
						className="flex flex-wrap gap-2 justify-center md:justify-start mt-8 md:mt-0 whitespace-nowrap items-center"
					>
						{project.stacks.map((stack) => (
							<Tag key={stack}>{stack}</Tag>
						))}
					</RevealWrapper>

					<RevealWrapper
						delay={0.8}
						className="flex flex-wrap items-center gap-4 justify-center md:justify-start mt-8 md:mt-0"
					>
						{project.link && (
							<Link href={project.link} isExternal>
								<Button size="lg">
									<Globe className="size-4" />
									Visit Site
								</Button>
							</Link>
						)}
						{project.github && (
							<Link href={project.github} isExternal>
								<Button size="lg" variant="outline">
									<Github className="size-4" />
									Source Code
								</Button>
							</Link>
						)}

						<Dialog>
							<DialogTrigger asChild>
								<Button size="lg" variant="secondary" className="md:hidden">
									<Eye className="size-4" />
									Preview
								</Button>
							</DialogTrigger>
							<DialogContent
								showCloseButton={false}
								className="p-0 border-none shadow-none bg-transparent"
							>
								<DialogTitle className="sr-only">{project.title}</DialogTitle>

								<div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-900 z-1">
									<Image
										src={project.image}
										alt={project.title}
										width={1600}
										height={900}
										className="object-cover w-full h-full"
									/>
								</div>
							</DialogContent>
						</Dialog>
					</RevealWrapper>
				</div>

				<RevealWrapper
					delay={0.4}
					xOffset={isEven ? 50 : -50}
					className="flex-1 w-full max-w-lg md:max-w-xl aspect-video relative group hidden md:flex"
				>
					<CometCard className="w-full h-full">
						<div className="w-full h-full rounded-3xl bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden relative">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
							/>
						</div>
					</CometCard>
				</RevealWrapper>
			</Container>
		</section>
	);
};

export default ProjectCard;
