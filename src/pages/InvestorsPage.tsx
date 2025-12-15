import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, CheckCircle, Mail } from 'lucide-react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { RequestDetailsModal } from '../components/Investors/RequestDetailsModal';
import { StickyMobileCTA } from '../components/ui/StickyMobileCTA';
import { trackInvestorInteraction } from '../utils/analytics';

interface Venture {
  id: string;
  name: string;
  tagline: string;
  stage: string;
  stageColor: string;
  valueProps: string[];
  targetRaise: string;
  equityNote: string;
  featured?: boolean;
}

const ventures: Venture[] = [
  {
    id: 'trade-crm',
    name: 'Trade Industry CRM',
    tagline: 'The all-in-one platform for American trade businesses',
    stage: 'Beta Ready',
    stageColor: 'bg-success-100 text-success-700 border-success-200',
    valueProps: [
      'Full-stack built: frontend, backend, database, and integrations',
      'Starting with landscaping industry, expanding to all trades',
      'Addresses $50B+ fragmented market with AI-native approach',
      'Multi-tenant SaaS with proven configuration-driven architecture'
    ],
    targetRaise: '$100,000',
    equityNote: 'Equity available',
    featured: true
  },
  {
    id: 'smartkds',
    name: 'SmartKDS Pro',
    tagline: 'AI-powered kitchen coordination for restaurants',
    stage: 'Early Development',
    stageColor: 'bg-info-100 text-info-700 border-info-200',
    valueProps: [
      'AI routing optimizes kitchen workflow and reduces ticket times',
      'Visual innovation: chef-friendly interface design',
      'Premium positioning in $2B+ KDS market',
      'Smart integrations with existing POS systems'
    ],
    targetRaise: '$100,000',
    equityNote: 'Equity available'
  },
  {
    id: 'postpartum',
    name: 'Postpartum Support App',
    tagline: 'Wellness-first support for new mothers and their village',
    stage: 'Early Development',
    stageColor: 'bg-info-100 text-info-700 border-info-200',
    valueProps: [
      'Unique "village" network feature for family coordination',
      'Addresses critical gap in maternal health support',
      'Privacy-first architecture with HIPAA considerations',
      'Depleted-user UX designed for exhausted new mothers'
    ],
    targetRaise: '$100,000',
    equityNote: 'Equity available'
  },
  {
    id: 'ai-agency',
    name: 'AI Automation Agency',
    tagline: 'Business efficiency through intelligent automation',
    stage: 'Active Services',
    stageColor: 'bg-secondary-100 text-secondary-700 border-secondary-200',
    valueProps: [
      'Social media automation, AI phone systems, chatbots',
      'Cold email campaigns with high deliverability',
      'Proven client results: 40+ hours saved per week',
      'Recurring revenue model with satisfied client base'
    ],
    targetRaise: 'Open to proposals',
    equityNote: 'Non-dilutive funding preferred'
  }
];

export function InvestorsPage() {
  const [selectedVenture, setSelectedVenture] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestDetails = (ventureId: string) => {
    setSelectedVenture(ventureId);
    setIsModalOpen(true);
    trackInvestorInteraction('modal_open', ventureId);
  };

  return (
    <>
      <Header />
      <main className="bg-surface-light">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-neutral-50 to-surface-light">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
                Investment Opportunities
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Solo founder building AI-powered business tools from Missouri.
                Full-stack developer with a focus on solving real problems in underserved markets.
              </p>
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-3 bg-terra-100 border border-terra-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-terra-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-terra-700 text-center sm:text-left">
                  Transparency-first approach • Real traction • Investor-ready
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="font-space text-3xl sm:text-4xl text-neutral-900 mb-4">
                Portfolio Ventures
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Four distinct opportunities across different markets, all leveraging AI-native development
                and problem-first design thinking.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ventures.map((venture, index) => (
                <motion.article
                  key={venture.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    bg-white rounded-xl border-2 p-6 sm:p-8 hover:shadow-medium transition-all duration-300
                    ${venture.featured
                      ? 'border-primary-300 shadow-soft'
                      : 'border-neutral-200'
                    }
                  `}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="font-space text-xl sm:text-2xl text-neutral-900 mb-2">
                        {venture.name}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {venture.tagline}
                      </p>
                    </div>
                    {venture.featured && (
                      <span className="self-start px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full whitespace-nowrap">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Stage Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm font-medium mb-6 ${venture.stageColor}`}>
                    {venture.stage === 'Beta Ready' && <CheckCircle className="w-4 h-4" />}
                    {venture.stage === 'Early Development' && <Clock className="w-4 h-4" />}
                    {venture.stage === 'Active Services' && <TrendingUp className="w-4 h-4" />}
                    {venture.stage}
                  </div>

                  {/* Value Props */}
                  <ul className="space-y-3 mb-8">
                    {venture.valueProps.map((prop, i) => (
                      <li key={i} className="flex gap-3 text-neutral-700">
                        <span className="text-primary-500 mt-1">•</span>
                        <span className="text-sm leading-relaxed">{prop}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="pt-6 border-t border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Target Raise</p>
                        <p className="font-space text-xl text-neutral-900">{venture.targetRaise}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-neutral-500">{venture.equityNote}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRequestDetails(venture.name)}
                      className={`
                        w-full py-4 min-h-[48px] rounded-lg font-medium transition-all duration-200
                        ${venture.featured
                          ? 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white'
                          : 'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 text-white'
                        }
                      `}
                    >
                      Request Details
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Invest Section */}
        <section className="py-16 sm:py-24 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-space text-3xl sm:text-4xl text-neutral-900 mb-8">
                Why Invest
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div>
                  <h3 className="font-space text-base sm:text-lg text-neutral-900 mb-3">
                    Market Opportunities
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Targeting underserved markets with proven pain points: trades ($50B+),
                    restaurant tech ($2B+), and maternal health (45M mothers annually).
                  </p>
                </div>
                <div>
                  <h3 className="font-space text-base sm:text-lg text-neutral-900 mb-3">
                    AI-Native Development
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Built from the ground up with AI integration. Not retrofitting legacy systems—
                    creating intelligent, configuration-driven platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-space text-base sm:text-lg text-neutral-900 mb-3">
                    Founder Commitment
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Full-stack technical capability, proven client results, and transparent
                    communication. Building sustainable businesses, not just features.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 text-center">
                <Mail className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="font-space text-lg sm:text-xl text-neutral-900 mb-2">
                  Ready to Learn More?
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-6">
                  Detailed pitch decks, financial projections, and technical documentation
                  available upon request.
                </p>
                <a
                  href="mailto:anthonyhahne@therealworld.ag"
                  className="inline-block px-6 sm:px-8 py-4 min-h-[48px] bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-medium rounded-lg transition-colors break-all sm:break-normal"
                >
                  anthonyhahne@therealworld.ag
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />

      {/* Request Details Modal */}
      <RequestDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVenture={selectedVenture}
      />
    </>
  );
}
