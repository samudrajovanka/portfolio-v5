'use client';

import { MenuIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { cn } from '@/lib/utils';
import logo from '@/public/images/logo.webp';
import { Menu } from './data';
import MobileSidebar from './MobileSidebar';
import ThemeToggle from './ThemeToggle';
import type { NavbarProps } from './types';

const Navbar = ({ position = 'sticky' }: NavbarProps) => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				'inset-x-0 top-2 mb-6 z-50 transition-all duration-300',
				position,
			)}
		>
			<Container
				className={cn(
					'flex items-center gap-6 px-4 py-3 transition-all duration-300 rounded-base',
					isScrolled ? 'blurred-wrapper' : 'border-transparent bg-transparent',
				)}
			>
				<Link href="/" title="Home" className="relative group">
					<motion.div
						whileHover={{ rotate: -15 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 300, damping: 10 }}
					>
						<Image
							src={logo}
							alt="Logo"
							width={32}
							height={32}
							className="transition-transform"
						/>
					</motion.div>
				</Link>

				<ul className="hidden sm:flex gap-6 items-center">
					{Menu.map((item, index) => {
						const isActive =
							item.href === '/'
								? pathname === '/'
								: pathname === item.href ||
									pathname.startsWith(`${item.href}/`);

						return (
							<li key={item.label} className="relative">
								<RevealWrapper delay={index * 0.1}>
									<Link
										href={item.href}
										isExternal={item.isExternal}
										className={cn(
											'relative z-10 transition-colors text-light-subtitle dark:text-dark-subtitle hover:text-main dark:hover:text-white',
											{
												'text-main dark:text-white font-medium': isActive,
											},
										)}
									>
										{item.label}
									</Link>

									{isActive && (
										<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-3 rounded-sm bg-main dark:bg-white" />
									)}
								</RevealWrapper>
							</li>
						);
					})}
				</ul>

				<div className="ml-auto flex items-center gap-4">
					<ThemeToggle />

					<Button
						type="button"
						variant="secondary"
						size="icon"
						className="sm:hidden"
						aria-label="Open menu"
						onClick={() => setIsOpenSidebar(true)}
					>
						<MenuIcon className="size-5" />
					</Button>
				</div>
			</Container>

			<MobileSidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
		</nav>
	);
};

export default Navbar;
