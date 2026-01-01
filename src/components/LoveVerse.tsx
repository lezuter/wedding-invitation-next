// src/components/LoveVerse.tsx
import React from 'react';
import AnimatedImage from './AnimatedImage';
import AnimateOnScroll from './AnimateOnScroll';

interface LoveVerseProps {
    isPageLoading: boolean;
}

const LoveVerse: React.FC<LoveVerseProps> = ({ isPageLoading }) => {
    return (
        <section
            className="relative min-h-dvh flex snap-start items-center justify-center overflow-hidden px-4"
        >
            <div className="absolute top-5 -right-30 sm:right-0 z-20 w-56 sm:w-72 -scale-x-100 -rotate-[5deg] pointer-events-none">
                <AnimatedImage
                    src="/images/ornaments/image6.webp"
                    alt="Ornamen Bunga"
                    width={250}
                    height={250}
                    className="animate-sway-1"
                    isPageLoading={isPageLoading}
                />
            </div>
            <div className="absolute top-55 -left-30 sm:right-0 z-20 w-56 sm:w-72 pointer-events-none">
                 <AnimatedImage
                    src="/images/ornaments/image6.webp"
                    alt="Ornamen Bunga"
                    width={250}
                    height={250}
                    className="animate-sway-2"
                    isPageLoading={isPageLoading}
                />
            </div>

            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200">
                <div className="max-w-[300px] -top-5 mx-auto relative z-10 bg-white/70 backdrop-blur-sm rounded-lg shadow-xl p-2">
                    {/* FOTO PASANGAN (KEMBALIKAN KE ASPECT-SQUARE) */}
                    <div className="relative w-full aspect-square rounded-md overflow-hidden">
                        <AnimatedImage
                            src="/images/gallery/image15.webp"
                            alt="We Found Love"
                            fill
                            className="object-cover"
                            isPageLoading={isPageLoading}
                        />
                    </div>

                    <div className="text-center p-6">
                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-300">
                            <h2 className="font-grandcru text-[18px] text-[#3f251b] font-bold tracking-widest">
                                WE FOUND LOVE
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500">
                            <blockquote className="font-grandcru mt-6 text-[10px] text-[#6a4f4b] italic leading-relaxed">
                                <p>
                                    &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
                                </p>
                                <cite className="block not-italic font-semibold mt-4 text-[#925b56]">
                                    (QS. Ar-Rum [30]: 21)
                                </cite>
                            </blockquote>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default LoveVerse;