// src/components/AnimatedImage.tsx
'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useInView } from 'react-intersection-observer';

interface AnimatedImageProps extends ImageProps {
  isPageLoading: boolean;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ isPageLoading, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100,
    skip: isPageLoading,
  });

  return (
    <Image
      ref={ref}
      {...props}
      className={`
        transition-all duration-700 ease-in-out
        ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8 scale-95'}
        ${props.className || ''}
      `}
    />
  );
};

export default AnimatedImage;