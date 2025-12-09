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

// Default images for services
function getDefaultImage(id: string): string {
  const images: Record<string, string> = {
    'cold-outreach':
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    'social-media':
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80',
    'call-management':
      'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80',
    'website-overhaul':
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    'website-agents':
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    'isi-framework':
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  };
  return images[id] || images['cold-outreach'];
}

// Re-export types and content services for new components
export { contentServices, type Service };
