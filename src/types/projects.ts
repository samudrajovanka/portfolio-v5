export interface Project {
	_id: string;
	name: string;
	description: string;
	stacks: string[];
	projectUrl: string | null;
	repositoryUrl: string | null;
	imageUrl: string;
	createdAt: string;
	updatedAt: string;
}
