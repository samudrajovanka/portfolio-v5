import { backendFetcher } from '@/lib/fetcher';
import type { SuccessResponseData } from '@/types/response';
import type { ResumeResponse } from './types';

export const getResume = async () => {
	const response = await backendFetcher<SuccessResponseData<ResumeResponse>>({
		url: '/resumes',
	});

	return response.data.data.resume;
};
