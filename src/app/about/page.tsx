import AboutPage from '@/components/pages/about';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata(
	{ title: 'About Me' },
	{ withSuffix: true },
);

export default AboutPage;
