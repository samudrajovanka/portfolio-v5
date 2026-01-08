import { ThemeProvider } from 'next-themes';

interface GlobalProviderProps {
	children: React.ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
}
