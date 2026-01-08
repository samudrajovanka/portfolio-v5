export type Query = Record<string, string | number>;

export type FetcherParams = RequestInit & {
	url: string;
	query?: Query;
};

export type ResponseFetcher<T = unknown> = { data: T; status: number };
