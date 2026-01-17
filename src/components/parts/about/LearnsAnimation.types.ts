export type Learn = {
	_id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
};

export type LearnsAnimationProps = {
	learns: Learn[];
};

export type LearnPosition = Record<string, { x: number; y: number }>;
