import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';
import app from '@/config/app';

const STALE_TIME = 1000 * app.revalidate;

export const queryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: STALE_TIME,
		},
		mutations: {
			onError: (error: Error) => {
				console.error(error.message);
			},
		},
	},
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
