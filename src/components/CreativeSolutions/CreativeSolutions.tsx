import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SystemCanvas } from './SystemCanvas';
import { ProcessFlow } from './ProcessFlow';
import { CaseStudies } from './CaseStudies';
import { ProblemSolver } from './ProblemSolver';
import { CreativeToolkit } from './CreativeToolkit';
import { HirePopup } from '../HirePopup/HirePopup';

export function CreativeSolutions() {
  const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <SystemCanvas />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-surface-dark/25 backdrop-blur-sm p-8 rounded-lg inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wider font-space leading-relaxed">
              <span className="block">We Don't Just Build Systems—</span>
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                We Weave Success
              </span>
            </h1>
            <p className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto">
              Discover how our universal framework powers success across all industries.
            </p>
            <Link
              to="/process"
              className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-space tracking-wider hover:from-primary-700 hover:to-secondary-600 transition-all"
            >
              Explore Our Process
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Flow Section */}
      <section id="process-section" className="py-24">
        <ProcessFlow />
      </section>

      {/* Problem Solver Section */}
      <section className="py-24 bg-black/40 backdrop-blur-sm">
        <ProblemSolver />
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <CaseStudies />
      </section>

      {/* Why Creativity Matters Section */}
      <section className="py-24 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-space bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                Why Creativity Matters
              </h2>
              <blockquote className="text-2xl text-white">
                "Businesses that embrace creativity are 3x more likely to outperform competitors."
              </blockquote>
              <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-neutral-400 space-y-4"
            >
              <p>
                At HahneAI, we understand that true innovation lies at the intersection of creative thinking and technical excellence. Our approach isn't just about implementing automation—it's about reimagining what's possible.
              </p>
              <p>
                We use creativity to bridge gaps, solve complex challenges, and create systems that don't just work—they evolve and adapt with your business. This creative foundation ensures your solutions are not only effective today but scalable for tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-space bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
              Ready to Transform Ideas Into Action?
            </h2>
            <p className="text-xl text-neutral-400 font-space">
              Start Your I.S.I Framework Today before Monthly Quotas are Met
            </p>
            <button
              onClick={() => setIsHirePopupOpen(true)}
              className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-space tracking-wider hover:from-primary-700 hover:to-secondary-600 transition-all"
            >
              Schedule your IDEATION Brainstorm Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Creative Toolkit Section */}
      <section className="py-24 bg-black/40 backdrop-blur-sm">
        <CreativeToolkit />
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsHirePopupOpen(true)}
            className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-space tracking-wider hover:from-primary-700 hover:to-secondary-600 transition-all"
          >
            Ready?
          </button>
        </div>
      </section>

      <HirePopup 
        isOpen={isHirePopupOpen}
        onClose={() => setIsHirePopupOpen(false)}
      />
    </div>
  );
}