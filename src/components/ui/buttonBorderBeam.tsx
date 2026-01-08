'use client';

import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function ButtonBorderBeam({
	children,
	containerClassName,
	className,
	as: Tag = 'button',
	duration = 1,
	clockwise = true,
	...props
}: React.PropsWithChildren<
	{
		as?: React.ElementType;
		containerClassName?: string;
		className?: string;
		duration?: number;
		clockwise?: boolean;
	} & React.HTMLAttributes<HTMLElement>
>) {
	const { theme } = useTheme();
	const [hovered, setHovered] = useState<boolean>(false);
	const [direction, setDirection] = useState<Direction>('TOP');
	const [mounted, setMounted] = useState(false);

	const isDark = theme === 'dark';

	const rotateDirection = useCallback(
		(currentDirection: Direction): Direction => {
			const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
			const currentIndex = directions.indexOf(currentDirection);
			const nextIndex = clockwise
				? (currentIndex - 1 + directions.length) % directions.length
				: (currentIndex + 1) % directions.length;
			return directions[nextIndex];
		},
		[clockwise],
	);

	const lightMovingMap: Record<Direction, string> = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%, #0000ff 0%, rgba(255, 255, 255, 0) 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, #0000ff 0%, rgba(255, 255, 255, 0) 100%)',
		BOTTOM:
			'radial-gradient(20.7% 50% at 50% 100%, #0000ff 0%, rgba(255, 255, 255, 0) 100%)',
		RIGHT:
			'radial-gradient(16.2% 41.199999999999996% at 100% 50%, #0000ff 0%, rgba(255, 255, 255, 0) 100%)',
	};

	const darkMovingMap: Record<Direction, string> = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		BOTTOM:
			'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		RIGHT:
			'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
	};

	const movingMap = useMemo(() => {
		return isDark ? darkMovingMap : lightMovingMap;
	}, [isDark]);

	const highlight =
		'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)';

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!hovered) {
			const interval = setInterval(() => {
				setDirection((prevState) => rotateDirection(prevState));
			}, duration * 1000);
			return () => clearInterval(interval);
		}
	}, [hovered, duration, rotateDirection]);

	if (!mounted) {
		return <div className="size-9" />;
	}

	return (
		<Tag
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				'relative flex rounded-full border border-main/70 dark:border-inherit content-center bg-main/20 hover:bg-main/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px box-decoration-clone w-fit cursor-pointer',
				containerClassName,
			)}
			{...props}
		>
			<div
				className={cn(
					'w-auto text-main dark:text-white z-10 bg-white dark:bg-main px-4 py-2 rounded-[inherit] text-sm sm:text-base',
					className,
				)}
			>
				{children}
			</div>
			<motion.div
				className={cn(
					'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
				)}
				style={{
					filter: 'blur(10px)',
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
				initial={{
					background: movingMap[direction],
				}}
				animate={{
					background: hovered
						? isDark
							? [movingMap[direction], highlight]
							: [movingMap[direction], highlight]
						: movingMap[direction],
				}}
				transition={{ ease: 'linear', duration: duration ?? 1 }}
			/>
			<motion.div
				className={cn(
					'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
				)}
				style={{
					filter: 'blur(2px)',
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
				initial={{
					background: movingMap[direction],
				}}
				animate={{
					background: hovered
						? isDark
							? [movingMap[direction], highlight]
							: [movingMap[direction], highlight]
						: movingMap[direction],
				}}
				transition={{ ease: 'linear', duration: duration ?? 1 }}
			/>
			<div className="bg-black absolute z-1 flex-none inset-0.5 rounded-[100px]" />
		</Tag>
	);
}
