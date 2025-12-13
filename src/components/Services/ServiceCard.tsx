import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  tagline: string;
  problemHeadline?: string;
  results?: Array<{ metric: string; label: string }>;
  index?: number;
}

/**
 * Minimalist Service Card
 *
 * Design principles:
 * - Clean borders instead of heavy imagery
 * - Subtle hover elevation
 * - Clear typography hierarchy
 * - Problem-first content display
 */
export function ServiceCard({
  id,
  title,
  tagline,
  problemHeadline,
  results = [],
  index = 0,
}: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/services#${id}`)}
      className="group cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="p-8 sm:p-10 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-900/50 active:bg-neutral-900/70 active:border-neutral-600 transition-all duration-300">
        {/* Service number - subtle */}
        <span className="text-xs text-neutral-600 font-mono mb-6 block">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 group-hover:text-neutral-100 transition-colors">
          {title}
        </h3>

        {/* Problem headline or tagline */}
        <p className="text-neutral-400 mb-8 leading-relaxed">
          {problemHeadline || tagline}
        </p>

        {/* Results preview - if available */}
        {results.length > 0 && (
          <div className="flex gap-8 mb-8 pt-6 border-t border-neutral-800">
            {results.slice(0, 2).map((result, i) => (
              <div key={i}>
                <span className="text-2xl font-light text-white block">
                  {result.metric}
                </span>
                <span className="text-xs text-neutral-500">{result.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-white transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Full Service Detail Card (for services page)
 * More detailed view with full content
 */
interface ServiceDetailProps {
  id: string;
  title: string;
  tagline: string;
  problem: {
    headline: string;
    painPoints: string[];
    cost: string;
  };
  solution: {
    headline: string;
    description: string;
    features: string[];
  };
  results: Array<{ metric: string; label: string; description: string }>;
}

export function ServiceDetail({
  id,
  title,
  tagline,
  problem,
  solution,
  results,
}: ServiceDetailProps) {
  const navigate = useNavigate();

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 border-b border-neutral-800 last:border-b-0"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left column - Problem & Solution */}
        <div className="space-y-12">
          {/* Problem */}
          <div>
            <span className="text-xs text-neutral-500 uppercase tracking-wider mb-4 block">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
              {problem.headline}
            </h2>
            <ul className="space-y-3">
              {problem.painPoints.map((point, i) => (
                <li key={i} className="text-neutral-400 flex gap-3">
                  <span className="text-neutral-600">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500 italic">{problem.cost}</p>
          </div>

          {/* Solution */}
          <div>
            <span className="text-xs text-neutral-500 uppercase tracking-wider mb-4 block">
              What We Build
            </span>
            <h3 className="text-xl font-light text-white mb-4">
              {solution.headline}
            </h3>
            <p className="text-neutral-400 mb-6">{solution.description}</p>
            <ul className="space-y-2">
              {solution.features.map((feature, i) => (
                <li key={i} className="text-neutral-500 text-sm flex gap-3">
                  <span className="text-neutral-700">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column - Results & CTA */}
        <div className="lg:pl-8 lg:border-l lg:border-neutral-800">
          <span className="text-xs text-neutral-500 uppercase tracking-wider mb-8 block">
            Results
          </span>

          {/* Results grid */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {results.map((result, i) => (
              <div key={i} className="pb-6 border-b border-neutral-800 last:border-b-0">
                <span className="text-4xl sm:text-5xl font-light text-white block mb-2">
                  {result.metric}
                </span>
                <span className="text-lg text-neutral-300 block">{result.label}</span>
                <span className="text-sm text-neutral-500">{result.description}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('/system-request')}
            className="w-full py-4 min-h-[48px] bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            Get {title}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
