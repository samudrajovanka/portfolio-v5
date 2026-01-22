const app = {
	name: 'Jovanka Samudra',
	description:
		"Hello, I'm Jovanka Samudra. Let's connect and collaborate on building something amazing together!",
	keywords: ['jovan', 'samudra', 'jovanka', 'samudrajovanka'],
	url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
	initialDelayTimeAfterPreload: 500,
	revalidate: 60 * 60 * 24,
};

export default app;
