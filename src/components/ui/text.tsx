import { cn } from '@/lib/utils';

import type { TextProps, Typography } from './text.types';

const typographyClassName: Record<Typography, string> = {
	heading: 'text-xl md:text-2xl font-bold',
	subheading: 'text-lg md:text-xl font-bold',
	regular: 'text-sm md:text-base',
	small: 'text-xs md:text-sm',
	xsmall: 'text-xs',
};

const Text = ({
	as: Component = 'p',
	children,
	typography = 'regular',
	color = 'normal',
	className,
	resetTypography,
	resetColor,
	...props
}: TextProps) => {
	const getTypographyClassName = (): string => {
		if (resetTypography) return '';

		return typographyClassName[typography] ?? typographyClassName.regular;
	};

	const getColorClassName = (): string => {
		if (resetColor) return '';

		const colorClassName = {
			normal: 'text-text-black dark:text-white',
			subtitle: 'text-light-subtitle dark:text-dark-subtitle',
		};

		return colorClassName[color] ?? colorClassName.normal;
	};

	const finalClassName = cn(
		getTypographyClassName(),
		getColorClassName(),
		className,
	);

	return (
		<Component className={finalClassName} {...props}>
			{children}
		</Component>
	);
};

export { Text };
