import type { socialLinks } from './data';

export type SocialMediaCardProps = {
	social: (typeof socialLinks)[number];
	idx: number;
};
