// src/components/ClosingPage.tsx
import React from 'react';
import Image from 'next/image';
import { Instagram, Smartphone } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedImage from './AnimatedImage'; 

interface ClosingPageProps {
  coupleName1: string;
  coupleName2: string;
  isPageLoading: boolean;
}

const ClosingPage: React.FC<ClosingPageProps> = ({ coupleName1, coupleName2, isPageLoading }) => {
  return (
    // min-h-dvh: Memastikan halaman mengisi tinggi layar secara dinamis (fix bug kepotong di HP)
    <section
      className="
        relative flex min-h-dvh flex-col items-center justify-center p-6 text-center
        overflow-hidden text-[#3f251b] snap-start
      "
    >
      {/* Ornamen dengan animasi sway */}
      <div className="absolute top-1 left-2 z-10 -rotate-[90deg] -scale-y-100 -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kiri Atas" width={155} height={155} className="delay-300 animate-sway-1" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute top-1 right-2 z-10 -rotate-[90deg] -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kanan Atas" width={155} height={155} className="delay-300 animate-sway-2" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kiri" width={150} height={150} className="delay-400 animate-sway-3" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 right-1/6 z-10 transform translate-x-[4.5px] translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kanan" width={150} height={150} className="delay-400 animate-sway-1" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah" width={150} height={150} className="delay-500 animate-sway-2" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 z-10 rotate-[-130deg] translate-y-25">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kiri" width={130} height={130} className="delay-600 animate-sway-3" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 right-1/6 transform translate-x-1/4 z-10 rotate-[-49.5deg] translate-y-25 -scale-y-100">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kanan" width={130} height={130} className="delay-600 animate-sway-1" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-20 z-10 -translate-y-15">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kiri Bawah" width={180} height={180} className="delay-700 animate-sway-2" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-20 z-10 -translate-y-15 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kanan Bawah" width={180} height={180} className="delay-700 animate-sway-3" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-25 z-10 translate-y-30">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="delay-800 animate-sway-1" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-25 z-10 translate-y-30 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kanan Bawah" width={220} height={220} className="delay-800 animate-sway-2" isPageLoading={isPageLoading} /> 
      </div> 
      
      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-md p-4">
        
        {/* FOTO & BORDER OVAL */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200">
            <div className="relative w-[180px] h-[240px] rounded-[55%/55%] border-[6.5px] border-[#925b56] shadow-lg overflow-hidden mb-8">
                <Image 
                    src="/images/gallery/image7.webp" 
                    alt="Aina & Sandy" 
                    fill 
                    className="object-cover" 
                />
            </div>
        </AnimateOnScroll>

        {/* PESAN UTAMA */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-300">
            <p className="font-grandcru text-[10px] font-semibold text-[#3f251b] leading-relaxed max-w-xs mx-auto mb-4">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila anda berkenan hadir dan memberikan do&apos;a restunya untuk pernikahan kami.
            </p>
        </AnimateOnScroll>

        {/* UCAPAN TERIMA KASIH */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400">
            <p className="font-grandcru text-[10px] font-bold text-[#3f251b] tracking-wide mb-8">
              Atas do&apos;a dan restunya, kami ucapkan terima kasih.
            </p>
        </AnimateOnScroll>
        
        {/* NAMA PASANGAN */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500">
            <p className="font-allura text-5xl text-[#3f251b] mb-1">
              {coupleName1} & {coupleName2}
            </p>
        </AnimateOnScroll>
        
        {/* FOOTER KONTAK */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-700">
            <div className="mt-8 text-xs font-grandcru text-[#3f251b] space-y-2">
                <div className="flex items-center justify-center gap-2">
                    <Instagram size={14} />
                    <span>@scaloedesign3</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Smartphone size={14} />
                    <span>+62 8577-4554-622</span>
                </div>
            </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClosingPage;