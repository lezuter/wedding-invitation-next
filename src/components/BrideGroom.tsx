// src/components/BrideGroom.tsx
import React from 'react';
import Image from "next/image";
import { WEDDING_CONFIG } from "../data/weddingData";
import AnimatedImage from "./AnimatedImage";
import AnimateOnScroll from "./AnimateOnScroll";
import Background1 from "./Background1";

interface BrideGroomProps {
    isPageLoading: boolean;
}

const BrideGroom: React.FC<BrideGroomProps> = ({ isPageLoading }) => {
  const {
    BRIDE_NICKNAME, BRIDE_FULL_NAME, BRIDE_PARENTS, BRIDE_DAUGHTER,
    GROOM_NICKNAME, GROOM_FULL_NAME, GROOM_PARENTS, GROOM_SON
  } = WEDDING_CONFIG;

  return (
    <section className="relative flex items-center justify-center min-h-dvh bg-transparent px-3 py-16 snap-start">
        
        {/* BUNGKUS Background1 DENGAN ANIMATEONSCRLL */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="absolute inset-0 delay-200">
            {/* Background1 adalah lapisan ornamen yang bergerak */}
            <Background1 isMainContentLoading={isPageLoading} /> 
        </AnimateOnScroll>
        
        {/* Ornamen Bawah Luar */}
        <div className="absolute z-31 bottom-0 -right-5 -translate-y-20 -scale-y-100 rotate-[-180deg]">
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200">
                <AnimatedImage 
                    src="/images/ornaments/image17.webp" 
                    alt="Ornamen Pojok Kanan Bawah" 
                    width={150} 
                    height={150} 
                    className="animate-sway-3" 
                    isPageLoading={isPageLoading} 
                />
            </AnimateOnScroll>
        </div>
        
        <div className="absolute z-31 bottom-0 -left-5 -translate-y-20">
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-100">
                <AnimatedImage 
                    src="/images/ornaments/image17.webp" 
                    alt="Ornamen Pojok Kiri Bawah" 
                    width={150} 
                    height={150} 
                    className="animate-sway-2" 
                    isPageLoading={isPageLoading} 
                />
            </AnimateOnScroll>
        </div>

        {/* KARTU UTAMA */}
        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400">
            <div
                className="
            relative z-30 w-full max-w-[400px] h-auto
            bg-[#D3B9AC]/40 backdrop-blur-sm
            border-2 border-[#925856] rounded-[1.5rem]
            flex flex-col items-center justify-start py-12 pb-70 px-6
        "
    >
                <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500 text-center">
                    <h2 className="font-grandcru text-2xl text-[#3f251b] font-bold tracking-widest mb-6">BRIDE & GROOM</h2>
                    <p className="font-grandcru -mt-1 font-bold text-lg text-[#3f251b] leading-relaxed text-center mb-10">
                        Assalamualaikum Wr. Wb. <br />
                        Dengan memohon Rahmat & Ridho Allah SWT, 
                        kami bermaksud mengundang Bapak/Ibu/Saudara/i 
                        untuk menghadiri acara pernikahan putra-putri kami :
                    </p>
                </AnimateOnScroll>

                {/* INFO MEMPELAI WANITA */}
                <AnimateOnScroll isPageLoading={isPageLoading} className="delay-600 w-full">
                    <div className="flex-shrink-0">
                        <div className="relative w-[180px] h-[240px] mx-auto rounded-[55%/55%] overflow-hidden shadow-md">
                            <AnimatedImage src="/images/gallery/image16.webp" alt={BRIDE_NICKNAME} fill className="object-cover" isPageLoading={isPageLoading} />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="font-allura text-4xl text-[#3f251b]">{BRIDE_NICKNAME}</h3>
                            <p className="font-grandcru -mt-1 font-bold text-lg text-[#3f251b]">{BRIDE_FULL_NAME}</p>
                            <p className="font-grandcru font-bold mt-3 text-[10px] text-[#3f251b] leading-tight">
                                {BRIDE_DAUGHTER}<br />{BRIDE_PARENTS}
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* & SIMBOL */}
                <AnimateOnScroll isPageLoading={isPageLoading} className="delay-600">
                    <div className="my-12 flex-shrink-0">
                        <p className="font-allura text-[70px] text-[#3f251b] font-bold leading-none">&</p>
                    </div>
                </AnimateOnScroll>

                {/* INFO MEMPELAI PRIA */}
                <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400 w-full">
                    <div className="flex-shrink-0">
                        <div className="relative w-[180px] h-[240px] mx-auto rounded-[55%/55%] overflow-hidden shadow-md">
                            <AnimatedImage src="/images/gallery/image18.webp" alt={GROOM_NICKNAME} fill className="object-cover" isPageLoading={isPageLoading} />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="font-allura text-4xl text-[#3f251b]">{GROOM_NICKNAME}</h3>
                            <p className="font-grandcru -mt-1 font-bold text-lg text-[#3f251b]">{GROOM_FULL_NAME}</p>
                            <p className="font-grandcru font-bold mt-3 text-[10px] text-[#3f251b] leading-tight">
                                {GROOM_SON}<br />{GROOM_PARENTS}
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </AnimateOnScroll>
    </section>
  );
};
export default BrideGroom;