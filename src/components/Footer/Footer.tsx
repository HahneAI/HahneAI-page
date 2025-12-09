import { Link } from 'react-router-dom';
import { footerNavigation } from '../../content/navigation';

/**
 * Minimalist Footer
 *
 * Design principles:
 * - Clean grid layout
 * - Essential links only
 * - Subtle typography hierarchy
 * - Generous whitespace
 */
export function Footer() {
  return (
    <footer id="contact-section" className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-lg font-medium text-white">
              HahneAI
            </Link>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-xs">
              Custom automation systems that work while you sleep.
            </p>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              {footerNavigation.services.label}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              {footerNavigation.company.label}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:anthonyhahne@therealworld.ag"
                className="block text-sm text-neutral-500 hover:text-white transition-colors"
              >
                anthonyhahne@therealworld.ag
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://x.com/HahneDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/hahnedigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} HahneAI. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}