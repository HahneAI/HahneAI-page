/**
 * Services content - Outcome-focused copy
 *
 * Structure per service:
 * 1. THE PROBLEM (specific pain, backed by research)
 * 2. WHAT WE BUILT (solution overview)
 * 3. THE RESULTS (quantified outcomes)
 * 4. HOW IT WORKS (brief process)
 *
 * Naming principles:
 * - No "AI" prefix (it's implied)
 * - Outcome-focused names
 * - Direct, no fluff
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
  cost: string;
  source?: string; // Citation for credibility
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

  problem: ServiceProblem;
  solution: ServiceSolution;
  results: ServiceResult[];
  process: ServiceProcess[];
  integrations: ServiceIntegration[];

  imageUrl?: string;
  featured: boolean;
  order: number;
}

export const services: Service[] = [
  // ============================================
  // OUTBOUND PIPELINE
  // ============================================
  {
    id: 'outbound-pipeline',
    icon: MessageSquare,
    title: 'Outbound Pipeline',
    tagline: 'Fill your calendar without lifting a finger',
    shortDescription:
      'Personalized outreach that books meetings while you sleep.',
    featured: true,
    order: 1,

    problem: {
      headline: 'Cold email is broken. Response rates dropped 30% this year.',
      painPoints: [
        'Average cold email response rate fell to 5.1% in 2024',
        'Google and Yahoo now block domains sending 5,000+ daily emails with spam complaints',
        'Your team spends hours writing emails that land in spam folders',
        'Personalization at scale feels impossible without burning out',
      ],
      cost: 'Sales teams waste 60% of their time on outreach that gets ignored',
      source: 'Belkins 2024 Cold Email Study',
    },

    solution: {
      headline: 'Warm outreach at cold email scale',
      description:
        'We build systems that research prospects, write personalized messages, and follow up automatically—hitting the 6-8 sentence sweet spot that gets 42% open rates.',
      features: [
        'Prospect research pulled from LinkedIn, company sites, and news',
        'Messages under 200 words (the format that actually converts)',
        '95%+ deliverability through proper domain warming',
        'Human review before anything sensitive goes out',
      ],
    },

    results: [
      {
        metric: '3x',
        label: 'More qualified meetings',
        description: 'Same team, better targeting',
      },
      {
        metric: '42%',
        label: 'Open rate',
        description: 'vs. 27% industry average',
      },
      {
        metric: '20hrs',
        label: 'Saved weekly',
        description: 'Per sales rep',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Connect Data',
        description: 'Link your CRM and ideal customer criteria',
      },
      {
        step: 2,
        title: 'Train Voice',
        description: 'System learns how your best rep writes',
      },
      {
        step: 3,
        title: 'Launch Sequences',
        description: 'Campaigns go live with deliverability monitoring',
      },
      {
        step: 4,
        title: 'Optimize',
        description: 'Weekly improvements based on response data',
      },
    ],

    integrations: [
      { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Close'] },
      { category: 'Email', tools: ['Gmail', 'Outlook', 'Custom domains'] },
      { category: 'Data', tools: ['LinkedIn Sales Nav', 'Apollo', 'Clay'] },
    ],
  },

  // ============================================
  // CONTENT ENGINE
  // ============================================
  {
    id: 'content-engine',
    icon: Users,
    title: 'Content Engine',
    tagline: 'Stay visible without living online',
    shortDescription:
      'Consistent social presence without the 10-hour weekly time sink.',
    featured: true,
    order: 2,

    problem: {
      headline: 'Social media is a full-time job. You already have one.',
      painPoints: [
        'Creating daily content drains your creative energy',
        'Engagement drops the moment you focus on actual work',
        'Managing multiple platforms means inconsistent posting',
        'Measuring ROI feels impossible when you\'re just trying to keep up',
      ],
      cost: 'Small businesses spend 10+ hours/week on social—or abandon it entirely',
      source: 'Sprinklr 2024 Social Media Report',
    },

    solution: {
      headline: 'Your brand, amplified on autopilot',
      description:
        'We create a content system that produces on-brand posts, schedules them for peak engagement times, and handles routine interactions—so you can post consistently without posting constantly.',
      features: [
        'Content calendar built from your expertise and industry trends',
        'Posts written in your voice (not generic AI slop)',
        'Optimal timing based on when your audience is actually online',
        'Comment responses and DM triage handled automatically',
      ],
    },

    results: [
      {
        metric: '10hrs',
        label: 'Saved weekly',
        description: 'Reclaimed from content creation',
      },
      {
        metric: '4x',
        label: 'Posting consistency',
        description: 'Without increased effort',
      },
      {
        metric: '150%',
        label: 'Engagement lift',
        description: 'From better timing and consistency',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Brand Download',
        description: 'We learn your voice, topics, and audience',
      },
      {
        step: 2,
        title: 'Content System',
        description: 'Build repeatable formats that work for you',
      },
      {
        step: 3,
        title: 'Automation Setup',
        description: 'Connect platforms with scheduling and engagement rules',
      },
      {
        step: 4,
        title: 'Monthly Review',
        description: 'Adjust based on what\'s actually performing',
      },
    ],

    integrations: [
      { category: 'Platforms', tools: ['LinkedIn', 'X/Twitter', 'Instagram', 'Facebook'] },
      { category: 'Tools', tools: ['Buffer', 'Hootsuite', 'Notion', 'Canva'] },
      { category: 'Analytics', tools: ['Native insights', 'Sprout Social'] },
    ],
  },

  // ============================================
  // NEVER MISS A CALL
  // ============================================
  {
    id: 'never-miss',
    icon: Headphones,
    title: 'Never Miss',
    tagline: 'Every call answered. Every lead captured.',
    shortDescription:
      '24/7 call handling that qualifies leads and books appointments.',
    featured: true,
    order: 3,

    problem: {
      headline: '62% of calls to small businesses go unanswered. Each one costs $1,200.',
      painPoints: [
        '85% of callers won\'t call back if you don\'t answer',
        'Less than 3% of callers leave voicemails anymore',
        'After-hours calls go straight to competitors who pick up',
        'Staff time wasted on tire-kickers who were never going to buy',
      ],
      cost: 'Average SMB loses $126,000/year to missed and mishandled calls',
      source: 'Invoca & Dialora 2024 Reports',
    },

    solution: {
      headline: 'A receptionist that never sleeps, never forgets',
      description:
        'Voice AI that answers every call, asks your qualification questions, books appointments directly in your calendar, and sends you a summary—24/7/365.',
      features: [
        'Natural conversation (not "press 1 for sales" robot voice)',
        'Your qualification criteria built into every call',
        'Direct calendar booking with confirmation texts',
        'Call recordings and AI summaries in your CRM',
      ],
    },

    results: [
      {
        metric: '100%',
        label: 'Answer rate',
        description: '24/7/365 coverage',
      },
      {
        metric: '$126k',
        label: 'Revenue protected',
        description: 'Per year in captured calls',
      },
      {
        metric: '45%',
        label: 'More appointments',
        description: 'Booked automatically',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Call Flow Design',
        description: 'Map your ideal conversation and qualification criteria',
      },
      {
        step: 2,
        title: 'Voice Configuration',
        description: 'Set up AI voice, personality, and responses',
      },
      {
        step: 3,
        title: 'System Integration',
        description: 'Connect to your calendar, CRM, and phone system',
      },
      {
        step: 4,
        title: 'Launch & Monitor',
        description: 'Go live with human escalation paths ready',
      },
    ],

    integrations: [
      { category: 'Phone', tools: ['Your existing number', 'Twilio', 'VoIP systems'] },
      { category: 'Calendar', tools: ['Google Calendar', 'Calendly', 'Acuity'] },
      { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'ServiceTitan', 'Jobber'] },
    ],
  },

  // ============================================
  // WEBSITE THAT SELLS
  // ============================================
  {
    id: 'website-sells',
    icon: Globe,
    title: 'Website That Sells',
    tagline: 'Turn browsers into buyers',
    shortDescription:
      'Your site becomes a 24/7 salesperson, not a digital brochure.',
    featured: false,
    order: 4,

    problem: {
      headline: 'Only 2.9% of B2B website visitors convert. The other 97% disappear.',
      painPoints: [
        '72% of companies are dissatisfied with their conversion rates',
        'Static pages can\'t answer the specific questions your visitors have',
        'Forms get abandoned because they ask too much too soon',
        'You\'re paying for traffic that leaves without a trace',
      ],
      cost: 'For every 100 visitors you pay to acquire, 97 leave with nothing to show',
      source: 'Unbounce B2B Conversion Report 2024',
    },

    solution: {
      headline: 'A website that engages, qualifies, and captures',
      description:
        'We add intelligent elements that engage visitors in conversation, answer their specific questions, and capture their information—turning passive browsing into active pipeline.',
      features: [
        'Chat trained on your services, pricing, and FAQs',
        'Smart forms that adapt based on visitor behavior',
        'Exit-intent captures for visitors about to leave',
        'Personalized content based on traffic source and behavior',
      ],
    },

    results: [
      {
        metric: '2-3x',
        label: 'Conversion rate',
        description: 'From same traffic',
      },
      {
        metric: '50%',
        label: 'Longer sessions',
        description: 'Engaged visitors stay',
      },
      {
        metric: '35%',
        label: 'More leads',
        description: 'Captured before they bounce',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Conversion Audit',
        description: 'Find where visitors drop off and why',
      },
      {
        step: 2,
        title: 'Intelligence Layer',
        description: 'Add chat, smart forms, and personalization',
      },
      {
        step: 3,
        title: 'A/B Testing',
        description: 'Validate changes with real visitor data',
      },
      {
        step: 4,
        title: 'Continuous Optimization',
        description: 'Monthly improvements based on performance',
      },
    ],

    integrations: [
      { category: 'Platforms', tools: ['WordPress', 'Webflow', 'Shopify', 'Custom'] },
      { category: 'Chat', tools: ['Custom AI', 'Intercom', 'Drift'] },
      { category: 'Analytics', tools: ['GA4', 'Hotjar', 'Mixpanel', 'Heap'] },
    ],
  },

  // ============================================
  // CUSTOM AUTOMATION
  // ============================================
  {
    id: 'custom-automation',
    icon: Bot,
    title: 'Custom Automation',
    tagline: 'Your processes, running without you',
    shortDescription:
      'AI agents that handle your specific workflows around the clock.',
    featured: false,
    order: 5,

    problem: {
      headline: 'You\'re the bottleneck. And you can\'t clone yourself.',
      painPoints: [
        'Key processes only happen when specific people are available',
        'Hiring means months of recruiting, training, and managing',
        'Human inconsistency creates quality variations you can\'t control',
        'Growth is capped by how many hours you and your team can work',
      ],
      cost: 'Your capacity ceiling becomes your revenue ceiling',
    },

    solution: {
      headline: 'AI agents built for your exact workflows',
      description:
        'We design and deploy AI agents that handle your specific business processes—not generic chatbots, but custom systems that do real work the way you would do it.',
      features: [
        'Agents designed around your actual processes (not templates)',
        'Multi-step workflows with decision logic built in',
        'Human escalation when situations require judgment',
        'Continuous learning from corrections and edge cases',
      ],
    },

    results: [
      {
        metric: '24/7',
        label: 'Operations',
        description: 'Work continues while you sleep',
      },
      {
        metric: '10x',
        label: 'Throughput',
        description: 'On automated processes',
      },
      {
        metric: '95%',
        label: 'Error reduction',
        description: 'Consistent execution every time',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Process Mapping',
        description: 'Document exactly how work gets done today',
      },
      {
        step: 2,
        title: 'Agent Design',
        description: 'Build AI to handle each workflow',
      },
      {
        step: 3,
        title: 'Testing',
        description: 'Validate with edge cases and exceptions',
      },
      {
        step: 4,
        title: 'Deploy & Iterate',
        description: 'Launch with monitoring and refinement',
      },
    ],

    integrations: [
      { category: 'Automation', tools: ['Make', 'Zapier', 'n8n', 'Custom'] },
      { category: 'Data', tools: ['Your databases', 'Google Sheets', 'Airtable'] },
      { category: 'Communication', tools: ['Slack', 'Email', 'SMS', 'Your tools'] },
    ],
  },

  // ============================================
  // I.S.I FRAMEWORK (Methodology)
  // ============================================
  {
    id: 'isi-framework',
    icon: Lightbulb,
    title: 'The I.S.I Framework',
    tagline: 'How we make AI projects actually work',
    shortDescription:
      'The methodology behind every successful implementation.',
    featured: true,
    order: 6,

    problem: {
      headline: '87% of AI projects fail. Here\'s why yours won\'t.',
      painPoints: [
        'Most AI initiatives die in pilot phase—impressive demos, no production value',
        'Off-the-shelf tools solve generic problems, not your specific ones',
        'Implementation without strategy burns budget and credibility',
        'No clear path from "AI could help" to "AI is helping"',
      ],
      cost: 'Failed AI projects waste 6-18 months and destroy internal buy-in',
      source: 'Gartner AI Implementation Research',
    },

    solution: {
      headline: 'Intelligence → System → Implementation',
      description:
        'A proven framework that starts with understanding your actual problem, designs systems for your real constraints, and delivers working solutions—not PowerPoints.',
      features: [
        'Deep discovery before any building begins',
        'Architecture designed for your scale and complexity',
        'Iterative delivery with working software at each stage',
        'Knowledge transfer so you\'re not dependent on us forever',
      ],
    },

    results: [
      {
        metric: '100%',
        label: 'Deployment rate',
        description: 'Every project reaches production',
      },
      {
        metric: '3x',
        label: 'Faster delivery',
        description: 'Vs. typical AI implementations',
      },
      {
        metric: '0',
        label: 'Shelfware',
        description: 'Nothing we build goes unused',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Intelligence',
        description: 'Understand the real problem, not the assumed one',
      },
      {
        step: 2,
        title: 'System',
        description: 'Design architecture that fits your reality',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Build iteratively with continuous validation',
      },
      {
        step: 4,
        title: 'Evolution',
        description: 'Improve based on real usage data',
      },
    ],

    integrations: [
      { category: 'Works With', tools: ['Any existing system', 'Any industry'] },
      { category: 'Delivers', tools: ['Custom AI solutions', 'Working software'] },
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
