/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // ===========================================
      // TYPOGRAPHY
      // ===========================================
      fontFamily: {
        // Display/Headlines - Keep Space Mono for brand identity
        'space': ['Space Mono', 'monospace'],
        'mono': ['Space Mono', 'monospace'],

        // Body text - Readable, warm, professional
        'body': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],

        // Accent/Editorial - For pull quotes, testimonials
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },

      fontSize: {
        // Fluid typography scale (inspired by Anthropic's clamp-based system)
        'display-2xl': ['clamp(3rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 4vw + 1rem, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 3vw + 1rem, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 2vw + 0.5rem, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)', { lineHeight: '1.3' }],

        // Body text scale
        'body-xl': ['1.25rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },

      // ===========================================
      // COLOR PALETTE
      // ===========================================
      colors: {
        // Primary Brand - Refined red (warmer than pure #dc2626)
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fcaca5',
          400: '#f87b70',
          500: '#ef5244',   // Main primary - warm coral red
          600: '#dc3626',   // Slightly warmer than original
          700: '#b92a1c',
          800: '#992619',
          900: '#7f261b',
          950: '#450f09',
        },

        // Secondary - Warm amber/gold (complementary warmth)
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',   // Warm amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },

        // Tertiary - Terra cotta (Anthropic-inspired warmth)
        terra: {
          50: '#fdf6f3',
          100: '#fae9e2',
          200: '#f6d7c9',
          300: '#efbda6',
          400: '#e59878',
          500: '#da7756',   // Anthropic's signature terra cotta
          600: '#c75f3f',
          700: '#a74c33',
          800: '#8a4130',
          900: '#733a2c',
          950: '#3e1b13',
        },

        // Neutrals - Warm gray scale (not stark black/white)
        neutral: {
          50: '#faf9f7',    // Warm off-white (background)
          100: '#f5f3ef',   // Cream
          200: '#e8e5de',   // Light warm gray
          300: '#d6d2c8',   // Warm gray
          400: '#b5b0a4',   // Medium warm gray
          500: '#918b7e',   // Balanced warm gray
          600: '#756f64',   // Dark warm gray
          700: '#5f5a51',   // Charcoal warm
          800: '#4a4640',   // Deep charcoal
          900: '#3d3929',   // Near black (Anthropic text color)
          950: '#1c1a16',   // Rich black
        },

        // Surface colors (for backgrounds and cards)
        surface: {
          light: '#faf9f7',     // Primary light background
          cream: '#f5f3ef',     // Secondary light background
          muted: '#e8e5de',     // Muted sections
          dark: '#1c1a16',      // Dark mode background
          elevated: '#242220',  // Elevated dark surfaces
        },

        // Semantic colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },

      // ===========================================
      // SPACING SYSTEM
      // ===========================================
      spacing: {
        // Extended spacing for generous whitespace
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',

        // Section spacing
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
      },

      // ===========================================
      // ANIMATION & TRANSITIONS
      // ===========================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '400ms',
        'slower': '600ms',
        'slowest': '800ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',       // Anthropic's text animation curve
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fade-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },

      // ===========================================
      // LAYOUT & SIZING
      // ===========================================
      maxWidth: {
        'content': '65ch',      // Optimal reading width
        'content-wide': '80ch', // Wider content
        'prose': '70ch',        // Prose blocks
      },

      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px -4px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px -8px rgba(0, 0, 0, 0.16)',
        'glow-primary': '0 0 20px -5px rgba(239, 82, 68, 0.3)',
        'glow-secondary': '0 0 20px -5px rgba(245, 158, 11, 0.3)',
        'glow-terra': '0 0 20px -5px rgba(218, 119, 86, 0.3)',
      },

      // ===========================================
      // BACKGROUND GRADIENTS
      // ===========================================
      backgroundImage: {
        // Brand gradients
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #ef5244, #f59e0b)',
        'gradient-terra': 'linear-gradient(135deg, #da7756, #f59e0b)',
        'gradient-dark': 'linear-gradient(135deg, #1c1a16, #3d3929)',

        // Subtle gradients for depth
        'gradient-surface': 'linear-gradient(180deg, #faf9f7 0%, #f5f3ef 100%)',
        'gradient-surface-dark': 'linear-gradient(180deg, #1c1a16 0%, #242220 100%)',
      },
    },
  },
  plugins: [],
};
