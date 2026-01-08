import type { MotionValue } from 'motion';

export type DockProps = React.PropsWithChildren<{
	className?: string;
	magnification?: number;
	distance?: number;
	direction?: 'bottom';
}>;

export type DockIconProps = React.PropsWithChildren<{
	size?: number;
	magnification?: number;
	distance?: number;
	mouseX?: MotionValue<number>;
	className?: string;
	children?: React.ReactNode;
}>;
