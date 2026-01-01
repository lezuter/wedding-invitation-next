// src/components/AnimateOnScroll.tsx
'use client';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  isPageLoading: boolean;
  initialTransformClass?: string; // <-- PROP untuk arah animasi
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className, isPageLoading, initialTransformClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100,
    skip: isPageLoading,
  });

  // Jika tidak ada arah spesifik, defaultnya tetap dari bawah (translate-y-8)
  const initialClass = initialTransformClass || 'translate-y-8';

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-in-out
        ${inView ? 'opacity-100 transform-none' : `opacity-0 ${initialClass}`}
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;