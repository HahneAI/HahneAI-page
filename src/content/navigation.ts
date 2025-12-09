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
    description: 'AI automation solutions for your business',
  },
  {
    label: 'Solutions',
    path: '/creative-solutions',
    description: 'Our I.S.I Framework and approach',
  },
  {
    label: 'Process',
    path: '/process',
    description: 'How we work with you',
  },
];

// Primary CTA configuration (consistent across site)
export const primaryCTA: CTAConfig = {
  primary: {
    label: 'Start a Project',
    path: '/system-request',
    description: 'Tell us your challenge and get a custom solution',
  },
  secondary: {
    label: 'See Our Work',
    path: '/services',
    description: 'Explore our AI solutions',
  },
};

// Page-specific headlines and value propositions
export const pageContent = {
  home: {
    headline: 'AI Systems That Work While You Sleep',
    subheadline:
      'Custom AI automation built for your specific business challenges. No off-the-shelf solutions. No cookie-cutter approaches.',
    valueProps: [
      'Custom solutions for your exact needs',
      '24/7 operation without human oversight',
      'Measurable ROI within 90 days',
    ],
  },
  services: {
    headline: 'AI Solutions That Actually Solve Problems',
    subheadline:
      'Every business has unique challenges. We build AI systems tailored to yours.',
  },
  creativeSolutions: {
    headline: 'The I.S.I Framework',
    subheadline:
      'Intelligence → System → Implementation. Our proven approach to AI that delivers results.',
  },
  process: {
    headline: 'From Challenge to Solution',
    subheadline:
      'A transparent process that keeps you informed and in control.',
  },
  systemRequest: {
    headline: 'Tell Us Your Challenge',
    subheadline:
      "Describe what's slowing your business down. We'll design the AI solution.",
  },
};

// Footer navigation groups
export const footerNavigation = {
  services: {
    label: 'Services',
    links: [
      { label: 'AI Cold Outreach', path: '/services#cold-outreach' },
      { label: 'Social Media AI', path: '/services#social-media' },
      { label: 'Call Management', path: '/services#call-management' },
      { label: 'Website Overhaul', path: '/services#website-overhaul' },
      { label: 'AI Agents', path: '/services#website-agents' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'Our Process', path: '/process' },
      { label: 'I.S.I Framework', path: '/creative-solutions' },
      { label: 'Start a Project', path: '/system-request' },
    ],
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
