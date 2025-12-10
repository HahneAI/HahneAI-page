/**
 * Abstract geometric pattern for Healthcare case study
 * Represents patient care, scheduling, and workflow optimization
 */
export function HealthcarePattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="healthcare-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="healthcare-pulse">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill="url(#healthcare-gradient)" />

      {/* Medical cross symbol */}
      <g transform="translate(350, 150)">
        <rect x="40" y="0" width="20" height="100" rx="4" fill="#14b8a6" opacity="0.6" />
        <rect x="0" y="40" width="100" height="20" rx="4" fill="#14b8a6" opacity="0.6" />
        <circle cx="50" cy="50" r="70" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.4" />
      </g>

      {/* Calendar/scheduling grid */}
      <g transform="translate(520, 180)">
        <rect
          x="0"
          y="0"
          width="200"
          height="160"
          rx="8"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Calendar header */}
        <rect x="0" y="0" width="200" height="30" rx="8" fill="#3b82f6" opacity="0.3" />

        {/* Calendar grid */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => {
            const filled = Math.random() > 0.6;
            return (
              <rect
                key={`${row}-${col}`}
                x={10 + col * 30}
                y={45 + row * 27}
                width="25"
                height="22"
                rx="2"
                fill={filled ? "#14b8a6" : "none"}
                stroke={filled ? "none" : "#3b82f6"}
                strokeWidth="1"
                opacity={filled ? 0.5 : 0.3}
              />
            );
          })
        )}
      </g>

      {/* Patient flow */}
      <g transform="translate(100, 350)">
        <circle cx="40" cy="40" r="35" fill="url(#healthcare-pulse)" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
        <text x="40" y="100" fill="#94a3b8" fontSize="12" textAnchor="middle">Check-in</text>
      </g>

      <path
        d="M 175 390 L 240 390"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />

      <g transform="translate(240, 350)">
        <circle cx="40" cy="40" r="35" fill="url(#healthcare-pulse)" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.7" />
        <text x="40" y="100" fill="#94a3b8" fontSize="12" textAnchor="middle">Consult</text>
      </g>

      <path
        d="M 315 390 L 380 390"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />

      <g transform="translate(380, 350)">
        <circle cx="40" cy="40" r="35" fill="url(#healthcare-pulse)" />
        <circle cx="40" cy="40" r="25" fill="#14b8a6" opacity="0.5" />
        <text x="40" y="100" fill="#94a3b8" fontSize="12" textAnchor="middle">Follow-up</text>
      </g>

      {/* Health monitoring indicators */}
      <g transform="translate(150, 80)">
        {/* Heartbeat line */}
        <path
          d="M 0 30 L 40 30 L 50 10 L 60 50 L 70 20 L 80 30 L 120 30"
          stroke="#14b8a6"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <circle cx="0" cy="30" r="4" fill="#14b8a6" opacity="0.8" />
        <circle cx="120" cy="30" r="4" fill="#14b8a6" opacity="0.8" />
      </g>

      {/* Efficiency metrics */}
      <g transform="translate(100, 500)">
        <rect x="0" y="40" width="15" height="40" rx="2" fill="#3b82f6" opacity="0.4" />
        <text x="7.5" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">Before</text>

        <rect x="50" y="0" width="15" height="80" rx="2" fill="#14b8a6" opacity="0.7" />
        <text x="57.5" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">After</text>

        <text x="-20" y="10" fill="#94a3b8" fontSize="12">Time Saved</text>
      </g>

      {/* Patient records abstraction */}
      <g opacity="0.3">
        <rect x="600" y="420" width="120" height="4" rx="2" fill="#14b8a6" />
        <rect x="620" y="435" width="80" height="4" rx="2" fill="#3b82f6" />
        <rect x="610" y="450" width="100" height="4" rx="2" fill="#14b8a6" />
        <rect x="630" y="465" width="60" height="4" rx="2" fill="#3b82f6" />
      </g>
    </svg>
  );
}
