import { type Point, type Shape } from './types';

export function morphShapes(shape1: Shape, shape2: Shape, progress: number): Point[] {
  const maxPoints = Math.max(shape1.points.length, shape2.points.length);
  const points1 = normalizePoints(shape1.points, maxPoints);
  const points2 = normalizePoints(shape2.points, maxPoints);

  return points1.map((point1, i) => ({
    x: point1.x + (points2[i].x - point1.x) * progress,
    y: point1.y + (points2[i].y - point1.y) * progress,
  }));
}

function normalizePoints(points: Point[], targetLength: number): Point[] {
  if (points.length === targetLength) return points;

  const normalized: Point[] = [];
  for (let i = 0; i < targetLength; i++) {
    const index = Math.floor((i * points.length) / targetLength);
    normalized.push(points[index]);
  }
  return normalized;
}