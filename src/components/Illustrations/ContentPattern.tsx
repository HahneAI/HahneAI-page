/**
 * Abstract geometric pattern for Content Engine
 * Represents creativity, generation, and distribution
 */
export function ContentPattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="content-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="content-glow">
          <stop offset="0%" stopColor="#da7756" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#da7756" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill="url(#content-gradient)" />

      {/* Central hub - content generation core */}
      <circle cx="400" cy="300" r="100" fill="url(#content-glow)" />
      <circle cx="400" cy="300" r="60" fill="none" stroke="#da7756" strokeWidth="3" opacity="0.6" />
      <circle cx="400" cy="300" r="40" fill="none" stroke="#ef5244" strokeWidth="2" opacity="0.8" />
      <circle cx="400" cy="300" r="20" fill="#da7756" opacity="0.8" />

      {/* Content blocks radiating outward */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 400 + Math.cos(rad) * 200;
        const y = 300 + Math.sin(rad) * 200;

        return (
          <g key={i}>
            <rect
              x={x - 30}
              y={y - 20}
              width="60"
              height="40"
              rx="4"
              fill="none"
              stroke={i % 2 === 0 ? "#ef5244" : "#da7756"}
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="400"
              y1="300"
              x2={x}
              y2={y}
              stroke={i % 2 === 0 ? "#ef5244" : "#da7756"}
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.3"
            />
          </g>
        );
      })}

      {/* Floating geometric shapes - representing diverse content */}
      <polygon
        points="150,100 180,150 120,150"
        fill="none"
        stroke="#ef5244"
        strokeWidth="2"
        opacity="0.4"
      />
      <polygon
        points="650,450 680,500 620,500"
        fill="none"
        stroke="#da7756"
        strokeWidth="2"
        opacity="0.4"
      />
      <circle cx="700" cy="150" r="25" fill="none" stroke="#ef5244" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="450" r="20" fill="none" stroke="#da7756" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
