// src/components/MusicPlayer.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react'; 

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  // useRef untuk mendapatkan akses langsung ke elemen <audio>
  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect akan jalan setiap kali nilai 'isPlaying' berubah
  useEffect(() => {
    const audio = audioRef.current; // Ambil referensi audio
    if (!audio) return; // Pastikan elemen ada

    if (isPlaying) {
      // Tambahkan .play().catch() untuk menangani AbortError (pemblokiran Autoplay)
      audio.play().catch(error => {
        if (error.name === "AbortError") {
          console.warn("Autoplay diblokir, tombol play/pause diaktifkan.");
        } else {
          console.error("Gagal memutar media:", error);
        }
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {/* Elemen audio ini tersembunyi, tapi dia yang mainin musik */}
      {/* Ingat: Pastikan file media1.mp3 sudah dikompres! (di bawah 1MB) */}
      <audio ref={audioRef} src="/audio/media1.mp3" loop />

      {/* Tombol Mute/Unmute yang nempel di pojok */}
      <button
        onClick={onToggle}
        className="
          fixed bottom-5 right-5 z-50
          w-12 h-12 bg-white/80 rounded-full shadow-lg
          flex items-center justify-center
          text-[#5d4954] hover:bg-white transition
          backdrop-blur-sm
        "
        aria-label="Toggle Music"
      >
        {/* Ikon akan berubah tergantung state 'isPlaying' */}
        {isPlaying ? <Music size={24} /> : <Music2 size={24} />}
      </button>
    </>
  );
};

export default MusicPlayer;