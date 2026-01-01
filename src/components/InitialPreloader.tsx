// src/components/InitialPreloader.tsx
import React from 'react';
import Image from 'next/image';

interface InitialPreloaderProps {
  isLoading: boolean;
}

const InitialPreloader: React.FC<InitialPreloaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-center bg-[#F4E9E0]
        transition-opacity duration-500
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="animate-pulse relative w-[90px] h-[90px]">
        <Image
          src="/images/ornaments/SVG/SAlogo.svg"
          alt="Loading..."
          fill
          sizes="90px"
          priority
        />
      </div>
    </div>
  );
};

export default InitialPreloader;