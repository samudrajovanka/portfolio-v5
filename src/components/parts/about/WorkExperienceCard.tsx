'use client';

import Card from '@/components/ui/card';
import Tag from '@/components/ui/tag';
import { Text } from '@/components/ui/text';
import type { WorkExperienceCardProps } from './WorkExperienceCard.types';

const WorkExperienceCard = ({
	experience,
	className,
}: WorkExperienceCardProps) => {
	const { company, totalDuration, roles } = experience;

	return (
		<Card className={className}>
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 bg-main/5 backdrop-blur-sm px-4 py-2 rounded-lg">
				<Text as="h2" typography="subheading">
					{company}
				</Text>

				{roles.length > 1 && (
					<Text color="subtitle" className="font-medium">
						{totalDuration}
					</Text>
				)}
			</div>

			<div className="space-y-8 relative">
				{roles.map((role, index) => (
					<div
						key={role._id}
						className="relative flex flex-col md:flex-row gap-6"
					>
						{roles.length > 1 && (
							<div className="hidden md:block">
								<div className="size-3 rounded-full bg-slate-200 dark:bg-slate-800 mt-2 border-2 border-main z-2 relative" />

								{index !== roles.length - 1 && (
									<div className="absolute w-0.75 h-[calc(100%+1.5rem)] bg-main left-1.5 -translate-x-1/2 -translate-y-0.5 z-1" />
								)}
							</div>
						)}

						<div className="flex-1 space-y-4">
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
								<div>
									<Text
										as="h3"
										className="text-lg font-semibold text-slate-800 dark:text-slate-100"
									>
										{role.title}
									</Text>

									<Text typography="small" color="subtitle">
										{role.type}
									</Text>
								</div>

								<div className="flex flex-wrap gap-x-2 gap-y-1 items-center md:justify-end min-w-60">
									<Text typography="small" color="subtitle">
										{role.startDate} - {role.endDate}
									</Text>
									<Text typography="small" color="subtitle">
										•
									</Text>
									<Text typography="small" color="subtitle">
										{role.totalDuration}
									</Text>
								</div>
							</div>

							{role.stacks.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{role.stacks.map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default WorkExperienceCard;
