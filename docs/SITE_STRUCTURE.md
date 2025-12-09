# HahneAI Site Structure

## Problem-First Content Architecture

Following Avantos' outcome-focused methodology, all content is structured around the user's problem first, then our solution, then quantified results.

## Directory Structure

```
src/
├── content/                    # Separated content (not UI)
│   ├── index.ts               # Barrel export
│   ├── services/
│   │   └── index.ts           # Service definitions with problem-first structure
│   ├── case-studies/
│   │   └── index.ts           # Case studies with challenge → solution → results
│   ├── metrics.ts             # Centralized numbers for consistency
│   └── navigation.ts          # Site structure and user journey
│
├── components/                 # UI components (consume content)
├── pages/                      # Route pages
└── utils/                      # Utilities
```

## Content Interfaces

### Services (`src/content/services/index.ts`)

Each service follows problem-first structure:

```typescript
interface Service {
  // Identity
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  shortDescription: string;

  // Problem-First Content
  problem: {
    headline: string;
    painPoints: string[];
    cost: string;  // What this problem costs
  };

  solution: {
    headline: string;
    description: string;
    features: string[];
  };

  results: Array<{
    metric: string;
    label: string;
    description: string;
  }>;

  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;

  integrations: Array<{
    category: string;
    tools: string[];
  }>;
}
```

### Case Studies (`src/content/case-studies/index.ts`)

Each case study tells a complete story:

```typescript
interface CaseStudy {
  // Identity
  id: string;
  title: string;
  subtitle: string;
  services: string[];  // Links to services used

  // Story Structure
  client: {
    name: string;
    industry: string;
    size: string;
    testimonial?: { quote, author, role };
  };

  challenge: {
    headline: string;
    painPoints: string[];
    previousAttempts?: string[];
    stakes: string;
  };

  solution: {
    headline: string;
    description: string;
    components: Array<{ name, description }>;
    timeline: string;
    approach: string;
  };

  results: Array<{
    metric: string;
    label: string;
    context: string;
  }>;

  takeaways: Array<{
    title: string;
    insight: string;
  }>;
}
```

### Metrics (`src/content/metrics.ts`)

Centralized numbers ensure consistency:

```typescript
// Hero metrics (above fold, max 3)
export const heroMetrics: SocialProof[];

// Detailed metrics by category
export const impactMetrics: Metric[];  // efficiency, growth, cost, quality

// Helper functions
getMetricsByCategory(category)
formatMetricValue(metric)
```

## Page Structure

### Home (`/`)
1. Hero with value proposition
2. Problem statement (empathy)
3. Services overview (solutions)
4. Results/metrics (proof)
5. CTA to system-request

### Services (`/services`)
1. Services grid with problem-first cards
2. Each service expandable to full detail
3. Links to relevant case studies

### Creative Solutions (`/creative-solutions`)
1. I.S.I Framework explanation
2. Each phase detailed
3. Why this approach works

### Process (`/process`)
1. Step-by-step journey
2. What to expect at each stage
3. Timeline and deliverables

### System Request (`/system-request`)
1. Problem description form
2. Context gathering
3. Clear next steps

## User Journey

```
Awareness          →    Consideration       →    Decision
(Home, Services)        (Solutions, Process)     (System Request)

"What do they do?"      "Is this right for me?"  "Let's talk"
```

## Content Principles

1. **Problem First**: Always lead with the pain point
2. **Quantify Everything**: Use specific numbers, not vague claims
3. **Show, Don't Tell**: Case studies and results over features
4. **Progressive Disclosure**: Overview → Details → Deep dive
5. **Clear CTAs**: Every page leads somewhere

## Using Content in Components

```typescript
// Import what you need
import { services, getFeaturedServices, heroMetrics } from '@/content';

// Use in components
function ServiceCard({ serviceId }) {
  const service = getServiceById(serviceId);
  return (
    <div>
      <h3>{service.problem.headline}</h3>
      <p>{service.solution.description}</p>
      {service.results.map(r => (
        <Stat key={r.label} value={r.metric} label={r.label} />
      ))}
    </div>
  );
}
```

## Adding New Content

### New Service
1. Add to `src/content/services/index.ts`
2. Follow the Service interface exactly
3. Update order number for positioning
4. Set `featured: true` if it should appear prominently

### New Case Study
1. Add to `src/content/case-studies/index.ts`
2. Link to relevant services via `services` array
3. Include at least 3 quantified results
4. Add at least 2 takeaways

### Updating Metrics
1. Edit `src/content/metrics.ts`
2. Keep heroMetrics to 3 items max
3. Ensure numbers are defensible

## SEO Integration

Content structure maps to SEO keywords:

| Page | Primary Keyword | Search Intent |
|------|-----------------|---------------|
| Home | custom AI solutions | commercial |
| Services | AI automation services | commercial |
| Solutions | AI business solutions | informational |
| Process | AI implementation process | informational |
| System Request | AI system request | transactional |

See `content/keywords.json` for full keyword strategy.
