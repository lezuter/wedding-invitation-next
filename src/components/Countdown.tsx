// src/components/Countdown.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { WEDDING_CONFIG } from '../data/weddingData';

const TARGET_DATE = new Date(WEDDING_CONFIG.TARGET_DATE);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +TARGET_DATE - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const TimeBlock: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center w-17 h-17 sm:w-24 sm:h-24 mx-1 bg-[#925b56]/80 rounded-xl shadow-lg text-center backdrop-blur-sm">
    <div className="text-3xl sm:text-4xl font-mono font-bold text-white">{value.toLocaleString('id-ID', { minimumIntegerDigits: 2 })}</div>
    <div className="text-xs font-grandcru text-white/70 uppercase tracking-widest mt-1">{label}</div>
  </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => { setTimeLeft(calculateTimeLeft()); }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents: React.ReactNode[] = [];

  if (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) {
    timerComponents.push(
      <TimeBlock key="days" value={timeLeft.days} label="Hari" />,
      <TimeBlock key="hours" value={timeLeft.hours} label="Jam" />,
      <TimeBlock key="minutes" value={timeLeft.minutes} label="Menit" />,
      <TimeBlock key="seconds" value={timeLeft.seconds} label="Detik" />
    );
  }

  return (
    <div className="flex justify-center flex-wrap">
      {timerComponents.length ? timerComponents : (
        <p className="font-grandcru text-xl p-4 bg-[#925b56] rounded-lg text-white shadow-lg">
          🎉 Acara telah berlangsung! 🎉
        </p>
      )}
    </div>
  );
};

export default Countdown;