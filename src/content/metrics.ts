/**
 * Centralized metrics data for consistent numbers across the site
 * Following Avantos-style quantified results
 */

export interface Metric {
  id: string;
  value: number;
  unit: string;
  label: string;
  description: string;
  category: 'efficiency' | 'growth' | 'cost' | 'quality';
}

export interface SocialProof {
  id: string;
  type: 'metric' | 'logo' | 'testimonial';
  value?: string;
  label: string;
  source?: string;
}

// Hero-level metrics (above the fold, maximum 3)
export const heroMetrics: SocialProof[] = [
  {
    id: 'time-saved',
    type: 'metric',
    value: '40+',
    label: 'Hours saved per week',
  },
  {
    id: 'error-reduction',
    type: 'metric',
    value: '95%',
    label: 'Error reduction',
  },
  {
    id: 'roi',
    type: 'metric',
    value: '3x',
    label: 'Average ROI',
  },
];

// Detailed metrics for results sections
export const impactMetrics: Metric[] = [
  // Efficiency
  {
    id: 'hours-saved',
    value: 40,
    unit: 'hours/week',
    label: 'Time Saved',
    description: 'Average hours saved per week through automation',
    category: 'efficiency',
  },
  {
    id: 'tasks-automated',
    value: 500,
    unit: '+',
    label: 'Tasks Automated',
    description: 'Repetitive tasks eliminated from daily workflows',
    category: 'efficiency',
  },
  {
    id: 'response-time',
    value: 90,
    unit: '%',
    label: 'Faster Response',
    description: 'Reduction in customer response time',
    category: 'efficiency',
  },

  // Growth
  {
    id: 'leads-generated',
    value: 150,
    unit: '%',
    label: 'Lead Increase',
    description: 'Average increase in qualified leads',
    category: 'growth',
  },
  {
    id: 'conversion-rate',
    value: 35,
    unit: '%',
    label: 'Conversion Boost',
    description: 'Improvement in sales conversion rate',
    category: 'growth',
  },
  {
    id: 'customer-interactions',
    value: 10000,
    unit: '+',
    label: 'Interactions Handled',
    description: 'Customer interactions managed by AI monthly',
    category: 'growth',
  },

  // Cost
  {
    id: 'cost-savings',
    value: 60,
    unit: '%',
    label: 'Cost Reduction',
    description: 'Reduction in operational costs',
    category: 'cost',
  },
  {
    id: 'roi-multiple',
    value: 3,
    unit: 'x',
    label: 'ROI',
    description: 'Average return on investment within 6 months',
    category: 'cost',
  },

  // Quality
  {
    id: 'error-rate',
    value: 95,
    unit: '%',
    label: 'Error Reduction',
    description: 'Decrease in human error rates',
    category: 'quality',
  },
  {
    id: 'satisfaction',
    value: 98,
    unit: '%',
    label: 'Client Satisfaction',
    description: 'Client satisfaction score',
    category: 'quality',
  },
  {
    id: 'uptime',
    value: 99.9,
    unit: '%',
    label: 'System Uptime',
    description: 'AI system availability',
    category: 'quality',
  },
  {
    id: 'consistency',
    value: 100,
    unit: '%',
    label: 'Consistency',
    description: 'Consistent quality on every interaction',
    category: 'quality',
  },
];

// Industries served (for social proof)
export const industries = [
  'Professional Services',
  'E-commerce',
  'Real Estate',
  'Healthcare',
  'Manufacturing',
  'Trades & Construction',
  'Financial Services',
  'Legal',
];

// Get metrics by category
export const getMetricsByCategory = (category: Metric['category']) =>
  impactMetrics.filter((m) => m.category === category);

// Format metric value for display
export const formatMetricValue = (metric: Metric): string => {
  if (metric.unit === '%') {
    return `${metric.value}%`;
  }
  if (metric.unit === 'x') {
    return `${metric.value}x`;
  }
  if (metric.value >= 1000) {
    return `${(metric.value / 1000).toFixed(0)}k${metric.unit}`;
  }
  return `${metric.value}${metric.unit}`;
};
