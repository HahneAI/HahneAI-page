import { useState } from 'react';
import { Phase1 } from './Phase1';
import { SystemRequestData } from './types';

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

  return (
    <div className="system-request-form p-8 max-w-2xl mx-auto bg-surface-dark/50 rounded-lg border border-neutral-700/50">
      <div className="mb-8">
        {/* Progress Indicator would go here */}
        <h1 className="text-3xl font-bold text-white text-center">System Request</h1>
      </div>

      {phase === 1 && <Phase1 data={data} updateData={updateData} />}
      {/* Other phases will be rendered here */}

      <div className="flex justify-between mt-8">
        {phase > 1 ? (
          <button
            onClick={prevPhase}
            className="px-6 py-2 rounded-lg border border-neutral-700 text-neutral-300 hover:border-secondary-500/50 transition-colors"
          >
            Back
          </button>
        ) : (
          <div /> // Placeholder for alignment
        )}

        {phase < 4 ? (
          <button
            onClick={nextPhase}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:from-primary-700 hover:to-secondary-600 transition-all"
          >
            Next
          </button>
        ) : (
          <button
            // onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-600 to-teal-500 text-white hover:from-green-700 hover:to-teal-600 transition-all"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
