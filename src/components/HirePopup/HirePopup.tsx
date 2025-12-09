import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { HireForm } from './HireForm';
import { HirePopupProps } from './types';
import { useEffect } from 'react';

export function HirePopup({ isOpen, onClose, selectedServiceId }: HirePopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
              <h3 className="text-2xl font-light text-white">Let's Get Started</h3>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-3 custom-scrollbar">
              <HireForm onClose={onClose} selectedServiceId={selectedServiceId} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}