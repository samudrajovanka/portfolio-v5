'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Navbar from './Navbar';

const NavbarLayout = () => {
	const segment = useSelectedLayoutSegment();
	const isHome = segment === null;

	return <Navbar position={isHome ? 'fixed' : 'sticky'} />;
};

export default NavbarLayout;
