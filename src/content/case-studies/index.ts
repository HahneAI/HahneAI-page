/**
 * Case Studies content - separated from UI for maintainability
 * Each case study follows the problem-first structure:
 * 1. Client context (who, industry, size)
 * 2. The Challenge (specific pain points)
 * 3. Our Solution (what we built)
 * 4. The Results (quantified outcomes)
 * 5. Key Takeaways (lessons learned)
 */

export interface CaseStudyClient {
  name: string;
  industry: string;
  size: string; // e.g., "50-200 employees"
  logo?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CaseStudyChallenge {
  headline: string;
  painPoints: string[];
  previousAttempts?: string[]; // What they tried before
  stakes: string; // What was at risk
}

export interface CaseStudySolution {
  headline: string;
  description: string;
  components: {
    name: string;
    description: string;
  }[];
  timeline: string; // e.g., "6 weeks"
  approach: string; // Brief methodology note
}

export interface CaseStudyResult {
  metric: string;
  label: string;
  context: string; // Before/after or comparison
}

export interface CaseStudyTakeaway {
  title: string;
  insight: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  order: number;
  services: string[]; // IDs of services used
  client: CaseStudyClient;
  challenge: CaseStudyChallenge;
  solution: CaseStudySolution;
  results: CaseStudyResult[];
  takeaways: CaseStudyTakeaway[];
  imageUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hvac-outreach-automation',
    title: 'HVAC Company Scales Lead Generation 3x',
    subtitle: 'How AI-powered outreach transformed a regional HVAC business',
    featured: true,
    order: 1,
    services: ['cold-outreach', 'call-management'],

    client: {
      name: 'Regional HVAC Services',
      industry: 'Home Services / HVAC',
      size: '25-50 employees',
      testimonial: {
        quote:
          "We went from chasing leads to having leads chase us. The AI handles the initial outreach better than our best salespeople ever did.",
        author: 'Operations Director',
        role: 'HVAC Services Company',
      },
    },

    challenge: {
      headline: 'Manual outreach couldn\'t keep up with growth goals',
      painPoints: [
        'Sales team spending 30+ hours/week on cold calls and emails',
        'Inconsistent follow-up leading to lost opportunities',
        'No way to personalize at scale for different customer segments',
        'After-hours calls going to voicemail (80% never called back)',
      ],
      previousAttempts: [
        'Hired additional sales reps (expensive, slow to ramp)',
        'Tried generic email automation (low engagement rates)',
        'Outsourced to call center (quality issues, brand disconnect)',
      ],
      stakes:
        'Missing their 2x growth target meant losing market share to larger competitors',
    },

    solution: {
      headline: 'AI-powered lead generation and qualification system',
      description:
        'We built an integrated system combining AI cold outreach with intelligent call handling, creating a 24/7 lead generation machine.',
      components: [
        {
          name: 'AI Email Sequences',
          description:
            'Personalized outreach based on property data, weather patterns, and seasonal needs',
        },
        {
          name: 'Smart Follow-up Engine',
          description:
            'Automated follow-ups that adapt tone and timing based on engagement signals',
        },
        {
          name: '24/7 AI Receptionist',
          description:
            'Natural voice AI that qualifies leads and books appointments around the clock',
        },
        {
          name: 'CRM Integration',
          description:
            'Seamless sync with their existing system for complete visibility',
        },
      ],
      timeline: '4 weeks',
      approach:
        'Started with email automation, validated results, then added call handling',
    },

    results: [
      {
        metric: '3x',
        label: 'Lead volume increase',
        context: 'From 50 to 150+ qualified leads per month',
      },
      {
        metric: '45%',
        label: 'Higher response rate',
        context: 'Compared to previous manual outreach',
      },
      {
        metric: '32hrs',
        label: 'Weekly time saved',
        context: 'Sales team now focuses on closing, not chasing',
      },
      {
        metric: '100%',
        label: 'Call coverage',
        context: 'Every call answered, 24/7/365',
      },
    ],

    takeaways: [
      {
        title: 'Personalization at scale is possible',
        insight:
          'AI can craft genuinely personalized messages using available data - property info, weather, seasonal patterns',
      },
      {
        title: 'Speed to lead matters',
        insight:
          '24/7 call handling meant capturing leads that competitors missed during off-hours',
      },
      {
        title: 'Integration is everything',
        insight:
          'The system works because it connects seamlessly with existing workflows, not replacing them',
      },
    ],
  },

  {
    id: 'law-firm-intake',
    title: 'Law Firm Automates 60% of Client Intake',
    subtitle: 'AI handles initial consultations, letting attorneys focus on cases',
    featured: true,
    order: 2,
    services: ['call-management', 'website-overhaul'],

    client: {
      name: 'Personal Injury Law Firm',
      industry: 'Legal Services',
      size: '10-25 employees',
      testimonial: {
        quote:
          'The AI handles intake calls better than most paralegals. It never forgets to ask the right questions and captures everything perfectly.',
        author: 'Managing Partner',
        role: 'Personal Injury Law Firm',
      },
    },

    challenge: {
      headline: 'Attorneys drowning in unqualified consultations',
      painPoints: [
        'Partners spending 15+ hours/week on initial consultations',
        '70% of consultations were unqualified or outside practice area',
        'After-hours inquiries going unanswered (competitor advantage)',
        'Inconsistent intake process leading to missed information',
      ],
      previousAttempts: [
        'Trained paralegals on intake (still too many escalations)',
        'Used answering service (generic, missed qualification questions)',
        'Added web forms (low completion rates, no engagement)',
      ],
      stakes:
        'Every hour on unqualified leads was an hour not spent on billable work',
    },

    solution: {
      headline: 'AI-powered intake and qualification system',
      description:
        'We deployed an intelligent intake system that handles initial client conversations, qualifies cases, and only escalates promising opportunities.',
      components: [
        {
          name: 'AI Intake Specialist',
          description:
            'Voice AI trained on legal intake best practices and firm-specific qualification criteria',
        },
        {
          name: 'Case Qualification Engine',
          description:
            'Asks the right questions to determine case viability before attorney involvement',
        },
        {
          name: 'Smart Website Chat',
          description:
            'AI chatbot that engages visitors and captures case details',
        },
        {
          name: 'Case Summary System',
          description:
            'Generates detailed intake reports for qualified leads',
        },
      ],
      timeline: '3 weeks',
      approach:
        'Worked closely with partners to understand exact qualification criteria and escalation triggers',
    },

    results: [
      {
        metric: '60%',
        label: 'Intake automated',
        context: 'AI handles initial qualification without attorney time',
      },
      {
        metric: '15hrs',
        label: 'Partner time saved weekly',
        context: 'Redirected to billable work and case strategy',
      },
      {
        metric: '40%',
        label: 'More qualified leads',
        context: '24/7 availability captures leads competitors miss',
      },
      {
        metric: '95%',
        label: 'Information capture rate',
        context: 'AI never forgets to ask critical questions',
      },
    ],

    takeaways: [
      {
        title: 'Qualification criteria must be precise',
        insight:
          'Spent significant time upfront defining exactly what makes a case worth pursuing',
      },
      {
        title: 'Human escalation paths are critical',
        insight:
          'Clear triggers for when to involve a human ensure nothing falls through cracks',
      },
      {
        title: 'Consistency builds trust',
        insight:
          'Clients appreciated getting the same thorough intake experience every time',
      },
    ],
  },

  {
    id: 'ecommerce-support',
    title: 'E-commerce Brand Handles 80% of Support Automatically',
    subtitle: 'AI agents manage customer service at scale without sacrificing quality',
    featured: true,
    order: 3,
    services: ['website-agents', 'website-overhaul'],

    client: {
      name: 'DTC Consumer Brand',
      industry: 'E-commerce / Retail',
      size: '15-30 employees',
      testimonial: {
        quote:
          "Customer satisfaction actually went UP after we automated. Turns out people prefer instant answers to waiting in a queue.",
        author: 'Head of Customer Experience',
        role: 'DTC Brand',
      },
    },

    challenge: {
      headline: 'Support volume outpacing team capacity',
      painPoints: [
        'Support tickets growing 40% year-over-year with flat headcount',
        'Average response time of 8+ hours damaging customer satisfaction',
        '60% of tickets were repetitive questions with standard answers',
        'Weekend and holiday coverage required expensive overtime',
      ],
      previousAttempts: [
        'Expanded FAQ documentation (customers didn\'t read it)',
        'Added chatbot with decision trees (frustrating, limited)',
        'Outsourced to support agency (quality and brand voice issues)',
      ],
      stakes:
        'Poor support experience was driving negative reviews and reducing repeat purchases',
    },

    solution: {
      headline: 'AI-powered customer support ecosystem',
      description:
        'We built intelligent agents that handle the full spectrum of customer inquiries, from simple FAQs to complex order issues.',
      components: [
        {
          name: 'AI Support Agent',
          description:
            'Conversational AI trained on brand voice and product knowledge',
        },
        {
          name: 'Order Intelligence',
          description:
            'Direct integration with order system for real-time status and actions',
        },
        {
          name: 'Smart Escalation',
          description:
            'Automatically routes complex issues to human agents with full context',
        },
        {
          name: 'Knowledge Learning',
          description:
            'System improves continuously based on human agent resolutions',
        },
      ],
      timeline: '6 weeks',
      approach:
        'Phased rollout starting with FAQ automation, expanding to order management',
    },

    results: [
      {
        metric: '80%',
        label: 'Tickets automated',
        context: 'Handled without human intervention',
      },
      {
        metric: '<2min',
        label: 'Average response time',
        context: 'Down from 8+ hours',
      },
      {
        metric: '24/7',
        label: 'Coverage achieved',
        context: 'No more overtime or holiday staffing',
      },
      {
        metric: '+15pts',
        label: 'NPS improvement',
        context: 'Customer satisfaction increased significantly',
      },
    ],

    takeaways: [
      {
        title: 'Speed often matters more than human touch',
        insight:
          'Customers preferred instant AI responses to waiting hours for a human',
      },
      {
        title: 'Integration depth determines value',
        insight:
          'AI that can actually look up orders and take actions is far more useful than one that just answers questions',
      },
      {
        title: 'Human agents become specialists',
        insight:
          'With routine work automated, human agents handle complex cases better',
      },
    ],
  },
];

// Helper functions
export const getCaseStudyById = (id: string) =>
  caseStudies.find((cs) => cs.id === id);

export const getFeaturedCaseStudies = () =>
  caseStudies.filter((cs) => cs.featured).sort((a, b) => a.order - b.order);

export const getAllCaseStudies = () =>
  caseStudies.sort((a, b) => a.order - b.order);

export const getCaseStudiesByService = (serviceId: string) =>
  caseStudies.filter((cs) => cs.services.includes(serviceId));

export const getCaseStudyCards = () =>
  caseStudies.map(
    ({ id, title, subtitle, client, results, services, featured }) => ({
      id,
      title,
      subtitle,
      industry: client.industry,
      topResult: results[0],
      services,
      featured,
    })
  );
