/**
 * Abstract geometric pattern for E-commerce case study
 * Represents online shopping, inventory, and digital transactions
 */
export function EcommercePattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="ecommerce-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#ecommerce-gradient)" />

      {/* Shopping cart abstract representation */}
      <g transform="translate(300, 200)">
        <rect
          x="0"
          y="0"
          width="200"
          height="150"
          rx="8"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
        <rect
          x="20"
          y="20"
          width="160"
          height="110"
          rx="4"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Product cards */}
        <rect x="30" y="30" width="65" height="85" rx="4" fill="#3b82f6" opacity="0.3" />
        <rect x="105" y="30" width="65" height="85" rx="4" fill="#14b8a6" opacity="0.3" />

        {/* Shopping indicators */}
        <circle cx="50" cy="170" r="8" fill="#14b8a6" opacity="0.7" />
        <circle cx="150" cy="170" r="8" fill="#14b8a6" opacity="0.7" />
      </g>

      {/* Transaction flow */}
      <g transform="translate(150, 400)">
        <circle cx="0" cy="0" r="40" fill="url(#ecommerce-gradient)" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
        <text x="0" y="5" fill="#94a3b8" fontSize="12" textAnchor="middle">Order</text>
      </g>

      <line
        x1="190"
        y1="400"
        x2="280"
        y2="400"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />

      <g transform="translate(320, 400)">
        <circle cx="0" cy="0" r="40" fill="url(#ecommerce-gradient)" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.7" />
        <text x="0" y="5" fill="#94a3b8" fontSize="12" textAnchor="middle">Process</text>
      </g>

      <line
        x1="360"
        y1="400"
        x2="450"
        y2="400"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />

      <g transform="translate(490, 400)">
        <circle cx="0" cy="0" r="40" fill="url(#ecommerce-gradient)" />
        <circle cx="0" cy="0" r="30" fill="#14b8a6" opacity="0.5" />
        <text x="0" y="5" fill="#0f172a" fontSize="12" textAnchor="middle">Deliver</text>
      </g>

      {/* Inventory boxes */}
      <g opacity="0.4">
        <rect x="600" y="150" width="50" height="50" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="620" y="130" width="50" height="50" fill="none" stroke="#14b8a6" strokeWidth="2" />
        <rect x="640" y="110" width="50" height="50" fill="none" stroke="#3b82f6" strokeWidth="2" />
      </g>

      {/* Analytics graph */}
      <g transform="translate(100, 80)">
        <path
          d="M 0 80 L 20 60 L 40 70 L 60 40 L 80 50 L 100 20"
          stroke="#14b8a6"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <circle cx="0" cy="80" r="4" fill="#14b8a6" opacity="0.8" />
        <circle cx="100" cy="20" r="4" fill="#14b8a6" opacity="0.8" />
      </g>
    </svg>
  );
}
