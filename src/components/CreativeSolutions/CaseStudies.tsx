import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EcommercePattern, RealEstatePattern, HealthcarePattern } from '../Illustrations';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revolution',
    isiMap: {
      identify: 'Manual processes causing delays and errors',
      solve: 'AI-powered automation system implementation',
      integrate: 'Seamless connection with existing platforms'
    },
    before: {
      operations: 'Manual product updates',
      efficiency: '4 hours per day on updates',
      response: '2-3 hours customer response time'
    },
    after: {
      operations: 'Automated inventory management',
      efficiency: '15 minutes per day on oversight',
      response: '< 5 minutes response time'
    },
    executiveSummary: 'Transformed a struggling e-commerce operation into a streamlined, automated system with 24/7 customer support, resulting in significant efficiency gains and customer satisfaction improvements.',
    IllustrationComponent: EcommercePattern
  },
  {
    id: 2,
    title: 'Real Estate Automation',
    isiMap: {
      identify: 'Inefficient lead management process',
      solve: 'Automated lead scoring and follow-up system',
      integrate: 'CRM and communication platform integration'
    },
    before: {
      operations: 'Manual lead tracking',
      efficiency: '6 hours per day on follow-ups',
      response: '24+ hours lead response time'
    },
    after: {
      operations: 'Automated lead nurturing',
      efficiency: '1 hour per day on strategy',
      response: 'Instant lead engagement'
    },
    executiveSummary: 'Revolutionized real estate lead management through intelligent automation, dramatically improving conversion rates and freeing up valuable agent time for high-value activities.',
    IllustrationComponent: RealEstatePattern
  },
  {
    id: 3,
    title: 'Healthcare Workflow',
    isiMap: {
      identify: 'Complex scheduling and admin burden',
      solve: 'AI scheduling and workflow automation',
      integrate: 'EMR and patient portal integration'
    },
    before: {
      operations: 'Manual scheduling system',
      efficiency: '5 hours daily on admin tasks',
      response: '1+ day appointment confirmation'
    },
    after: {
      operations: 'AI-powered scheduling',
      efficiency: '1 hour daily on exceptions',
      response: 'Instant confirmations'
    },
    executiveSummary: 'Streamlined healthcare operations through intelligent automation, significantly reducing administrative burden while improving patient experience and staff satisfaction.',
    IllustrationComponent: HealthcarePattern
  }
];

const sections = [
  { id: 'before', label: 'Before' },
  { id: 'isiMap', label: 'ISI Map' },
  { id: 'after', label: 'After' },
  { id: 'summary', label: 'Executive Summary' }
] as const;

type SectionType = typeof sections[number]['id'];

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<number>(0);
  const [direction, setDirection] = useState(0);
  const [activeSections, setActiveSections] = useState<Set<SectionType>>(new Set(['before']));

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        rotateY: { duration: 0.4, ease: "easeOut" },
        scale: { duration: 0.4, ease: "easeOut" }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      rotateY: direction > 0 ? -15 : 15,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        rotateY: { duration: 0.4, ease: "easeIn" },
        scale: { duration: 0.4, ease: "easeIn" }
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveStudy((prev) => (prev + newDirection + caseStudies.length) % caseStudies.length);
    setActiveSections(new Set(['before']));
  };

  const handleSectionClick = (sectionId: SectionType) => {
    const sectionIndex = sections.findIndex(s => s.id === sectionId);
    const newSections = new Set<SectionType>();
    
    // Add all sections up to and including the clicked one
    for (let i = 0; i <= sectionIndex; i++) {
      newSections.add(sections[i].id);
    }
    
    setActiveSections(newSections);
  };

  const getContentMaxHeight = (activeSectionsCount: number) => {
    if (activeSectionsCount <= 2) {
      return 'auto';
    }
    return '400px';
  };

  const getPrevIndex = () => (activeStudy - 1 + caseStudies.length) % caseStudies.length;
  const getNextIndex = () => (activeStudy + 1) % caseStudies.length;

  const renderSection = (sectionId: SectionType) => {
    const study = caseStudies[activeStudy];
    
    switch (sectionId) {
      case 'before':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-secondary-400 text-sm font-semibold mb-3">Before Implementation</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Operations:</span>
                <span className="text-white text-sm">{study.before.operations}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Efficiency:</span>
                <span className="text-white text-sm">{study.before.efficiency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Response Time:</span>
                <span className="text-white text-sm">{study.before.response}</span>
              </div>
            </div>
          </motion.div>
        );
      case 'isiMap':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-secondary-400 text-sm font-semibold mb-3">ISI Map</h4>
            <div className="space-y-3">
              <div className="bg-black/20 p-3 rounded-lg">
                <span className="text-secondary-400 text-xs">Identify:</span>
                <p className="text-neutral-400 text-sm">{study.isiMap.identify}</p>
              </div>
              <div className="bg-black/20 p-3 rounded-lg">
                <span className="text-secondary-400 text-xs">Solve:</span>
                <p className="text-neutral-400 text-sm">{study.isiMap.solve}</p>
              </div>
              <div className="bg-black/20 p-3 rounded-lg">
                <span className="text-secondary-400 text-xs">Integrate:</span>
                <p className="text-neutral-400 text-sm">{study.isiMap.integrate}</p>
              </div>
            </div>
          </motion.div>
        );
      case 'after':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-secondary-400 text-sm font-semibold mb-3">After Implementation</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Operations:</span>
                <span className="text-white text-sm">{study.after.operations}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Efficiency:</span>
                <span className="text-white text-sm">{study.after.efficiency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">Response Time:</span>
                <span className="text-white text-sm">{study.after.response}</span>
              </div>
            </div>
          </motion.div>
        );
      case 'summary':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-secondary-400 text-sm font-semibold mb-3">Executive Summary</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">{study.executiveSummary}</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-space mb-4 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
          Success Stories
        </h2>
        <p className="text-neutral-400">
          Real transformations, real results
        </p>
      </motion.div>

      <motion.div 
        className="relative px-16"
        layout
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all hover:scale-110 focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all hover:scale-110 focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>

        <motion.div 
          className="relative flex justify-center items-start gap-4 min-h-[500px] overflow-visible perspective"
          layout
          transition={{ 
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            staggerChildren: 0.1
          }}
        >
          <motion.div
            className="absolute left-0 w-64 h-64 opacity-50 blur-sm transition-all duration-500"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              {(() => {
                const PrevIllustration = caseStudies[getPrevIndex()].IllustrationComponent;
                return PrevIllustration ? <PrevIllustration /> : null;
              })()}
            </div>
          </motion.div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeStudy}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative w-[400px] z-10"
              layout
              transition={{
                layout: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
            >
              <motion.div 
                className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-primary-900/20 hover:border-secondary-500/30 transition-all duration-300"
                layout
                transition={{
                  layout: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <div className="flex flex-col">
                  <div className="relative h-40">
                    {(() => {
                      const ActiveIllustration = caseStudies[activeStudy].IllustrationComponent;
                      return ActiveIllustration ? (
                        <div className="w-full h-full">
                          <ActiveIllustration />
                        </div>
                      ) : null;
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  <motion.div 
                    className="p-6"
                    layout
                    transition={{
                      layout: {
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{caseStudies[activeStudy].title}</h3>
                    
                    <div className="relative mb-6">
                      {/* Section buttons with progress bar */}
                      <div className="flex relative">
                        {sections.map((section, index) => {
                          const isActive = activeSections.has(section.id);
                          const prevActive = index === 0 || activeSections.has(sections[index - 1].id);
                          
                          return (
                            <div key={section.id} className="flex-1 relative">
                              <button
                                onClick={() => prevActive && handleSectionClick(section.id)}
                                className={`
                                  w-full px-3 py-2 text-xs
                                  ${prevActive
                                    ? 'text-neutral-400 hover:text-white cursor-pointer'
                                    : 'text-neutral-600 cursor-not-allowed'
                                  }
                                  ${isActive ? 'text-white' : ''}
                                  transition-colors duration-300
                                  relative z-10
                                `}
                              >
                                {section.label}
                              </button>
                              {index < sections.length - 1 && (
                                <div className="absolute right-0 top-0 bottom-0 w-px bg-secondary-500/10" />
                              )}
                              {isActive && (
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 origin-left"
                                  style={{ transformOrigin: 'left' }}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <motion.div 
                      className={`space-y-6 overflow-y-auto custom-scrollbar`}
                      style={{ 
                        maxHeight: getContentMaxHeight(activeSections.size),
                        scrollBehavior: 'smooth'
                      }}
                      layout
                      transition={{
                        layout: {
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                    >
                      {Array.from(activeSections).map((sectionId) => (
                        <motion.div 
                          key={sectionId}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            opacity: { duration: 0.4 },
                            y: { duration: 0.4 },
                            layout: {
                              duration: 0.6,
                              ease: [0.4, 0, 0.2, 1]
                            }
                          }}
                        >
                          {renderSection(sectionId)}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="absolute right-0 w-64 h-64 opacity-50 blur-sm transition-all duration-500"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              {(() => {
                const NextIllustration = caseStudies[getNextIndex()].IllustrationComponent;
                return NextIllustration ? <NextIllustration /> : null;
              })()}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeStudy ? 1 : -1);
                setActiveStudy(index);
                setActiveSections(new Set(['before']));
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeStudy
                  ? 'bg-secondary-400 w-6'
                  : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}