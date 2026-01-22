import { useQuery } from '@tanstack/react-query';
import { getLearns } from '@/endpoints/learns';

export const getLearnsQueryKey = () => ['learns'];

export const useGetLearnsQuery = () => {
	return useQuery({
		queryKey: getLearnsQueryKey(),
		queryFn: getLearns,
	});
};
