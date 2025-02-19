import { motion } from 'framer-motion';
import { MetricIcon } from './MetricIcon';

interface MetricCardProps {
  id: string;
  title: string;
  value: string;
  suffix: string;
  color: string;
  delay: number;
}

export function MetricCard({ id, title, value, suffix, color, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-red-900/20 hover:border-amber-500/30 transition-colors group"
    >
      <div className={`bg-gradient-to-br ${color}/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:${color}/20 transition-colors`}>
        <MetricIcon type={id} color={color} />
      </div>
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
        >
          {value}
        </motion.div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{suffix}</p>
      </div>
    </motion.div>
  );
}