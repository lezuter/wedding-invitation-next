// src/components/Background1.tsx
"use client";
import React from "react";
import Image from "next/image";

interface Background1Props {
    isMainContentLoading: boolean; 
}

const Background1: React.FC<Background1Props> = ({ isMainContentLoading }) => {
    // Tentukan class yang akan menonaktifkan animasi (saat loading true)
    const animationClass = isMainContentLoading ? 'animation-pause' : '';

    return (
        <div
            className="
                absolute inset-0 -z-10
                bg-cover bg-center bg-no-repeat overflow-hidden
            "
        >
            {/* ===== Overlay Lembut biar konten kebaca ===== */}
            <div className="absolute inset-0 bg-[#f4e9f0]/10 backdrop-blur-[1px]" />

            {/* ===== Ornamen Fixed di Layar ===== */}
            <div className={`relative w-full h-full pointer-events-none ${animationClass}`}>

                {/* Ornamen Atas */}
                <div className="absolute top-1 left-2 -rotate-[90deg] -scale-y-100 -translate-y-6">
                    <Image src="/images/ornaments/image5.webp" alt="Ornamen Kiri Atas" width={155} height={155} className="animate-sway-1" />
                </div>
                <div className="absolute top-1 right-2 -rotate-[90deg] -translate-y-6">
                    <Image src="/images/ornaments/image5.webp" alt="Ornamen Kanan Atas" width={155} height={155} className="animate-sway-2" />
                </div>

                {/* Ornamen Bawah */}
                <div className="absolute bottom-0 -left-35 -translate-y-50 -scale-y-100 rotate-[-180deg]">
                    <Image src="/images/ornaments/image11.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-3" />
                </div>
                <div className="absolute bottom-0 -right-35 -translate-y-50 ">
                    <Image src="/images/ornaments/image11.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-2" />
                </div>
                <div className="absolute bottom-0 -left-27 -translate-y-5 -rotate-[-15deg]">
                    <Image src="/images/ornaments/image12.webp" alt="Ornamen Bawah Kiri" width={220} height={220} className="animate-sway-2" />
                </div>
                <div className="absolute bottom-0 -right-27 -translate-y-5 -scale-y-100 rotate-[-185deg]">
                    <Image src="/images/ornaments/image12.webp" alt="Ornamen Bawah Kanan" width={220} height={220} className="animate-sway-3" />
                </div>

                {/* Ornamen Tengah Bawah */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 w-[250px]">
                    <Image src="/images/ornaments/image13.webp" alt="Ornamen Tengah Bawah" width={300} height={300} />
                </div>
                <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 translate-y-7">
                    <Image src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kiri" width={150} height={150} className="animate-sway-3" />
                </div>
                <div className="absolute -bottom-5 right-1/6 translate-x-[4.5px] translate-y-7">
                    <Image src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah Kanan" width={150} height={150} className="animate-sway-1" />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 translate-y-7">
                    <Image src="/images/ornaments/image4.webp" alt="Ornamen Tengah Bawah" width={150} height={150} className="animate-sway-2" />
                </div>

                {/* Ornamen Pinggir */}
                <div className="absolute bottom-0 left-1/4 -translate-x-1/2 rotate-[-130deg] translate-y-25">
                    <Image src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kiri" width={130} height={130} className="animate-sway-3" />
                </div>
                <div className="absolute bottom-0 right-1/6 translate-x-1/4 rotate-[-49.5deg] translate-y-25 -scale-y-100">
                    <Image src="/images/ornaments/image5.webp" alt="Ornamen Tengah Kanan" width={130} height={130} className="animate-sway-1" />
                </div>

                {/* Ornamen Luar */}
                <div className="absolute bottom-0 -left-20 -translate-y-15">
                    <Image src="/images/ornaments/image3.webp" alt="Ornamen Kiri Bawah" width={180} height={180} className="animate-sway-2" />
                </div>
                <div className="absolute bottom-0 -right-20 -translate-y-15 -scale-y-100 rotate-[-180deg]">
                    <Image src="/images/ornaments/image3.webp" alt="Ornamen Kanan Bawah" width={180} height={180} className="animate-sway-3" />
                </div>
                <div className="absolute bottom-0 -left-25 translate-y-30">
                    <Image src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kiri Bawah" width={220} height={220} className="animate-sway-1" />
                </div>
                <div className="absolute bottom-0 -right-25 translate-y-30 -scale-y-100 rotate-[-180deg]">
                    <Image src="/images/ornaments/image6.webp" alt="Ornamen Pojok Kanan Bawah" width={220} height={220} className="animate-sway-2" />
                </div>
            </div>
        </div>
    );
};

export default Background1;