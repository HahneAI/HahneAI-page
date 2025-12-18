import { Methodology } from '../components/Process/Methodology';
import { CaseStudyTemplates } from '../components/Process/CaseStudyTemplates';
import { ClientCollaboration } from '../components/Process/ClientCollaboration';
import { SuccessMetrics } from '../components/Process/SuccessMetrics';
import { ProcessFlow } from '../components/CreativeSolutions/ProcessFlow';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ProcessPage() {
  return (
    <div className="bg-surface-dark text-white">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black pt-24 sm:pt-32"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-space mb-6 tracking-wider leading-tight">
              <span className="block">The Universal I.S.I Framework</span>
              <span className="block bg-gradient-to-r from-primary-500 to-terra-500 bg-clip-text text-transparent mt-2">
                From Insight to Impact
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              A robust, industry-agnostic methodology for solving complex business challenges and driving sustainable growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Flow Section */}
      <div className="py-24">
        <ProcessFlow />
      </div>

      <Methodology />
      <CaseStudyTemplates />
      <ClientCollaboration />
      <SuccessMetrics />

      {/* CTA Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-space bg-gradient-to-r from-primary-500 to-terra-500 bg-clip-text text-transparent mb-6">
              Ready to Build Your Future?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 font-space mb-12 max-w-2xl mx-auto">
              Let's apply the I.S.I Framework to your unique challenges.
            </p>
            <Link to="/creative-solutions#hire">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 24px -4px rgba(239, 82, 68, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-white text-neutral-900 px-8 py-4 min-h-[48px] rounded-lg text-base sm:text-lg font-medium tracking-wide hover:bg-neutral-100 transition-colors inline-block"
              >
                Start a Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
