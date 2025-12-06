import { Methodology } from '../components/Process/Methodology';
import { CaseStudyTemplates } from '../components/Process/CaseStudyTemplates';
import { ClientCollaboration } from '../components/Process/ClientCollaboration';
import { SuccessMetrics } from '../components/Process/SuccessMetrics';
import { ProcessFlow } from '../components/CreativeSolutions/ProcessFlow';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ProcessPage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-['Space_Mono'] mb-6 tracking-wider leading-tight">
              <span className="block">The Universal I.S.I Framework</span>
              <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mt-2">
                From Insight to Impact
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
            className="space-y-8"
          >
            <h2 className="text-4xl font-['Space_Mono'] bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-400 font-['Space_Mono']">
              Let's apply the I.S.I Framework to your unique challenges.
            </p>
            <Link
              to="/creative-solutions#hire"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-['Space_Mono'] tracking-wider hover:from-teal-600 hover:to-blue-700 transition-all"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
