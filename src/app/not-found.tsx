import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from '@/components/ui/link';
import { RevealWrapper } from '@/components/ui/revealWrapper';
import { Text } from '@/components/ui/text';

export default function NotFound() {
	return (
		<Container className="flex flex-col items-center justify-center min-h-[70vh] gap-4 text-center">
			<RevealWrapper>
				<Text
					resetTypography
					className="text-7xl md:text-9xl font-bold text-main/20 dark:text-white/10 select-none"
				>
					404
				</Text>
			</RevealWrapper>

			<RevealWrapper delay={0.1}>
				<Text resetTypography as="h1" typography="heading">
					Page Not Found
				</Text>
			</RevealWrapper>

			<RevealWrapper delay={0.2}>
				<Text color="subtitle" className="max-w-125">
					The page you are looking for might have been removed, had its name
					changed, or is temporarily unavailable.
				</Text>
			</RevealWrapper>

			<RevealWrapper delay={0.3} className="mt-8">
				<Link href="/">
					<Button size="lg">Back to Home</Button>
				</Link>
			</RevealWrapper>
		</Container>
	);
}
