/**
 * Site navigation and structure content
 * Defines the information architecture and user journey
 */

export interface NavItem {
  label: string;
  path: string;
  description?: string;
  children?: NavItem[];
}

export interface CTAConfig {
  primary: {
    label: string;
    path: string;
    description: string;
  };
  secondary?: {
    label: string;
    path: string;
    description: string;
  };
}

// Main navigation structure
export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    path: '/services',
    description: 'Solutions that work while you sleep',
  },
  {
    label: 'How It Works',
    path: '/creative-solutions',
    description: 'The I.S.I Framework',
  },
  {
    label: 'Process',
    path: '/process',
    description: 'From challenge to solution',
  },
  {
    label: 'For Investors',
    path: '/investors',
    description: 'Investment opportunities',
  },
];

// Primary CTA configuration (consistent across site)
export const primaryCTA: CTAConfig = {
  primary: {
    label: 'Tell Us Your Challenge',
    path: '/system-request',
    description: 'Get a custom solution designed for your business',
  },
  secondary: {
    label: 'See What We Build',
    path: '/services',
    description: 'Explore solutions',
  },
};

// Hero section variations (problem-hook approach)
export const heroContent = {
  // Primary version - problem hook
  primary: {
    headline: 'Your business runs 8 hours a day. Your competitors\' AI runs 24.',
    subheadline:
      'We build custom automation that handles outreach, calls, and customer engagement while you sleep.',
    cta: {
      primary: 'Tell Us Your Challenge',
      secondary: 'See What We Build',
    },
    proof: {
      metric: '$126k',
      label: 'Average revenue protected per client annually',
    },
  },

  // Alternative version - outcome focus
  alternative: {
    headline: 'Stop losing leads after 5pm.',
    subheadline:
      'Every missed call costs $1,200. Every ignored email loses a prospect. We fix that.',
    cta: {
      primary: 'Get 24/7 Coverage',
      secondary: 'See How It Works',
    },
    proof: {
      metric: '100%',
      label: 'Call answer rate, 24/7/365',
    },
  },

  // Credibility version - results focus
  credibility: {
    headline: 'AI that actually works. Not demos. Production systems.',
    subheadline:
      '87% of AI projects fail. Every one of ours reaches production. Here\'s why.',
    cta: {
      primary: 'Start a Project',
      secondary: 'See the I.S.I Framework',
    },
    proof: {
      metric: '0',
      label: 'Projects that never reached production',
    },
  },
};

// Page-specific headlines and value propositions
export const pageContent = {
  home: {
    headline: heroContent.primary.headline,
    subheadline: heroContent.primary.subheadline,
    valueProps: [
      '24/7 operation without human oversight',
      'Custom-built for your exact workflows',
      'Measurable ROI within 90 days',
    ],
  },
  services: {
    headline: 'Solutions That Work While You Don\'t',
    subheadline:
      'Each system is built for a specific problem. Find yours.',
  },
  creativeSolutions: {
    headline: 'Why 87% of AI Projects Fail (And Ours Don\'t)',
    subheadline:
      'The I.S.I Framework: Intelligence → System → Implementation',
  },
  process: {
    headline: 'From Challenge to Working System',
    subheadline:
      'A transparent process. No black boxes. No surprises.',
  },
  systemRequest: {
    headline: 'What\'s Costing You Time Right Now?',
    subheadline:
      'Describe the problem. We\'ll show you how to automate it.',
  },
  investors: {
    headline: 'Investment Opportunities',
    subheadline:
      'Building AI-powered business tools across multiple markets.',
  },
};

// Footer navigation groups (updated to match new service IDs)
export const footerNavigation = {
  services: {
    label: 'Solutions',
    links: [
      { label: 'Outbound Pipeline', path: '/services#outbound-pipeline' },
      { label: 'Content Engine', path: '/services#content-engine' },
      { label: 'Never Miss', path: '/services#never-miss' },
      { label: 'Website That Sells', path: '/services#website-sells' },
      { label: 'Custom Automation', path: '/services#custom-automation' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'How It Works', path: '/creative-solutions' },
      { label: 'Our Process', path: '/process' },
      { label: 'For Investors', path: '/investors' },
      { label: 'Start a Project', path: '/system-request' },
    ],
  },
};

// Social proof structure (for future testimonials)
export const socialProof = {
  metrics: [
    { value: '$126k', label: 'Revenue protected per client/year', source: 'Client average' },
    { value: '100%', label: 'Project deployment rate', source: 'Internal data' },
    { value: '24/7', label: 'System operation', source: 'Uptime monitoring' },
  ],
  testimonials: {
    placeholder: true, // Will be replaced with real testimonials
    structure: {
      quote: 'string',
      author: 'string',
      role: 'string',
      company: 'string',
      result: 'string', // Quantified outcome
    },
  },
  logos: {
    placeholder: true,
    note: 'Add client logos when permission granted',
  },
};

// User journey stages (for analytics and optimization)
export const userJourneyStages = {
  awareness: {
    pages: ['/', '/services'],
    goal: 'Understand what HahneAI offers',
    successMetric: 'Time on site > 30s, Pages viewed > 1',
  },
  consideration: {
    pages: ['/creative-solutions', '/process'],
    goal: 'Evaluate if HahneAI is right for their needs',
    successMetric: 'Scroll depth > 50%, Return visit',
  },
  decision: {
    pages: ['/system-request'],
    goal: 'Submit a project request',
    successMetric: 'Form submission',
  },
};
