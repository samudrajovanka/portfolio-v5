import type { Experience, GroupedExperience } from '@/types/experiences';

export type ExperiencesResponse = {
	experiences: GroupedExperience[];
};

export type ExperienceResponse = {
	experience: Experience;
};

export type UniqueCompaniesResponse = {
	companies: string[];
};
