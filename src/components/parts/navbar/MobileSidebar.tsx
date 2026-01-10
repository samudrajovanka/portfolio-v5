'use client';

import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { cn } from '@/lib/utils';
import { Menu } from './data';
import type { MobileSidebarProps } from './types';

export default function MobileSidebar({
	isOpen,
	setIsOpen,
}: MobileSidebarProps) {
	const pathname = usePathname();

	useEffect(() => {
		const mainLayout = document.getElementById('main-layout');

		if (!mainLayout) return;

		if (isOpen) {
			mainLayout.style.overflow = 'hidden';
			mainLayout.style.translate = '-75% 0';
		} else {
			mainLayout.style.overflow = 'auto';
			mainLayout.style.translate = '0 0';
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
					/>
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className="fixed inset-y-0 right-0 z-70 w-3/4 max-w-sm bg-white dark:bg-dark py-3 px-4 shadow-xl border-l border-white/10"
					>
						<Container>
							<div className="flex justify-end mb-8">
								<Button
									variant="secondary"
									size="icon"
									aria-label="Close menu"
									onClick={() => setIsOpen(false)}
								>
									<X className="size-5" />
								</Button>
							</div>

							<ul className="flex flex-col gap-6">
								{Menu.map((item, index) => {
									const isActive =
										item.href === '/'
											? pathname === '/'
											: pathname.startsWith(item.href);

									return (
										<li key={item.label}>
											<RevealWrapper
												xOffset={30}
												yOffset={0}
												delay={index * 0.1}
											>
												<Link
													href={item.href}
													onClick={() => setIsOpen(false)}
													isExternal={item.isExternal}
													className={cn(
														'block text-lg transition-colors text-light-subtitle dark:text-dark-subtitle hover:text-main dark:hover:text-white',
														{
															'text-main dark:text-white font-medium': isActive,
														},
													)}
												>
													{item.label}
												</Link>
											</RevealWrapper>
										</li>
									);
								})}
							</ul>
						</Container>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
