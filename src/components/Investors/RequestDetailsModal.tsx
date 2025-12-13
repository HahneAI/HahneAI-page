import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { trackFormSubmit } from '../../utils/analytics';

interface RequestDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVenture?: string;
}

export function RequestDetailsModal({ isOpen, onClose, selectedVenture }: RequestDetailsModalProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    ventures: selectedVenture ? [selectedVenture] : [],
    message: ''
  });

  const ventures = [
    'Trade Industry CRM',
    'SmartKDS Pro',
    'Postpartum Support App',
    'AI Automation Agency'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission (replace with actual endpoint)
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        trackFormSubmit('Investor Details Request', 'Investors Page', true);
        setTimeout(() => {
          onClose();
          setFormState('idle');
          setFormData({ name: '', email: '', company: '', ventures: [], message: '' });
        }, 3000);
      } else {
        trackFormSubmit('Investor Details Request', 'Investors Page', false);
        setFormState('idle');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormSubmit('Investor Details Request', 'Investors Page', false);
      setFormState('idle');
    }
  };

  const handleVentureToggle = (venture: string) => {
    setFormData(prev => ({
      ...prev,
      ventures: prev.ventures.includes(venture)
        ? prev.ventures.filter(v => v !== venture)
        : [...prev.ventures, venture]
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
                  Request Investment Details
                </h2>
                <button
                  onClick={onClose}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
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
                    Thank you for your interest. I'll review your request and respond within 24-48 hours with detailed information.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Company/Fund */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Company/Fund
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your organization (optional)"
                    />
                  </div>

                  {/* Ventures Interest */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Interested in *
                    </label>
                    <div className="space-y-2">
                      {ventures.map((venture) => (
                        <label
                          key={venture}
                          className="flex items-center gap-2 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.ventures.includes(venture)}
                            onChange={() => handleVentureToggle(venture)}
                            className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-neutral-700">{venture}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Brief Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell me about your investment interests or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting' || formData.ventures.length === 0}
                      className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-300 text-white font-medium rounded-lg transition-colors duration-200"
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
