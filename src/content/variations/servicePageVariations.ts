/**
 * A/B Testing: Service Page Structure Variations
 *
 * Test different page layouts and content organization
 * to optimize engagement and conversion on services page.
 */

export interface ServicePageVariation {
  id: string;
  name: string;
  structure: 'grid' | 'list' | 'accordion';
  heroStyle: 'minimal' | 'feature-focused' | 'problem-solution';
  cardStyle: 'detailed' | 'minimal' | 'icon-first';
  testHypothesis: string;
}

export const servicePageVariations: ServicePageVariation[] = [
  {
    id: 'control',
    name: 'Control - Grid with Detailed Cards',
    structure: 'grid',
    heroStyle: 'feature-focused',
    cardStyle: 'detailed',
    testHypothesis: 'Current grid layout with detailed cards provides best overview and engagement'
  },
  {
    id: 'variant-a',
    name: 'Variant A - List with Problem-Solution Focus',
    structure: 'list',
    heroStyle: 'problem-solution',
    cardStyle: 'detailed',
    testHypothesis: 'List layout with problem-first framing increases relevance perception and click-through'
  },
  {
    id: 'variant-b',
    name: 'Variant B - Accordion with Progressive Disclosure',
    structure: 'accordion',
    heroStyle: 'minimal',
    cardStyle: 'minimal',
    testHypothesis: 'Accordion reduces overwhelm and increases exploration of multiple services'
  },
  {
    id: 'variant-c',
    name: 'Variant C - Icon-First Minimal Grid',
    structure: 'grid',
    heroStyle: 'minimal',
    cardStyle: 'icon-first',
    testHypothesis: 'Visual hierarchy with icons improves scannability and reduces cognitive load'
  }
];

/**
 * Service card content variations
 * Test different ways of presenting service information
 */
export interface ServiceContentVariation {
  id: string;
  focusArea: 'features' | 'benefits' | 'outcomes' | 'process';
  headline: 'what' | 'why' | 'how';
  ctaPlacement: 'inline' | 'bottom' | 'sticky';
}

export const serviceContentVariations: ServiceContentVariation[] = [
  {
    id: 'control',
    focusArea: 'features',
    headline: 'what',
    ctaPlacement: 'bottom'
  },
  {
    id: 'variant-a',
    focusArea: 'benefits',
    headline: 'why',
    ctaPlacement: 'inline'
  },
  {
    id: 'variant-b',
    focusArea: 'outcomes',
    headline: 'what',
    ctaPlacement: 'sticky'
  },
  {
    id: 'variant-c',
    focusArea: 'process',
    headline: 'how',
    ctaPlacement: 'bottom'
  }
];

/**
 * Get service page variation by ID or return control
 */
export function getServicePageVariation(variationId?: string): ServicePageVariation {
  if (!variationId) return servicePageVariations[0];
  return servicePageVariations.find(v => v.id === variationId) || servicePageVariations[0];
}

/**
 * Randomly assign service page variation for A/B testing
 * Uses localStorage to persist user's assigned variation
 */
export function assignServicePageVariation(): ServicePageVariation {
  if (typeof window === 'undefined') return servicePageVariations[0];

  // Check if user already has assigned variation
  const storedVariation = localStorage.getItem('service_page_variation_id');
  if (storedVariation) {
    return getServicePageVariation(storedVariation);
  }

  // Randomly assign new variation
  const randomIndex = Math.floor(Math.random() * servicePageVariations.length);
  const assignedVariation = servicePageVariations[randomIndex];

  // Store for consistency
  localStorage.setItem('service_page_variation_id', assignedVariation.id);

  return assignedVariation;
}

/**
 * Service ordering variations
 * Test different service orderings to optimize engagement
 */
export const serviceOrderingVariations = {
  control: ['outbound-pipeline', 'content-engine', 'never-miss', 'website-sells', 'custom-automation'],
  'high-value-first': ['custom-automation', 'outbound-pipeline', 'website-sells', 'never-miss', 'content-engine'],
  'quick-wins-first': ['never-miss', 'content-engine', 'website-sells', 'outbound-pipeline', 'custom-automation'],
  'problem-severity': ['never-miss', 'outbound-pipeline', 'website-sells', 'content-engine', 'custom-automation']
};
