import { useEffect, useRef } from 'react';
import { drawCircuit, type Circuit } from './circuitUtils';

export function CircuitBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const circuits: Circuit[] = [];
    const nodePositions: { x: number; y: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Create grid of nodes
      const gridSize = 50;
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.7) { // 30% chance to create a node
            nodePositions.push({ x, y });
          }
        }
      }

      // Initialize circuits
      nodePositions.forEach((start) => {
        if (Math.random() > 0.7) { // 30% chance to create a circuit from each node
          const end = nodePositions[Math.floor(Math.random() * nodePositions.length)];
          circuits.push({
            start,
            end,
            progress: 0,
            color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.5})`,
            speed: Math.random() * 0.02 + 0.01,
            active: true,
          });
        }
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update circuits
      circuits.forEach((circuit) => {
        if (circuit.active) {
          drawCircuit(ctx, circuit);
          circuit.progress += circuit.speed;

          if (circuit.progress >= 1) {
            circuit.active = false;
            setTimeout(() => {
              circuit.progress = 0;
              circuit.active = true;
              // Randomly change end point
              circuit.end = nodePositions[Math.floor(Math.random() * nodePositions.length)];
            }, Math.random() * 2000 + 1000);
          }
        }
      });

      // Draw nodes
      nodePositions.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(66, 153, 225, 0.5)';
        ctx.fill();

        // Occasional "spark" effect
        if (Math.random() > 0.995) {
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
          ctx.fill();
        }
      });

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
      className="absolute inset-0 bg-gray-900"
      style={{ filter: 'blur(1px)' }}
    />
  );
}