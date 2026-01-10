'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Navbar from './Navbar';

const NavbarLayout = () => {
	const segment = useSelectedLayoutSegment();
	const isFixedNavbarPage = segment === null || ['projects'].includes(segment);

	return <Navbar position={isFixedNavbarPage ? 'fixed' : 'sticky'} />;
};

export default NavbarLayout;
