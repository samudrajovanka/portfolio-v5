import ActionText from '@/components/parts/home/actionText';
import { socialLinks } from '@/components/parts/socialMedia/data';
import { ButtonBorderBeam } from '@/components/ui/buttonBorderBeam';
import Container from '@/components/ui/container';
import { Dock, DockIcon } from '@/components/ui/dock';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';

const HomePage = () => {
	return (
		<div className="h-dvh w-dvw flex items-center">
			<Container className="flex flex-col items-center sm:items-start gap-2 text-center md:text-left">
				<RevealWrapper>
					<Text
						as="h1"
						resetTypography
						className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold after:content-['.'] after:text-main dark:after:text-blue-500"
					>
						Hi I&apos;m Jovanka
					</Text>
				</RevealWrapper>

				<RevealWrapper delay={0.2}>
					<Text
						resetTypography
						className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl font-medium mb-5"
					>
						Fullstack Web Developer
					</Text>
				</RevealWrapper>

				<ActionText delay={0.4} />

				<RevealWrapper delay={0.6}>
					<Link href="/projects" className="inline-block mt-5">
						<ButtonBorderBeam>See What I&apos;ve Built</ButtonBorderBeam>
					</Link>
				</RevealWrapper>
			</Container>

			<Dock className="fixed lg:hidden bottom-5 right-1/2 translate-x-1/2 z-50">
				{socialLinks.map((link) => (
					<DockIcon
						key={link.href}
						className="text-light-subtitle dark:text-dark-subtitle dark:hover:text-white hover:text-main hover:custom-text-highlight"
					>
						<Link href={link.href} isExternal>
							{link.icon}
						</Link>
					</DockIcon>
				))}
			</Dock>
		</div>
	);
};

export default HomePage;
