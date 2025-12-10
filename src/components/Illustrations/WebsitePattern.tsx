/**
 * Abstract geometric pattern for Website That Sells
 * Represents structure, conversion, and user journey
 */
export function WebsitePattern() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="website-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="website-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#website-gradient)" />

      {/* Browser window frame */}
      <rect
        x="150"
        y="100"
        width="500"
        height="400"
        rx="8"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Browser header */}
      <rect
        x="150"
        y="100"
        width="500"
        height="40"
        rx="8"
        fill="url(#website-accent)"
        opacity="0.2"
      />
      <circle cx="180" cy="120" r="6" fill="#3b82f6" opacity="0.6" />
      <circle cx="200" cy="120" r="6" fill="#14b8a6" opacity="0.6" />
      <circle cx="220" cy="120" r="6" fill="#3b82f6" opacity="0.6" />

      {/* Page layout structure */}
      {/* Hero section */}
      <rect
        x="180"
        y="160"
        width="440"
        height="80"
        rx="4"
        fill="url(#website-accent)"
        opacity="0.2"
      />

      {/* Content blocks */}
      <rect
        x="180"
        y="260"
        width="200"
        height="60"
        rx="4"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="2"
        opacity="0.4"
      />
      <rect
        x="400"
        y="260"
        width="220"
        height="60"
        rx="4"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* CTA buttons */}
      <rect
        x="180"
        y="340"
        width="100"
        height="40"
        rx="4"
        fill="#14b8a6"
        opacity="0.6"
      />
      <rect
        x="300"
        y="340"
        width="100"
        height="40"
        rx="4"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Conversion funnel */}
      <g transform="translate(450, 340)">
        <polygon
          points="0,0 100,0 80,40 20,40"
          fill="url(#website-accent)"
          opacity="0.3"
        />
        <polygon
          points="20,40 80,40 70,70 30,70"
          fill="url(#website-accent)"
          opacity="0.5"
        />
        <polygon
          points="30,70 70,70 65,90 35,90"
          fill="#14b8a6"
          opacity="0.7"
        />
      </g>

      {/* Analytics/metrics indicators */}
      <g transform="translate(180, 420)">
        <circle cx="20" cy="20" r="8" fill="#14b8a6" opacity="0.6" />
        <text x="35" y="25" fill="#94a3b8" fontSize="12">Visitors</text>

        <circle cx="150" cy="20" r="8" fill="#3b82f6" opacity="0.6" />
        <text x="165" y="25" fill="#94a3b8" fontSize="12">Engagement</text>

        <circle cx="300" cy="20" r="8" fill="#14b8a6" opacity="0.8" />
        <text x="315" y="25" fill="#94a3b8" fontSize="12">Conversions</text>
      </g>

      {/* User flow arrows */}
      <path
        d="M 400 200 L 400 250"
        stroke="#14b8a6"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
        opacity="0.5"
      />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#14b8a6" opacity="0.5" />
        </marker>
      </defs>
    </svg>
  );
}
