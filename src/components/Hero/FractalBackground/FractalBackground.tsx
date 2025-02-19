import { useEffect, useRef } from 'react';
import { drawFractal } from './fractalUtils';
import { morphShapes } from './morphUtils';
import { type Point, type Shape } from './types';
import { COLORS, SHAPES } from './constants';

export function FractalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentShape: Shape;
    let nextShape: Shape;
    let morphProgress = 0;
    let colorIndex = 0;
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      currentShape = SHAPES[0];
      nextShape = SHAPES[1];
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update color gradient
      colorIndex = (colorIndex + 0.001) % COLORS.length;
      const currentColor = COLORS[Math.floor(colorIndex)];
      const nextColor = COLORS[(Math.floor(colorIndex) + 1) % COLORS.length];
      const colorProgress = colorIndex % 1;

      // Draw fractal
      const center: Point = { x: canvas.width / 2, y: canvas.height / 2 };
      const size = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Morph between shapes
      morphProgress += 0.002;
      if (morphProgress >= 1) {
        morphProgress = 0;
        currentShape = nextShape;
        nextShape = SHAPES[(SHAPES.indexOf(nextShape) + 1) % SHAPES.length];
      }

      const morphedPoints = morphShapes(currentShape, nextShape, morphProgress);
      drawFractal(ctx, center, size, morphedPoints, currentColor, nextColor, colorProgress);

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-black"
      style={{
        filter: 'blur(1px)',
        background: 'linear-gradient(to bottom, #000000, #1a1a2e)',
      }}
    />
  );
}