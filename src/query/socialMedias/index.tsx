import { useQuery } from '@tanstack/react-query';
import { getSocialMedias } from '@/endpoints/socialMedias';
import {
	SOCIAL_MEDIA_ICONS,
	SOCIAL_MEDIA_NAMES,
} from '@/lib/constants/socialMedias';
import type { SocialMedia, SocialMediaUI } from '@/types/socialMedias';

export const getSocialMediasQueryKey = () => ['social-medias'];

export const useGetSocialMediasQuery = () => {
	return useQuery({
		queryKey: getSocialMediasQueryKey(),
		queryFn: getSocialMedias,
		select: (data: SocialMedia[]): SocialMediaUI[] => {
			return data.map((item) => {
				const Icon = SOCIAL_MEDIA_ICONS[item.key];
				return {
					...item,
					name: SOCIAL_MEDIA_NAMES[item.key] || item.key,
					icon: Icon ? <Icon size={20} /> : null,
					href: item.key === 'EMAIL' ? `mailto:${item.url}` : item.url,
				};
			});
		},
	});
};
