// src/data/weddingData.ts

// INTERFACE (Skema Data Acara)
export interface EventDetails {
    type: string;
    date: string;
    time: string;
    locationName: string;
    address: string;
    mapLink: string;
}

// KOLEKSI TEMPLATE BACKGROUND
export const TEMPLATE_BACKGROUNDS = {
    vintage: '/images/background/background.webp',
    floral: '/images/background/floral-bg.webp',
    dark: '/images/background/dark-bg.webp',
};

// DATA KONFIGURASI UMUM
export const WEDDING_CONFIG = {
    TARGET_DATE: '2025-11-02T10:00:00',
    COUPLE_NAME_1: 'Aina',
    COUPLE_NAME_2: 'Sandy',
    WEDDING_DATE_TEXT: "Minggu, 02 November 2025",

    HERO_BACKGROUND: TEMPLATE_BACKGROUNDS.vintage,

    // Data Mempelai
    BRIDE_NICKNAME: 'Aina',
    BRIDE_FULL_NAME: 'Zaenabia Yusritiara',
    BRIDE_DAUGHTER: 'Putri ke-2 dari',
    BRIDE_PARENTS: 'Bpk. Eddy Sumaryono & Ibu Elke Chamelia',

    GROOM_NICKNAME: 'Sandy',
    GROOM_FULL_NAME: 'Sandy Dharmawan',
    GROOM_SON: 'Putra ke-3 dari',
    GROOM_PARENTS: 'Bpk. Santoso & Ibu Dewi Dharmawati',
};

// DATA JADWAL ACARA
export const EVENT_SCHEDULE: EventDetails[] = [
    {
        type: "Akad Nikah",
        date: WEDDING_CONFIG.WEDDING_DATE_TEXT,
        time: "Pukul 09.00 - 12.00 WIB",
        locationName: "Kediaman Mempelai Wanita",
        address: "Kp. Cogreg Sebrang RT02/RW03 No.21, Ciseeng, Parung, Bogor (Belakang Komplek Nubika, Gunung Kapur)",
        mapLink: "https://maps.app.goo.gl/uTZZFRSUDbicZtAT7",
    },
    {
        type: "Resepsi",
        date: WEDDING_CONFIG.WEDDING_DATE_TEXT,
        time: "Pukul 13.00 - 16.00 WIB",
        locationName: "Kediaman Mempelai Wanita",
        address: "Kp. Cogreg Sebrang RT02/RW03 No.21, Ciseeng, Parung, Bogor (Belakang Komplek Nubika, Gunung Kapur)",
        mapLink: "https://maps.app.goo.gl/uTZZFRSUDbicZtAT7",
    }
];

// DATA UTAMA UNTUK GALERI FOTO (Koleksi semua path)
export const ALL_GALLERY_IMAGES: string[] = [
    '/images/gallery/image7.webp',
    '/images/gallery/image24.webp',
    '/images/gallery/image25.webp',
    '/images/gallery/image27.webp',
    '/images/gallery/image26.webp',
    '/images/gallery/image28.webp',
    '/images/gallery/image29.webp',
    '/images/gallery/image31.webp',
    '/images/gallery/image30.webp',
    '/images/gallery/image37.webp',
    '/images/gallery/image32.webp',
    '/images/gallery/image36.webp',
    '/images/gallery/image35.webp',
    '/images/gallery/image34.webp',
    '/images/gallery/image33.webp',
    '/images/gallery/image16.webp',
    '/images/gallery/image18.webp',
    '/images/gallery/image39.webp',
    '/images/gallery/image40.webp',
];

// ▼▼▼ DEKLARASI LAYOUT GALERI (INI PENTING UNTUK MENGATUR URUTAN FOTO) ▼▼▼
// Kamu bisa ganti angka indeksnya (misal [0], [1], dst.) sesuai foto yang kamu mau di slot tersebut.
export const GALLERY_LAYOUT = {
    // FOTO UTAMA 1 BESAR
    main: ALL_GALLERY_IMAGES[0], // Foto untuk col-span-2

    // FOTO 2 KECIL
    side: [
        ALL_GALLERY_IMAGES[1], // Foto untuk slot kiri kecil
        ALL_GALLERY_IMAGES[2], // Foto untuk slot kanan kecil
    ],

    // FOTO 3 TUMPUKAN BARU
    stack: [
        ALL_GALLERY_IMAGES[3], // Foto untuk tumpukan 1
        ALL_GALLERY_IMAGES[4], // Foto untuk tumpukan 2
        ALL_GALLERY_IMAGES[5], // Foto untuk tumpukan 3
    ],

    stack_secondary: [
        ALL_GALLERY_IMAGES[6],  // Foto untuk tumpukan 4
        ALL_GALLERY_IMAGES[7],  // Foto untuk tumpukan 5
        ALL_GALLERY_IMAGES[8],  // Foto untuk tumpukan 6
    ],

    grid_images: [
        ALL_GALLERY_IMAGES[9],
        ALL_GALLERY_IMAGES[10],
        ALL_GALLERY_IMAGES[11],
        ALL_GALLERY_IMAGES[12],
        ALL_GALLERY_IMAGES[13],
        ALL_GALLERY_IMAGES[14],
    ],

    stack_third: [
        ALL_GALLERY_IMAGES[15], // Foto 1 (Baris Atas)
        ALL_GALLERY_IMAGES[16], // Foto 2 (Grid Kiri)
        ALL_GALLERY_IMAGES[17], // Foto 3 (Grid Kanan)
        ALL_GALLERY_IMAGES[18], // Foto 4 (Baris Bawah)
    ]
};

// INTERFACE BARU UNTUK DATA REKENING
export interface BankAccount {
    bankName: string;
    logoPath: string; // Jika kamu punya path logo bank
    accountNumber: string;
    accountName: string;
}

// ▼▼▼ DATA REKENING BANK ▼▼▼
export const BANK_ACCOUNTS: BankAccount[] = [
    {
        bankName: "BCA",
        logoPath: "/images/ornaments/SVG/logo-bca.svg", // Ganti dengan path logo bank BCA-mu
        accountNumber: "7485227857",
        accountName: WEDDING_CONFIG.BRIDE_FULL_NAME, // Zaenabia Yusritiara
    },
    {
        bankName: "BCA",
        logoPath: "/images/ornaments/SVG/logo-bca.svg", // Ganti dengan path logo bank BCA-mu
        accountNumber: "0010734665",
        accountName: WEDDING_CONFIG.GROOM_FULL_NAME, // Sandy Dharmawan
    }
];