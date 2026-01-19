import { Marquee } from '@/components/ui/marquee';
import { techStacksGroup } from '@/lib/constants/techStack';

const TechStackList = () => {
	return (
		<div className="bg-slate-200 dark:bg-slate-700 h-90 rounded-base relative overflow-hidden px-5 md:px-10 perspective-near">
			<div className="flex justify-between max-w-75 mx-auto -translate-x-1/2 translate-y-[-32%] rotate-x-10 -rotate-y-20 rotate-z-20">
				{techStacksGroup.map((techStacks, idx) => (
					<Marquee
						// biome-ignore lint/suspicious/noArrayIndexKey: use index key
						key={idx}
						vertical
						pauseOnHover
						reverse={idx % 2 !== 0}
						className="[--duration:20s]"
					>
						{techStacks.map((techStack) => (
							<div
								key={techStack.slug}
								className="rounded-base bg-white p-4 w-fit shadow-xl"
								title={techStack.name}
							>
								{/** biome-ignore lint/performance/noImgElement: use native img for cdn */}
								<img
									src={`https://cdn.simpleicons.org/${techStack.slug}`}
									alt={techStack.name}
									width="24"
									height="24"
								/>
							</div>
						))}
					</Marquee>
				))}
			</div>
		</div>
	);
};

export default TechStackList;
