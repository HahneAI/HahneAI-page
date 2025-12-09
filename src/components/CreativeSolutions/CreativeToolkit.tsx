import { motion } from 'framer-motion';
import { 
  Workflow, Database, LineChart, Brain,
  Zap, GitMerge, MessageSquare, Bot
} from 'lucide-react';

const tools = [
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    description: 'Create seamless, intelligent processes that adapt to your business needs'
  },
  {
    icon: Database,
    title: 'Custom CRM Integrations',
    description: 'Connect and optimize your customer relationship management systems'
  },
  {
    icon: LineChart,
    title: 'Data Analysis & Insights',
    description: 'Transform raw data into actionable business intelligence'
  },
  {
    icon: Brain,
    title: 'Neural Network Solutions',
    description: 'Deploy advanced AI models tailored to your specific challenges'
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Streamline and enhance your existing workflows for maximum efficiency'
  },
  {
    icon: GitMerge,
    title: 'System Integration',
    description: 'Seamlessly connect multiple platforms and tools into a unified system'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Enable sophisticated communication between systems and users'
  },
  {
    icon: Bot,
    title: 'Automated Agents',
    description: 'Deploy intelligent agents that handle tasks 24/7 with consistent quality'
  }
];

export function CreativeToolkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-space mb-4 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
          Our Creative Toolkit
        </h2>
        <p className="text-neutral-400">
          Advanced tools and technologies we use to build your solution
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-primary-900/20 hover:border-secondary-500/30 transition-colors group"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:from-primary-500/20 group-hover:to-secondary-400/20 transition-colors">
              <tool.icon className="w-6 h-6 text-secondary-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{tool.title}</h3>
            <p className="text-sm text-neutral-400">{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}