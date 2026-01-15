import { default as NextLink } from 'next/link';
import { forwardRef } from 'react';
import type { LinkProps } from './link.types';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({ href, isExternal, ...props }, ref) => {
		if (isExternal) {
			return (
				<a
					ref={ref}
					href={href.toString()}
					target="_blank"
					rel="noopener noreferrer"
					{...props}
				/>
			);
		}

		return <NextLink ref={ref} href={href} {...props} />;
	},
);

Link.displayName = 'Link';

export default Link;
