import { cn } from '@/lib/utils';

import type { TextProps, Typography } from './text.types';

const typographyClassName: Record<Typography, string> = {
	heading: 'text-3xl md:text-4xl font-bold',
	subheading: 'text-lg md:text-xl font-bold',
	regular: 'text-sm md:text-base',
	small: 'text-xs md:text-sm',
	xsmall: 'text-xs',
};

const colorClassName = {
	normal: 'text-text-black dark:text-white',
	subtitle: 'text-light-subtitle dark:text-dark-subtitle',
	highlight: 'text-main dark:text-white custom-text-highlight',
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
