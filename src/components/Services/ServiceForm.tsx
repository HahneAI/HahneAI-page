import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { services } from './ServicesData';

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
}

export function ServiceForm({ isOpen, onClose, selectedService }: ServiceFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-red-900/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-light text-white">Get Started with AI</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services Interested In
                </label>
                <div className="space-y-2">
                  {services.map((service) => (
                    <label key={service.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={service.id === selectedService}
                        className="w-4 h-4 rounded border-gray-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-gray-900"
                      />
                      <span className="text-gray-300">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-amber-600 transition-all font-light tracking-wider"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}