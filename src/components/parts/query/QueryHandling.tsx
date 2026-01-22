import type { QueryHandlingProps } from './types';

const QueryHandling = <T,>({
	queryResult,
	render,
	...props
}: QueryHandlingProps<T>) => {
	const { data, isLoading, isFetching, isError, isSuccess } = queryResult;

	if (isLoading && isFetching) {
		return props.renderLoading ? props.renderLoading : <p>Loading...</p>;
	}

	if (isError) {
		return props.renderError ? props.renderError : <p>Error</p>;
	}

	if (isSuccess && data) {
		if (props.checkEmpty?.(data) && props.renderEmpty) {
			return props.renderEmpty;
		}

		return render(data);
	}

	return 'Something when wrong';
};

export default QueryHandling;
