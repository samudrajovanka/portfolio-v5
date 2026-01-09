'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export default function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="size-9" />;
	}

	const isDark = resolvedTheme === 'dark';

	const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const newTheme = isDark ? 'light' : 'dark';

		if (!document.startViewTransition) {
			setTheme(newTheme);
			return;
		}

		const x = e.clientX;
		const y = e.clientY;
		const endRadius = Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y),
		);

		const transition = document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
			});
		});

		await transition.ready;

		const clipPath = [
			`circle(0px at ${x}px ${y}px)`,
			`circle(${endRadius}px at ${x}px ${y}px)`,
		];

		document.documentElement.animate(
			{
				clipPath: clipPath,
			},
			{
				duration: 1500,
				easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
				pseudoElement: '::view-transition-new(root)',
			},
		);
	};

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={toggleTheme}
			className="relative button-ghost--icon"
			aria-label="Toggle theme"
		>
			<motion.div
				initial={false}
				animate={{
					scale: isDark ? 0 : 1,
					rotate: isDark ? 90 : 0,
					opacity: isDark ? 0 : 1,
				}}
				transition={{ duration: 0.2 }}
				className="absolute"
			>
				<Sun className="size-5 text-orange-500" />
			</motion.div>

			<motion.div
				initial={false}
				animate={{
					scale: isDark ? 1 : 0,
					rotate: isDark ? 0 : -90,
					opacity: isDark ? 1 : 0,
				}}
				transition={{ duration: 0.2 }}
				className="absolute"
			>
				<Moon className="size-5 text-blue-500" />
			</motion.div>

			<div className="size-5 opacity-0" />
		</motion.button>
	);
}
