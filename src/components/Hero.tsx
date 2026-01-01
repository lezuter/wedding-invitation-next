// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedImage from './AnimatedImage';

interface HeroProps {
  coupleName1: string;
  coupleName2: string;
  isPageLoading: boolean; 
}

// 1. Terima prop 'isPageLoading' di sini
const Hero: React.FC<HeroProps> = ({ coupleName1, coupleName2, isPageLoading }) => {
  return (
    <section
      className="
        relative flex min-h-dvh flex-col items-center justify-center p-6 text-center
        overflow-hidden snap-start bg-transparent
      "
    >
      {/* Ornamen Atas dengan Animasi */}
      <div className="absolute top-1 left-2 z-10 -rotate-[90deg] -scale-y-100 -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kiri Atas" width={155} height={155} className="animate-sway-1 delay-300" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute top-1 right-2 z-10 -rotate-[90deg] -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kanan Atas" width={155} height={155} className="animate-sway-2 delay-300" isPageLoading={isPageLoading} />
      </div>

      {/* Konten Tengah */}
      <div className="relative z-20 -translate-y-16">
        
        {/* Ornamen Inisial (Paling Atas) */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200">
          <div className="relative top-10 -translate-y-10 translate-x-3 z-10 mb-4">
            <Image src="/images/ornaments/image14.webp" alt="Ornamen Inisial" width={155} height={155} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-x-[50px]">
              <Image
                src="/images/ornaments/SVG/SAlogo.svg"
                alt="Logo Inisial S & S"
                width={72}
                height={72}
              />
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Teks 1: The Intimate Wedding of */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-300">
          <p className="font-grandcru font-[900] text-[10px] text-[#3f251b] -mb-1">
            The Intimate Wedding of
          </p>
        </AnimateOnScroll>
        
        {/* Teks 2: Nama Pasangan */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400">
          <h1 className="font-allura text-[35px] font-[500] text-[#3f251b] my-2">
            {coupleName1} & {coupleName2}
          </h1>
        </AnimateOnScroll>

        {/* Teks 3: Tanggal */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500">
          <p className="font-grandcru font-bold text-[15px] text-sm text-[#925b56]">
            02 | 11 | 2025
          </p>
        </AnimateOnScroll>

        {/* Scroll Indicator */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-700">
          <div className="mt-12 flex flex-col items-center gap-2">
            <p className="font-grandcru text-xs text-[#925b56]">Scroll</p>
            <div className="relative w-7 h-11 flex justify-center pt-2 border-2 border-[#925b56] rounded-full overflow-hidden">
              <div className="animate-scroll-down text-[#925B56] text-xl font-light absolute">|</div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Ornamen Bawah */}
      <div className="absolute bottom-0 -left-35 z-10 -translate-y-50 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image11.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-3 delay-200" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-35 z-10 -translate-y-50 ">
        <AnimatedImage src="/images/ornaments/image11.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-2 delay-200" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-27 z-10 -translate-y-5 -rotate-[-15deg]">
        <AnimatedImage src="/images/ornaments/image12.webp" alt="Ornamen Bawah Kiri" width={220} height={220} className="animate-sway-2 delay-300" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-27 z-10 -translate-y-5 -scale-y-100 rotate-[-185deg]">
        <AnimatedImage src="/images/ornaments/image12.webp" alt="Ornamen Bawah Kanan" width={220} height={220} className="animate-sway-3 delay-300" isPageLoading={isPageLoading} />
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 -translate-y-10 w-[250px]">
        <AnimatedImage src="/images/ornaments/image13.webp" alt="Ornamen Tengah Bawah" width={300} height={300} className="delay-500" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kiri" width={150} height={150} className="animate-sway-3 delay-600" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 right-1/6 z-10 transform translate-x-[4.5px] translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kanan" width={150} height={150} className="animate-sway-1 delay-600" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah" width={150} height={150} className="animate-sway-2 delay-600" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 z-10 rotate-[-130deg] translate-y-25">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kiri" width={130} height={130} className="animate-sway-3 delay-700" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 right-1/6 transform translate-x-1/4 z-10 rotate-[-49.5deg] translate-y-25 -scale-y-100">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kanan" width={130} height={130} className="animate-sway-1 delay-700" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-20 z-10 -translate-y-15">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kiri Bawah" width={180} height={180} className="animate-sway-2 delay-800" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-20 z-10 -translate-y-15 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kanan Bawah" width={180} height={180} className="animate-sway-3 delay-800" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-25 z-10 translate-y-30">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-1 delay-900" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-25 z-10 translate-y-30 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kanan Bawah" width={220} height={220} className="animate-sway-2 delay-900" isPageLoading={isPageLoading} />
      </div>
    </section>
  );
};

export default Hero;