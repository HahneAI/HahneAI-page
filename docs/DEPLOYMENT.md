# Deployment Guide - HahneAI Website

**Production Site:** https://tryhahneai.com
**Last Updated:** December 13, 2024
**Build Tool:** Vite 5.4.8
**Framework:** React 18 + TypeScript

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build Process](#build-process)
3. [Environment Variables](#environment-variables)
4. [Deployment Steps](#deployment-steps)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [Rollback Procedure](#rollback-procedure)
7. [Performance Monitoring](#performance-monitoring)
8. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Run through this checklist before every deployment:

### Code Quality
- [ ] All tests pass: `npm run test` (if tests exist)
- [ ] Build completes without errors: `npm run build`
- [ ] No console errors or warnings in production build
- [ ] TypeScript compilation successful
- [ ] Linting passes (if configured)

### Content & SEO
- [ ] All links verified (navigation, footer, CTAs)
- [ ] SEO meta tags present on all pages
- [ ] sitemap.xml includes all routes
- [ ] robots.txt properly configured
- [ ] Canonical URLs correct

### Analytics & Tracking
- [ ] Google Analytics (G-E431V9YPRD) firing correctly
- [ ] Leadsy tracking configured (pid: cKzYnChxjFPbSb19)
- [ ] Custom event tracking tested (CTA clicks, form submissions, scroll depth)

### Mobile & Accessibility
- [ ] All touch targets meet 44px minimum (WCAG 2.5.5)
- [ ] No global font-size scaling
- [ ] Form inputs have `fontSize: '16px'` (iOS zoom prevention)
- [ ] Lighthouse accessibility score 95+
- [ ] Mobile responsive at 320px, 768px, 1024px, 1920px

### Performance
- [ ] Bundle sizes acceptable (vendor <60 kB gzipped, animations <45 kB gzipped)
- [ ] Images optimized (if applicable)
- [ ] Fonts preloaded and lazy-loaded
- [ ] Code splitting implemented
- [ ] Lazy loading for route components

### Forms & Integrations
- [ ] System Request form submits properly
- [ ] Investor Details modal submits properly
- [ ] Formspree endpoint configured (update `YOUR_FORM_ID` in RequestDetailsModal.tsx)
- [ ] Error handling works (test with invalid inputs)

---

## Build Process

### Development Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Runs on http://localhost:5173
```

### Production Build

```bash
# Create optimized production build
npm run build

# Output location: ./dist/
# Build time: ~5-6 seconds
```

### Build Output Structure

```
dist/
├── index.html                    # Entry point (15.31 kB)
├── assets/
│   ├── index-CWfnofyf.css       # Main styles (42.02 kB, 7.17 kB gzipped)
│   ├── vendor-B6U_Gi5m.js       # React, Framer Motion (160.50 kB, 52.23 kB gzipped)
│   ├── animations-BYih9imG.js   # Animation lib (121.84 kB, 39.07 kB gzipped)
│   ├── index-3FIh0J41.js        # App code (42.32 kB, 13.16 kB gzipped)
│   └── [page-specific chunks]   # Lazy-loaded routes
├── favicon.svg
├── sitemap.xml
├── robots.txt
└── public assets (logos, OG images)
```

### Build Configuration

**File:** `vite.config.ts`

Key settings:
- **Minification:** Terser (production)
- **Code Splitting:** Vendor, animations, page chunks
- **Source Maps:** Disabled in production (set `sourcemap: false`)
- **Browser Targets:** Defined in package.json browserslist

---

## Environment Variables

### Required Variables

Currently, the site uses **no environment variables** in the build process. All configuration is hardcoded for simplicity.

### Analytics Configuration

**Google Analytics:** Configured in `index.html` (line 35-41)
```javascript
gtag('config', 'G-E431V9YPRD');
```

**Leadsy Tracking:** Configured in `index.html` (line 34)
```html
<script src="https://r2.leadsy.ai/tag.js" data-pid="cKzYnChxjFPbSb19"></script>
```

### Form Endpoints

**Investor Details Form:** `src/components/Investors/RequestDetailsModal.tsx`
```typescript
// Line 35 - UPDATE THIS BEFORE DEPLOYMENT
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**Action Required:**
1. Create Formspree account: https://formspree.io
2. Get form ID
3. Update `YOUR_FORM_ID` in RequestDetailsModal.tsx
4. Rebuild before deployment

---

## Deployment Steps

### Option 1: Netlify (Recommended)

#### Initial Setup

1. **Connect Repository:**
   ```bash
   # Push code to GitHub
   git push origin main

   # Sign in to Netlify: https://app.netlify.com
   # Click "Add new site" → "Import an existing project"
   # Connect to GitHub repository
   ```

2. **Configure Build Settings:**
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 or higher

3. **Deploy:**
   - Netlify auto-deploys on push to main branch
   - Manual deploy: Drag `dist` folder to Netlify dashboard

#### Custom Domain Setup

```bash
# In Netlify dashboard:
# Domain settings → Add custom domain → tryhahneai.com
# Configure DNS:
# A Record: 104.198.14.52 (Netlify's load balancer)
# CNAME: subdomain → your-site.netlify.app
```

#### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option 3: Manual Static Hosting

```bash
# Build
npm run build

# Upload dist/ folder to:
# - AWS S3 + CloudFront
# - GitHub Pages
# - Any static hosting provider
```

**For GitHub Pages:**
```bash
# Add to package.json
"homepage": "https://username.github.io/repo-name",

# Deploy script
npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:username/repo-name.git main:gh-pages
```

---

## Post-Deployment Verification

### Automated Checks

Run these immediately after deployment:

1. **Lighthouse Audit:**
   ```bash
   # Install Lighthouse CLI
   npm install -g lighthouse

   # Run audit
   lighthouse https://tryhahneai.com --view
   ```

   **Target Scores:**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

2. **Link Checker:**
   ```bash
   # Install broken-link-checker
   npm install -g broken-link-checker

   # Check all links
   blc https://tryhahneai.com -ro
   ```

3. **Mobile-Friendly Test:**
   - Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
   - Enter: https://tryhahneai.com
   - Verify: All pages pass

### Manual Verification Checklist

#### Homepage (/)
- [ ] Hero section loads correctly
- [ ] CTAs navigate to correct pages
- [ ] Social proof metrics visible
- [ ] Analytics fires (check Network tab → gtag)
- [ ] Scroll tracking works (scroll 50%, check GA4 real-time)

#### Services Page (/services)
- [ ] All service cards render
- [ ] Hash links work (#outbound-pipeline, #content-engine, etc.)
- [ ] CTAs navigate to /system-request
- [ ] Illustrations load (custom SVG patterns)

#### Creative Solutions (/creative-solutions)
- [ ] I.S.I Framework content displays
- [ ] CTA buttons work
- [ ] Responsive layout at all breakpoints

#### Process Page (/process)
- [ ] Process flow displays correctly
- [ ] Navigation links work

#### Investors Page (/investors)
- [ ] Venture cards render
- [ ] "Request Details" button opens modal
- [ ] Modal form submits (test with dummy data)
- [ ] Success message appears after submission
- [ ] Analytics tracks form submission

#### System Request Page (/system-request)
- [ ] Multi-step form renders
- [ ] Progress indicator updates
- [ ] Navigation (Back/Continue) works
- [ ] Form validation works
- [ ] Submit button triggers (Phase 4)

#### Mobile Verification (Required)
- [ ] Test on iPhone SE (320px width)
- [ ] Test on iPhone 15 (390px width)
- [ ] Test on iPad portrait (768px width)
- [ ] All touch targets 44px minimum
- [ ] Sticky mobile CTA appears on scroll
- [ ] No horizontal scroll at any breakpoint
- [ ] Forms work with software keyboard open

#### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 16+)
- [ ] Chrome Android (latest)

---

## Rollback Procedure

### Immediate Rollback (< 5 minutes)

If critical issues detected post-deployment:

#### Netlify Rollback
```bash
# Option 1: Netlify Dashboard
# 1. Go to Deploys tab
# 2. Find previous working deployment
# 3. Click "..." → "Publish deploy"

# Option 2: Netlify CLI
netlify deploy --prod --dir=dist-backup
```

#### Git Rollback
```bash
# Revert to previous commit
git log --oneline  # Find last working commit hash
git revert <commit-hash>
git push origin main

# Or hard reset (use with caution)
git reset --hard <commit-hash>
git push --force origin main
```

### Preparing for Rollback

**Before every deployment:**

1. **Tag the release:**
   ```bash
   git tag -a v1.2.0 -m "Production deployment - Dec 13, 2024"
   git push origin v1.2.0
   ```

2. **Backup dist folder:**
   ```bash
   npm run build
   cp -r dist dist-backup-$(date +%Y%m%d-%H%M%S)
   ```

3. **Document deployment:**
   Create deployment log in `docs/deployments/`:
   ```markdown
   # Deployment - December 13, 2024

   **Time:** 2:30 PM EST
   **Version:** v1.2.0
   **Deployed by:** Anthony
   **Changes:**
   - Mobile UX improvements
   - A/B testing infrastructure
   - Documentation updates

   **Build Output:**
   - vendor.js: 52.23 kB (gzipped)
   - animations.js: 39.07 kB (gzipped)
   - Total size: ~110 kB (gzipped)

   **Verification:** All checks passed ✅
   ```

### Rollback Decision Tree

```
Critical Issue Detected
    ↓
Is the site completely broken? → YES → Immediate rollback (Netlify)
    ↓ NO
Is it affecting conversions? → YES → Rollback within 1 hour
    ↓ NO
Is it a minor visual bug? → YES → Fix forward, deploy patch
    ↓ NO
Log issue, monitor metrics → Schedule fix
```

---

## Performance Monitoring

### Real-Time Monitoring

**Google Analytics 4 (Real-Time Report):**
- URL: https://analytics.google.com/
- Property ID: G-E431V9YPRD
- Check within 5 minutes of deployment

**Key Metrics to Watch:**
- Page views per minute (baseline: varies)
- CTA click events (`cta_click`)
- Form submissions (`form_submit`)
- Error rate (should be 0%)

### Weekly Performance Review

**Metrics Dashboard:**

| Metric | Target | Check Frequency |
|--------|--------|----------------|
| Page Load Time | < 2s | Weekly |
| Lighthouse Performance | > 90 | Weekly |
| Mobile Usability Errors | 0 | Weekly |
| Broken Links | 0 | Weekly |
| Form Completion Rate | > 15% | Weekly |
| Bounce Rate | < 50% | Weekly |

**Tools:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Google Search Console: https://search.google.com/search-console
- Lighthouse CI (if configured)

### Performance Budgets

**Bundle Size Budgets:**
- Vendor chunk: < 60 kB (gzipped)
- Animations chunk: < 45 kB (gzipped)
- Page chunks: < 15 kB each (gzipped)
- Total JS: < 150 kB (gzipped)
- CSS: < 10 kB (gzipped)

**Monitor with:**
```bash
npm run build
# Check output for chunk sizes
# Bundle sizes logged to console after build
```

---

## Troubleshooting

### Common Issues & Solutions

#### 1. Build Fails: "vite: command not found"

**Problem:** Dependencies not installed

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. White Screen After Deployment

**Problem:** Incorrect base path or missing index.html rewrite

**Solution (Netlify):**
- Check `netlify.toml` has redirect rule
- Verify build command: `npm run build`
- Verify publish directory: `dist`

**Solution (Manual hosting):**
- Ensure server rewrites all routes to `/index.html`
- Check console for 404 errors on JS/CSS files

#### 3. Analytics Not Firing

**Problem:** gtag not loading or blocked by ad blockers

**Solution:**
- Check Network tab for `gtag/js` request
- Verify `G-E431V9YPRD` in index.html
- Test in incognito mode (bypasses ad blockers)

#### 4. Forms Not Submitting

**Problem:** Formspree endpoint not configured

**Solution:**
1. Check `RequestDetailsModal.tsx` line 35
2. Verify `YOUR_FORM_ID` is replaced with actual ID
3. Test with curl:
   ```bash
   curl -X POST https://formspree.io/f/YOUR_FORM_ID \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com"}'
   ```

#### 5. Mobile Layout Broken

**Problem:** Global font-size scaling or missing responsive utilities

**Solution:**
- Check `index.css` for `html { font-size: 90%; }` (remove if present)
- Verify all components use Tailwind responsive modifiers (`sm:`, `md:`, `lg:`)
- Test at 320px viewport in Chrome DevTools

#### 6. Slow Load Time (> 3s)

**Problem:** Large bundle sizes or unoptimized assets

**Solution:**
1. Check bundle sizes: `npm run build`
2. If vendor chunk > 60 kB gzipped, review dependencies
3. Ensure code splitting is working (check for page-specific chunks)
4. Verify fonts are lazy-loaded (check `index.html` lines 27-31)

#### 7. Console Errors in Production

**Problem:** Development code in production build

**Solution:**
- Check vite.config.ts `mode: 'production'`
- Verify `NODE_ENV=production` during build
- Remove any `console.log` statements (keep `console.error` in catch blocks)

---

## Quick Reference

### Essential Commands

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)

# Build
npm run build        # Production build (output: dist/)
npm run preview      # Preview production build locally

# Deployment (Netlify)
git push origin main # Auto-deploy to production
netlify deploy       # Manual deploy (requires Netlify CLI)

# Verification
lighthouse https://tryhahneai.com --view
```

### Critical Files for Deployment

| File | Purpose | Update Before Deploy? |
|------|---------|----------------------|
| `index.html` | SEO meta tags, analytics | Only for meta/analytics changes |
| `vite.config.ts` | Build configuration | Rarely |
| `package.json` | Dependencies | When adding/updating packages |
| `netlify.toml` | Netlify config | When changing build settings |
| `sitemap.xml` | SEO sitemap | When adding new pages |
| `robots.txt` | Crawler directives | Rarely |
| `RequestDetailsModal.tsx` | Form endpoint | **YES** - Update Formspree ID |

### Emergency Contacts

**Hosting:** Netlify Support (if using Netlify)
**Domain:** Domain registrar support
**Analytics:** Google Analytics support
**Forms:** Formspree support (support@formspree.io)

---

## Version History

| Version | Date | Deployed By | Changes |
|---------|------|-------------|---------|
| v1.2.0 | 2024-12-13 | Anthony | Mobile UX improvements, A/B testing infrastructure |
| v1.1.0 | 2024-12-10 | Anthony | Custom illustrations, navigation updates |
| v1.0.0 | 2024-12-09 | Anthony | Initial production deployment |

---

**Last Reviewed:** December 13, 2024
**Maintained By:** Anthony (with Claude's assistance)
**Next Review:** After next major deployment
