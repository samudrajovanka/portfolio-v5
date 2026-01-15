import Connect from '@/components/parts/about/Connect';
import Introduction from '@/components/parts/about/Introduction';

const AboutPage = () => {
	return (
		<div className="space-y-32 py-10 lg:py-20">
			<Introduction />
			<Connect />
		</div>
	);
};

export default AboutPage;
