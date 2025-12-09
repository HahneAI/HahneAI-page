# Content Editing Guide

Quick reference for updating site content.

## Content Files Location

All editable content lives in `src/content/`:

```
src/content/
├── index.ts          # Barrel export (don't edit)
├── services/
│   └── index.ts      # Service definitions
├── case-studies/
│   └── index.ts      # Case study content
├── metrics.ts        # Numbers & stats
└── navigation.ts     # Site links & CTAs
```

## What to Edit

| To Change... | Edit This File |
|--------------|----------------|
| Service descriptions | `src/content/services/index.ts` |
| Service features/benefits | `src/content/services/index.ts` |
| Case studies | `src/content/case-studies/index.ts` |
| Hero metrics (40+ hrs, 95%, 3x) | `src/content/metrics.ts` → `heroMetrics` |
| Impact numbers grid | `src/content/metrics.ts` → `impactMetrics` |
| Footer service links | `src/content/navigation.ts` → `footerNavigation.services` |
| Footer company links | `src/content/navigation.ts` → `footerNavigation.company` |
| Page headlines | `src/content/navigation.ts` → `pageContent` |
| Primary CTA text | `src/content/navigation.ts` → `primaryCTA` |

## Common Edits

### Add a New Service

Edit `src/content/services/index.ts`:

```typescript
{
  id: 'new-service',           // URL-safe ID
  icon: IconName,              // From lucide-react
  title: 'Service Name',
  tagline: 'Short catchy phrase',
  shortDescription: 'One sentence.',
  featured: true,              // Show on homepage?
  order: 7,                    // Display order

  problem: {
    headline: 'The pain point',
    painPoints: ['Issue 1', 'Issue 2'],
    cost: 'What it costs them',
  },

  solution: {
    headline: 'How we solve it',
    description: 'Full description',
    features: ['Feature 1', 'Feature 2'],
  },

  results: [
    { metric: '50%', label: 'Improvement', description: 'context' },
  ],

  // ... process and integrations
}
```

### Update a Metric

Edit `src/content/metrics.ts`:

```typescript
// Hero metrics (shown above fold)
export const heroMetrics = [
  { id: 'time-saved', type: 'metric', value: '40+', label: 'Hours saved per week' },
  // Change value or label here
];

// Detailed metrics
export const impactMetrics = [
  { id: 'hours-saved', value: 40, unit: 'hours/week', label: 'Time Saved', ... },
  // Add or modify metrics here
];
```

### Change Footer Links

Edit `src/content/navigation.ts`:

```typescript
export const footerNavigation = {
  services: {
    label: 'Services',
    links: [
      { label: 'AI Cold Outreach', path: '/services#cold-outreach' },
      // Add/remove/reorder links here
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'Our Process', path: '/process' },
      // Add/remove/reorder links here
    ],
  },
};
```

### Add a Case Study

Edit `src/content/case-studies/index.ts`:

```typescript
{
  id: 'client-project',
  title: 'Client Achieves X Result',
  subtitle: 'How we helped them',
  featured: true,
  order: 4,
  services: ['cold-outreach'],  // Link to service IDs

  client: {
    name: 'Company Name',
    industry: 'Industry',
    size: '50-100 employees',
    testimonial: { quote: '...', author: 'Name', role: 'Title' },
  },

  challenge: { ... },
  solution: { ... },
  results: [ ... ],
  takeaways: [ ... ],
}
```

## Files You Don't Need to Edit

These files auto-generate from content:

- `src/components/Services/ServicesData.ts` - reads from content
- `src/components/Metrics/MetricsData.ts` - reads from content
- `src/components/Footer/Footer.tsx` - reads from navigation

## After Editing

1. Run `npm run build` to verify no errors
2. Preview with `npm run dev`
3. Commit changes
