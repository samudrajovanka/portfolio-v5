import type { PropsWithChildren } from 'react';

export type TextGenerateEffectProps = PropsWithChildren<{
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
	delay?: number;
	onFinish?: () => void;
}>;
