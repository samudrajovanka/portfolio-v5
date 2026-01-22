import { backendFetcher } from '@/lib/fetcher';
import type { SuccessResponseData } from '@/types/response';
import type { ExperiencesResponse } from './types';

export const getExperiences = async () => {
	const response = await backendFetcher<
		SuccessResponseData<ExperiencesResponse>
	>({
		url: '/experiences',
	});
	return response.data.data.experiences;
};
