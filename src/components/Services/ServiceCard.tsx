import { useState } from 'react';
import { motion } from 'framer-motion';
import { HirePopup } from '../HirePopup/HirePopup';
import { logEvent } from '../../utils/analytics';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tagline: string;
  reversed?: boolean;
}

export function ServiceCard({ id, title, description, imageUrl, tagline, reversed }: ServiceCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(true);
    logEvent('CTA', 'Click', `Services - ${title}`);
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className={`flex flex-col lg:flex-row gap-8 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-['Space_Mono'] text-white mb-2 drop-shadow-lg">
                {title}
              </h3>
              <p className="hidden sm:block text-base sm:text-lg text-gray-200 drop-shadow-lg">
                {tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-['Space_Mono'] text-white">{title}</h3>
            <div className="text-gray-400 space-y-3 sm:space-y-4">
              {description.split('\n').map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base">
                  {paragraph.trim().startsWith('•') ? (
                    <span className="text-amber-400">{paragraph.trim()}</span>
                  ) : (
                    paragraph.trim()
                  )}
                </p>
              ))}
            </div>
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-red-700 hover:to-amber-600 transition-all text-sm sm:text-base font-['Space_Mono'] tracking-wider mt-6 sm:mt-8 mx-auto block w-full sm:w-auto"
            >
              {id === 'isi-framework' ? 'Start your FREE Ideation Call Now' : 'Hire This AI'}
            </button>
          </div>
        </div>
      </div>

      <HirePopup
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedServiceId={id}
      />
    </motion.div>
  );
}