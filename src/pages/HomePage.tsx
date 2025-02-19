import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '../components/Hero/Hero';
import { Benefits } from '../components/Benefits/Benefits';
import { HomeServices } from '../components/HomeServices/HomeServices';
import { Metrics } from '../components/Metrics/Metrics';

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main ref={containerRef}>
      <motion.div style={{ opacity, scale }}>
        <Hero />
      </motion.div>
      <Benefits />
      <HomeServices />
      <Metrics />
    </main>
  );
}