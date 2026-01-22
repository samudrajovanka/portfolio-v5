import { useQuery } from '@tanstack/react-query';
import { getResume } from '@/endpoints/resumes';

export const getResumeQueryKey = () => ['resumes'];

export const useGetResumeQuery = () => {
	return useQuery({
		queryKey: getResumeQueryKey(),
		queryFn: getResume,
	});
};
