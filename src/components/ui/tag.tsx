import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { TagProps } from './tag.types';
import { Text } from './text';

const Tag = ({ className, children }: TagProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
			className={cn(
				'px-3 pb-0.5 border-2 border-slate-300 dark:border-main/50 bg-slate-200 dark:bg-dark/40 rounded-full cursor-default',
				className,
			)}
		>
			<Text as="span" typography="small" className="font-light">
				{children}
			</Text>
		</motion.div>
	);
};

export default Tag;
