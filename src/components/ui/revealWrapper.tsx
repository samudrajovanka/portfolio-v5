'use client';

import { motion } from 'motion/react';
import app from '@/config/app';
import { cn } from '@/lib/utils';
import type { RevealWrapperProps } from './revealWrapper.types';

const RevealWrapper = ({
	children,
	className,
	delay = 0,
	duration = 0.5,
	yOffset = 20,
	xOffset = 0,
	blur = false,
	useInitialDelay,
	...props
}: RevealWrapperProps) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: yOffset,
				x: xOffset,
				filter: blur ? 'blur(4px)' : 'none',
			}}
			whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
			viewport={{ once: true, margin: '-50px', amount: 0.1 }}
			transition={{
				duration,
				delay: useInitialDelay
					? app.initialDelayTimeAfterPreload + delay
					: delay,
				ease: 'easeOut',
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export { RevealWrapper };
