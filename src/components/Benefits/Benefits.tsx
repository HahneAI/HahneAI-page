import { motion } from 'framer-motion';
import { benefits } from './BenefitsData';

export function Benefits() {
  return (
    <section id="benefits-section" className="py-24 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-['Space_Mono'] mb-4 bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
            Why Choose HahneAI?
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">"</span>
            No matter your industry or business model, humans are always part of the process. This doesn't just cost you payroll—it silently drains an invisible{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">POTENTIAL</span>
            {' '}profit. You'll never truly see how much revenue you lose when employees, no matter how well-intentioned, don't treat your business like their own. Why?
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">"</span>
            
            <br /><br />
            
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">"</span>
            Because it's not their business—they're just earning a paycheck. After 150 calls in a day, the energy and care they gave to the 1st will{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">NEVER</span>
            {' '}match the 150th. News flash… it{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">NEVER</span>
            {' '}will. People simply don't give 100% to something unless it's their own...
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">"</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-red-900/20 hover:border-amber-500/30 transition-colors group"
            >
              <div className="bg-gradient-to-br from-red-500/10 to-amber-400/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:from-red-500/20 group-hover:to-amber-400/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">{benefit.title}</h3>
              {benefit.description.includes('<span') ? (
                <p 
                  className="text-xs text-gray-400"
                  dangerouslySetInnerHTML={{ __html: benefit.description }}
                />
              ) : (
                <p className="text-xs text-gray-400">
                  {benefit.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}