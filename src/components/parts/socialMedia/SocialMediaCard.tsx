import Link from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import type { SocialMediaCardProps } from './SocialMediaCard.types';

const SocialMediaCard = ({ social, idx }: SocialMediaCardProps) => {
	return (
		<Link
			href={social.href}
			isExternal
			className={cn(
				'group/social hover:scale-110 hover:rotate-2 inline-block transition-transform',
				idx % 2 === 0 && 'hover:-rotate-2',
			)}
		>
			<div
				className="size-20 sm:size-24 lg:size-28 bg-slate-100 dark:bg-main/10 border-none rounded-base flex flex-col items-center justify-center gap-1"
				style={{
					backgroundColor: social.backgroundColor,
				}}
			>
				<span
					className="translate-y-2.5 group-hover/social:translate-y-0 transition-all duration-500"
					style={{
						color: social.textColor,
					}}
				>
					{social.icon}
				</span>
				<Text
					typography="xsmall"
					className="opacity-0 group-hover/social:opacity-100 transition-all duration-500 delay-100"
					style={{
						color: social.textColor,
					}}
				>
					{social.name}
				</Text>
			</div>
		</Link>
	);
};

export default SocialMediaCard;
