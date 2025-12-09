import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, GridCell, ScanLine } from './types';
import { ALERT_INTERVAL, FLASH_DURATION, GRID_COLS, GRID_ROWS, REFRESH_RATE } from './constants';
import { generateAlert, generateGrid, generateScanLines, updateGrid } from './utils';

export function HolographicBackground() {
  const [grid, setGrid] = useState<GridCell[][]>(generateGrid());
  const [scanLines, setScanLines] = useState<ScanLine[]>(generateScanLines());
  const [alerts, setAlerts] = useState<Alert[]>([
    { ...generateAlert(), id: 'initial-1' },
    { ...generateAlert(), id: 'initial-2' },
    { ...generateAlert(), id: 'initial-3' },
    { ...generateAlert(), id: 'initial-4' },
  ]);
  const [isFreeze, setIsFreeze] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const alertIdCounter = useRef(1);

  // Add user detection alert after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlerts(prev => [{
        type: 'security',
        message: 'READING: USER DETECTED',
        timestamp: Date.now(),
        id: `user-detected-${Date.now()}`
      }, ...prev.slice(0, 3)]); // Keep first 3 previous alerts plus new one
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = useCallback(() => {
    setIsFreeze(true);
    const flash = () => {
      setGrid(prev => prev.map(row => 
        row.map(cell => ({ ...cell, flash: true }))
      ));
      setTimeout(() => {
        setGrid(prev => prev.map(row => 
          row.map(cell => ({ ...cell, flash: false }))
        ));
      }, FLASH_DURATION);
    };
    
    flash();
    setTimeout(flash, FLASH_DURATION * 2);
  }, []);

  useEffect(() => {
    if (isFreeze) return;

    const gridInterval = setInterval(() => {
      setGrid(updateGrid);
      setScanLines(prev => prev.map(line => ({
        ...line,
        position: (line.position + 1) % (
          line.direction === 'vertical' ? GRID_COLS : GRID_ROWS
        ),
      })));
    }, REFRESH_RATE);

    const alertInterval = setInterval(() => {
      const newAlert = {
        ...generateAlert(),
        id: `alert-${alertIdCounter.current++}`
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 3)]);
    }, ALERT_INTERVAL);

    return () => {
      clearInterval(gridInterval);
      clearInterval(alertInterval);
    };
  }, [isFreeze]);

  useEffect(() => {
    const handleGlobalClick = () => handleClick();
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [handleClick]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 bg-black overflow-hidden"
      style={{ fontSize: '0.5rem' }}
    >
      <div className="relative w-full h-full">
        {/* Left side gradient for desktop */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black/80 to-transparent hidden md:block" />
        
        {/* Mobile overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[20px] md:hidden" />
        
        {grid.map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => {
              const isVerticalScan = scanLines.some(
                line => line.direction === 'vertical' && line.position === x
              );
              const isHorizontalScan = scanLines.some(
                line => line.direction === 'horizontal' && line.position === y
              );

              return (
                <span
                  key={`${x}-${y}`}
                  className={`
                    transition-colors duration-200
                    ${cell.flash ? 'text-white' : ''}
                    ${isVerticalScan || isHorizontalScan ? 'from-primary-600 to-secondary-500' : ''}
                  `}
                  style={{
                    opacity: cell.opacity,
                    background: isVerticalScan || isHorizontalScan ?
                      'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))' :
                      'none',
                  }}
                >
                  {isVerticalScan ? '|' : isHorizontalScan ? '-' : cell.char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <div className="absolute top-4 right-4 space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`
              text-xs px-2 py-1 rounded
              ${alert.type === 'security' ? 'text-primary-400/30' : 'text-secondary-400/30'}
              border border-white/10
              bg-black/90 backdrop-blur-[24px]
              animate-fade-in
              md:opacity-100 md:backdrop-blur-none md:text-primary-400 md:text-secondary-400
              opacity-15 hover:opacity-40 transition-opacity duration-300
            `}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}