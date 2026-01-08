import Link from 'next/link';
import ActionText from '@/components/parts/home/actionText';
import { socialLinks } from '@/components/parts/socialMedia/data';
import { ButtonBorderBeam } from '@/components/ui/buttonBorderBeam';
import Container from '@/components/ui/container';
import { Dock, DockIcon } from '@/components/ui/dock';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import app from '@/config/app';

const HomePage = () => {
	return (
		<div className="fixed top-0 h-dvh w-dvw flex items-center">
			<Container className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
				<RevealWrapper useInitialDelay>
					<Text
						as="h1"
						resetTypography
						className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold after:content-['.'] after:text-main dark:after:text-blue-500"
					>
						Hi I&apos;m Jovanka
					</Text>
				</RevealWrapper>

				<RevealWrapper delay={0.2} useInitialDelay>
					<Text
						resetTypography
						className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl font-medium mb-5"
					>
						Fullstack Web Developer
					</Text>
				</RevealWrapper>

				<ActionText delay={app.initialDelayTimeAfterPreload + 0.4} />

				<RevealWrapper delay={0.6} useInitialDelay>
					<Link href="/projects" className="inline-block mt-5">
						<ButtonBorderBeam>See What I&apos;ve Built</ButtonBorderBeam>
					</Link>
				</RevealWrapper>
			</Container>

			<Dock className="fixed md:hidden bottom-5 right-1/2 translate-x-1/2 z-50">
				{socialLinks.map((link) => (
					<DockIcon
						key={link.href}
						className="text-light-subtitle dark:text-dark-subtitle dark:hover:text-white hover:text-main hover:_text-highlight"
					>
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							{link.icon}
						</a>
					</DockIcon>
				))}
			</Dock>
		</div>
	);
};

export default HomePage;
