'use client';

import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { useGetSocialMediasQuery } from '@/query/socialMedias';
import QueryHandling from '../query/QueryHandling';

export default function SocialRail() {
	const socialMediasQuery = useGetSocialMediasQuery();

	return (
		<QueryHandling
			queryResult={socialMediasQuery}
			render={(socialMedias) => (
				<div className="fixed bottom-0 right-10 z-50 hidden lg:block">
					<div className="flex flex-col items-center gap-6">
						{socialMedias.map((socialMedia, index) => (
							<RevealWrapper
								key={socialMedia.name}
								delay={(socialMedias.length - index) * 0.2}
							>
								<Link
									href={socialMedia.href}
									isExternal
									className="block hover:-translate-y-1 hover:text-main hover:scale-110 transition-all duration-300 text-light-subtitle dark:text-dark-subtitle dark:hover:text-white hover:custom-text-highlight"
									aria-label={socialMedia.name}
								>
									{socialMedia.icon}
								</Link>
							</RevealWrapper>
						))}

						<RevealWrapper>
							<div className="h-24 w-0.5 bg-light-subtitle dark:bg-dark-subtitle" />
						</RevealWrapper>
					</div>
				</div>
			)}
		/>
	);
}
