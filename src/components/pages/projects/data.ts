import type { Project } from '@/components/parts/projects/types';

export const gradients = [
	'#3b82f6', // blue
	'#ec4899', // pink
	'#22c55e', // green
	'#f59e0b', // amber
	'#8b5cf6', // violet
	'#06b6d4', // cyan
	'#f43f5e', // rose
];

export const projects: Project[] = [
	{
		title: 'Project Alpha',
		description:
			'A revolutionary platform that transforms how users interact with digital content. Built with performance and scalability in mind.',
		stacks: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
		link: 'https://example.com',
		github: 'https://github.com/example/project-alpha',
		image: '/images/hekaru-project.webp',
	},
	{
		title: 'Neon Horizon',
		description:
			'An immersive visual experience exploring the aesthetics of cyberpunk culture through code and design.',
		stacks: ['React', 'Three.js', 'WebGL', 'GSAP'],
		link: 'https://example.com',
		image: '/images/ksm-android-landing-page.webp',
	},
];
