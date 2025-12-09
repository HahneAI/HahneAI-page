import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { heroContent } from '../../content/navigation';

/**
 * Minimalist Hero Section
 *
 * Design principles:
 * - Large, clean typography with clear hierarchy
 * - Generous whitespace (breathing room)
 * - Single strong CTA with subtle secondary
 * - Muted fade-in animation only
 * - Social proof metric for credibility
 */
export function Hero() {
  const navigate = useNavigate();
  const content = heroContent.primary;

  return (
    <section className="relative min-h-screen flex items-center bg-surface-dark">
      {/* Subtle gradient background - warm, not tech-aggressive */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-surface-dark to-surface-dark" />

      {/* Content container with generous padding */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Headline - Large, commanding */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight max-w-4xl">
            {content.headline}
          </h1>

          {/* Subheadline - Smaller, muted */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            {content.subheadline}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => navigate('/system-request')}
              className="px-8 py-4 bg-white text-neutral-900 text-base font-medium rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              {content.cta.primary}
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 text-neutral-300 text-base font-medium hover:text-white transition-colors duration-200"
            >
              {content.cta.secondary}
            </button>
          </div>

          {/* Social Proof - Subtle credibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-16 border-t border-neutral-800"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-light text-white">
                {content.proof.metric}
              </span>
              <span className="text-sm text-neutral-500">
                {content.proof.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
