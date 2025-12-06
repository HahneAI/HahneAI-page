import { Alert, GridCell, ScanLine } from './types';
import { ALERT_MESSAGES, GRID_COLS, GRID_ROWS } from './constants';

export function generateGrid(): GridCell[][] {
  return Array(GRID_ROWS).fill(null).map(() =>
    Array(GRID_COLS).fill(null).map(() => ({
      char: Math.random() < 0.1 ? (Math.random() < 0.5 ? '.' : '·') : ' ',
      opacity: Math.random() * 0.3 + 0.1,
      flash: false,
    }))
  );
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
  const messageIndex = Math.floor(Math.random() * messages.length);
  const message = typeof messages[messageIndex] === 'function' 
    ? messages[messageIndex]() 
    : messages[messageIndex];
  
  return {
    type,
    message,
    timestamp: Date.now(),
  };
}

export function updateGrid(grid: GridCell[][]): GridCell[][] {
  return grid.map(row =>
    row.map(cell => ({
      ...cell,
      opacity: Math.random() < 0.05 ? Math.random() * 0.3 + 0.1 : cell.opacity,
      flash: Math.random() < 0.01,
    }))
  );
}