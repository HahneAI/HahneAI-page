/**
 * Content barrel export
 * Import all content from this single entry point
 *
 * Usage:
 * import { services, caseStudies, heroMetrics } from '@/content';
 */

// Services
export {
  services,
  getServiceById,
  getFeaturedServices,
  getAllServices,
  getServiceCards,
  type Service,
  type ServiceProblem,
  type ServiceSolution,
  type ServiceResult,
  type ServiceProcess,
  type ServiceIntegration,
} from './services';

// Case Studies
export {
  caseStudies,
  getCaseStudyById,
  getFeaturedCaseStudies,
  getAllCaseStudies,
  getCaseStudiesByService,
  getCaseStudyCards,
  type CaseStudy,
  type CaseStudyClient,
  type CaseStudyChallenge,
  type CaseStudySolution,
  type CaseStudyResult,
  type CaseStudyTakeaway,
} from './case-studies';

// Metrics
export {
  heroMetrics,
  impactMetrics,
  industries,
  getMetricsByCategory,
  formatMetricValue,
  type Metric,
  type SocialProof,
} from './metrics';

// Navigation
export {
  mainNavigation,
  primaryCTA,
  pageContent,
  footerNavigation,
  userJourneyStages,
  type NavItem,
  type CTAConfig,
} from './navigation';
