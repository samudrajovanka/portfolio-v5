import type { Learn } from '@/types/learns';

export type LearnsAnimationProps = {
	learns: Learn[];
};

export type LearnPosition = Record<string, { x: number; y: number }>;
