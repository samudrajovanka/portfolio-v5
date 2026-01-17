import Container from '@/components/ui/container';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import LearnsAnimation from './LearnsAnimation';
import type { Learn } from './LearnsAnimation.types';

const learns: Learn[] = [
	{
		_id: '1',
		name: 'HTML',
		createdAt: '',
		updatedAt: '',
	},
	{
		_id: '2',
		name: 'CSS',
		createdAt: '',
		updatedAt: '',
	},
	{
		_id: '3',
		name: 'JS',
		createdAt: '',
		updatedAt: '',
	},
];

const Learns = () => {
	return (
		<Container
			as="section"
			className="relative max-w-100 md:max-w-200 xl:max-w-200 py-8 md:py-16"
		>
			<div className="absolute top-1/2 left-0 -translate-y-1/2 size-50 md:size-75 bg-blue-500/20 dark:bg-blue-500/10 blur-[80px] rounded-full -z-10 pointer-events-none" />

			<RevealWrapper className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
				<Text
					as="h1"
					typography="subheading"
					className="text-center relative z-10"
				>
					Focused on continuous learning by exploring and applying modern tools
					in real projects.
				</Text>

				<LearnsAnimation learns={learns} />
			</RevealWrapper>
		</Container>
	);
};

export default Learns;
