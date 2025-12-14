import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../content/services';

/**
 * Home Services Section - Minimalist Grid
 *
 * Design principles:
 * - Clean card grid
 * - Problem-first headlines
 * - Subtle hover states
 * - Clear CTA at bottom
 */
export function HomeServices() {
  const navigate = useNavigate();

  // Get featured services (excluding ISI framework for separate treatment)
  const featuredServices = services
    .filter((s) => s.id !== 'isi-framework')
    .slice(0, 4);

  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6">
            What we build
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl">
            Systems that handle outreach, calls, and customer engagement—so you
            can focus on what matters.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16"
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
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }
                }
              }}
              onClick={() => navigate(`/services#${service.id}`)}
              className="group cursor-pointer"
            >
              <div className="p-6 sm:p-8 md:p-10 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-900/30 transition-all duration-300 h-full flex flex-col">
                {/* Service number */}
                <span className="text-xs text-neutral-600 font-mono mb-4 sm:mb-6">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-3">
                  {service.title}
                </h3>

                {/* Problem headline */}
                <p className="text-sm sm:text-base text-neutral-400 mb-6 flex-grow">
                  {service.problem.headline}
                </p>

                {/* Key metric */}
                <div className="flex items-baseline gap-2 sm:gap-3 mb-6 pt-4 border-t border-neutral-800">
                  <span className="text-xl sm:text-2xl font-light text-white">
                    {service.results[0]?.metric}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {service.results[0]?.label}
                  </span>
                </div>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 px-8 py-4 text-neutral-300 hover:text-white transition-colors"
          >
            <span>View all solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
