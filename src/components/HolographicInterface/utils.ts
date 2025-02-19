import { Alert, Point, ScanLine } from './types';
import { ALERT_MESSAGES, FRAME_HEIGHT, FRAME_WIDTH } from './constants';

export function generateBackground(): Point[] {
  const points: Point[] = [];
  for (let y = 0; y < FRAME_HEIGHT; y++) {
    for (let x = 0; x < FRAME_WIDTH; x++) {
      if (Math.random() < 0.1) {
        points.push({
          x,
          y,
          char: Math.random() < 0.5 ? '.' : '·',
        });
      }
    }
  }
  return points;
}

export function generateScanLines(): ScanLine[] {
  return [
    { position: 0, direction: 'vertical' },
    { position: 0, direction: 'horizontal' },
  ];
}

export function generateAlert(): Alert {
  const types = ['status', 'location', 'security', 'performance'] as const;
  const type = types[Math.floor(Math.random() * types.length)];
  const messages = ALERT_MESSAGES[type];
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  return {
    type,
    message,
    timestamp: Date.now(),
  };
}

export function getFrameChar(x: number, y: number, frame: string[][]): string {
  return frame[y]?.[x] || ' ';
}