// generateLinks.js
const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// [1] GANTI DENGAN KUNCI ADMIN SDK LU
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'wedding-invitation-7b0b9-firebase-adminsdk-fbsvc-3ca963d32e.json');

// [2] GANTI DENGAN DOMAIN HOSTING LU
const BASE_URL = 'https://wedding-invitation-7b0b9.web.app'; 
const DEPLOYMENT_PATH = '/aina-sandy'; 
const FULL_BASE_LINK = BASE_URL + DEPLOYMENT_PATH;

// Nama koleksi di Firestore
const COLLECTION_NAME = 'guests'; 
const OUTPUT_FILE = 'output_guest_links.txt';

// Fungsi untuk menormalisasi nama (SAMA PERSIS seperti di aplikasi dan importGuests.js)
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

async function generateLinks() {
    console.log(`STARTING: Mengambil data tamu dari Firestore...`);
    
    // Ambil semua dokumen tamu
    const snapshot = await db.collection(COLLECTION_NAME).get();
    
    if (snapshot.empty) {
        console.log('FAILED: Tidak ditemukan data di koleksi "guests". Pastikan importGuests.js sudah dijalankan.');
        return;
    }

    let output = '';
    
    snapshot.forEach(doc => {
        const data = doc.data();
        const documentId = doc.id;
        const fullName = data.full_name || 'Tamu Undangan'; // Nama asli

        // Encoding untuk URL (mengganti underscore menjadi spasi untuk tampilan)
        const nameForURL = documentId.replace(/_/g, ' '); 
        const encodedName = encodeURIComponent(nameForURL);
        
        // Buat link final
        const finalLink = `${FULL_BASE_LINK}?to=${encodedName}`;
        
        // Format output
        output += `Nama: ${fullName}\n`;
        output += `Link: ${finalLink}\n`;
        output += `--------------------------------------------------\n`;
    });

    // Simpan hasil ke file
    fs.writeFileSync(OUTPUT_FILE, output);
    
    console.log(`\nSUCCESS: Berhasil membuat ${snapshot.size} link.`);
    console.log(`Lihat hasilnya di file: ${OUTPUT_FILE}`);
}

generateLinks();