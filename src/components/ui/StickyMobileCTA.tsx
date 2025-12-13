import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Sticky Mobile CTA
 *
 * Mobile-only conversion optimization component
 * - Appears after user scrolls down 300px
 * - Hidden on /system-request page
 * - 44px minimum touch target
 * - Positioned for one-handed thumb reach
 */
export function StickyMobileCTA() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on system-request page (user is already there)
  if (location.pathname === '/system-request') {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden fixed bottom-6 left-6 right-6 z-40"
        >
          <button
            onClick={() => navigate('/system-request')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] bg-white text-neutral-900 font-medium rounded-lg shadow-large hover:shadow-xl transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
