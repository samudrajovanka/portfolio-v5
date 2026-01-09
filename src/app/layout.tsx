import { outfit } from '@/assets/fonts';
import NavbarLayout from '@/components/parts/navbar/NavbarLayout';
import PreloadPage from '@/components/parts/preloadPage/PreloadPage';
import JsonLd from '@/components/parts/schema/JsonLd';
import SocialRail from '@/components/parts/socialMedia/SocialRail';
import GlobalProvider from '@/components/providers/GlobalProvider';
import generateMetadata from '@/lib/metadata';

import '@/assets/styles/globals.css';

export const metadata = generateMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${outfit.variable} antialiased bg-grid`}>
				<GlobalProvider>
					<JsonLd />

					<PreloadPage>
						<div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-[#F7F7F7] dark:bg-dark mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
						<div className="relative">
							<NavbarLayout />
							<SocialRail />

							<main id="main-layout" className="transition-all duration-300">
								{children}
							</main>
						</div>
					</PreloadPage>
				</GlobalProvider>
			</body>
		</html>
	);
}
