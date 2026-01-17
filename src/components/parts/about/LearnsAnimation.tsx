'use client';

import { type AnimationSequence, useAnimate } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import Tag from '@/components/ui/tag';
import { cn } from '@/lib/utils';
import type {
	LearnPosition,
	LearnsAnimationProps,
} from './LearnsAnimation.types';

const HEIGHT_ITEM = 32;
const GAP = 16;
const WIDTH_CONTAINER = 228;
const X_THRESHOLD = 20;
const Y_THRESHOLD = 25;
const TOTAL_ANIMATION = 3;

const LearnsAnimation = ({ learns }: LearnsAnimationProps) => {
	const [scope, animate] = useAnimate();
	const [learnPosition, setLearnPosition] = useState<LearnPosition>({});

	const getRandomPositionTranslate = useCallback(() => {
		const x = Math.floor(Math.random() * 40) - 20;
		const y = Math.floor(Math.random() * 30) - 15;

		return [x, y];
	}, []);

	useEffect(() => {
		if (learns.length <= 1) return;

		const positions = learns.reduce((res, learn, idx) => {
			if (idx === 0) {
				res[learn._id] = {
					x: 0,
					y: 0,
				};

				return res;
			}

			const position = getRandomPositionTranslate();
			res[learn._id] = {
				x: position[0],
				y: position[1],
			};

			return res;
		}, {} as LearnPosition);

		setLearnPosition(positions);

		const animations: AnimationSequence = new Array(
			learns.length * TOTAL_ANIMATION + 1,
		);

		Object.keys(positions).forEach((key, idx) => {
			if (idx === 0) {
				const left = X_THRESHOLD;
				const top = Y_THRESHOLD;
				const cursorAnimation: AnimationSequence[number] = [
					'#cursor',
					{ left, top },
					{ at: '+1', duration: 0.5, ease: 'easeInOut' },
				];
				const itemActiveAnimation: AnimationSequence[number] = [
					'li:first-child',
					{ opacity: 1 },
					{ duration: 0.3 },
				];
				const lastChildInactiveAnimation: AnimationSequence[number] = [
					`li:last-child`,
					{ opacity: 0.5 },
					{ at: '-0.3', duration: 0.1 },
				];
				const lastIndex = animations.length - 1;

				animations[idx] = itemActiveAnimation;
				animations[idx + 1] = [
					cursorAnimation[0],
					cursorAnimation[1],
					{ duration: 0 },
				] as AnimationSequence[number];
				animations[lastIndex - 1] = cursorAnimation;
				animations[lastIndex] = lastChildInactiveAnimation;

				return;
			}

			const left =
				idx % 2 === 1
					? X_THRESHOLD * -1 + positions[key].x + WIDTH_CONTAINER
					: X_THRESHOLD + positions[key].x;
			const top = Y_THRESHOLD + idx * (HEIGHT_ITEM + GAP) + positions[key].y;
			const prevPositionChild = idx;
			const currentPositionChild = idx + 1;

			const cursorAnimation: AnimationSequence[number] = [
				'#cursor',
				{ left, top },
				{ at: '+1', duration: 0.5, ease: 'easeInOut' },
			];
			const prevItemInactiveAnimation: AnimationSequence[number] = [
				`li:nth-child(${prevPositionChild})`,
				{ opacity: 0.5 },
				{ at: '-0.3', duration: 0.1 },
			];
			const itemActiveAnimation: AnimationSequence[number] = [
				`li:nth-child(${currentPositionChild})`,
				{ opacity: 1 },
				{ duration: 0.3 },
			];

			const cursorIndex = idx * TOTAL_ANIMATION - 1;
			const prevIndex = idx * TOTAL_ANIMATION;
			const activeIndex = idx * TOTAL_ANIMATION + 1;
			animations[cursorIndex] = cursorAnimation;
			animations[prevIndex] = prevItemInactiveAnimation;
			animations[activeIndex] = itemActiveAnimation;
		});

		animate(animations, {
			repeat: Number.POSITIVE_INFINITY,
		});
	}, [animate, learns, getRandomPositionTranslate]);

	return (
		<div ref={scope} className="relative place-self-center">
			<ul
				className={cn('flex flex-col flex-wrap', {
					'items-center': learns.length === 1,
				})}
				style={{
					gap: GAP,
					width: WIDTH_CONTAINER,
				}}
			>
				{learns.map((learn, idx) => (
					<li
						key={learn._id}
						id={learn._id}
						className={cn('opacity-50', {
							'ml-auto': idx % 2 === 1,
						})}
						style={{
							transform: `translate(${learnPosition[learn._id]?.x ?? 0}px, ${learnPosition[learn._id]?.y ?? 0}px)`,
							height: HEIGHT_ITEM,
						}}
					>
						<Tag className="w-fit">{learn.name}</Tag>
						{/* {learn.name} */}
					</li>
				))}
			</ul>

			{learns.length > 1 && (
				// biome-ignore lint/a11y/noSvgWithoutTitle: svg no title
				<svg
					id="cursor"
					className="absolute top-6.25 left-5"
					width="16.8"
					height="18.2"
					viewBox="0 0 12 13"
					stroke="white"
					strokeWidth="1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
					/>
				</svg>
			)}
		</div>
	);
};

export default LearnsAnimation;
