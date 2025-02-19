import { motion } from 'framer-motion';
import { useState } from 'react';
import { Wand2 } from 'lucide-react';

const commonProblems = [
  {
    problem: 'Streamline customer service',
    solution: `Our fully automated AI system creates a seamless customer service experience:

1. 24/7 AI Chat Agent
   • Handles FAQs with natural responses
   • Subtly guides conversations toward sales
   • Maintains chat history for returning customers

2. AI Voice Assistant
   • Functions as virtual front desk
   • Manages all inbound calls
   • Syncs in real-time with chat system

3. Integrated Analytics
   • Third AI analyzes customer interactions
   • Refines social media strategies
   • Automates email nurture sequences

All components work together to deliver hands-free, optimized customer satisfaction with zero human intervention required.`
  },
  {
    problem: 'Optimize sales process',
    solution: `Transform your sales operations with our dual-purpose AI system:

1. Lead Management
   • Intelligent lead scoring
   • Automated follow-up sequences
   • Prospect nurturing automation

2. AI Sales Training Platform
   • Product knowledge integration
   • Dynamic rebuttal database
   • Pricing model scenarios
   • Key selling points library

3. Interactive Training Features
   • AI role-plays as prospects
   • Real-time feedback on pitches
   • Voice call simulations
   • Performance analytics

The system continuously learns and adapts, creating an ever-improving cycle of sales optimization and team development.`
  },
  {
    problem: 'Improve data management',
    solution: 'Create automated systems for data collection, organization, and analysis, ensuring accurate and accessible information across your organization.'
  },
  {
    problem: 'Automate data analysis',
    solution: 'Leverage AI to automatically collect, analyze, and visualize data, providing actionable insights for decision-making.'
  }
];

export function ProblemSolver() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const [customProblem, setCustomProblem] = useState('');
  const [solution, setSolution] = useState('');

  const handleProblemSelect = (problem: string) => {
    setSelectedProblem(problem);
    setCustomProblem('');
    const matchingProblem = commonProblems.find(p => p.problem === problem);
    setSolution(matchingProblem?.solution || '');
  };

  const handleCustomProblemSubmit = () => {
    if (!customProblem.trim()) return;
    
    // Generate a contextual solution based on the custom problem
    const solution = `Our AI automation system can help by analyzing your ${customProblem.toLowerCase()} process, identifying bottlenecks, and implementing smart workflows that reduce manual effort while improving accuracy and efficiency.`;
    setSolution(solution);
    setSelectedProblem('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-['Space_Mono'] mb-4 bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
          Creative Problem-Solving Simulator
        </h2>
        <p className="text-gray-400">
          See how we would approach your specific challenge
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl text-white mb-4">Common Challenges</h3>
          <div className="space-y-3">
            {commonProblems.map((item) => (
              <button
                key={item.problem}
                onClick={() => handleProblemSelect(item.problem)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg transition-colors duration-300
                  ${selectedProblem === item.problem
                    ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60'
                  }
                `}
              >
                {item.problem}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white">Custom Challenge</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                placeholder="Describe your challenge..."
                className="flex-1 px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
              />
              <button
                onClick={handleCustomProblemSubmit}
                className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-amber-600 transition-all"
              >
                Solve
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: solution ? 1 : 0, x: solution ? 0 : 20 }}
          className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-red-900/20"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-br from-red-500/10 to-amber-400/10 p-3 rounded-lg">
              <Wand2 className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl text-white">Proposed Solution</h3>
          </div>
          
          {solution ? (
            <div className="text-gray-400 leading-relaxed whitespace-pre-line">
              {solution}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Select a common challenge or enter your own to see our proposed solution.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}