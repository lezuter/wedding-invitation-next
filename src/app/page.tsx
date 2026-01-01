// src/app/page.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; 
import { WEDDING_CONFIG } from '../data/weddingData';
import { db } from '../firebaseConfig'; 
import { doc, onSnapshot } from 'firebase/firestore'; 

// Import semua komponen
import MusicPlayer from '../components/MusicPlayer';
import Cover from '../components/Cover';
import Hero from '../components/Hero';
import LoveVerse from '../components/LoveVerse';
import BrideGroom from '../components/BrideGroom';
import CountdownSection from '../components/CountdownSection';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import RSVPForm from '../components/RSVPForm';
import InitialPreloader from '../components/InitialPreloader';
import Background1 from '../components/Background1'; 
import WeddingGift from '@/components/WeddingGift';
import ClosingPage from '@/components/ClosingPage';

interface GuestData {
  full_name: string;
  is_rsvp: boolean;
  max_guests: number;
}

const normalizeName = (name: string) => {
    if (!name) return '';
    return name.toLowerCase().replace(/[^a-z0-9\s_]/g, '').trim().replace(/\s+/g, '_');
};

export default function Home() {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isMainContentLoading, setIsMainContentLoading] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [musicPlaying, setMusicPlaying] = useState(false);
    const [showClosing, setShowClosing] = useState(false);
    const closingPageRef = useRef<HTMLDivElement>(null);

    const [guestName, setGuestName] = useState(''); 
    const [guestData, setGuestData] = useState<GuestData | null | false>(null); 
    const [guestDocId, setGuestDocId] = useState<string | null>(null);

    // LOGIKA PRELOADING (Final: Cuma nunggu timer 1.5 detik)
    const [minTimeHasPassed, setMinTimeHasPassed] = useState(false);
    const handleCoverImageLoad = () => {};

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinTimeHasPassed(true);
        }, 1500); 
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (minTimeHasPassed) {
            setIsPageLoading(false);
        }
    }, [minTimeHasPassed]);

    // EFFECT: MENGAMBIL NAMA TAMU DARI URL & FIRESTORE (REALTIME)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const params = new URLSearchParams(window.location.search);
        const nameFromUrl = params.get('to');

        let unsubscribe: (() => void) | null = null; 

        if (nameFromUrl) {
            const normalizedKey = normalizeName(nameFromUrl);
            setGuestDocId(normalizedKey); 

            try {
                const docRef = doc(db, 'guests', normalizedKey);
                
                unsubscribe = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data() as GuestData; 
                        setGuestData(data); 
                        setGuestName(data.full_name); 
                    } else {
                        setGuestData(false); 
                        setGuestName("Tamu Undangan"); 
                    }
                }, (error) => { 
                    console.error('Error onSnapshot guest data:', error);
                    setGuestData(false);
                    setGuestName("Tamu Undangan");
                });

            } catch (error) { 
                console.error('Error setting up listener guest data:', error);
                setGuestData(false);
                setGuestName("Tamu Undangan");
            }
        } else { 
            setGuestData({ full_name: 'Tamu Undangan', is_rsvp: false, max_guests: 1 } as GuestData);
            setGuestName('Tamu Undangan');
            setGuestDocId(null); 
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []); 

    // Callback buat RSVPForm
    const handleContentRendered = () => {
        setIsMainContentLoading(false);
    };

    // EFFECT BARU buat mantau guestData dan nampilin ClosingPage (Realtime Scroll Trigger)
    useEffect(() => {
      if (guestData && guestData.is_rsvp) {
        setShowClosing(true); 
      }
    }, [guestData]); 

    // useEffect buat scroll smooth ke ClosingPage (setelah dia muncul)
    useEffect(() => {
        if (showClosing && closingPageRef.current) {
            // Delay 16ms buat ngakalin snap
            setTimeout(() => {
                closingPageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 16); 
        }
    }, [showClosing]);

    // Fungsi buka undangan
    const handleOpenInvitation = () => {
        setIsOpened(true);
        setMusicPlaying(true);
        setIsMainContentLoading(true);
        setTimeout(() => {
            setIsMainContentLoading(false); 
        }, 3500); 
    };
    
    // Fungsi toggle musik
    const handleMusicToggle = () => { setMusicPlaying(!musicPlaying); };

    const { COUPLE_NAME_1, COUPLE_NAME_2 } = WEDDING_CONFIG;

    return (
        <main>
             {/* Background Utama */}
             <div className="fixed inset-0 z-0 overflow-hidden">
                <Image src="/images/background/background.webp" alt="Global Background" fill className="object-cover scale-105" quality={80} priority />
                {isOpened && <Background1 isMainContentLoading={isMainContentLoading} />}
            </div>

            {/* Preloader (cuma nunggu timer) */}
            <InitialPreloader isLoading={isPageLoading} />

            {/* Tampilan kalo data tamu NGGAK ADA (false) */}
            {guestData === false && (
                 <div className="flex items-center justify-center min-h-screen bg-[#F4E9E0]/80 backdrop-blur-sm relative z-20">
                    <p className="text-red-600 font-grandcru text-lg p-4 bg-white rounded shadow-md">Mohon maaf, data undangan Anda tidak ditemukan.</p>
                </div>
            )}
            
            {/* Tampilan kalo data tamu ADA atau MASIH LOADING (null) */}
            {guestData !== false && ( 
            <div style={{ opacity: isPageLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
                {isOpened && <MusicPlayer isPlaying={musicPlaying} onToggle={handleMusicToggle} />}

                {/* Tampilan SEBELUM dibuka */}
                {!isOpened ? (
                    <Cover
                        coupleName1={COUPLE_NAME_1}
                        coupleName2={COUPLE_NAME_2}
                        onOpen={handleOpenInvitation}
                        onImageLoad={handleCoverImageLoad} 
                        isPageLoading={isPageLoading}
                        guestName={guestName} 
                        guestData={guestData} 
                    />
                // Tampilan SETELAH dibuka
                ) : isMainContentLoading ? (
                    <InitialPreloader isLoading={true} /> 
                ) : (
                    // Konten utama undangan (scrollable)
                    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory relative z-10 overflow-x-hidden animate-fade-in"> 
                        <Hero coupleName1={COUPLE_NAME_1} coupleName2={COUPLE_NAME_2} isPageLoading={isMainContentLoading} />
                        <LoveVerse isPageLoading={isMainContentLoading} />
                        <BrideGroom isPageLoading={isMainContentLoading} />
                        <CountdownSection isPageLoading={isMainContentLoading} /> 
                        <EventDetails isPageLoading={isMainContentLoading} />
                        <Gallery isPageLoading={isPageLoading} />
                        <WeddingGift isPageLoading={isMainContentLoading} />
                        
                        {/* RSVPForm cuma muncul kalo data tamu udah ADA */}
                        {guestData && (
                            <RSVPForm 
                                isPageLoading={isMainContentLoading} 
                                onContentRendered={handleContentRendered} 
                                guestData={guestData} 
                                guestDocId={guestDocId} 
                            /> 
                        )}

                        {/* ClosingPage muncul kalo showClosing true */}
                        {showClosing && (
                            <div ref={closingPageRef}>
                                <ClosingPage coupleName1={COUPLE_NAME_1} coupleName2={COUPLE_NAME_2} isPageLoading={isMainContentLoading} />
                            </div>
                        )}
                    </div>
                )}
            </div>
            )}
        </main>
    );
}