import { motion } from 'framer-motion';
import { Zap, Target, Infinity } from 'lucide-react';

const corePrinciples = [
  {
    icon: Zap,
    title: 'Clarity & Precision',
    description: 'We start by defining the problem with absolute clarity. No ambiguity, no guesswork. Just a precise understanding of the challenge and the desired outcome.'
  },
  {
    icon: Target,
    title: 'Strategic Design',
    description: 'Every solution is architected for a perfect fit. We design systems that are not only powerful but also elegant, scalable, and aligned with your long-term vision.'
  },
  {
    icon: Infinity,
    title: 'Continuous Evolution',
    description: 'The world never stands still, and neither do our solutions. We build for adaptation, ensuring your systems can evolve and grow with your business.'
  }
];

export function Methodology() {
  return (
    <section className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-space mb-4 bg-gradient-to-r from-primary-500 to-terra-500 bg-clip-text text-transparent">
            The Philosophy Behind Our Process
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Our I.S.I Framework is more than a series of steps—it's a philosophy of creative problem-solving. It's designed to be agile, adaptable, and laser-focused on delivering results that matter.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {corePrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface-dark/50 backdrop-blur-sm p-8 rounded-lg border border-primary-500/20"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-terra-500/10 w-16 h-16 rounded-lg mb-6">
                <principle.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{principle.title}</h3>
              <p className="text-neutral-400">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
