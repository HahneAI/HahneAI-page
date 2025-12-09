import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phase1 } from './Phase1';
import { SystemRequestData } from './types';

/**
 * System Request Form - Minimalist Multi-step
 *
 * Design principles:
 * - Clean, single-column layout
 * - Large, clear inputs
 * - Subtle progress indication
 * - Obvious submit button
 */
export function SystemRequestForm() {
  const [phase, setPhase] = useState(1);
  const [data, setData] = useState<Partial<SystemRequestData>>({
    phase1: {},
    phase2: { challengeDescription: '' },
    phase3: { techStack: '', budget: '', timeline: '' },
    phase4: { idealSolution: '', successMetrics: '', integrationNeeds: '' },
  });

  const updateData = (newData: Partial<SystemRequestData>) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextPhase = () => setPhase((prev) => prev + 1);
  const prevPhase = () => setPhase((prev) => prev - 1);

  const totalPhases = 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      {/* Progress indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-neutral-500">
            Step {phase} of {totalPhases}
          </span>
          <span className="text-sm text-neutral-500">
            {Math.round((phase / totalPhases) * 100)}%
          </span>
        </div>
        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${(phase / totalPhases) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form content */}
      <div className="space-y-8">
        {phase === 1 && <Phase1 data={data} updateData={updateData} />}
        {/* Other phases will be rendered here */}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t border-neutral-800">
        {phase > 1 ? (
          <button
            onClick={prevPhase}
            className="px-6 py-3 text-neutral-400 hover:text-white transition-colors"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {phase < totalPhases ? (
          <button
            onClick={nextPhase}
            className="px-8 py-3 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            className="px-8 py-3 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Submit Request
          </button>
        )}
      </div>
    </motion.div>
  );
}
