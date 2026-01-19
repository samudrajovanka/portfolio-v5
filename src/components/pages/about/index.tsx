import Connect from '@/components/parts/about/Connect';
import Introduction from '@/components/parts/about/Introduction';
import Learns from '@/components/parts/about/Learns';
import TechStack from '@/components/parts/about/TechStack';
import WorkExperience from '@/components/parts/about/WorkExperience';
import Footer from '@/components/parts/footer/Footer';

const AboutPage = () => {
	return (
		<>
			<div className="space-y-16 md:space-y-24 py-10 lg:py-20">
				<Introduction />
				<TechStack />
				<Learns />
				<WorkExperience />
				<Connect />
			</div>

			<Footer />
		</>
	);
};

export default AboutPage;
