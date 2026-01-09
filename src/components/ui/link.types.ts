import type { LinkProps as NextLinkProps } from 'next/link';
import type { HTMLAttributes } from 'react';

export type LinkProps = NextLinkProps &
	HTMLAttributes<HTMLAnchorElement> & {
		isExternal?: boolean;
	};
