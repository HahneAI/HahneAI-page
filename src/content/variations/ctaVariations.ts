/**
 * A/B Testing: CTA Button Text Variations
 *
 * Test different call-to-action copy to optimize click-through
 * and conversion rates across the site.
 */

export interface CTAVariation {
  id: string;
  name: string;
  primaryText: string;
  secondaryText: string;
  approach: 'action' | 'benefit' | 'urgency' | 'curiosity';
  testHypothesis: string;
}

export const ctaVariations: CTAVariation[] = [
  {
    id: 'control',
    name: 'Control - Challenge Focus',
    primaryText: 'Tell Us Your Challenge',
    secondaryText: 'See What We Build',
    approach: 'action',
    testHypothesis: 'Problem-focused language creates engagement by acknowledging user pain points'
  },
  {
    id: 'variant-a',
    name: 'Variant A - Immediate Benefit',
    primaryText: 'Get Your Free Automation Plan',
    secondaryText: 'See Our Solutions',
    approach: 'benefit',
    testHypothesis: 'Free value proposition lowers barrier to entry and increases conversions'
  },
  {
    id: 'variant-b',
    name: 'Variant B - Urgency + Outcome',
    primaryText: 'Start Automating Today',
    secondaryText: 'See How It Works',
    approach: 'urgency',
    testHypothesis: 'Time-based urgency combined with immediate action increases click-through rates'
  },
  {
    id: 'variant-c',
    name: 'Variant C - Curiosity Driver',
    primaryText: 'Show Me What\'s Possible',
    secondaryText: 'Browse Solutions',
    approach: 'curiosity',
    testHypothesis: 'Curiosity-driven copy engages exploration-minded users who aren\'t ready to commit'
  }
];

/**
 * Get CTA variation by ID or return control
 */
export function getCTAVariation(variationId?: string): CTAVariation {
  if (!variationId) return ctaVariations[0];
  return ctaVariations.find(v => v.id === variationId) || ctaVariations[0];
}

/**
 * Randomly assign CTA variation for A/B testing
 * Uses localStorage to persist user's assigned variation
 */
export function assignCTAVariation(): CTAVariation {
  if (typeof window === 'undefined') return ctaVariations[0];

  // Check if user already has assigned variation
  const storedVariation = localStorage.getItem('cta_variation_id');
  if (storedVariation) {
    return getCTAVariation(storedVariation);
  }

  // Randomly assign new variation
  const randomIndex = Math.floor(Math.random() * ctaVariations.length);
  const assignedVariation = ctaVariations[randomIndex];

  // Store for consistency
  localStorage.setItem('cta_variation_id', assignedVariation.id);

  return assignedVariation;
}

/**
 * Service-specific CTA variations
 * Test different CTAs for different service contexts
 */
export interface ServiceCTAVariation {
  serviceId: string;
  variations: {
    id: string;
    ctaText: string;
    focusArea: string;
  }[];
}

export const serviceCTAVariations: ServiceCTAVariation[] = [
  {
    serviceId: 'outbound-pipeline',
    variations: [
      { id: 'control', ctaText: 'Build My Pipeline', focusArea: 'action' },
      { id: 'variant-a', ctaText: 'Get More Leads', focusArea: 'benefit' },
      { id: 'variant-b', ctaText: 'See Pricing', focusArea: 'transparency' }
    ]
  },
  {
    serviceId: 'content-engine',
    variations: [
      { id: 'control', ctaText: 'Automate My Content', focusArea: 'action' },
      { id: 'variant-a', ctaText: 'Save 20 Hours/Week', focusArea: 'benefit' },
      { id: 'variant-b', ctaText: 'See Examples', focusArea: 'proof' }
    ]
  },
  {
    serviceId: 'never-miss',
    variations: [
      { id: 'control', ctaText: 'Get 24/7 Coverage', focusArea: 'benefit' },
      { id: 'variant-a', ctaText: 'Stop Missing Calls', focusArea: 'pain-point' },
      { id: 'variant-b', ctaText: 'Try It Free', focusArea: 'trial' }
    ]
  }
];
