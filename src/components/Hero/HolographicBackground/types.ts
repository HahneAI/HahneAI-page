export interface Point {
  x: number;
  y: number;
  char: string;
}

export interface ScanLine {
  position: number;
  direction: 'horizontal' | 'vertical';
}

export interface Alert {
  type: 'status' | 'location' | 'security' | 'performance';
  message: string;
  timestamp: number;
  id: string;
}

export interface GridCell {
  char: string;
  opacity: number;
  flash: boolean;
}