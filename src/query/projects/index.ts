import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/endpoints/projects';

export const getProjectsQueryKey = () => ['projects'];

export const useGetProjectsQuery = () => {
	return useQuery({
		queryKey: getProjectsQueryKey(),
		queryFn: getProjects,
	});
};
