import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { outfit } from '@/assets/fonts';
import NavbarLayout from '@/components/parts/navbar/NavbarLayout';
import PreloadPage from '@/components/parts/preloadPage/PreloadPage';
import JsonLd from '@/components/parts/schema/JsonLd';
import SocialRailLayout from '@/components/parts/socialMedia/SocialRailLayout';
import GlobalProvider from '@/components/providers/GlobalProvider';
import { getSocialMedias } from '@/endpoints/socialMedias';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getSocialMediasQueryKey } from '@/query/socialMedias';

import '@/assets/styles/globals.css';

export const metadata = generateMetadata();

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: getSocialMediasQueryKey(),
		queryFn: getSocialMedias,
	});

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${outfit.variable} antialiased bg-grid`}>
				<GlobalProvider>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<JsonLd />

						<PreloadPage>
							<div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-[#F7F7F7] dark:bg-dark mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
							<div className="relative">
								<NavbarLayout />
								<SocialRailLayout />

								<main id="main-layout" className="transition-all duration-300">
									{children}
								</main>
							</div>
						</PreloadPage>
					</HydrationBoundary>
				</GlobalProvider>
			</body>
		</html>
	);
}
