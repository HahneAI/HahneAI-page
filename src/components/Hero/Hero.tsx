import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HolographicBackground } from './HolographicBackground/HolographicBackground';
import { HirePopup } from '../HirePopup/HirePopup';
import { logEvent } from '../../utils/analytics';

export function Hero() {
  const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHireClick = () => {
    setIsHirePopupOpen(true);
    logEvent('CTA', 'Click', 'Hero - Hire AI');
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <HolographicBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-wider font-['Space_Mono'] leading-relaxed">
            <span className="block">DESCRIBE YOUR BUSINESS CHALLENGE</span>
            <span className="block bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
              WE'LL BUILD THE AI SYSTEM THAT SOLVES IT
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => navigate('/system-request')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-lg text-base font-['Space_Mono'] tracking-wider hover:from-red-700 hover:to-amber-600 transition-all"
            >
              MAKE A SYSTEM REQUEST
            </button>
            <button
              onClick={() => {
                const benefitsSection = document.querySelector('#benefits-section');
                if (benefitsSection) {
                  benefitsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg text-base font-['Space_Mono'] tracking-wider hover:bg-amber-400/10 transition-colors"
            >
              See How It Works
            </button>
          </div>
        </motion.div>
      </div>

      <HirePopup 
        isOpen={isHirePopupOpen}
        onClose={() => setIsHirePopupOpen(false)}
      />
    </div>
  );
}