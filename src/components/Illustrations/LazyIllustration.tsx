/**
 * Lazy Loading Wrapper for Illustrations
 * Implements intersection observer for performance optimization
 */
import { useEffect, useRef, useState } from 'react';

interface LazyIllustrationProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function LazyIllustration({
  children,
  className = '',
  threshold = 0.1
}: LazyIllustrationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after becoming visible (load once)
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '50px', // Start loading slightly before element enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        // Placeholder while loading
        <div className="w-full h-full bg-neutral-900 animate-pulse" />
      )}
    </div>
  );
}
