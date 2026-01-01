// src/components/Cover.tsx
import React from 'react';
import Image from 'next/image';
import AnimatedImage from './AnimatedImage';      
import AnimateOnScroll from './AnimateOnScroll'; 

interface GuestData {
  full_name: string;
  is_rsvp: boolean;
  max_guests: number;
}

interface CoverProps {
  coupleName1: string;
  coupleName2: string;
  onOpen: () => void;
  onImageLoad: () => void; // Dibiarkan sebagai prop tapi isinya fungsi kosong di page.tsx
  isPageLoading: boolean;
  guestName: string;
  guestData: GuestData | null | false; 
}

const Cover: React.FC<CoverProps> = ({ coupleName1, coupleName2, onOpen, onImageLoad, isPageLoading, guestName, guestData }) => {
  return (
    <section
      className="
        relative flex min-h-screen flex-col items-center justify-center p-6 text-center
        overflow-hidden
      "
    >
      {/* Background utama - onLoad Dihapus dari sini */}
      <Image
        src="/images/background/background.webp"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="absolute top-1 left-2 z-10 -rotate-[90deg] -scale-y-100 -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kiri Atas" width={155} height={155} className="delay-300" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute top-1 right-2 z-10 -rotate-[90deg] -translate-y-6">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Kanan Atas" width={155} height={155} className="delay-300" isPageLoading={isPageLoading} />
      </div>

      <div className="relative mb-8 w-[175px] h-[235px] rounded-[55%/55%] border-[6.5px] border-[#925b56] overflow-hidden">
        {/* Foto utama - onLoad Dihapus dari sini */}
        <AnimatedImage
          src="/images/gallery/image7.webp"
          alt="Aina & Sandy"
          fill
          className="object-cover delay-200"
          priority
          isPageLoading={isPageLoading}
        />
      </div>

      <AnimateOnScroll className="delay-300" isPageLoading={isPageLoading}>
        <p className="font-grandcru font-extrabold text-[10px] text-[#3f251b]">
          WEDDING INVITATION
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="delay-400" isPageLoading={isPageLoading}>
        <h1 className="font-allura text-[35px] font-[500] text-[#3f251b]">
          {coupleName1} & {coupleName2}
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll className="delay-500" isPageLoading={isPageLoading}>
        <p className="font-grandcru font-bold text-[15px] text-sm text-[#925b56]">
          02 | 11 | 2025
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="delay-600" isPageLoading={isPageLoading}>
          {/* Hanya tampil jika guestName sudah di-fetch (tidak null/kosong) */}
          {guestName && ( 
              <p className="font-grandcru text-sm font-semibold text-[#3f251b] tracking-wide mt-6 mb-2">
                  Kepada Yth. Bapak/Ibu/Sdr/i
                  <br />
                  <span className="font-allura text-4xl text-[#3f251b] mt-1 block">
                      {guestName}
                  </span>
              </p>
          )}
      </AnimateOnScroll>

      <AnimateOnScroll className="delay-700" isPageLoading={isPageLoading}>
        <button
          onClick={onOpen}
          // Button disabled jika data masih null (loading) atau false (error/tidak ditemukan)
          disabled={guestData === null || guestData === false} 
          className={`
            mt-8 px-9 py-3 bg-[#925b56] text-white text-[9px] font-bold rounded-full shadow-lg
            hover:bg-[#4a3942] transition
            disabled:bg-gray-400 disabled:cursor-not-allowed
          `}
        >
          BUKA UNDANGAN
        </button>
      </AnimateOnScroll>

      {/* Ornamen Bawah (sama) */}
      <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kiri" width={150} height={150} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 right-1/6 z-10 transform translate-x-[4.5px] translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kanan" width={150} height={150} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kiri" width={150} height={150} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 right-1/6 z-10 transform translate-x-[4.5px] translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kanan" width={150} height={150} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 translate-y-7">
        <AnimatedImage src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah" width={150} height={150} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 z-10 rotate-[-130deg] translate-y-25">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kiri" width={130} height={130} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 right-1/6 transform translate-x-1/4 z-10 rotate-[-49.5deg] translate-y-25 -scale-y-100">
        <AnimatedImage src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kanan" width={130} height={130} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-20 z-10 -translate-y-15">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kiri Bawah" width={180} height={180} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-20 z-10 -translate-y-15 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image3.webp" alt="Ornamen Kanan Bawah" width={180} height={180} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -left-25 z-10 translate-y-30">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="delay-400" isPageLoading={isPageLoading} />
      </div>
      <div className="absolute bottom-0 -right-25 z-10 translate-y-30 -scale-y-100 rotate-[-180deg]">
        <AnimatedImage src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kanan Bawah" width={220} height={220} className="delay-400" isPageLoading={isPageLoading} /> 
      </div> 
    </section>
  );
};

export default Cover;