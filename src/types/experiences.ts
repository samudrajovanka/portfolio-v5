export type JobRole = {
	title: string;
	startDate: string;
	endDate: string;
	totalDuration: string;
	type: 'Full-time' | 'Contract' | 'Part-time' | 'Freelance' | 'Internship';
	description: string;
	techStack: string[];
};

export type CompanyExperience = {
	companyName: string;
	totalDuration: string;
	roles: JobRole[];
};
