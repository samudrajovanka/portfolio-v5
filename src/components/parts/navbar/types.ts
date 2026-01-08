import type { Dispatch, SetStateAction } from 'react';

export type MobileSidebarProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavbarProps = {
	/**
	 * Position of the navbar
	 * @default 'sticky'
	 */
	position?: 'fixed' | 'sticky';
};
