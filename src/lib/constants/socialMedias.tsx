import {
	Dribbble,
	Github,
	Instagram,
	Linkedin,
	type LucideIcon,
	Mail,
	Youtube,
	BookOpen
} from 'lucide-react';

export const SOCIAL_MEDIA_KEYS = [
	'GITHUB',
	'DRIBBBLE',
	'MEDIUM',
	'EMAIL',
	'LINKEDIN',
	'YOUTUBE',
	'INSTAGRAM',
] as const;

type SocialMediaKey = (typeof SOCIAL_MEDIA_KEYS)[number];

export const SOCIAL_MEDIA_ICONS: Record<SocialMediaKey, LucideIcon> = {
	GITHUB: Github,
	LINKEDIN: Linkedin,
	INSTAGRAM: Instagram,
	EMAIL: Mail,
	DRIBBBLE: Dribbble,
	YOUTUBE: Youtube,
	MEDIUM: BookOpen,
};

export const SOCIAL_MEDIA_NAMES: Record<SocialMediaKey, string> = {
	GITHUB: 'Github',
	LINKEDIN: 'Linkedin',
	INSTAGRAM: 'Instagram',
	EMAIL: 'Email',
	DRIBBBLE: 'Dribbble',
	YOUTUBE: 'Youtube',
	MEDIUM: 'Medium',
};
