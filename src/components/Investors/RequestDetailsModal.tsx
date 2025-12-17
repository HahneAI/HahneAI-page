import { useState, useEffect } from 'react';
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
    ventures: [] as string[],
    message: ''
  });

  // Reset form and set selected venture when modal opens or selectedVenture changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        company: '',
        ventures: selectedVenture ? [selectedVenture] : [],
        message: ''
      });
      setFormState('idle');
    }
  }, [isOpen, selectedVenture]);

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
      const response = await fetch('https://formspree.io/f/mgvgbzpy', {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface-dark rounded-lg p-8 max-w-md w-full border border-primary-900/20 my-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-light text-white">Request Investment Details</h3>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-3 custom-scrollbar">
              {formState === 'success' ? (
                /* Success State */
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-success-900/20 border border-success-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-space text-lg text-white mb-2">Request Received</h3>
                  <p className="text-neutral-400">
                    Thank you for your interest. I'll review your request and respond within 24-48 hours with detailed information.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3.5 min-h-[48px] text-base bg-black/40 text-white border border-primary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                      placeholder="Enter your name"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3.5 min-h-[48px] text-base bg-black/40 text-white border border-primary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                      placeholder="Enter your email"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Company/Fund */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3.5 min-h-[48px] text-base bg-black/40 text-white border border-primary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                      placeholder="Enter your company name"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Ventures Interest */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Ventures Interested In *
                    </label>
                    <div className="space-y-2">
                      {ventures.map((venture) => (
                        <label
                          key={venture}
                          className="flex items-start gap-3 p-4 min-h-[44px] bg-black/40 border border-primary-900/20 rounded-lg hover:border-primary-700/30 active:bg-black/60 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.ventures.includes(venture)}
                            onChange={() => handleVentureToggle(venture)}
                            className="w-6 h-6 mt-0.5 text-primary-600 bg-black/40 border-primary-900/20 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
                          />
                          <span className="text-sm text-neutral-300 flex-1 leading-relaxed">{venture}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3.5 text-base bg-black/40 text-white border border-primary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none placeholder:text-neutral-500"
                      placeholder="Tell me about your investment interests or questions..."
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting' || formData.ventures.length === 0}
                      className="w-full py-4 min-h-[48px] bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 disabled:from-neutral-700 disabled:to-neutral-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
