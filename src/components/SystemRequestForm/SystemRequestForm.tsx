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
      className="max-w-xl mx-auto px-4 sm:px-6"
    >
      {/* Progress indicator */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-neutral-500">
            Step {phase} of {totalPhases}
          </span>
          <span className="text-xs sm:text-sm text-neutral-500">
            {Math.round((phase / totalPhases) * 100)}%
          </span>
        </div>
        <div className="h-1.5 sm:h-1 bg-neutral-800 rounded-full overflow-hidden">
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

      {/* Navigation - Mobile optimized */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800">
        {phase > 1 ? (
          <button
            onClick={prevPhase}
            className="px-6 py-4 min-h-[48px] text-neutral-400 hover:text-white active:bg-neutral-800/50 transition-colors rounded-lg border border-neutral-800 sm:border-0"
          >
            Back
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {phase < totalPhases ? (
          <button
            onClick={nextPhase}
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            Submit Request
          </button>
        )}
      </div>
    </motion.div>
  );
}
