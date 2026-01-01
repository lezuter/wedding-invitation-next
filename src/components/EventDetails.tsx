// src/components/EventDetails.tsx
import React from 'react';
import Image from 'next/image';
import { EVENT_SCHEDULE, WEDDING_CONFIG } from '../data/weddingData';
import LocationMapIcon from './LocationMapIcon';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedImage from './AnimatedImage';

interface EventDetailsProps {
    isPageLoading: boolean;
}

const EventDetails: React.FC<EventDetailsProps> = ({ isPageLoading }) => {
  // Ambil data acara dari weddingData
  const akad = EVENT_SCHEDULE.find(e => e.type.toLowerCase().includes('akad')) || EVENT_SCHEDULE[0];
  const resepsi = EVENT_SCHEDULE.find(e => e.type.toLowerCase().includes('resepsi')) || EVENT_SCHEDULE[1];

  // Mengolah tanggal dari config untuk ditampilkan
  const eventDate = new Date(WEDDING_CONFIG.TARGET_DATE);
  const dayName = eventDate.toLocaleDateString('id-ID', { weekday: 'long' });
  const day = eventDate.toLocaleDateString('id-ID', { day: '2-digit' });
  const monthYear = eventDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

  return (
    <section className="relative flex flex-col items-center min-h-dvh px-4 py-16 snap-start bg-[#3f251b]/90">
      
      {/* Container utama kartu DIBUNGKUS ANIMASI */}
      <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200 relative w-full max-w-sm">
        
        <div className="bg-[#f2d2be] rounded-full shadow-xl overflow-hidden relative z-10 mx-auto ">
          
          {/* Border tebal di sekitar kartu */}
          <div className="absolute inset-0 border-[7px] border-[#69622C] rounded-full z-0"></div>

          {/* Konten kartu */}
          <div className="relative z-10 p-8 flex flex-col items-center text-center">

            {/* Icon Inisial dan Ornamen Atas */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-300">
                <div className="relative mb-4">
                  <AnimatedImage src="/images/ornaments/image14.webp" alt="Ornamen Atas" width={130} height={130} isPageLoading={isPageLoading} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image 
                      src="/images/ornaments/SVG/SAlogo.svg"
                      alt="Logo Inisial S & S"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
            </AnimateOnScroll>

            {/* Judul & Kalimat Pembuka */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400">
                <h2 className="font-grandcru text-[20px] text-sm font-bold text-[#3f251b] tracking-widest mb-2">
                    WEDDING EVENT
                </h2>
                <p className="font-grandcru font-bold text-xs text-[#3f251b] mb-6">
                    InsyaAllah akan dilaksanakan pada:
                </p>
            </AnimateOnScroll>

            {/* Tanggal */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500 w-full">
              <div className="flex items-center justify-center w-full gap-3 mb-8 font-grandcru text-[#925b56] uppercase">
                <span className="text-sm tracking-wider text-[#3f251b]">{dayName}</span>
                <span className="font-allura text-6xl font-bold text-[#925b56] -mt-2">{day}</span>
                <span className="text-sm tracking-wider text-[#3f251b]">{monthYear}</span>
              </div>
            </AnimateOnScroll>

            {/* Jadwal Acara (Akad & Resepsi) */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-600 w-full">
              <div className="flex justify-around w-full mb-8">
                {/* Sisi Kiri: Akad Nikah */}
                <div className="flex-1 text-center">
                  <h3 className="font-grandcru text-lg font-bold text-[#925b56]">{akad.type}</h3>
                  <p className="font-grandcru font-bold text-[10px] text-sm text-[#3f251b]">Pukul<br />09.00 - 12.00<br />WIB</p>
                </div>

                <div className="border-1 border-[#925b56]/50 mx-2"></div>

                {/* Sisi Kanan: Resepsi */}
                <div className="flex-1 text-center">
                  <h3 className="font-grandcru text-lg font-bold text-[#925b56]">{resepsi.type}</h3>
                  <p className="font-grandcru font-bold text-[10px] text-sm text-[#3f251b]">Pukul<br />13.00 - 16.00<br />WIB</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Lokasi */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-700">
              <div className="flex flex-col items-center mb-8">
                <Image src="/images/ornaments/SVG/location.svg" alt="Location Pin" width={32} height={32} className="mb-3"/>
                <p className="font-grandcru font-bold text-[#925b56]">{akad.locationName}</p>
                <p className="font-grandcru font-bold text-[9.5px] text-xs text-[#3f251b]/80 mt-1 leading-relaxed max-w-xs">
                  KP. COGREG SEBRANG RT02/RW03 NO.21, CISEENG, PARUNG, BOGOR
                  <br />
                  (BELAKANG KOMPLEK NUBIKA, GUNUNG KAPUR)
                </p>
              </div>
            </AnimateOnScroll>

            {/* Tombol Open Maps */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500">
              <a
                href={akad.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-3 font-sans mb-20 text-xs font-bold text-white bg-[#925b56] rounded-full shadow-lg hover:bg-[#4a3942] transition"
              >
                <LocationMapIcon width={15} height={15} className="text-white" />
                OPEN MAPS
              </a>
            </AnimateOnScroll>

          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default EventDetails;