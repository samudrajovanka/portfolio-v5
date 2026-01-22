import { backendFetcher } from '@/lib/fetcher';
import type { SuccessResponseData } from '@/types/response';
import type { LearnsResponse } from './types';

export const getLearns = async () => {
	const response = await backendFetcher<SuccessResponseData<LearnsResponse>>({
		url: '/learns',
	});
	return response.data.data.learns;
};
