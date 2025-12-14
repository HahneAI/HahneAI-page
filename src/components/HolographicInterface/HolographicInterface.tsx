import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Point, ScanLine } from './types';
import { FRAME_HEIGHT, FRAME_WIDTH, REFRESH_RATE } from './constants';
import { generateAlert, generateBackground, generateScanLines, getFrameChar } from './utils';

export function HolographicInterface() {
  const [frame, setFrame] = useState<string[][]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [background, setBackground] = useState<Point[]>([]);
  const [scanLines, setScanLines] = useState<ScanLine[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFrame = useCallback(() => {
    const newFrame = Array(FRAME_HEIGHT).fill(null).map(() => 
      Array(FRAME_WIDTH).fill(' ')
    );

    // Draw background
    background.forEach(({ x, y, char }) => {
      if (newFrame[y]?.[x]) newFrame[y][x] = char;
    });

    // Draw scan lines
    scanLines.forEach(({ position, direction }) => {
      if (direction === 'vertical') {
        for (let y = 0; y < FRAME_HEIGHT; y++) {
          newFrame[y][position] = '|';
        }
      } else {
        for (let x = 0; x < FRAME_WIDTH; x++) {
          newFrame[position][x] = '-';
        }
      }
    });

    // Draw frame border
    for (let x = 0; x < FRAME_WIDTH; x++) {
      newFrame[0][x] = '=';
      newFrame[FRAME_HEIGHT - 1][x] = '=';
    }
    for (let y = 0; y < FRAME_HEIGHT; y++) {
      newFrame[y][0] = '‖';
      newFrame[y][FRAME_WIDTH - 1] = '‖';
    }

    setFrame(newFrame);
  }, [background, scanLines]);

  useEffect(() => {
    setBackground(generateBackground());
    setScanLines(generateScanLines());

    const frameInterval = setInterval(() => {
      setScanLines(prev => prev.map(line => ({
        ...line,
        position: (line.position + 1) % (line.direction === 'vertical' ? FRAME_WIDTH : FRAME_HEIGHT),
      })));
      setBackground(generateBackground());
    }, REFRESH_RATE);

    const alertInterval = setInterval(() => {
      setAlerts(prev => [...prev, generateAlert()].slice(-3));
    }, 5000);

    return () => {
      clearInterval(frameInterval);
      clearInterval(alertInterval);
    };
  }, []);

  useEffect(() => {
    updateFrame();
  }, [background, scanLines, updateFrame]);

  return (
    <div
      ref={containerRef}
      className="relative font-mono text-secondary-400 p-4 bg-surface-dark rounded-lg shadow-lg transform transition-transform duration-300"
      style={{
        maxWidth: 'fit-content',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <pre className="whitespace-pre leading-none">
        {frame.map((row, y) => (
          <div key={y} className="flex">
            {row.map((char, x) => (
              <span
                key={`${x}-${y}`}
                className={`
                  transition-colors duration-300
                  ${isHovered ? 'text-secondary-300' : 'text-secondary-400'}
                `}
              >
                {getFrameChar(x, y, frame)}
              </span>
            ))}
          </div>
        ))}
      </pre>
      <div className="absolute top-2 right-2 space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.timestamp}
            className={`
              text-xs px-2 py-1 rounded
              ${alert.type === 'security' ? 'text-primary-400' : 'text-secondary-400'}
              bg-black/50 backdrop-blur-sm
              animate-fade-in
            `}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}