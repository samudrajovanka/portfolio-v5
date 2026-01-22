import { backendFetcher } from '@/lib/fetcher';
import type { SuccessResponseData } from '@/types/response';
import type { ProjectsResponse } from './types';

export const getProjects = async () => {
	const response = await backendFetcher<SuccessResponseData<ProjectsResponse>>({
		url: '/projects',
	});
	return response.data.data.projects;
};
