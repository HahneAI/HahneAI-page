const LOCATIONS = [
  // US States
  'NEW YORK', 'CALIFORNIA', 'TEXAS', 'FLORIDA', 'ILLINOIS',
  'PENNSYLVANIA', 'OHIO', 'MICHIGAN', 'GEORGIA', 'WASHINGTON',
  
  // European Countries
  'FRANCE', 'GERMANY', 'UNITED KINGDOM', 'ITALY', 'SPAIN',
  'NETHERLANDS', 'SWEDEN', 'NORWAY', 'SWITZERLAND', 'AUSTRIA',
  
  // Middle Eastern Countries
  'UAE', 'SAUDI ARABIA', 'QATAR', 'BAHRAIN', 'KUWAIT',
  'OMAN', 'JORDAN', 'ISRAEL', 'TURKEY'
];

function getRandomLocations(count: number = 2): string {
  const shuffled = [...LOCATIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).join(', ');
}

export const ALERT_MESSAGES = {
  status: [
    'SYSTEM EFFICIENCY: 92.4%',
    'NEURAL NETWORK: STABLE',
    'CORE TEMPERATURE: NOMINAL',
    'BANDWIDTH USAGE: 78.3%',
    'QUANTUM SYNC: OPTIMIZED',
  ],
  location: [
    () => `GEO GRID LIVE: ${getRandomLocations()}`,
    'SATELLITE UPLINK: CONNECTED',
    'GLOBAL NODES: 127 ACTIVE',
    'NETWORK LATENCY: 12ms',
  ],
  security: [
    'FIREWALL STATUS: OPTIMAL',
    'ENCRYPTION: QUANTUM-SAFE',
    'THREAT LEVEL: MINIMAL',
    'SECURITY PROTOCOLS: ACTIVE',
  ],
  performance: [
    'QUANTUM PROCESSING: ACTIVE',
    'AI CORES: 100% OPERATIONAL',
    'MEMORY USAGE: 42.7%',
    'PROCESSING POWER: OPTIMAL',
  ],
};

export const GRID_COLS = Math.floor(window.innerWidth / 20);
export const GRID_ROWS = Math.floor(window.innerHeight / 20);
export const REFRESH_RATE = 500; // 2fps
export const FLASH_DURATION = 200;
export const ALERT_INTERVAL = 8000; // 8 seconds