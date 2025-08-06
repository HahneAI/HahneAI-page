import { motion } from 'framer-motion';
import { useState } from 'react';
import { BrainCircuit, Combine, GitFork } from 'lucide-react';
import { HirePopup } from '../HirePopup/HirePopup';

const processSteps = [
  {
    id: 'intelligence',
    title: 'Intelligence Gathering',
    icon: BrainCircuit,
    description: 'Deep-dive analysis to understand your unique landscape',
    details: [
      'Market & Competitive Analysis',
      'Stakeholder Interviews',
      'User Journey Mapping',
      'Data & Process Audits',
      'Goal & KPI Definition'
    ]
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    icon: Combine,
    description: 'Designing a resilient, scalable, and efficient blueprint',
    details: [
      'Strategic Solution Design',
      'Technology Stack Selection',
      'Scalable Framework Planning',
      'Integration & API Strategy',
      'Security & Compliance Modeling'
    ]
  },
  {
    id: 'implementation',
    title: 'Implementation & Iteration',
    icon: GitFork,
    description: 'Agile development, continuous feedback, and adaptive growth',
    details: [
      'Iterative Development Sprints',
      'Continuous Integration & Deployment (CI/CD)',
      'Rigorous Quality Assurance',
      'User Acceptance Testing (UAT)',
      'Performance Monitoring & Optimization'
    ]
  }
];

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-['Space_Mono'] mb-4 bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
          Our Universal I.S.I Framework
        </h2>
        <p className="text-gray-400">
          A proven methodology for any business challenge
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <div
              className={`
                bg-black/40 backdrop-blur-sm p-8 rounded-lg border transition-all duration-300
                ${activeStep === step.id ? 'border-amber-500' : 'border-red-900/20'}
                hover:border-amber-500/30 cursor-pointer
              `}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div className="bg-gradient-to-br from-red-500/10 to-amber-400/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              
              <motion.div
                initial={false}
                animate={{ height: activeStep === step.id ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 text-gray-400">
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-400" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <button
          onClick={() => setIsHirePopupOpen(true)}
          className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-lg text-lg font-['Space_Mono'] tracking-wider hover:from-red-700 hover:to-amber-600 transition-all"
        >
          Start Ideation Now
        </button>
      </motion.div>

      <HirePopup 
        isOpen={isHirePopupOpen}
        onClose={() => setIsHirePopupOpen(false)}
      />
    </div>
  );
}