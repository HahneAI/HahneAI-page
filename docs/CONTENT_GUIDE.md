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

## Visual Assets (Illustrations)

**Zero Stock Photos**: All visuals are custom geometric SVG patterns created specifically for HahneAI.

### Automatic Illustration Selection

Illustrations are **automatically assigned** based on service IDs. No manual image URLs needed.

| Service ID | Illustration | Visual Theme |
|------------|--------------|--------------|
| `cold-outreach` | OutboundPattern | Network connections, data flow |
| `social-media` | ContentPattern | Content distribution, creativity |
| `call-management` | CallPattern | 24/7 availability, signals |
| `website-overhaul` | WebsitePattern | Browser, conversion funnel |
| `website-agents` | AutomationPattern | Connected systems, gears |
| `isi-framework` | ISIPattern | Three-phase methodology |

### Case Study Illustrations

| Case Study Industry | Illustration | Visual Theme |
|---------------------|--------------|--------------|
| E-commerce | EcommercePattern | Shopping, transactions |
| Real Estate | RealEstatePattern | Buildings, lead funnel |
| Healthcare | HealthcarePattern | Medical, scheduling |

**Note**: When you add a new service in `src/content/services/index.ts`, the system automatically selects an appropriate illustration. You don't need to specify image URLs.

## Mobile Content Considerations

### Touch Target Guidelines

All interactive content elements (buttons, links, form fields) must meet **WCAG 2.5.5 minimum touch target size**:

| Element Type | Minimum Size | Comfortable Size | Implementation |
|--------------|--------------|------------------|----------------|
| Buttons | 44px height | 48px height | `py-4` (48px) |
| Form inputs | 44px height | 48px height | `py-3.5` + `min-h-[48px]` |
| Checkboxes | 24px checkbox + padding | 44px clickable area | `w-6 h-6` + `p-4` on label |
| Icons/links | 44px x 44px | 48px x 48px | `p-3` around 28px icon |

### CTA Text Optimization

**Mobile-First Writing:**
- Keep CTA text short (2-4 words ideal)
- Front-load action words: "Start", "Get", "See"
- Avoid vague terms like "Click Here" or "Learn More"

**Examples:**
```typescript
// Good for mobile
primaryText: 'Start a Project'
primaryText: 'Get Your Plan'
primaryText: 'See Solutions'

// Too long for mobile
primaryText: 'Click Here to Start Your Project Today' // ❌
```

### Form Content Best Practices

**Field Labels:**
- Keep labels short and clear (1-3 words)
- Use placeholders sparingly (not a replacement for labels)
- Place labels above inputs (not beside) for mobile

**Error Messages:**
- Write concise error messages (under 60 characters)
- Use inline validation (show errors immediately)
- Provide correction guidance, not just "Invalid"

**Mobile Form Example:**
```typescript
// Good
<label>Email</label>
<input type="email" placeholder="your@email.com" />
<span className="text-error-500">Enter a valid email address</span>

// Bad - label too long, unclear error
<label>Please enter your email address below</label>
<input type="email" />
<span className="text-error-500">Error</span>
```

### Responsive Content Lengths

| Content Type | Mobile Max | Desktop Max | Reasoning |
|--------------|------------|-------------|-----------|
| Headlines | 8-10 words | 12-15 words | Viewport width, readability |
| Subheadlines | 15-20 words | 25-30 words | Attention span on mobile |
| Body paragraphs | 3-4 lines | 5-6 lines | Scrolling fatigue |
| Button text | 2-4 words | 2-5 words | Touch target constraints |

### A/B Testing Content Variations

When creating content variations for A/B testing (see [docs/AB_TESTS.md](AB_TESTS.md)):

**Test hypothesis clarity:**
```typescript
// Good - clear, testable hypothesis
testHypothesis: 'Concrete pain point with dollar value creates stronger motivation than abstract competitive pressure'

// Bad - vague
testHypothesis: 'Different headline might work better'
```

**Variation naming:**
- Use descriptive IDs: `variant-a-pain-point`, not `variant-1`
- Document the approach: `approach: 'pain-point'` or `approach: 'benefit'`
- Keep variation count reasonable (3-4 max per test)

## Files You Don't Need to Edit

These files auto-generate from content:

- `src/components/Services/ServicesData.ts` - reads from content, auto-assigns illustrations
- `src/components/Metrics/MetricsData.ts` - reads from content
- `src/components/Footer/Footer.tsx` - reads from navigation
- `src/components/Illustrations/` - developer-maintained visual assets

## After Editing

1. Run `npm run build` to verify no errors
2. Preview with `npm run dev`
3. Commit changes
