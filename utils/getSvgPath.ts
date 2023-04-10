import { SVGPoint } from "./getSvgPoint";

export const getSvgPath = (x: number, smoothing: number) =>
	[
		[2, 2],
		[12 - x, 12 + x],
		[22, 22],
	].reduce(
		(acc, point, i, a) =>
			i === 0
				? `M ${point[0]},${point[1]}`
				: `${acc} ${getSvgPoint(point as SVGPoint, i, a as Array<SVGPoint>, smoothing)}`,
		""
	);
