// src/components/WeddingGift.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BANK_ACCOUNTS, BankAccount } from '../data/weddingData';
import { Clipboard, Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface WeddingGiftProps {
    isPageLoading: boolean;
}

// ===================================
// KOMPONEN COPY BUTTON
// ===================================
const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Gagal menyalin:', err);
        });
    };

    return (
        <button onClick={handleCopy} className={`ml-2 p-1 rounded-full text-white transition-colors duration-300 ${copied ? 'bg-green-500' : 'bg-[#925b56] hover:bg-[#4a3942]'}`} aria-label={copied ? "Tersalin!" : "Salin nomor rekening"}>
            {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </button>
    );
};

// ===================================
// KOMPONEN BANK BLOCK
// ===================================
interface BankBlockProps {
    account: BankAccount;
    isLast: boolean;
    isPageLoading: boolean;
}

const BankBlock: React.FC<BankBlockProps> = ({ account, isLast, isPageLoading }) => (
    <AnimateOnScroll isPageLoading={isPageLoading} className="w-full">
        <div>
            <div className="grid grid-cols-[1fr_auto] items-stretch p-1">
                <div className="flex flex-col text-left">
                    <h4 className="font-sans text-sm font-semibold text-[#3f251b] mb-6">
                        {account.bankName}
                    </h4>
                    <p className="text-xs text-[#925b56] leading-snug">
                        No. Rekening <span className='font-bold text-[#3f251b]'>{account.accountNumber}</span>
                    </p>
                    <p className="text-xs text-[#925b56] leading-snug">
                        a.n <span className='font-bold text-[#3f251b]'>{account.accountName}</span>
                    </p>
                </div>
                <div className="flex flex-col justify-between items-end h-full">
                    <div className='w-12 h-auto relative'>
                        <Image
                            src={account.logoPath || "/images/ornaments/SVG/logo-bca.svg"}
                            alt={`${account.bankName} Logo`}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <CopyButton textToCopy={account.accountNumber} />
                </div>
            </div>
            {!isLast && <div className="border-t border-[#925b56]/30 mx-0 mt-5 py-2"></div>}
        </div>
    </AnimateOnScroll>
);

// ===================================
// KOMPONEN UTAMA
// ===================================
const WeddingGift: React.FC<WeddingGiftProps> = ({ isPageLoading }) => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-dvh px-5 py-5 snap-start">
            <div className="absolute inset-0 z-0 bg-[#3F251B]/80 opacity-80 backdrop-blur-sm"></div>

            {/* Container utama kartu DIBUNGKUS ANIMASI */}
            <AnimateOnScroll isPageLoading={isPageLoading} className="delay-200 relative w-full max-w-sm">
                <div className="bg-[#EADAD2] rounded-[3rem] shadow-xl overflow-hidden relative z-10 mx-auto">
                    <div className="absolute inset-0 border-[7px] border-[#69622C] rounded-[3rem] z-0"></div>
                    <div className="relative z-10 px-6 py-12 flex flex-col items-center text-center">
                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-300">
                            <div className="mb-4">
                                <Image
                                    src="/images/ornaments/SVG/gift.svg"
                                    alt="Wedding Gift Icon"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-400">
                            <h2 className="font-grandcru text-2xl font-bold text-[#3f251b] tracking-widest mb-4">
                                WEDDING GIFT
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-500">
                            <p className="text-xs text-[10px] font-grandcru text-center text-[#3f251b] leading-relaxed mb-8">
                                Do&apos;a restu anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado secara cashless.
                            </p>
                        </AnimateOnScroll>

                        {/* Daftar Rekening */}
                        <AnimateOnScroll isPageLoading={isPageLoading} className="delay-600 w-full">
                            <div className="w-full mt-4 bg-white p-4 rounded-xl shadow-lg">
                                {BANK_ACCOUNTS.map((account, index) => (
                                    <BankBlock
                                        key={index}
                                        account={account}
                                        isLast={index === BANK_ACCOUNTS.length - 1}
                                        isPageLoading={isPageLoading}
                                    />
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default WeddingGift;