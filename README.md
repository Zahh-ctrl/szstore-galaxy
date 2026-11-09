# SzStore — Galaxy Growtopia Market

Starter project modern menggunakan Next.js, React, Tailwind CSS, dan Supabase.

## Yang sudah tersedia
- Halaman toko bertema Galaxy, responsif untuk HP.
- Katalog DL/BGL dengan harga dan stok dari Supabase (fallback demo jika belum terhubung).
- Keranjang sederhana dan tombol checkout WhatsApp ke nomor admin yang diberikan.
- Halaman `/admin` untuk login, tambah/edit/hapus produk, dan melihat/mengubah status pesanan.
- SQL schema dan Row Level Security dasar untuk Supabase.

## Penting sebelum dipublikasikan
Ini adalah **starter project**, bukan website yang sudah online. Harga DL/BGL di data awal hanya contoh. Pastikan harga, stok, aturan transaksi, dan keamanan admin diatur sebelum menerima pesanan sungguhan.

## 1. Siapkan Supabase
1. Buat project baru di https://supabase.com/.
2. Buka SQL Editor dan jalankan seluruh isi `supabase/schema.sql`.
3. Buka Project Settings > API. Salin Project URL dan anon/public key.
4. Salin `.env.example` menjadi `.env.local`, lalu isi:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Di Authentication, buat user admin menggunakan email milikmu.
6. Buka Table Editor > `profiles`, cari baris dengan UUID user tersebut, lalu ubah `role` dari `customer` menjadi `admin`.
   - Alternatif: jalankan SQL `update public.profiles set role='admin' where id='UUID-AKUN-ADMIN';`
7. Jangan pernah menaruh `service_role` key di browser atau membagikannya ke orang lain.

## 2. Jalankan di komputer
Perlu Node.js 20 atau lebih baru.
```bash
npm install
npm run dev
```
Buka http://localhost:3000. Dashboard: http://localhost:3000/admin.

## 3. Publikasikan
1. Upload folder proyek ini ke repository GitHub milikmu.
2. Import repository ke https://vercel.com/.
3. Tambahkan environment variables Supabase yang sama di pengaturan project Vercel.
4. Deploy. Setelah selesai, Vercel memberi alamat website publik.

## 4. Alur admin
- Login di `/admin`.
- Tambah produk dengan nama, simbol, harga IDR, dan stok.
- Edit nilai produk lalu tekan tombol simpan.
- Hapus produk dengan tombol hapus.
- Pesanan yang masuk melalui WhatsApp perlu dicatat/dikonfirmasi admin secara manual.

## Catatan fitur yang belum aktif
- Checkout WhatsApp saat ini hanya membuka chat dengan ringkasan order; belum otomatis membuat baris di tabel `orders`.
- Pembayaran otomatis, upload bukti bayar, notifikasi Discord, sinkronisasi harga dari GT MART, dan laporan penjualan belum diimplementasikan.
- Jangan mengklaim pembayaran berhasil hanya berdasarkan pesan WhatsApp. Verifikasi transaksi secara manual.
- Website ini independen dan tidak berafiliasi dengan Growtopia.
