import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { heroContent } from '../../content/navigation';
import { trackCTAClick } from '../../utils/analytics';

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
    <section
      className="relative min-h-screen flex items-center bg-surface-dark"
      data-section="hero"
      data-variation="control"
      data-testable="true"
    >
      {/* Subtle gradient background - warm, not tech-aggressive */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-surface-dark to-surface-dark" />

      {/* Content container with generous padding */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Headline - Optimized for mobile readability */}
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] sm:leading-[1.1] tracking-tight max-w-4xl"
            data-element="hero-headline"
            data-variation="control"
          >
            {content.headline}
          </h1>

          {/* Subheadline - Optimized for mobile */}
          <p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            data-element="hero-subheadline"
          >
            {content.subheadline}
          </p>

          {/* CTA Group - Improved mobile touch targets */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4" data-element="hero-cta-group">
            <motion.button
              onClick={() => {
                trackCTAClick(content.cta.primary, 'hero-primary', '/system-request');
                navigate('/system-request');
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 24px -4px rgba(239, 82, 68, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full sm:w-auto min-w-[160px] px-8 py-4 min-h-[48px] bg-white text-neutral-900 text-base font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors duration-200"
              data-cta="primary"
              data-cta-text="Tell Us Your Challenge"
              data-cta-destination="/system-request"
              data-variation="control"
            >
              {content.cta.primary}
            </motion.button>
            <motion.button
              onClick={() => {
                trackCTAClick(content.cta.secondary, 'hero-secondary', '/services');
                navigate('/services');
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px -6px rgba(239, 82, 68, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full sm:w-auto min-w-[160px] px-8 py-4 min-h-[48px] border border-neutral-700 text-neutral-300 text-base font-medium rounded-lg hover:text-white hover:border-neutral-600 active:bg-neutral-800/50 transition-colors duration-200"
              data-cta="secondary"
              data-cta-text="See What We Build"
              data-cta-destination="/services"
              data-variation="control"
            >
              {content.cta.secondary}
            </motion.button>
          </div>

          {/* Social Proof - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-12 sm:pt-16 border-t border-neutral-800"
          >
            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                {content.proof.metric}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500">
                {content.proof.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
