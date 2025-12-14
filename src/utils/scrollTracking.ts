/**
 * Scroll Depth Tracking for A/B Testing
 *
 * Tracks user scroll behavior to understand engagement
 * and optimize content placement for conversion.
 */

import { trackScrollDepth } from './analytics';

type ScrollMilestone = 25 | 50 | 75 | 100;

interface ScrollTracker {
  milestones: Set<ScrollMilestone>;
  pagePath: string;
}

const scrollTrackers: Map<string, ScrollTracker> = new Map();

/**
 * Initialize scroll depth tracking for a page
 */
export function initializeScrollTracking(pagePath: string): void {
  if (typeof window === 'undefined') return;

  // Don't re-initialize if already tracking
  if (scrollTrackers.has(pagePath)) return;

  const tracker: ScrollTracker = {
    milestones: new Set(),
    pagePath
  };

  scrollTrackers.set(pagePath, tracker);

  // Add scroll event listener
  const handleScroll = () => checkScrollDepth(pagePath);
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Track initial state (in case already scrolled)
  checkScrollDepth(pagePath);

  // Cleanup on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
    scrollTrackers.delete(pagePath);
  };
}

/**
 * Check current scroll depth and fire events for milestones
 */
function checkScrollDepth(pagePath: string): void {
  const tracker = scrollTrackers.get(pagePath);
  if (!tracker) return;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || window.pageYOffset;

  // Calculate scroll percentage
  const scrollPercent = ((scrollTop + windowHeight) / documentHeight) * 100;

  // Check each milestone
  const milestones: ScrollMilestone[] = [25, 50, 75, 100];

  milestones.forEach(milestone => {
    if (scrollPercent >= milestone && !tracker.milestones.has(milestone)) {
      tracker.milestones.add(milestone);
      trackScrollDepth(milestone, pagePath);
    }
  });
}

/**
 * Track section view when element enters viewport
 */
export function trackSectionView(sectionName: string): void {
  if (typeof window === 'undefined') return;

  // Create intersection observer for section tracking
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Track section view in analytics
          if (window.gtag) {
            window.gtag('event', 'section_view', {
              section_name: sectionName,
              page_path: window.location.pathname,
            });
          }
        }
      });
    },
    {
      threshold: 0.5, // 50% of section must be visible
      rootMargin: '0px'
    }
  );

  // Find section element by data attribute
  const sectionElement = document.querySelector(`[data-section="${sectionName}"]`);
  if (sectionElement) {
    observer.observe(sectionElement);
  }
}

/**
 * Track time on page for engagement metrics
 */
export function initializeTimeTracking(pagePath: string): void {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  let isActive = true;

  // Track when user becomes inactive
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isActive = false;
      sendTimeMetric();
    } else {
      isActive = true;
    }
  };

  // Track when user leaves page
  const handleBeforeUnload = () => {
    sendTimeMetric();
  };

  function sendTimeMetric() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000); // seconds

    if (window.gtag && timeSpent > 0) {
      window.gtag('event', 'time_on_page', {
        value: timeSpent,
        page_path: pagePath,
        engagement_time_msec: timeSpent * 1000
      });
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', handleBeforeUnload);

  // Send metric every 30 seconds for long sessions
  const interval = setInterval(() => {
    if (isActive) {
      sendTimeMetric();
    }
  }, 30000);

  // Cleanup
  return () => {
    clearInterval(interval);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}

/**
 * React hook for scroll tracking
 */
export function useScrollTracking(pagePath: string) {
  if (typeof window === 'undefined') return;

  React.useEffect(() => {
    const cleanup1 = initializeScrollTracking(pagePath);
    const cleanup2 = initializeTimeTracking(pagePath);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, [pagePath]);
}

// Make React available in scope for the hook
import React from 'react';
