/**
 * Abstract geometric pattern for Real Estate case study
 * Represents properties, leads, and automated engagement
 */
export function RealEstatePattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="realestate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#realestate-gradient)" />

      {/* House/building abstract shapes */}
      <g transform="translate(250, 200)">
        {/* Building 1 */}
        <rect
          x="0"
          y="60"
          width="80"
          height="120"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        <polygon
          points="0,60 40,20 80,60"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        {/* Windows */}
        <rect x="15" y="80" width="20" height="25" fill="#3b82f6" opacity="0.3" />
        <rect x="45" y="80" width="20" height="25" fill="#3b82f6" opacity="0.3" />
        <rect x="15" y="120" width="20" height="25" fill="#3b82f6" opacity="0.3" />
        <rect x="45" y="120" width="20" height="25" fill="#3b82f6" opacity="0.3" />

        {/* Building 2 */}
        <rect
          x="100"
          y="80"
          width="70"
          height="100"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.6"
        />
        <polygon
          points="100,80 135,50 170,80"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Windows */}
        <rect x="115" y="95" width="15" height="20" fill="#14b8a6" opacity="0.4" />
        <rect x="140" y="95" width="15" height="20" fill="#14b8a6" opacity="0.4" />
        <rect x="115" y="130" width="15" height="20" fill="#14b8a6" opacity="0.4" />
        <rect x="140" y="130" width="15" height="20" fill="#14b8a6" opacity="0.4" />

        {/* Building 3 */}
        <rect
          x="190"
          y="70"
          width="90"
          height="110"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.4"
        />
        <polygon
          points="190,70 235,30 280,70"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.4"
        />
      </g>

      {/* Lead funnel */}
      <g transform="translate(500, 150)">
        <polygon
          points="0,0 150,0 130,60 20,60"
          fill="url(#realestate-gradient)"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.5"
        />
        <text x="75" y="35" fill="#94a3b8" fontSize="14" textAnchor="middle">Leads</text>

        <polygon
          points="20,60 130,60 115,110 35,110"
          fill="url(#realestate-gradient)"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.6"
        />
        <text x="75" y="90" fill="#94a3b8" fontSize="14" textAnchor="middle">Qualified</text>

        <polygon
          points="35,110 115,110 105,150 45,150"
          fill="#14b8a6"
          opacity="0.5"
        />
        <text x="75" y="135" fill="#0f172a" fontSize="14" textAnchor="middle">Closed</text>
      </g>

      {/* Communication/engagement indicators */}
      <g transform="translate(150, 400)">
        {/* Email */}
        <rect
          x="0"
          y="0"
          width="80"
          height="50"
          rx="4"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        <polygon
          points="0,0 40,25 80,0"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        <text x="40" y="70" fill="#94a3b8" fontSize="12" textAnchor="middle">Email</text>
      </g>

      <g transform="translate(300, 400)">
        {/* Phone */}
        <rect
          x="0"
          y="0"
          width="50"
          height="50"
          rx="8"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.6"
        />
        <circle cx="25" cy="15" r="6" fill="#14b8a6" opacity="0.4" />
        <rect x="10" y="30" width="30" height="12" rx="2" fill="#14b8a6" opacity="0.4" />
        <text x="25" y="70" fill="#94a3b8" fontSize="12" textAnchor="middle">Call</text>
      </g>

      <g transform="translate(420, 400)">
        {/* SMS */}
        <rect
          x="0"
          y="0"
          width="60"
          height="50"
          rx="4"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        <line x1="10" y1="15" x2="50" y2="15" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <line x1="10" y1="25" x2="40" y2="25" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <line x1="10" y1="35" x2="45" y2="35" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <text x="30" y="70" fill="#94a3b8" fontSize="12" textAnchor="middle">SMS</text>
      </g>

      {/* Success metrics */}
      <g transform="translate(100, 100)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.5" />
        <text x="0" y="5" fill="#14b8a6" fontSize="16" textAnchor="middle" fontWeight="600">↑</text>
        <text x="0" y="50" fill="#94a3b8" fontSize="10" textAnchor="middle">Response</text>
      </g>
    </svg>
  );
}
