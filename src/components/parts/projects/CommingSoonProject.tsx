import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';

const CommingSoonProject = () => {
	return (
		<section className="h-dvh w-full snap-start shrink-0 flex items-center justify-center relative overflow-hidden">
			<div className="text-center space-y-4">
				<RevealWrapper delay={0.2}>
					<Text
						as="h2"
						resetTypography
						className="text-4xl md:text-6xl font-bold"
					>
						Always creating
					</Text>
				</RevealWrapper>
				<RevealWrapper delay={0.4}>
					<Text resetTypography color="subtitle" className="text-lg md:text-xl">
						New projects is comming...
					</Text>
				</RevealWrapper>
			</div>
		</section>
	);
};

export default CommingSoonProject;
