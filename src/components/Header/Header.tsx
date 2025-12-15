import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation } from '../../content/navigation';

/**
 * Minimalist Header
 *
 * Design principles:
 * - Clean, fixed navigation
 * - Simple wordmark (no icon)
 * - Subtle backdrop blur
 * - Mobile-first responsive
 */
export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for subtle background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md' : 'bg-neutral-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Simple wordmark */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            className="text-xl font-medium text-white hover:text-neutral-200 transition-colors"
          >
            HahneAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.button
            onClick={() => handleNavigation('/system-request')}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 24px -4px rgba(239, 82, 68, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden md:block px-6 py-2.5 min-h-[44px] bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            Start a Project
          </motion.button>

          {/* Mobile Menu Button - 44px minimum touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-300 hover:text-white active:bg-neutral-800/50 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-6 space-y-2 border-t border-neutral-800">
                {mainNavigation.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left py-4 min-h-[44px] text-base transition-colors active:bg-neutral-800/50 rounded-lg ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4">
                  <motion.button
                    onClick={() => handleNavigation('/system-request')}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 24px -4px rgba(239, 82, 68, 0.4)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-full py-4 min-h-[44px] bg-white text-neutral-900 text-base font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
                  >
                    Start a Project
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}