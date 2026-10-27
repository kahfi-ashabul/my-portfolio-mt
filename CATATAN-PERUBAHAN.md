# Catatan Pembaruan Website

Pembaruan ini berlaku untuk **kedua** paket (Human Capital dan Management Trainee). Dasarnya adalah `portfolio-hc.zip` yang kamu kirim, jadi semua teks, caption, dan foto buatanmu tetap dipakai.

---

## 1. Animasi terus-menerus pada nomor bagian (01 sampai 07)

Setiap angka besar di judul bagian sekarang punya animasi yang berjalan terus selama bagiannya terlihat di layar:

- **Kilau** yang menyapu dari kiri ke kanan di dalam angka.
- **Melayang** naik turun pelan.
- **Garis tepi berdenyut** antara biru tua dan biru muda.
- **Cincin putus-putus** yang berputar perlahan mengelilingi angka.
- **Titik biru yang mengorbit** di sekeliling angka.

Tiap nomor mulai dari fase yang berbeda, jadi 01 sampai 07 tidak bergerak serempak. Animasi otomatis berhenti saat bagiannya keluar layar (hemat baterai HP) dan mati untuk pengunjung yang mengaktifkan "kurangi gerakan".

**Mengatur kecepatan:** buka `css/style.css`, cari `numShine`. Di baris itu ada durasi: `3.8s` (kilau), `5.5s` (melayang), `4.2s` (denyut garis). Cari `numSpin`: `7s` (titik orbit) dan `26s` (cincin). Angka lebih besar berarti lebih lambat.

**Mematikan animasi nomor:** tambahkan baris ini di paling bawah `css/style.css`:

```css
.sh .num, .sh .num::before, .sh .num::after { animation: none !important; }
```

---

## 2. Foto dikompres: 16,7 MB menjadi sekitar 2,6 MB

Semua foto di `assets/foto/` sudah dikecilkan ukurannya, **tanpa mengubah nama file**. Halaman sebelumnya memuat sekitar 17 MB foto, yang terlalu berat untuk HP. Sekarang sekitar 2,7 MB.

| Foto | Sebelum | Sesudah |
|---|---|---|
| hero.jpg | 2.812 KB | 443 KB |
| org-lingkungan.jpg | 2.151 KB | 193 KB |
| galeri-arsip.jpg | 2.053 KB | 231 KB |
| exp-operator.jpg | 2.033 KB | 168 KB |
| galeri-tim.jpg | 1.880 KB | 238 KB |
| org-ut.jpg | 1.792 KB | 221 KB |
| profil.jpg | 663 KB | 95 KB |

Data lokasi (GPS) di foto ikut terhapus. Untuk foto baru yang kamu tambahkan nanti, kompres dulu di squoosh.app (MozJPEG, kualitas 75, sisi terpanjang 1400 px untuk galeri dan 1920 px untuk hero).

---

## 3. Dua masalah file yang dirapikan

- **`galeri-kkn(.jpg`** (ada tanda kurung di nama) diganti menjadi **`galeri-kkn.jpg`**. Sebelumnya, `content.js` mencari `galeri-kkn.jpg`, jadi foto KKN tidak pernah tampil.
- **`assets/profil.jpg`** (salinan lama di luar folder foto) dihapus. Yang dipakai situs adalah `assets/foto/profil.jpg`.

---

## 4. Lencana IPK dan Nilai Akhir tampil kembali

Saat foto ditambahkan ke kartu pendidikan, baris yang menampilkan lencana (`IPK 3,12 / 4,00` dan `Nilai Akhir 89,20 / 100`) ikut hilang dari `main.js`, padahal isinya masih ada di `content.js`. Sekarang lencana dan foto tampil bersama. Kalau kamu memang ingin menyembunyikannya, kosongkan isinya di `content.js` (`badge: ""`).

---

## 5. Perbaikan tampilan

- **Latar bagian atas** diberi lapisan gelap yang lebih kuat dan sedikit blur. Judul lebih terbaca, wajah rekan kerja di latar tidak bisa dikenali, dan tulisan papan nama di foto tidak terbaca.
- **Galeri** sekarang menyesuaikan jumlah foto otomatis: 6 foto menjadi 3 kolom x 2 baris yang rapi, 5 atau 7 atau 8 foto memakai satu foto besar tanpa baris yang bolong, dan 1 sampai 3 foto tampil proporsional.
- **HP:** cincin animasi nomor bagian tepat mengelilingi angka.

---

## 6. Foto yang belum terpasang (opsional)

`profil-kerja.jpg`, `exp-absensi.jpg`, `galeri-upacara.jpg`, `galeri-produksi.jpg`. Tanpa foto-foto ini situs tetap rapi, karena slot yang kosong otomatis disembunyikan. Tambahkan `?debug=1` di alamat untuk melihat slot yang masih kosong.
