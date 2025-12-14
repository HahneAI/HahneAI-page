/**
 * Abstract geometric pattern for Outbound Pipeline
 * Represents connection, flow, and automation
 */
export function OutboundPattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="outbound-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="outbound-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef5244" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#da7756" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#outbound-gradient)" />

      {/* Network nodes - representing outreach connections */}
      <circle cx="150" cy="150" r="60" fill="url(#outbound-accent)" opacity="0.2" />
      <circle cx="150" cy="150" r="40" fill="url(#outbound-accent)" opacity="0.3" />
      <circle cx="150" cy="150" r="20" fill="#ef5244" opacity="0.8" />

      <circle cx="650" cy="180" r="50" fill="url(#outbound-accent)" opacity="0.2" />
      <circle cx="650" cy="180" r="30" fill="#da7756" opacity="0.6" />

      <circle cx="400" cy="450" r="70" fill="url(#outbound-accent)" opacity="0.2" />
      <circle cx="400" cy="450" r="45" fill="url(#outbound-accent)" opacity="0.3" />
      <circle cx="400" cy="450" r="25" fill="#ef5244" opacity="0.7" />

      {/* Connection lines - representing pipeline flow */}
      <path
        d="M 150 150 Q 400 100 650 180"
        stroke="#ef5244"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />
      <path
        d="M 150 150 Q 200 300 400 450"
        stroke="#da7756"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />
      <path
        d="M 650 180 Q 550 350 400 450"
        stroke="#ef5244"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />

      {/* Geometric shapes - representing automation */}
      <rect
        x="300"
        y="100"
        width="80"
        height="80"
        fill="none"
        stroke="#ef5244"
        strokeWidth="2"
        opacity="0.3"
        transform="rotate(15 340 140)"
      />
      <rect
        x="500"
        y="350"
        width="60"
        height="60"
        fill="none"
        stroke="#da7756"
        strokeWidth="2"
        opacity="0.3"
        transform="rotate(-20 530 380)"
      />

      {/* Data flow indicators */}
      <polygon
        points="200,250 220,240 220,260"
        fill="#ef5244"
        opacity="0.6"
      />
      <polygon
        points="450,300 470,290 470,310"
        fill="#da7756"
        opacity="0.6"
      />
      <polygon
        points="550,250 570,240 570,260"
        fill="#ef5244"
        opacity="0.6"
      />
    </svg>
  );
}
