import type { ErrorGeneralResponse } from '@/types/response';
import type { FetcherParams, Query, ResponseFetcher } from './types';

const generateQuery = (query: Query) => {
	const queryKeys = Object.keys(query);

	if (queryKeys.length === 0) return '';

	const queryValues = queryKeys.map((key) => {
		if (!query[key]) return null;

		return `${key}=${query[key]}`;
	});

	const queryString = queryValues.filter((query) => query !== null).join('&');

	return queryString;
};

const parseURL = (url: string, query?: Query) => {
	const [urlWithoutQueries, initialQueries] = url.split('?');

	const listOfQueries: string[] = [];
	if (initialQueries) listOfQueries.push(initialQueries);
	if (query) listOfQueries.push(generateQuery(query));

	const queryString =
		listOfQueries.length > 0 ? `?${listOfQueries.join('&')}` : '';
	return `${urlWithoutQueries}${queryString}`;
};

const fetcherFactory = (baseUrl: string) => {
	return async <ResponseBody = unknown>({
		method = 'GET',
		...args
	}: FetcherParams) => {
		const promiseExecutor = async (
			resolve: (value: ResponseFetcher<ResponseBody>) => void,
			reject: (reason: unknown) => void,
		) => {
			const finalUrl = baseUrl + args.url;

			const headers = new Headers(args.headers);
			headers.set('Content-Type', 'application/json');

			const response = await fetch(parseURL(finalUrl, args?.query), {
				method,
				headers,
				...args,
			});

			const responseData = await response.json();

			if (!response.ok)
				reject({
					data: responseData as ErrorGeneralResponse,
					status: response.status,
				});

			resolve({
				data: responseData as ResponseBody,
				status: response.status,
			});
		};

		return new Promise<ResponseFetcher<ResponseBody>>(promiseExecutor);
	};
};

const backendBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
export const backendFetcher = fetcherFactory(`${backendBaseUrl}/api`);
