// src/components/Gallery.tsx
'use client';
import React, { useState, useEffect, useLayoutEffect, ReactNode, useRef, useMemo } from 'react';
import {
    Maximize,
    X,
    Share2,
    ZoomIn,
    ZoomOut,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    Minimize2
} from 'lucide-react';
import { GALLERY_LAYOUT } from '../data/weddingData';
import Image from 'next/image';

const HOLD_DURATION = 700;

// =======================================================
// Random Animate
// =======================================================
const ANIMATION_CLASSES = [
    'opacity-0 -translate-x-8',
    'opacity-0 translate-x-8',
    'opacity-0 translate-y-8',
    'opacity-0 -translate-y-8',
    'opacity-0 scale-95',
];

const RandomAnimate = ({
    children,
    isPageLoading,
}: {
    children: ReactNode;
    isPageLoading: boolean;
}) => {
    const [animationClass, setAnimationClass] = useState('opacity-0');
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useLayoutEffect(() => {
        if (!isPageLoading) {
            const randomDirection =
                ANIMATION_CLASSES[Math.floor(Math.random() * ANIMATION_CLASSES.length)];
            const randomDelay = `delay-${Math.floor(Math.random() * 4) * 300}`;
            setAnimationClass(`${randomDirection} ${randomDelay}`);
        }
    }, [isPageLoading]);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    return (
        <div
            ref={setRef}
            className={`transition-all duration-700 ease-in-out ${inView ? 'opacity-100 transform-none' : animationClass
                }`}
        >
            {children}
        </div>
    );
};

interface PeekModalProps {
    src: string;
}


// =======================================================
// Peek Modal (Hold)
// =======================================================
const PeekModal: React.FC<PeekModalProps> = ({ src }) => {
    useEffect(() => {
        // Kunci scroll saat modal aktif
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        document.documentElement.style.touchAction = 'none';
        return () => {
            // Balikin scroll saat modal ditutup
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
            document.documentElement.style.touchAction = 'auto';
        };
    }, []);

    return (
        <div
            className="
        fixed inset-0 z-[999]
        bg-black/80 flex items-center justify-center p-4
        transition-opacity duration-150
        pointer-events-auto
        touch-none select-none
      "
        >
            <div className="relative w-full max-w-sm bg-white p-3 pt-3 pb-8 shadow-2xl rounded-md transition-all duration-150 ease-out transform">
                <div className="relative w-full aspect-square overflow-hidden mb-3">
                    <Image
                        src={src}
                        alt="Peek Polaroid Preview"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-150"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
                <div className="w-full text-center">
                    <p className="font-allura text-sm text-[25px] text-gray-700 tracking-wider">
                        Aina & Sandy
                    </p>
                </div>
            </div>
        </div>
    );
};

// =======================================================
// Lightbox Modal (Tap)
// =======================================================
const LightboxModal = ({
    images,
    index,
    onClose,
}: {
    images: string[];
    index: number;
    onClose: () => void;
}) => {
    const [current, setCurrent] = useState(index);
    const [scale, setScale] = useState(1);
    const [isFullscreen, setFullscreen] = useState(false);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
    const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
    const zoomOut = () => setScale((s) => Math.max(s - 0.25, 1));

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const shareImage = async () => {
        const url = images[current];
        try {
            if (navigator.share) {
                await navigator.share({ title: 'Gallery Photo', url });
            } else {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center">
            {/* Toolbar */}
            <div className="absolute top-4 right-4 flex gap-3 pointer-events-auto z-[1001]">
                <button onClick={zoomOut} className="p-2 bg-white/10 hover:bg-white/20 rounded-full pointer-events-auto">
                    <ZoomOut className="text-white" size={20} />
                </button>
                <button onClick={zoomIn} className="p-2 bg-white/10 hover:bg-white/20 rounded-full pointer-events-auto">
                    <ZoomIn className="text-white" size={20} />
                </button>
                <button onClick={shareImage} className="p-2 bg-white/10 hover:bg-white/20 rounded-full pointer-events-auto">
                    <Share2 className="text-white" size={20} />
                </button>
                <button onClick={toggleFullscreen} className="p-2 bg-white/10 hover:bg-white/20 rounded-full pointer-events-auto">
                    {isFullscreen ? (
                        <Minimize2 className="text-white" size={20} />
                    ) : (
                        <Maximize2 className="text-white" size={20} />
                    )}
                </button>
                <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full pointer-events-auto">
                    <X className="text-white" size={20} />
                </button>
            </div>

            {/* Gambar */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none pointer-events-none">
                {/* Tombol kiri */}
                <button
                    onClick={prev}
                    className="absolute left-5 md:left-6 p-3 bg-black/20 hover:bg-black/60 rounded-full pointer-events-auto z-[1000] transition-opacity duration-200"
                >
                    <ChevronLeft className="text-white drop-shadow-lg" size={25} />
                </button>

                {/* Gambar utama */}
                <div className="transition-transform duration-300 ease-out">
                    <Image
                        src={images[current]}
                        alt={`Gallery ${current + 1}`}
                        width={1200}
                        height={1200}
                        className="object-contain max-h-[90vh] max-w-[90vw]"
                        style={{ transform: `scale(${scale})`, pointerEvents: 'none' }}
                    />
                </div>

                {/* Tombol kanan */}
                <button
                    onClick={next}
                    className="absolute right-5 md:right-6 p-3 bg-black/20 hover:bg-black/60 rounded-full pointer-events-auto z-[1000] transition-opacity duration-200"
                >
                    <ChevronRight className="text-white drop-shadow-lg" size={25} />
                </button>
            </div>

            <p className="text-white/70 text-sm mt-2 pointer-events-auto z-[1001]">
                {current + 1} / {images.length}
            </p>
        </div>
    );
};

// =======================================================
// Gallery utama
// =======================================================
const Gallery: React.FC<{ isPageLoading: boolean }> = ({ isPageLoading }) => {
    const {
        main: mainImage,
        side: sideImages,
        stack: newImages,
        stack_secondary: secondaryImages,
        grid_images: gridImages,
        stack_third: newStack,
    } = GALLERY_LAYOUT;

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [peekSrc, setPeekSrc] = useState<string | null>(null);
    const holdTimer = useRef<NodeJS.Timeout | null>(null);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [loadingIndex, setLoadingIndex] = useState<number | null>(null);


    // Gabungkan semua gambar
    const allImages = useMemo(
        () =>
            [
                mainImage,
                ...sideImages,
                ...newImages,
                ...secondaryImages,
                ...gridImages,
                newStack[0],
                newStack[1],
                newStack[2],
                newStack[3],
            ].filter(Boolean),
        [mainImage, sideImages, newImages, secondaryImages, gridImages, newStack]
    );

    useEffect(() => {
        const isModalOpen = peekSrc !== null || lightboxIndex !== null;
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        document.documentElement.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [peekSrc, lightboxIndex]);

    // Hold
    const [isHolding, setIsHolding] = useState(false);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        document.documentElement.style.touchAction = 'none';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.touchAction = 'auto';
        document.documentElement.style.touchAction = 'auto';
    };

    const startPeek = (src: string) => {
        if (lightboxIndex !== null) return;
        clearPeek();
        setIsHolding(true);
        disableScroll();

        holdTimer.current = setTimeout(() => {
            setPeekSrc(src);
        }, HOLD_DURATION);
    };

    const clearPeek = () => {
        if (peekSrc) setPeekSrc(null);
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
        setIsHolding(false);
        enableScroll();
    };

    const handleClick = (index: number) => {
        if (isHolding) return;

        setLoadingIndex(index);
        setIsImageLoading(true);

        const img = new window.Image();
        img.src = allImages[index];
        img.onload = () => {
            setIsImageLoading(false);
            setLightboxIndex(index);
        };
        img.onerror = () => {
            setIsImageLoading(false);
            alert('Gagal memuat gambar.');
        };
    };

    // =============================================
    // Properti event tiap foto
    // =============================================
    const getEventProps = (src: string, index: number) => ({
        onMouseDown: () => startPeek(src),
        onTouchStart: (e: React.TouchEvent) => {
            e.preventDefault();
            startPeek(src);
        },
        onMouseUp: clearPeek,
        onTouchEnd: clearPeek,
        onTouchCancel: clearPeek,
        onTouchMove: (e: React.TouchEvent) => {
            // Biar bener-bener gak bisa geser
            if (holdTimer.current) e.preventDefault();
        },
        onDragStart: (e: React.DragEvent) => e.preventDefault(),
        draggable: false,
        onClick: () => handleClick(index),
        onContextMenu: (e: React.MouseEvent) => {
            e.preventDefault(); // Mencegah menu konteks default (Salin, Simpan Gambar, dll.)
        },
    });

    return (
        <section className="relative flex flex-col items-center min-h-dvh px-4 py-16 snap-start bg-[#3f251b]/90">
            {peekSrc && <PeekModal src={peekSrc} />}
            {lightboxIndex !== null && (
                <LightboxModal
                    images={allImages}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}

            <div className="relative z-10 w-full max-w-lg">
                <RandomAnimate isPageLoading={isPageLoading}>
                    <h2 className="font-grandcru text-4xl font-bold text-center text-white mb-1">
                        OUR GALLERY
                    </h2>
                    <p className="font-grandcru text-sm text-center text-white/70 tracking-wide mb-8">
                        Constantly, consistently, continually, you
                    </p>
                </RandomAnimate>

                {/* --- BLOK GAMBAR UTAMA DAN KECIL --- */}
                <div className="grid grid-cols-2 gap-3 mb-12">
                    <div
                        className="col-span-2 overflow-hidden shadow-xl aspect-video cursor-pointer group relative"
                        {...getEventProps(mainImage, allImages.indexOf(mainImage))}
                    >
                        <RandomAnimate isPageLoading={isPageLoading}>
                            <Image
                                src={mainImage}
                                alt="Foto Utama Galeri"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize className="text-white" size={32} />
                            </div>
                        </RandomAnimate>
                    </div>

                    {sideImages.map((src, index) => (
                        <div
                            key={`side-${index}`}
                            className="col-span-1 overflow-hidden rounded-lg shadow-xl aspect-[3/4] cursor-pointer group relative"
                            {...getEventProps(src, allImages.indexOf(src))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={src}
                                    alt={`Galeri foto kecil ${index + 1}`}
                                    width={250}
                                    height={333}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>
                    ))}
                </div>

                <RandomAnimate isPageLoading={isPageLoading}>
                    <p className="font-allura text-4xl text-center text-white mt-12 mb-12">
                        Aina & Sandy
                    </p>
                </RandomAnimate>

                {/* --- BLOK TUMPUKAN 1 --- */}
                <div className="flex flex-col gap-3 mt-8">
                    {newImages.map((src, index) => (
                        <div
                            key={`stack1-${index}`}
                            className="w-full overflow-hidden rounded-lg shadow-xl aspect-video cursor-pointer group relative"
                            {...getEventProps(src, allImages.indexOf(src))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={src}
                                    alt={`Galeri tumpukan 1.${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>
                    ))}
                </div>

                {/* --- BLOK TUMPUKAN 2 --- */}
                <div className="flex flex-col gap-3 mt-3 mb-3">
                    {secondaryImages.map((src, index) => (
                        <div
                            key={`stack2-${index}`}
                            className="w-full overflow-hidden rounded-lg shadow-xl aspect-video cursor-pointer group relative"
                            {...getEventProps(src, allImages.indexOf(src))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={src}
                                    alt={`Galeri tumpukan 2.${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>
                    ))}
                </div>

                {/* --- BLOK GRID 3X2 --- */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                    {gridImages.map((src, index) => (
                        <div
                            key={`grid3x2-${index}`}
                            className="col-span-1 overflow-hidden rounded-md shadow-xl aspect-[3/4] cursor-pointer group relative"
                            {...getEventProps(src, allImages.indexOf(src))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={src}
                                    alt={`Grid 3x2 foto ${index + 1}`}
                                    width={250}
                                    height={333}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>
                    ))}
                </div>

                {/* --- BLOK STACKING 1-2-1 --- */}
                <div className="relative z-10 w-full max-w-lg mt-8 mb-16">
                    <div
                        className="w-full overflow-hidden shadow-xl aspect-video mb-3 cursor-pointer group relative"
                        {...getEventProps(newStack[0], allImages.indexOf(newStack[0]))}
                    >
                        <RandomAnimate isPageLoading={isPageLoading}>
                            <Image
                                src={newStack[0]}
                                alt="Stacking Atas 1-2-1"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize className="text-white" size={24} />
                            </div>
                        </RandomAnimate>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <div
                            className="col-span-1 overflow-hidden shadow-xl aspect-[3/4] cursor-pointer group relative"
                            {...getEventProps(newStack[1], allImages.indexOf(newStack[1]))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={newStack[1]}
                                    alt="Grid Tengah Kiri 1-2-1"
                                    width={250}
                                    height={333}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>

                        <div
                            className="col-span-1 overflow-hidden shadow-xl aspect-[3/4] cursor-pointer group relative"
                            {...getEventProps(newStack[2], allImages.indexOf(newStack[2]))}
                        >
                            <RandomAnimate isPageLoading={isPageLoading}>
                                <Image
                                    src={newStack[2]}
                                    alt="Grid Tengah Kanan 1-2-1"
                                    width={250}
                                    height={333}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize className="text-white" size={24} />
                                </div>
                            </RandomAnimate>
                        </div>
                    </div>

                    <div
                        className="w-full overflow-hidden shadow-xl aspect-video cursor-pointer group relative"
                        {...getEventProps(newStack[3], allImages.indexOf(newStack[3]))}
                    >
                        <RandomAnimate isPageLoading={isPageLoading}>
                            <Image
                                src={newStack[3]}
                                alt="Stacking Bawah 1-2-1"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize className="text-white" size={24} />
                            </div>
                        </RandomAnimate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;