/**
 * Metrics data - re-exports from centralized content
 * This file maintained for backward compatibility
 * New code should import directly from '../../content/metrics'
 */

import {
  impactMetrics,
  formatMetricValue,
  type Metric,
} from '../../content/metrics';
import {
  Clock,
  Globe,
  Workflow,
  AlertTriangle,
  DollarSign,
  MessageCircle,
  Heart,
  TrendingUp,
  Zap,
  Users,
} from 'lucide-react';

// Map metric IDs to icons
const iconMap: Record<string, typeof Clock> = {
  'hours-saved': Clock,
  'tasks-automated': Workflow,
  'response-time': Zap,
  'leads-generated': TrendingUp,
  'conversion-rate': TrendingUp,
  'customer-interactions': MessageCircle,
  'cost-savings': DollarSign,
  'roi-multiple': DollarSign,
  'error-rate': AlertTriangle,
  satisfaction: Heart,
  uptime: Globe,
  consistency: Users,
};

// Color map for metrics by category
const categoryColors: Record<string, string> = {
  efficiency: 'from-blue-500 to-cyan-400',
  growth: 'from-green-500 to-emerald-400',
  cost: 'from-amber-500 to-yellow-400',
  quality: 'from-purple-500 to-pink-400',
};

// Transform centralized metrics to legacy format
export const metrics = impactMetrics.slice(0, 12).map((metric) => ({
  id: metric.id,
  icon: iconMap[metric.id] || Clock,
  title: metric.label,
  value: formatMetricValue(metric),
  suffix: metric.description,
  color: categoryColors[metric.category] || 'from-primary-500 to-secondary-400',
}));

// Re-export for new components
export { impactMetrics, formatMetricValue, type Metric };
