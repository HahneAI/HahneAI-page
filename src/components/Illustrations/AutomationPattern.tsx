/**
 * Abstract geometric pattern for Custom Automation
 * Represents flexibility, integration, and intelligent systems
 */
export function AutomationPattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="auto-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#da7756"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </pattern>
      </defs>

      <rect width="800" height="600" fill="url(#auto-gradient)" />
      <rect width="800" height="600" fill="url(#grid)" />

      {/* Central automation engine */}
      <g transform="translate(400, 300)">
        {/* Rotating gears representation */}
        <circle r="80" fill="none" stroke="#ef5244" strokeWidth="2" opacity="0.4" />
        <circle r="60" fill="none" stroke="#da7756" strokeWidth="2" opacity="0.5" />
        <circle r="40" fill="none" stroke="#ef5244" strokeWidth="3" opacity="0.6" />

        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.cos(rad) * 70;
          const y1 = Math.sin(rad) * 70;
          const x2 = Math.cos(rad) * 90;
          const y2 = Math.sin(rad) * 90;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ef5244"
              strokeWidth="4"
              opacity="0.5"
            />
          );
        })}

        <circle r="20" fill="#da7756" opacity="0.7" />
      </g>

      {/* Connected system nodes */}
      {[
        { x: 200, y: 150, color: "#ef5244" },
        { x: 600, y: 150, color: "#da7756" },
        { x: 200, y: 450, color: "#da7756" },
        { x: 600, y: 450, color: "#ef5244" },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="40" fill={node.color} opacity="0.2" />
          <rect
            x={node.x - 25}
            y={node.y - 25}
            width="50"
            height="50"
            rx="4"
            fill="none"
            stroke={node.color}
            strokeWidth="2"
            opacity="0.6"
          />
          <circle cx={node.x} cy={node.y} r="10" fill={node.color} opacity="0.8" />

          {/* Connection lines to center */}
          <path
            d={`M ${node.x} ${node.y} L 400 300`}
            stroke={node.color}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Data flow particles */}
      <g opacity="0.6">
        <circle cx="250" cy="200" r="4" fill="#ef5244" />
        <circle cx="350" cy="250" r="3" fill="#da7756" />
        <circle cx="550" cy="200" r="4" fill="#ef5244" />
        <circle cx="450" cy="350" r="3" fill="#da7756" />
        <circle cx="250" cy="400" r="4" fill="#da7756" />
      </g>

      {/* Process flow indicators */}
      <g transform="translate(100, 50)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="none" stroke="#ef5244" strokeWidth="1.5" opacity="0.5" />
        <text x="40" y="20" fill="#94a3b8" fontSize="12" textAnchor="middle">Input</text>
      </g>
      <g transform="translate(620, 50)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="none" stroke="#da7756" strokeWidth="1.5" opacity="0.5" />
        <text x="40" y="20" fill="#94a3b8" fontSize="12" textAnchor="middle">Process</text>
      </g>
      <g transform="translate(100, 520)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="none" stroke="#ef5244" strokeWidth="1.5" opacity="0.5" />
        <text x="40" y="20" fill="#94a3b8" fontSize="12" textAnchor="middle">Transform</text>
      </g>
      <g transform="translate(620, 520)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="#ef5244" strokeWidth="1.5" opacity="0.8" />
        <text x="40" y="20" fill="#0f172a" fontSize="12" textAnchor="middle">Output</text>
      </g>
    </svg>
  );
}
