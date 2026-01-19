import Container from '@/components/ui/container';
import { Text } from '@/components/ui/text';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Container as="footer" className="p-3">
			<Text color="subtitle" typography="small" className="text-center">
				&copy; {year} Jovanka. All rights reserved.
			</Text>
		</Container>
	);
};

export default Footer;
