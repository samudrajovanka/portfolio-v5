'use client';

import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';
import CommingSoonProject from '@/components/parts/projects/CommingSoonProject';
import ProjectCard from '@/components/parts/projects/ProjectCard';
import QueryHandling from '@/components/parts/query/QueryHandling';
import { useGetProjectsQuery } from '@/query/projects';
import { gradients } from './data';

const ProjectsPage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const projectsQuery = useGetProjectsQuery();
	const { data: projects = [] } = projectsQuery;

	const { scrollYProgress } = useScroll({
		container: containerRef,
	});

	const totalProjectsWithCommingSoon = projects.length + 1;
	const inputs = Array.from({ length: totalProjectsWithCommingSoon }).map(
		(_, i) => i / (totalProjectsWithCommingSoon - 1 || 1),
	);

	const xPositionGradient = useTransform(
		scrollYProgress,
		inputs,
		inputs.map((_, i) => (i % 2 === 0 ? '10%' : '90%')),
	);

	const colorGradient = useTransform(
		scrollYProgress,
		inputs,
		inputs.map((_, i) => gradients[i % gradients.length]),
	);

	const background = useMotionTemplate`radial-gradient(circle at ${xPositionGradient} 50%, ${colorGradient}, transparent 60%)`;

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const container = containerRef.current;
			if (!container) return;

			if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
				e.preventDefault();
				const direction = e.key === 'ArrowDown' ? 1 : -1;
				container.scrollBy({
					top: direction * container.clientHeight,
					behavior: 'smooth',
				});
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div
			ref={containerRef}
			className="h-dvh w-dvw overflow-y-scroll snap-y snap-mandatory scroll-smooth relative"
		>
			<h1 className="sr-only">Projects</h1>
			<motion.div
				className="fixed inset-0 opacity-20 dark:opacity-30 pointer-events-none transition-all duration-500"
				style={{ background }}
			/>

			<QueryHandling
				queryResult={projectsQuery}
				render={(data) => (
					<>
						{data.map((project, index) => (
							<ProjectCard key={project.name} project={project} index={index} />
						))}
					</>
				)}
			/>

			<CommingSoonProject />
		</div>
	);
};

export default ProjectsPage;
