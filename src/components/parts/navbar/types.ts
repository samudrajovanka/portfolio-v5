import type { Dispatch, SetStateAction } from 'react';

export type MobileSidebarProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};
