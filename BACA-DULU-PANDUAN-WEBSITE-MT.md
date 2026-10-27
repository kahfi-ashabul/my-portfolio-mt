# Panduan Website Portofolio Management Trainee: Ashabul Kahfi

Paket ini memakai mesin dan tampilan yang sama dengan versi Human Capital, dan sudah memuat semua revisi yang kamu buat di `pembaruan.zip`. Cara mengedit teks, memasang foto, dan mengatasi masalah sama persis dengan panduan versi Human Capital (`PANDUAN-WEBSITE-HC.md`). Di bawah ini hanya hal yang khusus untuk versi MT.

---

## 1. Upload ke GitHub

1. Buka repository **`my-portfolio-mt`** (bukan `my-portfolio`).
2. Klik **Add file**, lalu **Upload files**.
3. Seret **isi** folder ini: `index.html`, folder `css`, folder `js`, folder `assets`.
4. Klik **Commit changes**, tunggu 1 sampai 2 menit.
5. Buka `https://kahfi-ashabul.github.io/my-portfolio-mt/` lalu tekan **Ctrl + F5**.

CV MT sudah ada di `assets/cv/CV-Ashabul-Kahfi-MT.pdf` (diambil dari file yang kamu upload). Link ini sudah sama dengan yang tercantum di CV MT-mu.

---

## 2. Yang berbeda dari versi Human Capital

| Bagian | Versi Human Capital | Versi MT |
|---|---|---|
| Label di atas judul | Human Resources / Human Capital | Management Trainee Candidate |
| Judul besar | Berawal dari operator produksi, kini mengelola administrasi SDM dan sistem perusahaan | Empat peran dalam lima tahun, terus dipercaya mengambil tanggung jawab lebih besar |
| Tiga angka utama | 5+ tahun, 85+ orang, 3 sistem | **4 peran, 85+ orang, IPK 3,12** |
| Enam kompetensi | HR Administration, Workforce, dst. | Leadership, Cross-Functional Versatility, Data-Driven Decision Making, Systems, Process & Compliance, Communication |
| Bullet Admin Absensi | Mulai dari penggajian | Mulai dari "merangkap fungsi SDM dan support produksi", lalu penjadwalan dan data |
| Judul bagian Kontak | Terbuka untuk peluang di bidang Human Resource / Human Capital | Terbuka untuk program Management Trainee lintas departemen |
| File CV | `CV-Ashabul-Kahfi-HR-HC.pdf` | `CV-Ashabul-Kahfi-MT.pdf` |

Bagian lain (Prinsip Build Grow Serve, tangga karier, pengalaman lain, pendidikan, organisasi, galeri) sama dengan versi Human Capital.

---

## 3. Revisimu yang sudah diterapkan

- "85 orang" menjadi **"85+ orang"** di ringkasan, angka statistik, Profil, kompetensi, dan kartu Acting Supervisor.
- Kalimat "Penugasan berlangsung 2 bulan" **dihapus** dari kartu Acting Supervisor.
- Prinsip Build: rak form dan ordner digabung dalam satu kalimat, ditambah "Berkontribusi dalam digitalisasi pencatatan data produksi."
- Prinsip Serve: "Menelusuri selisih stok fisik bahan kemas yang berkelanjutan sampai tuntas." (tanpa detail QC).
- Seluruh perapian kalimat pengalaman: Admin Absensi, Acting Production System Admin, Admin Lapangan, Operator Produksi, Magang.
- Lencana **Nilai Akhir 89,20 / 100** pada kartu SMK.
- Lebar judul bagian Kontak diperlebar (`25ch`).

---

## 4. IPK sebagai angka utama

Di versi MT, IPK 3,12 naik menjadi satu dari tiga angka utama di bagian atas, karena seleksi Management Trainee hampir selalu menyaring IPK. Syaratnya, itu IPK akhir. Kalau masih sementara, buka `js/content.js`, cari `IPK S1 (skala 4,00)` dan ganti menjadi `IPK sementara (skala 4,00)`. Kalau mau menggantinya dengan angka lain, ubah baris `stats:`.

---

## 5. Foto

Nama dan ukuran slot foto **sama persis** dengan versi Human Capital (lihat tabel di panduan itu): `hero.jpg`, `profil-kerja.jpg`, `exp-absensi.jpg`, `exp-lapangan.jpg`, `exp-operator.jpg`, `exp-magang.jpg`, `galeri-*.jpg`, `org-ipnu.jpg`, `org-lingkungan.jpg`. Kamu bisa memakai foto yang sama atau memilih yang lebih menonjolkan kepemimpinan untuk versi MT, misalnya foto apel bersama tim dan foto kegiatan organisasi. Tambahkan `?debug=1` di alamat untuk melihat slot yang masih kosong.

---

## 6. Hal yang perlu disamakan di tempat lain

Ada beberapa angka dan kalimat yang kamu ubah di website. Supaya tidak ada pewawancara yang melihat dua versi berbeda, samakan di:
- **CV** dan **LinkedIn**: "85 orang" menjadi "85+ orang".
- **Panduan LinkedIn**: kalimat "Penugasan berlangsung 2 bulan" kalau kamu ingin konsisten dengan website.
- Kata "Lulusan": kalau belum resmi wisuda, ganti jadi "Mahasiswa tingkat akhir" di `content.js`, CV, dan LinkedIn.
