/**
 * Services content - separated from UI for maintainability
 * Following Avantos problem-first structure:
 * 1. The Problem (pain points)
 * 2. Our Solution (what we build)
 * 3. The Results (quantified outcomes)
 * 4. How It Works (process)
 * 5. Integration Points (tech stack)
 */

import {
  MessageSquare,
  Users,
  Headphones,
  Globe,
  Bot,
  Lightbulb,
  LucideIcon,
} from 'lucide-react';

export interface ServiceProblem {
  headline: string;
  painPoints: string[];
  cost: string; // What this problem costs (time, money, opportunity)
}

export interface ServiceSolution {
  headline: string;
  description: string;
  features: string[];
}

export interface ServiceResult {
  metric: string;
  label: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceIntegration {
  category: string;
  tools: string[];
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  shortDescription: string;

  // Problem-first content
  problem: ServiceProblem;
  solution: ServiceSolution;
  results: ServiceResult[];
  process: ServiceProcess[];
  integrations: ServiceIntegration[];

  // Meta
  imageUrl?: string;
  featured: boolean;
  order: number;
}

export const services: Service[] = [
  {
    id: 'cold-outreach',
    icon: MessageSquare,
    title: 'AI Cold Outreach',
    tagline: 'Turn strangers into customers while you sleep',
    shortDescription:
      'Automated email sequences that sound human and convert.',
    featured: true,
    order: 1,

    problem: {
      headline: 'Manual outreach doesn\'t scale',
      painPoints: [
        'Sales team spends 60% of time on emails that get ignored',
        'Inconsistent follow-up means lost opportunities',
        'Personalization at scale seems impossible',
        'No visibility into what messaging actually works',
      ],
      cost: 'Average: 20+ hours/week wasted on ineffective outreach',
    },

    solution: {
      headline: 'AI-powered sequences that feel personal',
      description:
        'Our AI writes, sends, and follows up on cold emails that sound like your best salesperson - but works 24/7 without breaks.',
      features: [
        'AI-generated personalized emails based on prospect data',
        'Smart follow-up sequences that adapt to responses',
        'A/B testing and continuous optimization',
        'Human-in-the-loop for quality control',
      ],
    },

    results: [
      {
        metric: '40%',
        label: 'Higher open rates',
        description: 'vs. manual email campaigns',
      },
      {
        metric: '3x',
        label: 'More meetings booked',
        description: 'with the same team size',
      },
      {
        metric: '20hrs',
        label: 'Saved per week',
        description: 'per sales rep',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Data Integration',
        description: 'Connect your CRM and prospect sources',
      },
      {
        step: 2,
        title: 'Voice Training',
        description: 'AI learns your brand voice and messaging',
      },
      {
        step: 3,
        title: 'Campaign Launch',
        description: 'Automated sequences go live with monitoring',
      },
      {
        step: 4,
        title: 'Optimization',
        description: 'Continuous improvement based on results',
      },
    ],

    integrations: [
      { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'Pipedrive'] },
      { category: 'Email', tools: ['Gmail', 'Outlook', 'SendGrid'] },
      { category: 'Data', tools: ['LinkedIn', 'Apollo', 'ZoomInfo'] },
    ],
  },

  {
    id: 'social-media',
    icon: Users,
    title: 'Social Media AI',
    tagline: 'Consistent content without the burnout',
    shortDescription:
      'AI creates, schedules, and engages on your social platforms.',
    featured: true,
    order: 2,

    problem: {
      headline: 'Social media demands constant attention',
      painPoints: [
        'Creating daily content is exhausting',
        'Engagement drops when you\'re busy with actual work',
        'Inconsistent posting kills algorithm performance',
        'Trends move faster than you can keep up',
      ],
      cost: 'Most businesses: 10+ hours/week on social, or complete neglect',
    },

    solution: {
      headline: 'Your AI social media manager',
      description:
        'An AI operator that creates on-brand content, schedules posts for optimal times, and engages with your audience - all while you focus on running your business.',
      features: [
        'AI-generated posts matching your brand voice',
        'Optimal timing based on audience analysis',
        'Automated responses to comments and DMs',
        'Trend monitoring and content suggestions',
      ],
    },

    results: [
      {
        metric: '150%',
        label: 'Engagement increase',
        description: 'average across platforms',
      },
      {
        metric: '10hrs',
        label: 'Weekly time saved',
        description: 'on content creation',
      },
      {
        metric: '300%',
        label: 'More consistent',
        description: 'posting frequency',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Brand Analysis',
        description: 'AI learns your voice, style, and audience',
      },
      {
        step: 2,
        title: 'Content Pipeline',
        description: 'Automated content calendar setup',
      },
      {
        step: 3,
        title: 'Engagement Rules',
        description: 'Define response guidelines and escalation',
      },
      {
        step: 4,
        title: 'Launch & Learn',
        description: 'Go live with continuous optimization',
      },
    ],

    integrations: [
      {
        category: 'Platforms',
        tools: ['LinkedIn', 'Twitter/X', 'Instagram', 'Facebook'],
      },
      { category: 'Scheduling', tools: ['Buffer', 'Hootsuite', 'Later'] },
      { category: 'Analytics', tools: ['Sprout Social', 'Native Analytics'] },
    ],
  },

  {
    id: 'call-management',
    icon: Headphones,
    title: 'AI Call Management',
    tagline: 'Never miss a call, never lose a lead',
    shortDescription:
      'AI handles calls, qualifies leads, and books appointments.',
    featured: true,
    order: 3,

    problem: {
      headline: 'Missed calls = missed revenue',
      painPoints: [
        '80% of callers won\'t leave a voicemail',
        'After-hours calls go unanswered',
        'Staff time wasted on unqualified calls',
        'Inconsistent call handling damages brand',
      ],
      cost: 'Average business loses $75k/year to missed calls',
    },

    solution: {
      headline: '24/7 AI receptionist that converts',
      description:
        'An AI that answers every call, qualifies leads using your criteria, books appointments directly in your calendar, and sounds natural doing it.',
      features: [
        'Natural voice AI that handles conversations',
        'Custom qualification scripts for your business',
        'Direct calendar integration for booking',
        'Call summaries and CRM updates',
      ],
    },

    results: [
      {
        metric: '100%',
        label: 'Call answer rate',
        description: '24/7/365',
      },
      {
        metric: '60%',
        label: 'Lead qualification',
        description: 'handled automatically',
      },
      {
        metric: '45%',
        label: 'More appointments',
        description: 'booked automatically',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Call Flow Design',
        description: 'Map your ideal call handling process',
      },
      {
        step: 2,
        title: 'Voice Setup',
        description: 'Configure AI voice and personality',
      },
      {
        step: 3,
        title: 'Integration',
        description: 'Connect calendar and CRM systems',
      },
      {
        step: 4,
        title: 'Go Live',
        description: 'Deploy with human fallback options',
      },
    ],

    integrations: [
      { category: 'Phone', tools: ['Twilio', 'VoIP', 'Existing Lines'] },
      { category: 'Calendar', tools: ['Google Calendar', 'Calendly', 'Acuity'] },
      { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'Custom'] },
    ],
  },

  {
    id: 'website-overhaul',
    icon: Globe,
    title: 'AI Website Overhaul',
    tagline: 'Transform your site into a conversion machine',
    shortDescription:
      'AI-powered website that captures and converts visitors.',
    featured: false,
    order: 4,

    problem: {
      headline: 'Your website is a digital brochure, not a salesperson',
      painPoints: [
        'Visitors browse and leave without converting',
        'Static pages can\'t answer specific questions',
        'Forms get abandoned, leads get lost',
        'No personalization for different visitor types',
      ],
      cost: 'Average: 97% of website visitors leave without action',
    },

    solution: {
      headline: 'A website that sells while you sleep',
      description:
        'We rebuild your website with AI-powered elements that engage visitors, answer questions, qualify leads, and capture information - automatically.',
      features: [
        'AI chatbot trained on your business',
        'Dynamic content personalization',
        'Smart lead capture forms',
        'Exit-intent conversion tools',
      ],
    },

    results: [
      {
        metric: '200%',
        label: 'More conversions',
        description: 'average improvement',
      },
      {
        metric: '50%',
        label: 'Longer sessions',
        description: 'time on site',
      },
      {
        metric: '35%',
        label: 'Lead capture',
        description: 'increase in form submissions',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Site Audit',
        description: 'Analyze current performance and gaps',
      },
      {
        step: 2,
        title: 'AI Integration',
        description: 'Implement chatbot and smart features',
      },
      {
        step: 3,
        title: 'Optimization',
        description: 'A/B test and refine conversion paths',
      },
      {
        step: 4,
        title: 'Scale',
        description: 'Expand AI capabilities based on data',
      },
    ],

    integrations: [
      { category: 'Platforms', tools: ['WordPress', 'Shopify', 'Custom'] },
      { category: 'Chat', tools: ['Intercom', 'Drift', 'Custom AI'] },
      { category: 'Analytics', tools: ['GA4', 'Hotjar', 'Mixpanel'] },
    ],
  },

  {
    id: 'website-agents',
    icon: Bot,
    title: 'Sleepless AI Agents',
    tagline: 'AI employees that work while you don\'t',
    shortDescription:
      'Custom AI agents that handle complex business tasks autonomously.',
    featured: false,
    order: 5,

    problem: {
      headline: 'Your team is the bottleneck',
      painPoints: [
        'Key tasks only get done during business hours',
        'Scaling means hiring, training, managing',
        'Human inconsistency affects quality',
        'You can\'t be everywhere at once',
      ],
      cost: 'Growth limited by human capacity and working hours',
    },

    solution: {
      headline: 'AI agents built for your specific workflows',
      description:
        'Custom AI agents designed for your unique business processes. They work 24/7, never make mistakes from fatigue, and scale instantly.',
      features: [
        'Custom agents for your specific workflows',
        'Multi-step task automation',
        'Learning and improvement over time',
        'Human oversight and escalation',
      ],
    },

    results: [
      {
        metric: '24/7',
        label: 'Operations',
        description: 'round-the-clock capability',
      },
      {
        metric: '10x',
        label: 'Output increase',
        description: 'for automated tasks',
      },
      {
        metric: '95%',
        label: 'Error reduction',
        description: 'vs. manual processes',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Workflow Mapping',
        description: 'Document processes to automate',
      },
      {
        step: 2,
        title: 'Agent Design',
        description: 'Build custom AI for each workflow',
      },
      {
        step: 3,
        title: 'Testing',
        description: 'Rigorous testing with edge cases',
      },
      {
        step: 4,
        title: 'Deployment',
        description: 'Go live with monitoring and iteration',
      },
    ],

    integrations: [
      { category: 'Automation', tools: ['Zapier', 'Make', 'n8n'] },
      { category: 'APIs', tools: ['REST', 'GraphQL', 'Custom'] },
      { category: 'Data', tools: ['Databases', 'Sheets', 'CRMs'] },
    ],
  },

  {
    id: 'isi-framework',
    icon: Lightbulb,
    title: 'I.S.I Framework',
    tagline: 'Our methodology for unstoppable AI systems',
    shortDescription:
      'The proven approach behind every successful AI implementation.',
    featured: true,
    order: 6,

    problem: {
      headline: 'AI projects fail without a proven process',
      painPoints: [
        'Most AI initiatives don\'t deliver expected results',
        'Off-the-shelf tools don\'t fit your unique needs',
        'Implementation without strategy leads to waste',
        'No clear path from idea to working system',
      ],
      cost: '87% of AI projects never make it to production',
    },

    solution: {
      headline: 'Intelligence → System → Implementation',
      description:
        'Our battle-tested framework ensures every AI project starts with deep understanding, designs for real-world use, and delivers measurable results.',
      features: [
        'Deep-dive discovery to understand your business',
        'System architecture designed for your needs',
        'Iterative implementation with fast feedback',
        'Continuous optimization and support',
      ],
    },

    results: [
      {
        metric: '100%',
        label: 'Project success',
        description: 'delivery rate',
      },
      {
        metric: '3x',
        label: 'Faster delivery',
        description: 'than typical AI projects',
      },
      {
        metric: '∞',
        label: 'Scalability',
        description: 'systems that grow with you',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Intelligence',
        description: 'Deep understanding of your challenge',
      },
      {
        step: 2,
        title: 'System',
        description: 'Architecture designed for success',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Build, test, iterate, deploy',
      },
      {
        step: 4,
        title: 'Evolution',
        description: 'Continuous improvement',
      },
    ],

    integrations: [
      { category: 'Applicable To', tools: ['Any Service', 'Any Industry'] },
      { category: 'Outcome', tools: ['Custom AI Systems'] },
    ],
  },
];

// Helper functions
export const getServiceById = (id: string) =>
  services.find((s) => s.id === id);

export const getFeaturedServices = () =>
  services.filter((s) => s.featured).sort((a, b) => a.order - b.order);

export const getAllServices = () =>
  services.sort((a, b) => a.order - b.order);

export const getServiceCards = () =>
  services.map(({ id, icon, title, tagline, shortDescription, featured }) => ({
    id,
    icon,
    title,
    tagline,
    shortDescription,
    featured,
  }));
