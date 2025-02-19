import { type Point } from './types';

export function drawFractal(
  ctx: CanvasRenderingContext2D,
  center: Point,
  size: number,
  points: Point[],
  currentColor: string,
  nextColor: string,
  colorProgress: number
) {
  const iterations = 5;
  drawFractalLayer(ctx, center, size, points, iterations, currentColor, nextColor, colorProgress);
}

function drawFractalLayer(
  ctx: CanvasRenderingContext2D,
  center: Point,
  size: number,
  points: Point[],
  iteration: number,
  currentColor: string,
  nextColor: string,
  colorProgress: number
) {
  if (iteration <= 0) return;

  // Draw current layer
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = center.x + point.x * (size / 100);
    const y = center.y + point.y * (size / 100);
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();
  
  // Interpolate between colors
  const alpha = (6 - iteration) * 0.15;
  ctx.strokeStyle = `rgba(${interpolateColor(currentColor, nextColor, colorProgress)}, ${alpha})`;
  ctx.lineWidth = iteration;
  ctx.stroke();

  // Draw sub-fractals
  const subSize = size * 0.5;
  const subPoints = rotatePoints(points, iteration * Math.PI / 8);
  
  points.forEach(point => {
    const subCenter = {
      x: center.x + point.x * (size / 150),
      y: center.y + point.y * (size / 150),
    };
    drawFractalLayer(
      ctx,
      subCenter,
      subSize,
      subPoints,
      iteration - 1,
      currentColor,
      nextColor,
      colorProgress
    );
  });
}

function rotatePoints(points: Point[], angle: number): Point[] {
  return points.map(point => ({
    x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
    y: point.x * Math.sin(angle) + point.y * Math.cos(angle),
  }));
}

function interpolateColor(color1: string, color2: string, progress: number): string {
  const c1 = color1.match(/\d+/g)?.map(Number) || [0, 0, 0];
  const c2 = color2.match(/\d+/g)?.map(Number) || [0, 0, 0];
  
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * progress);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * progress);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * progress);
  
  return `${r}, ${g}, ${b}`;
}