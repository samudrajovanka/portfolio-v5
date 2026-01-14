'use client';

import { useId } from 'react';

import type {
	GridPatternBackgroundProps,
	GridPatternProps,
} from './GridPatternBackground.types';

const GridPatternBackground = ({
	pattern,
	size = 20,
}: GridPatternBackgroundProps) => {
	const p = pattern ?? [
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
	];

	return (
		<div
			className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2
      h-full w-full mask-[linear-gradient(white,transparent)]"
		>
			<div
				className="absolute inset-0 bg-linear-to-r
        mask-[radial-gradient(farthest-side_at_top,white,transparent)]
        dark:from-main/20 dark:to-main/10 from-neutral-100/30 to-neutral-300/30 opacity-100"
			>
				<GridPattern
					width={size}
					height={size}
					x={-12}
					y={4}
					squares={p}
					className="absolute inset-0 h-full w-full mix-blend-overlay
            dark:fill-indigo-500/20 dark:stroke-indigo-500/10 stroke-black/10 fill-black/10"
				/>
			</div>
		</div>
	);
};

const GridPattern = ({
	width,
	height,
	x,
	y,
	squares,
	...props
}: GridPatternProps) => {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				strokeWidth={0}
				fill={`url(#${patternId})`}
			/>
			{squares && (
				// biome-ignore lint/a11y/noSvgWithoutTitle: svg without title is not accessible
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], idx) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}-${
								// biome-ignore lint/suspicious/noArrayIndexKey: use index
								idx
							}`}
							width={width + 1}
							height={height + 1}
							x={x * width}
							y={y * height}
							suppressHydrationWarning
						/>
					))}
				</svg>
			)}
		</svg>
	);
};

export default GridPatternBackground;
