import type { ReactNode } from 'react';
import type { SOCIAL_MEDIA_KEYS } from '@/lib/constants/socialMedias';

export type SocialMediaKey = (typeof SOCIAL_MEDIA_KEYS)[number];

export interface SocialMedia {
	_id: string;
	key: SocialMediaKey;
	url: string;
	backgroundColor: string;
	textColor: string;
	createdAt: string;
	updatedAt: string;
}

export type SocialMediaUI = SocialMedia & {
	icon: ReactNode;
	name: string;
	href: string;
};
