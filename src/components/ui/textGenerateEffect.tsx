'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';
import type { TextGenerateEffectProps } from './textGenerateEffect.types';

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
	delay = 0,
	onFinish,
	children,
}: TextGenerateEffectProps) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(' ');

	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
				filter: filter ? 'blur(0px)' : 'none',
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2, { startDelay: delay }),
			},
		).then(() => {
			if (onFinish) {
				onFinish();
			}
		});
	}, [animate, duration, filter, onFinish, delay]);

	const renderWords = () => {
		return (
			<div>
				<motion.div ref={scope} className="inline-block">
					{wordsArray.map((word, idx) => {
						return (
							<motion.span
								// biome-ignore lint/suspicious/noArrayIndexKey: use index
								key={word + idx}
								className="opacity-0"
								style={{
									filter: filter ? 'blur(10px)' : 'none',
								}}
							>
								{word}{' '}
							</motion.span>
						);
					})}
				</motion.div>

				{children}
			</div>
		);
	};

	return (
		<div className={className}>
			<div className="leading-snug tracking-wide">{renderWords()}</div>
		</div>
	);
};
