import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { services } from './ServicesData';
import { trackFormSubmit } from '../../utils/analytics';

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
}

export function ServiceForm({ isOpen, onClose, selectedService }: ServiceFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: selectedService ? [selectedService] : [],
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mvgenbaa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        trackFormSubmit('Service Request', 'Services Page', true);
        setTimeout(() => {
          onClose();
          setFormState('idle');
          setFormData({ name: '', email: '', services: [], message: '' });
        }, 3000);
      } else {
        trackFormSubmit('Service Request', 'Services Page', false);
        setFormState('idle');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormSubmit('Service Request', 'Services Page', false);
      setFormState('idle');
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl shadow-large max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
                <h2 className="font-space text-xl text-neutral-900">
                  Request Service Information
                </h2>
                <button
                  onClick={onClose}
                  className="p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-500 hover:text-neutral-900 active:bg-neutral-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {formState === 'success' ? (
                /* Success State */
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-space text-lg text-neutral-900 mb-2">Request Received</h3>
                  <p className="text-neutral-600">
                    Thank you for your interest. We'll review your request and respond within 24-48 hours with detailed information about our services.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3.5 min-h-[48px] text-base text-neutral-900 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3.5 min-h-[48px] text-base text-neutral-900 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Services Interest */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Services Interested In *
                    </label>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-start gap-3 p-4 min-h-[44px] border border-neutral-200 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-6 h-6 mt-0.5 text-primary-600 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
                          />
                          <span className="text-sm text-neutral-700 flex-1 leading-relaxed">{service.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3.5 text-base text-neutral-900 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your project needs, timeline, or any specific requirements..."
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting' || formData.services.length === 0}
                      className="w-full py-4 min-h-[48px] bg-primary-600 hover:bg-primary-700 active:bg-primary-800 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
                    </button>
                    <p className="text-xs text-neutral-500 text-center mt-2">
                      Response time: 24-48 hours
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}