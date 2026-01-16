'use client';

import Container from '@/components/ui/container';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { socialLinks } from '../socialMedia/data';

const Connect = () => {
	return (
		<RevealWrapper>
			<Container
				as="section"
				className="relative overflow-hidden bg-slate-200 dark:bg-slate-800 py-10 md:py-16 rounded-base"
			>
				<div className="absolute bottom-0 right-0 size-125 bg-pink-500 rounded-full filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 translate-y-1/2" />
				<div className="absolute top-0 left-0 size-125 bg-indigo-500 rounded-full filter blur-[100px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
				<div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20 px-4 xs:px-8 md:px-10 w-full">
					<div>
						<RevealWrapper>
							<Text
								as="h1"
								typography="heading"
								className="text-center lg:text-left"
							>
								Let&apos;s Connect
							</Text>
						</RevealWrapper>
						<RevealWrapper delay={0.2}>
							<Text color="subtitle" className="mt-3 text-center lg:text-left">
								Got an idea, a project, or just want to chat?
								<br className="hidden xs:block" /> Hit me up through my socials.
								I'm always open to new opportunities.
							</Text>
						</RevealWrapper>
					</div>
					<div className="grid grid-flow-col grid-rows-2 gap-2 sm:gap-4 items-center">
						{socialLinks.map((social, idx) => (
							<RevealWrapper
								key={social.name}
								delay={idx * 0.1}
								className={cn((idx + 1) % 3 === 0 && 'row-span-2')}
							>
								<Link
									href={social.href}
									isExternal
									className={cn(
										'group/social hover:scale-110 hover:rotate-2 inline-block transition-transform',
										idx % 2 === 0 && 'hover:-rotate-2',
									)}
								>
									<div
										className="size-20 sm:size-24 lg:size-28 bg-slate-100 dark:bg-main/10 border-none rounded-base flex flex-col items-center justify-center gap-1"
										style={{
											backgroundColor: social.backgroundColor,
										}}
									>
										<span
											className="translate-y-2.5 group-hover/social:translate-y-0 transition-all duration-500"
											style={{
												color: social.textColor,
											}}
										>
											{social.icon}
										</span>
										<Text
											typography="xsmall"
											className="opacity-0 group-hover/social:opacity-100 transition-all duration-500 delay-100"
											style={{
												color: social.textColor,
											}}
										>
											{social.name}
										</Text>
									</div>
								</Link>
							</RevealWrapper>
						))}
					</div>
				</div>
			</Container>
		</RevealWrapper>
	);
};

export default Connect;
