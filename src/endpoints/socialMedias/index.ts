import { backendFetcher } from '@/lib/fetcher';
import type { SuccessResponseData } from '@/types/response';
import type { SocialMediasResponse } from './types';

export const getSocialMedias = async () => {
	const response = await backendFetcher<
		SuccessResponseData<SocialMediasResponse>
	>({
		url: '/social-medias',
	});

	return response.data.data.socialMedias;
};
