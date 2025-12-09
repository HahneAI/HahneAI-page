import { Brain, Instagram, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MakeBadge } from './MakeBadge';
import { services } from '../Services/ServicesData';

export function Footer() {
  const navigate = useNavigate();

  const handleISIClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/creative-solutions');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer id="contact-section" className="bg-surface-dark text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-secondary-400" />
              <span className="text-xl font-bold text-white">HahneAI</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Transforming businesses through intelligent automation and AI solutions.
            </p>
            <div className="pt-2">
              <p className="text-sm text-neutral-400">Anthony Hahne</p>
              <a
                href="mailto:anthonyhahne@therealworld.ag"
                className="text-sm text-secondary-400 hover:text-secondary-300 transition-colors break-all"
              >
                anthonyhahne@therealworld.ag
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm hover:text-secondary-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleISIClick}
                  className="text-sm text-neutral-300 hover:text-secondary-400 transition-colors"
                >
                  ISI
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/HahneDigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/hahnedigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Make Badge */}
          <div className="flex justify-center md:justify-end">
            <MakeBadge />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
          <p className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} HahneAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}