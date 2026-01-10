export type Project = {
	title: string;
	description: string;
	stacks: string[];
	link?: string;
	github?: string;
	image: string;
};

export type ProjectCardProps = {
	project: Project;
	index: number;
};
