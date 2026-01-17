'use client';

import { FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { socialLinks } from '../socialMedia/data';
import SocialMediaCard from '../socialMedia/SocialMediaCard';

const Connect = () => {
	return (
		<Container as="section">
			<RevealWrapper>
				<div className="relative bg-slate-200 dark:bg-slate-800 py-10 md:py-16 rounded-base px-4 xs:px-8 md:px-10">
					<div className="absolute inset-0 overflow-hidden rounded-base">
						<div className="absolute bottom-0 right-0 size-125 bg-pink-500 rounded-full filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 translate-y-1/2" />
						<div className="absolute top-0 left-0 size-125 bg-indigo-500 rounded-full filter blur-[100px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
					</div>

					<div className="grid md:grid-cols-2 place-items-center gap-10 md:gap-5">
						<div>
							<RevealWrapper>
								<Text
									as="h1"
									typography="heading"
									color="highlight"
									className="text-center lg:text-left"
								>
									Let&apos;s Connect
								</Text>
							</RevealWrapper>

							<RevealWrapper delay={0.2}>
								<Text
									color="subtitle"
									className="mt-3 text-center lg:text-left"
								>
									Got an idea, a project, or just want to chat?
									<br className="hidden xs:block" /> Hit me up through my
									socials. I'm always open to new opportunities.
								</Text>
							</RevealWrapper>
						</div>

						<div className="grid grid-flow-col grid-rows-2 gap-3 sm:gap-4 items-center md:row-span-2 md:place-self-end">
							{socialLinks.map((social, idx) => (
								<RevealWrapper
									key={social.name}
									delay={idx * 0.1}
									className={cn(
										socialLinks.length % 2 !== 0 &&
											(idx + 1) % 3 === 0 &&
											'row-span-2',
									)}
								>
									<SocialMediaCard social={social} idx={idx} />
								</RevealWrapper>
							))}
						</div>

						<RevealWrapper className="order-last md:order-3 w-full">
							<div className="blurred-wrapper py-3 px-5 md:px-20 rounded-base flex flex-col md:flex-row justify-center items-center gap-2">
								<Text>Prefer details?</Text>
								<Link href="/resume">
									<Button variant="outline">
										<FileCode />
										View my resume
									</Button>
								</Link>
							</div>
						</RevealWrapper>
					</div>
				</div>
			</RevealWrapper>
		</Container>
	);
};

export default Connect;
