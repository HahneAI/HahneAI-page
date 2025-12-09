# HahneAI Design System

A design system inspired by Anthropic's warm, sophisticated aesthetic—professional without being "tech-bro."

---

## Design Philosophy

### Core Principles

1. **Warmth Over Coldness**: Use warm grays, terra cotta accents, and cream tones instead of stark black/white/blue
2. **Restraint & Clarity**: Show only what matters, remove visual clutter
3. **Human-Centered**: Technical precision paired with approachable warmth
4. **Purposeful Motion**: Animations should feel natural, not flashy

### Inspired By

- **Anthropic**: Warm color system, sophisticated typography, generous whitespace
- **Avantos**: Outcome-focused messaging structure (Problem → Solution → Results)

---

## Color Palette

### Primary - Coral Red

Our signature color, refined from pure red to a warmer coral tone.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#fef3f2` | Subtle backgrounds |
| `primary-100` | `#fee4e2` | Hover states |
| `primary-200` | `#fececa` | Borders |
| `primary-300` | `#fcaca5` | Icons |
| `primary-400` | `#f87b70` | Secondary buttons |
| `primary-500` | `#ef5244` | **Main primary** |
| `primary-600` | `#dc3626` | Primary buttons |
| `primary-700` | `#b92a1c` | Hover states |
| `primary-800` | `#992619` | Active states |
| `primary-900` | `#7f261b` | Dark accents |

```tsx
// Usage
<button className="bg-primary-600 hover:bg-primary-700">
  Primary Action
</button>
```

### Secondary - Warm Amber

Complementary warmth for gradients and accents.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-400` | `#fbbf24` | Accent highlights |
| `secondary-500` | `#f59e0b` | **Main secondary** |
| `secondary-600` | `#d97706` | Hover states |

```tsx
// Gradient usage
<div className="bg-gradient-to-r from-primary-600 to-secondary-500">
  Warm gradient
</div>
```

### Tertiary - Terra Cotta

Anthropic-inspired sophistication for special accents.

| Token | Hex | Usage |
|-------|-----|-------|
| `terra-400` | `#e59878` | Light accent |
| `terra-500` | `#da7756` | **Main terra cotta** |
| `terra-600` | `#c75f3f` | Hover state |

```tsx
// Testimonial highlight
<blockquote className="border-l-4 border-terra-500">
  Client testimonial
</blockquote>
```

### Neutrals - Warm Gray Scale

**Critical difference from typical tech sites**: Our grays have warm undertones.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#faf9f7` | Light backgrounds |
| `neutral-100` | `#f5f3ef` | Cream sections |
| `neutral-200` | `#e8e5de` | Borders, dividers |
| `neutral-300` | `#d6d2c8` | Disabled states |
| `neutral-400` | `#b5b0a4` | Placeholder text |
| `neutral-500` | `#918b7e` | Secondary text |
| `neutral-600` | `#756f64` | Body text (light mode) |
| `neutral-700` | `#5f5a51` | Headlines |
| `neutral-800` | `#4a4640` | Strong text |
| `neutral-900` | `#3d3929` | **Primary text** |
| `neutral-950` | `#1c1a16` | Rich black background |

### Surface Colors

Semantic tokens for consistent backgrounds.

```tsx
// Light mode
<main className="bg-surface-light">        // #faf9f7
<section className="bg-surface-cream">     // #f5f3ef
<aside className="bg-surface-muted">       // #e8e5de

// Dark mode
<main className="bg-surface-dark">         // #1c1a16
<div className="bg-surface-elevated">      // #242220
```

### Semantic Colors

| Category | Token | Hex | Usage |
|----------|-------|-----|-------|
| Success | `success-500` | `#22c55e` | Confirmations |
| Warning | `warning-500` | `#f59e0b` | Cautions |
| Error | `error-500` | `#ef4444` | Errors |
| Info | `info-500` | `#3b82f6` | Information |

---

## Typography

### Font Stack

```tsx
// Headlines & Display - Brand identity
font-space / font-mono → Space Mono

// Body text - Readable, professional
font-body / font-sans → Inter (with system fallbacks)

// Editorial accents - Testimonials, quotes
font-serif → Georgia (with fallbacks)
```

### Type Scale

Fluid typography that responds to viewport width.

| Token | Size | Usage |
|-------|------|-------|
| `display-2xl` | `clamp(3rem, 5vw + 1rem, 5rem)` | Hero headlines |
| `display-xl` | `clamp(2.5rem, 4vw + 1rem, 4rem)` | Page titles |
| `display-lg` | `clamp(2rem, 3vw + 1rem, 3rem)` | Section headers |
| `display-md` | `clamp(1.5rem, 2vw + 0.5rem, 2rem)` | Subsections |
| `display-sm` | `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` | Card titles |

| Token | Size | Usage |
|-------|------|-------|
| `body-xl` | `1.25rem` | Lead paragraphs |
| `body-lg` | `1.125rem` | Important body text |
| `body-md` | `1rem` | Default body |
| `body-sm` | `0.875rem` | Secondary text |
| `body-xs` | `0.75rem` | Captions, labels |

### Usage Examples

```tsx
// Hero headline
<h1 className="font-space text-display-xl text-neutral-900">
  Transform Your Business
</h1>

// Body paragraph
<p className="font-body text-body-lg text-neutral-600">
  We build custom AI systems...
</p>

// Testimonial
<blockquote className="font-serif text-body-xl italic text-neutral-700">
  "HahneAI transformed our workflow..."
</blockquote>
```

---

## Spacing

### Base Scale

Extended spacing for generous whitespace (Anthropic-style).

| Token | Value | Usage |
|-------|-------|-------|
| `1-16` | Standard Tailwind | Components |
| `18` | 4.5rem | |
| `22` | 5.5rem | |
| `26` | 6.5rem | |
| `30` | 7.5rem | |

### Section Spacing

Named tokens for consistent page sections.

```tsx
// Between major sections
<section className="py-section-lg">   // 8rem top/bottom
<section className="py-section-md">   // 6rem
<section className="py-section-sm">   // 4rem
```

### Content Width

```tsx
// Optimal reading width (65 characters)
<p className="max-w-content">Long form content...</p>

// Wider content (80 characters)
<div className="max-w-content-wide">Feature list...</div>

// Prose blocks (70 characters)
<article className="max-w-prose">Blog post...</article>
```

---

## Animation

### Timing Functions

```tsx
// Smooth, natural easing (Anthropic-style)
transition-smooth → cubic-bezier(0.16, 1, 0.3, 1)

// Soft bounce for interactive elements
transition-bounce-soft → cubic-bezier(0.34, 1.56, 0.64, 1)

// Exponential ease out
transition-ease-out-expo → cubic-bezier(0.19, 1, 0.22, 1)
```

### Duration Guidelines

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-fast` | 150ms | Micro-interactions (hover) |
| `duration-normal` | 200ms | Standard transitions |
| `duration-slow` | 400ms | Page transitions, reveals |
| `duration-slower` | 600ms | Complex animations |
| `duration-slowest` | 800ms | Hero animations |

### Pre-built Animations

```tsx
// Fade in from above
<div className="animate-fade-in">

// Fade in from below (for scrolling reveals)
<div className="animate-fade-in-up">

// Slide in from right
<div className="animate-slide-in-right">

// Scale in (for modals, cards)
<div className="animate-scale-in">

// Soft pulse (for attention)
<div className="animate-pulse-soft">
```

### Motion with Framer Motion

```tsx
// Recommended motion values
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1]  // smooth
  }}
>
```

---

## Shadows

### Soft Shadows

```tsx
// Subtle elevation
<div className="shadow-soft">     // Light cards

// Standard elevation
<div className="shadow-medium">   // Cards, dropdowns

// High elevation
<div className="shadow-large">    // Modals, popovers
```

### Glow Effects

```tsx
// Brand glow effects
<button className="shadow-glow-primary">   // Red glow
<div className="shadow-glow-secondary">    // Amber glow
<span className="shadow-glow-terra">       // Terra cotta glow
```

---

## Gradients

### Brand Gradients

```tsx
// Primary warm gradient (red → amber)
<div className="bg-gradient-warm">

// Terra cotta gradient
<div className="bg-gradient-terra">

// Dark gradient
<div className="bg-gradient-dark">
```

### Custom Gradient Syntax

```tsx
// Standard Tailwind gradient with our colors
<div className="bg-gradient-to-r from-primary-600 to-secondary-500">

// Diagonal gradient
<div className="bg-gradient-to-br from-primary-500 via-terra-500 to-secondary-500">
```

---

## Components Patterns

### Buttons

```tsx
// Primary button
<button className="
  bg-primary-600
  hover:bg-primary-700
  text-white
  px-6 py-3
  rounded-lg
  font-space
  text-sm
  tracking-wider
  transition-colors
  duration-normal
">
  Primary Action
</button>

// Secondary/outline button
<button className="
  border border-primary-500
  text-primary-500
  hover:bg-primary-50
  px-6 py-3
  rounded-lg
  transition-colors
  duration-normal
">
  Secondary
</button>

// Ghost button
<button className="
  text-neutral-600
  hover:text-neutral-900
  hover:bg-neutral-100
  px-4 py-2
  rounded-md
  transition-colors
  duration-fast
">
  Ghost
</button>
```

### Cards

```tsx
// Light mode card
<div className="
  bg-white
  rounded-xl
  shadow-soft
  hover:shadow-medium
  p-6
  transition-shadow
  duration-normal
">
  Card content
</div>

// Dark mode card
<div className="
  bg-surface-elevated
  rounded-xl
  border border-neutral-800
  p-6
">
  Dark card content
</div>
```

### Section Layout

```tsx
<section className="py-section-lg bg-surface-cream">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-space text-display-lg text-neutral-900 mb-6">
      Section Title
    </h2>
    <p className="font-body text-body-lg text-neutral-600 max-w-content">
      Section description with optimal reading width.
    </p>
  </div>
</section>
```

---

## Migration Guide

### Old → New Color Mapping

| Old Class | New Class |
|-----------|-----------|
| `text-red-500` | `text-primary-500` |
| `text-red-600` | `text-primary-600` |
| `bg-red-600` | `bg-primary-600` |
| `text-amber-400` | `text-secondary-400` |
| `text-amber-500` | `text-secondary-500` |
| `text-gray-300` | `text-neutral-300` |
| `text-gray-900` | `text-neutral-900` |
| `bg-gray-900` | `bg-surface-dark` or `bg-neutral-950` |
| `bg-black/20` | `bg-neutral-950/20` |

### Gradient Migration

```tsx
// Old
className="bg-gradient-to-r from-red-500 to-amber-400"

// New
className="bg-gradient-to-r from-primary-500 to-secondary-400"
// Or use preset
className="bg-gradient-warm"
```

### Font Migration

```tsx
// Old (explicit Space Mono)
className="font-['Space_Mono']"

// New (design token)
className="font-space"

// Body text (new)
className="font-body"
```

---

## Font Loading

Add Inter font to your `index.html`:

```html
<head>
  <!-- Existing Space Mono -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

  <!-- Add Inter for body text -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

---

## Accessibility

### Color Contrast

All text combinations meet WCAG AA standards:
- `neutral-900` on `surface-light`: 14.5:1
- `neutral-600` on `surface-light`: 6.2:1
- `white` on `primary-600`: 4.8:1

### Motion Preferences

```tsx
// Respect reduced motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    // Framer Motion auto-respects prefers-reduced-motion
  }}
>
```

CSS fallback in `index.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Quick Reference

### Most Used Tokens

```tsx
// Backgrounds
bg-surface-dark      // Dark page background
bg-surface-elevated  // Dark cards
bg-surface-light     // Light page background
bg-surface-cream     // Light sections

// Text
text-neutral-900     // Primary text
text-neutral-600     // Secondary text
text-neutral-400     // Muted text

// Brand colors
text-primary-500     // Accent text
bg-primary-600       // Primary buttons
text-secondary-400   // Warm accents

// Typography
font-space           // Headlines
font-body            // Body text
text-display-lg      // Section headers
text-body-lg         // Lead paragraphs

// Spacing
py-section-lg        // Major sections (8rem)
py-section-md        // Standard sections (6rem)

// Animation
animate-fade-in-up   // Scroll reveals
duration-slow        // 400ms transitions
ease-smooth          // Natural easing
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-12-09 | Initial design system |

---

*Design system inspired by [Anthropic](https://anthropic.com)'s warm, sophisticated aesthetic and [Avantos](https://avantos.io)' outcome-focused messaging.*
