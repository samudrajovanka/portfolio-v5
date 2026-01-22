import { useQuery } from '@tanstack/react-query';
import { getExperiences } from '@/endpoints/experiences';

export const getExperiencesQueryKey = () => ['experiences'];

export const useGetExperiencesQuery = () => {
	return useQuery({
		queryKey: getExperiencesQueryKey(),
		queryFn: getExperiences,
	});
};
