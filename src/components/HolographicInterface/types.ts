export interface Alert {
  type: 'status' | 'location' | 'security' | 'performance';
  message: string;
  timestamp: number;
}

export interface Point {
  x: number;
  y: number;
  char: string;
}

export interface ScanLine {
  position: number;
  direction: 'horizontal' | 'vertical';
}