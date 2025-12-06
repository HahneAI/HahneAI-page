import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, Clock } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    title: 'Performance KPIs',
    description: 'Tracking key performance indicators that directly impact your bottom line, such as revenue growth, market share, and customer lifetime value.'
  },
  {
    icon: CheckCircle,
    title: 'Efficiency Gains',
    description: 'Measuring improvements in operational efficiency, including cost savings, productivity increases, and error rate reduction.'
  },
  {
    icon: Clock,
    title: 'Time-to-Value',
    description: 'Assessing how quickly our solutions deliver tangible results, ensuring a rapid and significant return on your investment.'
  }
];

export function SuccessMetrics() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-['Space_Mono'] mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Measuring What Matters
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Success isn't just a feeling—it's a measurable outcome. We establish clear, quantifiable metrics from day one to track progress and demonstrate the true impact of our work.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-teal-500/20"
            >
              <div className="flex items-center bg-gradient-to-br from-teal-500/10 to-blue-500/10 w-12 h-12 rounded-lg mb-6">
                <metric.icon className="w-6 h-6 text-teal-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{metric.title}</h3>
              <p className="text-gray-400">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
