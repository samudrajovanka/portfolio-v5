'use client';

import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTooltipProps = {
	children: React.ReactNode;
	text: string;
	className?: string;
};

export const AnimatedTooltip = ({
	children,
	text,
	className,
}: AnimatedTooltipProps) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: Tooltip wrapper needs to handle mouse/focus events
		<span
			className="relative inline-block"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			onFocus={() => setIsVisible(true)}
			onBlur={() => setIsVisible(false)}
		>
			<AnimatePresence>
				{isVisible && (
					<motion.span
						initial={{ opacity: 0, y: 10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 10, scale: 0.95 }}
						transition={{
							stiffness: 260,
							damping: 10,
						}}
						className={cn(
							'absolute left-1/2 -translate-x-1/2 -top-8 z-50 px-3 py-1.5',
							'bg-neutral-900 dark:bg-white text-white dark:text-text-black text-xs rounded-md shadow-lg',
							'whitespace-nowrap pointer-events-none',
							className,
						)}
					>
						<span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-900 dark:border-t-white" />
						{text}
					</motion.span>
				)}
			</AnimatePresence>
			{children}
		</span>
	);
};
