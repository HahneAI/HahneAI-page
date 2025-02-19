import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  hue: number;
  hueSpeed: number;
}

export function SystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: Node[] = [];
    const nodeCount = 50;
    const connectionDistance = 150;
    const mouseInfluenceRadius = 100;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Create nodes with color properties
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Reduced initial velocity
          vy: (Math.random() - 0.5) * 0.2, // Reduced initial velocity
          radius: Math.random() * 1.5 + 1, // Slightly smaller nodes
          connections: [],
          hue: Math.random() * 60 + 20, // Range from orange to amber
          hueSpeed: (Math.random() - 0.5) * 0.05, // Slower color change
        });
      }
    };

    const updateConnections = () => {
      nodes.forEach((node, i) => {
        node.connections = [];
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              node.connections.push(j);
            }
          }
        });
      });
    };

    const drawNode = (node: Node) => {
      if (!ctx) return;

      // Update node color more slowly
      node.hue += node.hueSpeed;
      if (node.hue > 80) node.hueSpeed = -Math.abs(node.hueSpeed);
      if (node.hue < 20) node.hueSpeed = Math.abs(node.hueSpeed);

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${node.hue}, 100%, 50%, 0.3)`; // Reduced opacity
      ctx.fill();

      // Draw connections with gradient colors
      node.connections.forEach(connectionIndex => {
        const connectedNode = nodes[connectionIndex];
        const dx = node.x - connectedNode.x;
        const dy = node.y - connectedNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = 1 - (distance / connectionDistance);

        const gradient = ctx.createLinearGradient(
          node.x, node.y,
          connectedNode.x, connectedNode.y
        );
        gradient.addColorStop(0, `hsla(${node.hue}, 100%, 50%, ${opacity * 0.15})`); // Reduced opacity
        gradient.addColorStop(1, `hsla(${connectedNode.hue}, 100%, 50%, ${opacity * 0.15})`); // Reduced opacity

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1; // Thinner lines
        ctx.stroke();
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Reduced fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Much lighter fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.001; // Slower time progression

      nodes.forEach(node => {
        // Gentler organic movement
        node.vx += Math.sin(time + node.x * 0.005) * 0.005;
        node.vy += Math.cos(time + node.y * 0.005) * 0.005;

        // Reduced mouse influence
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
          node.vx -= (dx / distance) * force * 0.2; // Reduced force
          node.vy -= (dy / distance) * force * 0.2; // Reduced force
        }

        // Update position with smooth movement
        node.x += node.vx;
        node.y += node.vy;

        // Gentler bounce off walls
        if (node.x < 0) {
          node.x = 0;
          node.vx = Math.abs(node.vx) * 0.5; // More damping
        }
        if (node.x > canvas.width) {
          node.x = canvas.width;
          node.vx = -Math.abs(node.vx) * 0.5; // More damping
        }
        if (node.y < 0) {
          node.y = 0;
          node.vy = Math.abs(node.vy) * 0.5; // More damping
        }
        if (node.y > canvas.height) {
          node.y = canvas.height;
          node.vy = -Math.abs(node.vy) * 0.5; // More damping
        }

        // Stronger friction for more stable movement
        node.vx *= 0.95;
        node.vy *= 0.95;
        const maxSpeed = 1; // Lower max speed
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }
      });

      updateConnections();
      nodes.forEach(drawNode);

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-gray-900"
      style={{ filter: 'blur(0.5px)' }} // Reduced blur
    />
  );
}