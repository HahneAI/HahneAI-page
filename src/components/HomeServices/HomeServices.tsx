import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../Services/ServicesData';

export function HomeServices() {
  const lastService = services[4];

  return (
    <section className="py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-space mb-4 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">"</span>
            ... but{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">THESE</span>
            {' '}"employees" will bring the same energy -- for{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">EVERY</span>
            {' '}task...
            <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">"</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Rest of the component remains unchanged */}
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-primary-900/20 hover:border-secondary-500/30 transition-colors group"
            >
              <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:from-primary-500/20 group-hover:to-secondary-400/20 transition-colors">
                <service.icon className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-neutral-400 mb-6">{service.tagline.replace(/"/g, '')}</p>
              <Link
                to={`/services#${service.id}`}
                className="block bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all text-center font-space text-sm"
              >
                Learn More
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-primary-900/20 hover:border-secondary-500/30 transition-colors group col-span-full lg:col-span-1 lg:col-start-2 max-w-sm mx-auto w-full"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:from-primary-500/20 group-hover:to-secondary-400/20 transition-colors">
              <lastService.icon className="w-8 h-8 text-secondary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{lastService.title}</h3>
            <p className="text-neutral-400 mb-6">{lastService.tagline.replace(/"/g, '')}</p>
            <Link
              to={`/services#${lastService.id}`}
              className="block bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all text-center font-space text-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}