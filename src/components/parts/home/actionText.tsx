'use client';

import { useState } from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { cn } from '@/lib/utils';
import type { ActionTextProps } from './types';

const ActionText = ({ delay = 0, className }: ActionTextProps) => {
	const [isFinishTextGenerate, setIsFinishTextGenerate] = useState(false);

	return (
		<div
			className={cn(
				'font-light text-lg xs:text-xl sm:text-2xl md:text-3xl',
				className,
			)}
		>
			<TextGenerateEffect
				words="Building scalable web systems with"
				className="inline-block"
				delay={delay}
				onFinish={() => setIsFinishTextGenerate(true)}
			>
				<br className="inline-block sm:hidden" />

				{isFinishTextGenerate ? (
					<FlipWords
						words={['performance', 'modernity', 'interaction', 'impact']}
						className="inline-block font-medium text-main _text-highlight sm:ml-2"
					/>
				) : (
					<span className="text-transparent">x</span>
				)}
			</TextGenerateEffect>
		</div>
	);
};

export default ActionText;
