import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const footer = document.getElementById('contact-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSystemRequestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/system-request') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/system-request');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleCreativeSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/creative-solutions') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/creative-solutions');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleProcessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/process') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/process');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-opacity-90 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Brain className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
              HahneAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center">
              <button
                onClick={handleSystemRequestClick}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                System Request
              </button>
              <div className="h-4 w-px mx-4 bg-gradient-to-b from-red-500 to-amber-400 opacity-50" />
              <button
                onClick={handleCreativeSolutionsClick}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Creative Solutions
              </button>
              <div className="h-4 w-px mx-4 bg-gradient-to-b from-red-500 to-amber-400 opacity-50" />
              <button
                onClick={handleProcessClick}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Our Process
              </button>
              <div className="h-4 w-px mx-4 bg-gradient-to-b from-red-500 to-amber-400 opacity-50" />
              <button 
                onClick={scrollToContact}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={handleSystemRequestClick}
            className="hidden md:block bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-amber-600 transition-all text-sm"
          >
            Make a System Request
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={handleSystemRequestClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                System Request
              </button>
              <button
                onClick={handleCreativeSolutionsClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                Creative Solutions
              </button>
              <button
                onClick={handleProcessClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                Our Process
              </button>
              <button
                onClick={scrollToContact}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={handleSystemRequestClick}
                className="block w-full px-3 py-2 text-base font-medium bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-lg hover:from-red-700 hover:to-amber-600 transition-all"
              >
                Make a System Request
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}