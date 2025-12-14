import { motion } from 'framer-motion';
import { FileText, Briefcase, BarChart } from 'lucide-react';

const templateSections = [
  {
    icon: Briefcase,
    title: 'Business Challenge',
    description: 'A concise overview of the problem, the industry context, and the initial state of the client\'s operations.'
  },
  {
    icon: FileText,
    title: 'I.S.I. in Action',
    description: 'A step-by-step breakdown of how the Intelligence, System Architecture, and Implementation & Iteration phases were applied to the specific challenge.'
  },
  {
    icon: BarChart,
    title: 'Measurable Outcomes',
    description: 'Quantifiable results and qualitative improvements, showcasing the direct impact of the solution on the client\'s KPIs and business goals.'
  }
];

export function CaseStudyTemplates() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-space mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Showcasing Success: Our Case Study Model
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            We believe in transparency and results. Every project follows a clear structure to demonstrate value and provide a blueprint for success. Here’s how we frame our case studies.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20" />
          <div className="grid md:grid-cols-3 gap-8 relative">
            {templateSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface-dark/50 backdrop-blur-sm p-8 rounded-lg border border-teal-500/20 z-10 text-center"
              >
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10 w-16 h-16 rounded-full mb-6">
                  <section.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{section.title}</h3>
                <p className="text-neutral-400">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
