import { cn } from '@/lib/utils';
import GridPatternBackground from '../parts/background/GridPatternBackground';
import type { CardProps } from './card.types';

const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn(
				'card dark:bg-dark dark:border-indigo-900/50 overflow-hidden p-5 rounded-xl relative',
				className,
			)}
		>
			<GridPatternBackground size={20} />

			{children}
		</div>
	);
};

export default Card;
