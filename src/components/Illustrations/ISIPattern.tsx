/**
 * Abstract geometric pattern for I.S.I Framework
 * Represents methodology, structure, and transformation
 */
export function ISIPattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="isi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="isi-phase1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="isi-phase2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="isi-phase3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#isi-gradient)" />

      {/* Three-phase framework visualization */}

      {/* Phase 1: Identify */}
      <g transform="translate(100, 200)">
        <circle cx="80" cy="100" r="70" fill="url(#isi-phase1)" />
        <circle cx="80" cy="100" r="50" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

        {/* Magnifying glass icon representation */}
        <circle cx="80" cy="90" r="25" fill="none" stroke="#14b8a6" strokeWidth="3" opacity="0.9" />
        <line x1="98" y1="108" x2="110" y2="120" stroke="#14b8a6" strokeWidth="3" opacity="0.9" />

        <text x="80" y="170" fill="#94a3b8" fontSize="14" textAnchor="middle" fontWeight="600">Identify</text>
      </g>

      {/* Phase 2: System */}
      <g transform="translate(320, 200)">
        <circle cx="80" cy="100" r="70" fill="url(#isi-phase2)" />
        <circle cx="80" cy="100" r="50" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />

        {/* Blueprint/grid icon representation */}
        <rect x="60" y="80" width="40" height="40" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.9" />
        <line x1="60" y1="90" x2="100" y2="90" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
        <line x1="60" y1="100" x2="100" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
        <line x1="60" y1="110" x2="100" y2="110" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
        <line x1="70" y1="80" x2="70" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
        <line x1="80" y1="80" x2="80" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
        <line x1="90" y1="80" x2="90" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />

        <text x="80" y="170" fill="#94a3b8" fontSize="14" textAnchor="middle" fontWeight="600">System</text>
      </g>

      {/* Phase 3: Implement */}
      <g transform="translate(540, 200)">
        <circle cx="80" cy="100" r="70" fill="url(#isi-phase3)" />
        <circle cx="80" cy="100" r="50" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

        {/* Rocket/launch icon representation */}
        <polygon
          points="80,75 70,115 80,105 90,115"
          fill="#14b8a6"
          opacity="0.9"
        />
        <circle cx="80" cy="95" r="8" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.9" />

        <text x="80" y="170" fill="#94a3b8" fontSize="14" textAnchor="middle" fontWeight="600">Implement</text>
      </g>

      {/* Connection arrows */}
      <defs>
        <marker id="isi-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#14b8a6" opacity="0.6" />
        </marker>
      </defs>

      <path
        d="M 230 300 L 320 300"
        stroke="#14b8a6"
        strokeWidth="2"
        markerEnd="url(#isi-arrow)"
        opacity="0.5"
      />
      <path
        d="M 450 300 L 540 300"
        stroke="#3b82f6"
        strokeWidth="2"
        markerEnd="url(#isi-arrow)"
        opacity="0.5"
      />

      {/* Decorative elements */}
      <g opacity="0.3">
        <rect x="50" y="450" width="150" height="4" rx="2" fill="#14b8a6" />
        <rect x="220" y="470" width="100" height="4" rx="2" fill="#3b82f6" />
        <rect x="340" y="450" width="180" height="4" rx="2" fill="#14b8a6" />
        <rect x="540" y="465" width="120" height="4" rx="2" fill="#3b82f6" />
      </g>

      {/* Background geometric shapes */}
      <polygon
        points="700,100 750,50 750,150"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.2"
      />
      <circle cx="100" cy="80" r="30" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}
