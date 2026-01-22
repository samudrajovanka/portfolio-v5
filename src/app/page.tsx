import HomePage from '@/components/pages/home';
import JsonLd from '@/components/parts/schema/JsonLd';
import app from '@/config/app';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata({ title: "Hi I'm Jovan" });

export const revalidate = 84_400; // 1 day

export default function Page() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Jovanka Samudra',
		url: app.url,
	};

	return (
		<>
			<JsonLd data={jsonLd} />
			<HomePage />
		</>
	);
}
