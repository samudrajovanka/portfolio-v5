'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import SocialRail from './SocialRail';

const SocialRailLayout = () => {
	const segment = useSelectedLayoutSegment();
	const isAboutPage = segment === 'about';

	if (isAboutPage) return null;

	return <SocialRail />;
};

export default SocialRailLayout;
