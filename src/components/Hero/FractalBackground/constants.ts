import { type Shape } from './types';

export const COLORS = [
  'rgba(66, 153, 225, 0.8)', // Electric blue
  'rgba(72, 187, 120, 0.8)', // Neon green
  'rgba(159, 122, 234, 0.8)', // Violet
];

export const SHAPES: Shape[] = [
  {
    name: 'brain',
    points: [
      { x: -50, y: -30 }, { x: 50, y: -30 },
      { x: 60, y: 0 }, { x: 50, y: 30 },
      { x: -50, y: 30 }, { x: -60, y: 0 },
    ],
  },
  {
    name: 'gear',
    points: Array.from({ length: 12 }, (_, i) => {
      const angle = (i * Math.PI * 2) / 12;
      const radius = i % 2 === 0 ? 60 : 40;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    }),
  },
  {
    name: 'circuit',
    points: [
      { x: -50, y: -50 }, { x: 50, y: -50 },
      { x: 50, y: 50 }, { x: -50, y: 50 },
      { x: -50, y: -50 },
    ],
  },
];