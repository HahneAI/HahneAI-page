import { motion } from 'framer-motion';
import { Users, MessageSquare, ShieldCheck } from 'lucide-react';

const collaborationPoints = [
  {
    icon: Users,
    title: 'Integrated Teams',
    description: 'We don\'t work for you, we work with you. Our experts become a seamless extension of your team, ensuring full alignment and knowledge transfer.'
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'You\'re always in the loop. We use shared channels, regular check-ins, and clear documentation to keep you informed every step of the way.'
  },
  {
    icon: ShieldCheck,
    title: 'Shared Ownership',
    description: 'Your success is our success. We foster a partnership where goals are shared, challenges are tackled together, and victories are celebrated as one.'
  }
];

export function ClientCollaboration() {
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
            Your Partner in Innovation
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Collaboration is the cornerstone of our success. We build strong, transparent partnerships to ensure we're not just meeting expectations, but exceeding them together.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {collaborationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface-dark/50 backdrop-blur-sm p-8 rounded-lg border border-primary-500/20 text-center"
            >
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-terra-500/10 w-16 h-16 rounded-full mb-6">
                <point.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{point.title}</h3>
              <p className="text-neutral-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
