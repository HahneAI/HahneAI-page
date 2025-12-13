/**
 * A/B Testing: Hero Headline Variations
 *
 * Test different value propositions and messaging angles
 * to optimize homepage conversion rates.
 */

export interface HeroVariation {
  id: string;
  name: string;
  headline: string;
  subheadline: string;
  focusArea: 'pain-point' | 'outcome' | 'credibility';
  testHypothesis: string;
}

export const heroVariations: HeroVariation[] = [
  {
    id: 'control',
    name: 'Control - Competitive Urgency',
    headline: "Your business runs 8 hours a day. Your competitors' AI runs 24.",
    subheadline: 'We build custom automation that handles outreach, calls, and customer engagement while you sleep.',
    focusArea: 'pain-point',
    testHypothesis: 'Highlighting competitive disadvantage creates urgency and drives conversions'
  },
  {
    id: 'variant-a',
    name: 'Variant A - Direct Pain Point',
    headline: 'Stop losing leads after 5pm.',
    subheadline: "Every missed call costs $1,200. Every ignored email loses a prospect. We fix that with 24/7 AI automation.",
    focusArea: 'pain-point',
    testHypothesis: 'Concrete pain point with dollar value creates stronger motivation than abstract competitive pressure'
  },
  {
    id: 'variant-b',
    name: 'Variant B - Outcome Focus',
    headline: 'Turn your business into a 24/7 operation. Without hiring anyone.',
    subheadline: 'Custom AI systems that handle customer engagement, lead qualification, and follow-ups around the clock.',
    focusArea: 'outcome',
    testHypothesis: 'Positive outcome framing (growth) outperforms negative framing (competition/loss)'
  },
  {
    id: 'variant-c',
    name: 'Variant C - Credibility First',
    headline: 'AI that actually works. Not demos. Production systems.',
    subheadline: "87% of AI projects fail. Every one of ours reaches production. We build custom automation that solves real problems.",
    focusArea: 'credibility',
    testHypothesis: 'Establishing trust and differentiation from failed AI projects reduces skepticism'
  }
];

/**
 * Get variation by ID or return control
 */
export function getHeroVariation(variationId?: string): HeroVariation {
  if (!variationId) return heroVariations[0];
  return heroVariations.find(v => v.id === variationId) || heroVariations[0];
}

/**
 * Randomly assign variation for A/B testing
 * Uses localStorage to persist user's assigned variation
 */
export function assignHeroVariation(): HeroVariation {
  if (typeof window === 'undefined') return heroVariations[0];

  // Check if user already has assigned variation
  const storedVariation = localStorage.getItem('hero_variation_id');
  if (storedVariation) {
    return getHeroVariation(storedVariation);
  }

  // Randomly assign new variation
  const randomIndex = Math.floor(Math.random() * heroVariations.length);
  const assignedVariation = heroVariations[randomIndex];

  // Store for consistency
  localStorage.setItem('hero_variation_id', assignedVariation.id);

  return assignedVariation;
}
