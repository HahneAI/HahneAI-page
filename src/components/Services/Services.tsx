import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { services } from './ServicesData';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HirePopup } from '../HirePopup/HirePopup';

export function Services() {
  const location = useLocation();
  const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);

  useEffect(() => {
    const serviceId = location.hash.slice(1);
    if (serviceId) {
      const element = document.getElementById(serviceId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);


  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-space mb-6 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              reversed={index % 2 === 1}
            />
          ))}

          {/* ISI Framework Service Card */}
          <ServiceCard
            id="isi-framework"
            title="The I.S.I Framework"
            tagline="Transform your business with our proven methodology for creating unstoppable systems"
            description={`The I.S.I Framework is our signature approach to business transformation, combining creative problem-solving with systematic implementation.

• Ideation Phase: Collaborative discovery workshops to identify opportunities and envision solutions
• System Mapping: Visual representation of integrated tools and workflow optimization
• Implementation: Creation of seamless AI-powered systems that evolve with your business

The I.S.I Framework is more than a service—it's a transformation methodology that turns your business challenges into automated solutions. Through our structured approach, we identify core challenges, design comprehensive AI solutions, and implement systems that work 24/7 with consistent quality.

Each I.S.I engagement is tailored to your specific needs, ensuring that the solutions we create align perfectly with your business goals and scale with your growth.`}
            imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            reversed={services.length % 2 === 0}
          />
        </div>
      </div>

      <HirePopup 
        isOpen={isHirePopupOpen}
        onClose={() => setIsHirePopupOpen(false)}
      />
    </section>
  );
}