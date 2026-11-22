# NISERA — Simple, Graceful You

Website resmi untuk brand **NISERA** (*Fashion Hijab — Hijab Sekolah & Modest Fashion*), dirancang berdasarkan *Brand Identity Sheet* dan poster kampanye *"Hijab Sekolah untuk Tampil Percaya Diri!"*.

## Struktur Proyek
```text
nisera-website/
├── index.html               # Halaman utama website NISERA
├── styles.css               # Kustomisasi styling tambahan
├── script.js                # Interaktivitas filter produk & form pemesanan WhatsApp
├── vercel.json              # Konfigurasi deployment statis untuk Vercel
├── README.md                # Dokumentasi proyek
└── assets/
    └── poster-nisera.png    # Aset poster kampanye resmi NISERA
```

## Cara Deploy ke GitHub & Vercel
1. **Push ke GitHub**:
   - Buat repository baru di GitHub (misalnya `nisera-website`).
   - Upload seluruh isi folder ini ke repository tersebut (atau gunakan `git init`, `git add .`, `git commit -m "Initial commit"`, `git push`).
2. **Deploy di Vercel**:
   - Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub.
   - Klik **Add New Project**, pilih repository `nisera-website`.
   - Biarkan pengaturan *Framework Preset* sebagai **Other** (Static Site) dan klik **Deploy**.
