/**
 * Abstract geometric pattern for Never Miss (Call Management)
 * Represents 24/7 availability, connection, and responsiveness
 */
export function CallPattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="call-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="call-pulse">
          <stop offset="0%" stopColor="#ef5244" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#ef5244" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ef5244" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill="url(#call-gradient)" />

      {/* 24/7 clock representation */}
      <circle cx="400" cy="300" r="150" fill="none" stroke="#da7756" strokeWidth="2" opacity="0.3" />
      <circle cx="400" cy="300" r="130" fill="none" stroke="#ef5244" strokeWidth="2" opacity="0.4" />
      <circle cx="400" cy="300" r="110" fill="none" stroke="#da7756" strokeWidth="1" opacity="0.5" />

      {/* Time markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 400 + Math.cos(rad) * 140;
        const y1 = 300 + Math.sin(rad) * 140;
        const x2 = 400 + Math.cos(rad) * 150;
        const y2 = 300 + Math.sin(rad) * 150;

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ef5244"
            strokeWidth={i % 3 === 0 ? "3" : "1"}
            opacity="0.6"
          />
        );
      })}

      {/* Pulse waves - representing active monitoring */}
      <circle cx="400" cy="300" r="180" fill="url(#call-pulse)" opacity="0.4" />
      <circle cx="400" cy="300" r="220" fill="url(#call-pulse)" opacity="0.2" />

      {/* Signal indicators */}
      <g transform="translate(250, 150)">
        <rect x="0" y="30" width="8" height="20" fill="#ef5244" opacity="0.6" rx="2" />
        <rect x="15" y="20" width="8" height="30" fill="#ef5244" opacity="0.7" rx="2" />
        <rect x="30" y="10" width="8" height="40" fill="#ef5244" opacity="0.8" rx="2" />
        <rect x="45" y="0" width="8" height="50" fill="#ef5244" opacity="0.9" rx="2" />
      </g>

      {/* Connection nodes */}
      <circle cx="550" cy="200" r="30" fill="url(#call-pulse)" />
      <circle cx="550" cy="200" r="15" fill="#ef5244" opacity="0.8" />

      <circle cx="250" cy="400" r="25" fill="url(#call-pulse)" />
      <circle cx="250" cy="400" r="12" fill="#da7756" opacity="0.8" />

      {/* Active connection lines */}
      <path
        d="M 400 300 L 550 200"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />
      <path
        d="M 400 300 L 250 400"
        stroke="#da7756"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />
    </svg>
  );
}
