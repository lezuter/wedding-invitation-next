// src/components/CountdownSection.tsx
import React from 'react';
import Image from 'next/image';
import Countdown from './Countdown';
import AnimateOnScroll from './AnimateOnScroll';

interface CountdownSectionProps {
    isPageLoading: boolean; 
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ isPageLoading }) => {
  const animationClass = isPageLoading ? 'animation-pause' : '';

  return (
    <section 
      className={`relative flex flex-col items-center justify-start min-h-dvh px-6 py-12 text-center overflow-hidden snap-start ${animationClass}`}
    >      
      <Image
        src="/images/gallery/image19.webp"
        alt="Countdown Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2d2be] to-transparent to-45%"></div>

      <AnimateOnScroll isPageLoading={isPageLoading} className="relative z-20 delay-400">
        <div>
          <h2 className="font-grandcru text-[1.4rem] sm:text-[1.6rem] text-[#3f251b] font-bold tracking-widest">
            COUNTING THE DAYS
          </h2>

          <div className="mt-8">
            <Countdown />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default CountdownSection;