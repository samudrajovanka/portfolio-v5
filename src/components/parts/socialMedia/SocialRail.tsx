import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { socialLinks } from './data';

export default function SocialRail() {
	return (
		<div className="fixed bottom-0 right-10 z-50 hidden lg:block">
			<div className="flex flex-col items-center gap-6">
				{socialLinks.map((link, index) => (
					<RevealWrapper key={link.name} delay={index * 0.2}>
						<Link
							href={link.href}
							isExternal
							className="block hover:-translate-y-1 hover:text-main hover:scale-110 transition-all duration-300 text-light-subtitle dark:text-dark-subtitle dark:hover:text-white hover:_text-highlight"
							aria-label={link.name}
						>
							{link.icon}
						</Link>
					</RevealWrapper>
				))}

				<RevealWrapper>
					<div className="h-24 w-0.5 bg-light-subtitle dark:bg-dark-subtitle" />
				</RevealWrapper>
			</div>
		</div>
	);
}
