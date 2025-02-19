import { motion } from 'framer-motion';

interface MetricIconProps {
  type: string;
  color: string;
}

export function MetricIcon({ type, color }: MetricIconProps) {
  const icons = {
    emails: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    posts: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    time: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    industries: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
        <path
          d="M2 12h20"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 ${color}`}
        />
      </motion.g>
    ),
    tasks: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    errors: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z M12 9v4 M12 17h.01"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    savings: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path 
          d="M3 6h18v12H3z"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
        <path 
          d="M7 2v4m10-4v4"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`stroke-current stroke-2 ${color}`}
        />
        <path 
          d="M7 2h10"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`stroke-current stroke-2 ${color}`}
        />
        <path 
          d="M12 10v4m-2-2h4"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`stroke-current stroke-2 ${color}`}
        />
      </motion.g>
    ),
    interactions: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    satisfaction: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    sales: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M23 6l-9.5 9.5-5-5L2 17"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
        <path
          d="M17 6h6v6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    productivity: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
    hours: (
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current stroke-2 fill-none ${color}`}
        />
      </motion.g>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
    >
      {icons[type as keyof typeof icons]}
    </svg>
  );
}