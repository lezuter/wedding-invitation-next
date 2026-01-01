// src/components/Preloader.tsx
import React from 'react';
import Image from 'next/image';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-[#F4E9E0]
        transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Logo inisial dengan animasi pulse */}
      <div className="animate-pulse">
        <Image
          src="/images/ornaments/SVG/SAlogo.svg"
          alt="Loading..."
          width={90}
          height={90}
        />
      </div>
    </div>
  );
};

export default Preloader;