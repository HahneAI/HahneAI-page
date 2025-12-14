import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = () => {
  ReactGA.initialize('G-E431V9YPRD');
};

// Page view tracking
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Generic event tracking
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// User tracking
export const setUser = (userId: string) => {
  ReactGA.set({ userId });
};

// CTA button click tracking
export const trackCTAClick = (ctaLabel: string, ctaLocation: string, ctaDestination?: string) => {
  ReactGA.event({
    category: 'CTA',
    action: 'click',
    label: `${ctaLabel} | ${ctaLocation}`,
    value: ctaDestination,
  });
};

// Form submission tracking
export const trackFormSubmit = (formName: string, formLocation: string, success = true) => {
  ReactGA.event({
    category: 'Form',
    action: success ? 'submit_success' : 'submit_error',
    label: `${formName} | ${formLocation}`,
  });
};

// Navigation click tracking
export const trackNavigation = (navItem: string, navLocation: 'header' | 'footer' | 'inline') => {
  ReactGA.event({
    category: 'Navigation',
    action: 'click',
    label: `${navItem} | ${navLocation}`,
  });
};

// Service card interaction tracking
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  ReactGA.event({
    category: 'Service',
    action: 'view',
    label: `${serviceName} | ${serviceCategory}`,
  });
};

// Investor page interaction tracking
export const trackInvestorInteraction = (
  interactionType: 'venture_view' | 'request_details' | 'modal_open',
  ventureName?: string
) => {
  ReactGA.event({
    category: 'Investor',
    action: interactionType,
    label: ventureName,
  });
};

// Scroll depth tracking
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100, pagePath: string) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'scroll_depth',
    label: pagePath,
    value: depth,
  });
};