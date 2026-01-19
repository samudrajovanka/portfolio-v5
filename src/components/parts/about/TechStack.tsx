import Container from '@/components/ui/container';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import TechStackList from './TechStackList';

const TechStack = () => {
	return (
		<Container as="section" className="grid md:grid-cols-2 items-center gap-10">
			<RevealWrapper>
				<Text as="h1" typography="heading" color="highlight">
					My Tech Stack
				</Text>
				<Text color="subtitle" className="mt-3">
					A carefully chosen set of tools and technologies that I use to design,
					build, and ship scalable web applications.
				</Text>
			</RevealWrapper>

			<RevealWrapper>
				<TechStackList />
			</RevealWrapper>
		</Container>
	);
};

export default TechStack;
