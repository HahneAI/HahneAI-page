import { motion } from 'framer-motion';
import { MetricCard } from './MetricCard';
import { metrics } from './MetricsData';

export function Metrics() {
  return (
    <section className="py-24 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Measurable results that demonstrate the power of AI automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.id}
              id={metric.id}
              title={metric.title}
              value={metric.value}
              suffix={metric.suffix}
              color={metric.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}