import type { HTMLMotionProps } from 'motion/react';

export type RevealWrapperProps = HTMLMotionProps<'div'> & {
	delay?: number;
	duration?: number;
	yOffset?: number;
	xOffset?: number;
	blur?: boolean;
};
