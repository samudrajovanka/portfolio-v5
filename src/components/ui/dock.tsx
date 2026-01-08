'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

import type { DockIconProps, DockProps } from './dock.types';

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
	(
		{
			className,
			children,
			magnification = DEFAULT_MAGNIFICATION,
			distance = DEFAULT_DISTANCE,
			direction = 'bottom',
			...props
		},
		ref,
	) => {
		const mouseX = useMotionValue(Infinity);

		const renderChildren = () => {
			return React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						mouseX: mouseX,
						magnification: magnification,
						distance: distance,
					} as DockIconProps);
				}
				return child;
			});
		};

		return (
			<motion.div
				ref={ref}
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Infinity)}
				className={cn(
					className,
					'mx-auto w-max mt-8 h-14.5 p-2 flex gap-2 rounded-2xl background-blur',
					'text-theme-dark dark:text-theme-light',
					'blurred-wrapper',
					{
						'items-end': direction === 'bottom',
					},
				)}
				{...props}
			>
				{renderChildren()}
			</motion.div>
		);
	},
);

Dock.displayName = 'Dock';

const DockIcon = ({
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mouseX,
	className,
	children,
	...props
}: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const defaultMouseX = useMotionValue(Infinity);

	const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40],
	);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={cn(
				'flex aspect-square cursor-pointer items-center justify-center rounded-full',
				className,
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon };
