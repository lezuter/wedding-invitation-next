// importGuests.js

// Import library yang dibutuhkan
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// 1. GANTI NAMA FILE INI DENGAN KEY JSON ADMIN SDK LU
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'wedding-invitation-7b0b9-firebase-adminsdk-fbsvc-1e1d6eb300.json'); 

// 2. PASTIKAN NAMA FILE CSV INI SESUAI
const CSV_FILE_PATH = path.join(__dirname, 'guest_list.csv'); 

// Nama koleksi di Firestore
const COLLECTION_NAME = 'guests'; 

// Fungsi untuk memastikan Proper Case (Huruf Besar di Awal Kata)
const toProperCase = (str) => {
    if (!str) return '';
    return str.toLowerCase().split(' ').map((word) => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

// Fungsi untuk menormalisasi nama (Hanya untuk Document ID)
const normalizeName = (name) => {
    if (!name) return '';
    
    // Ganti '&' jadi 'dan' untuk Document ID
    let tempName = name.toLowerCase().replace(/&/g, 'dan'); 

    // Menghilangkan karakter selain huruf, angka, spasi, dan underscore.
    return tempName.replace(/[^a-z0-9\s_]/g, '').trim().replace(/\s+/g, '_'); 
};

// Inisialisasi Firebase Admin SDK
try {
    admin.initializeApp({
      credential: admin.credential.cert(SERVICE_ACCOUNT_PATH),
    });
} catch (e) {
    if (e.code !== 'app/duplicate-app') {
        console.error("ERROR: Gagal inisialisasi Firebase Admin SDK:", e.message);
        process.exit(1);
    }
}

const db = admin.firestore();
const batch = db.batch();
let guestCount = 0;
let errorCount = 0;

console.log('STARTING: Membaca file CSV...');

// Kolom di CSV lu: full_name, is_rsvp, max_guests
fs.createReadStream(CSV_FILE_PATH)
  .pipe(csv()) 
  .on('data', (row) => {
    const rawGuestName = row.full_name ? String(row.full_name).trim() : null;
    const maxGuests = parseInt(row.max_guests, 10) || 1; 

    if (!rawGuestName) {
        console.warn('SKIPPED: Baris kosong/tidak ada nama ditemukan.');
        errorCount++;
        return;
    }
    
    // Terapkan Proper Case untuk full_name yang disimpan
    const formattedGuestName = toProperCase(rawGuestName); 

    // Buat Document ID dari nama yang sudah diformat
    const documentId = normalizeName(formattedGuestName); 

    if (documentId === '') {
        console.error(`ERROR: Nama tamu '${rawGuestName}' menghasilkan ID kosong.`);
        errorCount++;
        return;
    }

    const guestData = {
      full_name: formattedGuestName, 
      is_rsvp: false, 
      max_guests: maxGuests,
    };

    const docRef = db.collection(COLLECTION_NAME).doc(documentId);
    batch.set(docRef, guestData);
    guestCount++;
  })
  .on('end', async () => {
    console.log(`COMPLETED READING: Ditemukan ${guestCount} data tamu untuk diimpor.`);
    if (errorCount > 0) {
        console.warn(`WARNING: Terdapat ${errorCount} baris yang dilewati karena data tidak valid.`);
    }

    if (guestCount === 0) {
        console.log('FINISHED: Tidak ada data tamu yang diimpor.');
        process.exit(0);
        return;
    }
    
    console.log('WRITING: Mengirim data ke Firestore...');
    try {
        await batch.commit();
        console.log(`SUCCESS: Berhasil mengimpor ${guestCount} data tamu ke koleksi '${COLUTION_NAME}'!`);
    } catch (error) {
        console.error('FAILED: Gagal melakukan commit ke Firestore:', error);
        process.exit(1);
    }
    
    process.exit(0);
  });