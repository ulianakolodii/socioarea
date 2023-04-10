export type SVGPoint = [number, number];

const cp = (
	current: Array<number>,
	previous: Array<number>,
	next: Array<number>,
	reverse: boolean,
	smoothing: number
) => {
	const p = previous || current;
	const n = next || current;
	const o = {
		length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
		angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
	};
	const angle = o.angle + (reverse ? Math.PI : 0);
	const length = o.length * smoothing;
	return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
};

export const getSvgPoint = (point: SVGPoint, i: number, points: Array<SVGPoint>, smoothing: number) => {
	const cps = cp(points[i - 1], points[i - 2], point, false, smoothing);
	const cpe = cp(point, points[i - 1], points[i + 1], true, smoothing);
	return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
};
