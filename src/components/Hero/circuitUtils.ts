export interface Circuit {
  start: { x: number; y: number };
  end: { x: number; y: number };
  progress: number;
  color: string;
  speed: number;
  active: boolean;
}

export function drawCircuit(ctx: CanvasRenderingContext2D, circuit: Circuit) {
  const { start, end, progress, color } = circuit;
  
  // Calculate current position along the path
  const currentX = start.x + (end.x - start.x) * progress;
  const currentY = start.y + (end.y - start.y) * progress;

  // Draw the path
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(currentX, currentY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw the moving point
  ctx.beginPath();
  ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
  ctx.fill();
}