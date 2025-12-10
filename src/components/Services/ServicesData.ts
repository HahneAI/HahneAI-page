/**
 * Services data - re-exports from centralized content
 * This file maintained for backward compatibility
 * New code should import directly from '../../content/services'
 */

import { services as contentServices, type Service } from '../../content/services';

// Transform new service format to legacy format for backward compatibility
export const services = contentServices
  .filter((s) => s.id !== 'isi-framework') // ISI Framework handled separately
  .map((service) => ({
    icon: service.icon,
    title: service.title,
    id: service.id,
    tagline: `"${service.tagline}"`,
    description: formatServiceDescription(service),
    imageUrl: service.imageUrl || getDefaultImage(service.id),
  }));

// Helper to format the new problem-first content into legacy description format
function formatServiceDescription(service: Service): string {
  const parts: string[] = [];

  // Add solution description
  parts.push(service.solution.description);
  parts.push('');

  // Add features as bullet points
  parts.push('Features include:');
  service.solution.features.forEach((feature) => {
    parts.push(`• ${feature}`);
  });

  return parts.join('\n');
}

// Map service IDs to their corresponding illustration components
// Now using custom geometric SVG patterns instead of stock photos
function getDefaultImage(id: string): string {
  // Return component names as identifiers for the illustration components
  // These will be matched in the ServiceCard component
  const illustrationMap: Record<string, string> = {
    'cold-outreach': 'outbound',
    'social-media': 'content',
    'call-management': 'call',
    'website-overhaul': 'website',
    'website-agents': 'automation',
    'isi-framework': 'isi',
  };
  return illustrationMap[id] || 'automation';
}

// Re-export types and content services for new components
export { contentServices, type Service };
