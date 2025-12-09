import { motion } from 'framer-motion';

export function SystemRequestPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
            System Request
          </h1>
          <p className="text-lg md:text-xl text-neutral-300">
            This is where the system request form will be.
          </p>
        </motion.div>
      </div>
import { SystemRequestForm } from '../components/SystemRequestForm/SystemRequestForm';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function SystemRequestPage() {
  return (
    <div className="bg-surface-dark min-h-screen">
      <Header />
      <main className="py-16">
        <SystemRequestForm />
      </main>
      <Footer />
    </div>
  );
}
