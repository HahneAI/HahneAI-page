import { motion } from 'framer-motion';

export function SystemRequestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
            System Request
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            This is where the system request form will be.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
