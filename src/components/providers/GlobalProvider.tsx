'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import { getQueryClient } from '@/lib/queryClient';

export default function GlobalProvider({ children }: React.PropsWithChildren) {
	const [queryClient] = useState(getQueryClient());

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<QueryClientProvider client={queryClient}>
				{children}

				<ReactQueryDevtools />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
