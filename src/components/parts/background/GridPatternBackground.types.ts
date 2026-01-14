export type GridPatternProps = React.SVGProps<SVGSVGElement> & {
	width: number;
	height: number;
	x?: number;
	y?: number;
	squares?: number[][];
};

export type GridPatternBackgroundProps = {
	pattern?: number[][];
	/**
	 * @default 20
	 */
	size?: number;
};
