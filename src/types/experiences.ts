import type { EMPLOYMENT_TYPES } from '@/lib/constants/experiences';

export type EmploymentType = (typeof EMPLOYMENT_TYPES)[number];

export interface ExperienceRole {
	_id: string;
	title: string;
	startDate: string;
	endDate: string;
	totalDuration: string;
	type: EmploymentType;
	stacks: string[];
}

export interface GroupedExperience {
	company: string;
	totalDuration: string;
	roles: ExperienceRole[];
}

export interface Experience {
	_id: string;
	company: string;
	position: string;
	startDate: string;
	endDate: string | null;
	type: EmploymentType;
	stacks: string[];
	createdAt: string;
	updatedAt: string;
}
