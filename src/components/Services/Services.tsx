import { motion } from 'framer-motion';
import { ServiceDetail } from './ServiceCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../../content/services';
import { pageContent } from '../../content/navigation';

/**
 * Services Page - Full detail view
 *
 * Design principles:
 * - Clean section dividers
 * - Problem-first content structure
 * - Generous whitespace
 * - Clear typography hierarchy
 */
export function Services() {
  const location = useLocation();

  useEffect(() => {
    const serviceId = location.hash.slice(1);
    if (serviceId) {
      const element = document.getElementById(serviceId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-tight max-w-3xl">
            {pageContent.services.headline}
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl">
            {pageContent.services.subheadline}
          </p>
        </motion.header>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }
            }
          }}
        >
          {services
            .filter((s) => s.id !== 'isi-framework')
            .map((service) => (
              <ServiceDetail
                key={service.id}
                id={service.id}
                title={service.title}
                tagline={service.tagline}
                problem={service.problem}
                solution={service.solution}
                results={service.results}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
