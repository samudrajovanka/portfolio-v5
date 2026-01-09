import { default as NextLink } from 'next/link';
import type { LinkProps } from './link.types';

const Link = ({ href, isExternal, ...props }: LinkProps) => {
	if (isExternal) {
		return (
			<a
				href={href.toString()}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			/>
		);
	}

	return <NextLink href={href} {...props} />;
};

export default Link;
