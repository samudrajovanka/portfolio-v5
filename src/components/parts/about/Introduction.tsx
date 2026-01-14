'use client';

import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Container from '@/components/ui/container';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import ProfilePicture from './ProfilePicture';

const Introduction = () => {
	return (
		<Container
			as="section"
			className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center"
		>
			<RevealWrapper delay={0.2} className="flex justify-center md:justify-end">
				<ProfilePicture />
			</RevealWrapper>

			<div>
				<RevealWrapper delay={0.4}>
					<Text as="h1" typography="heading" color="highlight">
						Who I Am
					</Text>
				</RevealWrapper>

				<div className="space-y-4 mt-6">
					<RevealWrapper delay={0.6}>
						<Text>
							Hi there! I&apos;m{' '}
							<AnimatedTooltip text="Call me Jovan">
								<strong>Jovanka Samudra</strong>
							</AnimatedTooltip>
							. I&apos;m a fullstack web developer from Indonesia who loves
							turning ideas into products that great performance, reliable, and
							easy to use
						</Text>
					</RevealWrapper>

					<RevealWrapper delay={0.8}>
						<Text>
							My journey in tech started around 2019, when I first discovered
							how fun it was to make things work inside a browser. Since then,
							I&apos;ve been exploring the world of web and software development
							to finding new ways to build meaningful digital experiences.
						</Text>
					</RevealWrapper>

					<RevealWrapper delay={1}>
						<Text>
							Outside the world of code, I&apos;m a longtime One Piece fan
							counting down to its epic finale — a reminder that persistence,
							creativity, and loyalty matter in every adventure, including this
							one.
						</Text>
					</RevealWrapper>
				</div>
			</div>
		</Container>
	);
};

export default Introduction;
