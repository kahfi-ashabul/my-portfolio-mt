/* ==========================================================================
   content.js  -  SEMUA ISI TEKS WEBSITE ADA DI SINI
   Kamu cukup mengedit file ini untuk mengganti teks, link, dan daftar foto.
   Aturan: jangan hapus tanda kutip, koma, kurung kurawal { } atau kurung siku [ ].
   Teks boleh memakai tag sederhana: <strong>tebal</strong>, <em>miring</em>.
   Gunakan &amp; untuk tanda & di dalam teks.
   ========================================================================== */

window.SITE = {

  /* ---- 1. PENGATURAN UTAMA ------------------------------------------------ */
  // Website ini khusus jalur Management Trainee (MT). Biarkan "mt".
  defaultFokus: "mt",

  // "wipe"   = ada animasi tirai saat klik menu (paling berkesan)
  // "smooth" = hanya gulir halus tanpa tirai
  transition: "wipe",

  // Tampilkan animasi pembuka (kata Build, Grow, Serve) sekali per kunjungan
  intro: true,

  /* ---- 2. DATA DIRI & LINK ------------------------------------------------ */
  person: {
    name: "Ashabul Kahfi",
    email: "ashabulkahfi1986@gmail.com",
    phone: "+62 838 3079 8271",
    phoneHref: "+6283830798271",
    linkedin: "https://www.linkedin.com/in/kahfi-ashabul",
    location: "Tuban, Jawa Timur"
  },

  // File CV (PDF). Taruh file di folder assets/cv/ dengan nama persis seperti ini.
  cv: {
    mt: "assets/cv/CV-Ashabul-Kahfi-MT.pdf"
  },

  motto: ["Build", "Grow", "Serve"],

  /* ---- 3. ISI UTAMA (judul, ringkasan, angka, kompetensi) ----------------- */
  fokus: {

    mt: {
      label: "MT",
      pageTitle: "Ashabul Kahfi | Management Trainee Candidate",
      description: "Portofolio Ashabul Kahfi: empat peran dalam lima tahun di manufaktur, dari operator mesin hingga Acting Supervisor atas 85+ orang. Siap mengikuti program Management Trainee.",
      eyebrow: "Management Trainee Candidate",
      headline: "Empat peran dalam lima tahun, terus dipercaya mengambil tanggung jawab lebih besar.",
      sub: "Lulusan S1 Manajemen dengan rekam jejak proven career progression: operator mesin, admin lapangan, admin SDM dan sistem, hingga Acting Supervisor atas 1 shift berisi 85+ orang. Siap belajar lintas departemen.",
      stats: [
        { v: 5,  s: "+", l: "Tahun di manufaktur" },
        { v: 85,   s: "+", l: "Orang dalam 1 shift yang dipimpin (acting)" },
        { v: 4,    s: "",  l: "Peran berbeda dijalani" },

      ],
      profil: "Lulusan <strong>S1 Manajemen (Universitas Terbuka)</strong> dengan pengalaman lebih dari 5 tahun di manufaktur berskala besar dan rekam jejak <em>proven career progression</em>: dari operator mesin, admin lapangan, admin SDM &amp; sistem, hingga Acting Supervisor atas 1 shift berisi 85+ orang. Terbiasa berpindah fungsi dengan cepat, belajar sistem baru, dan memikul tanggung jawab yang terus bertambah. Berorientasi pada <strong>people leadership</strong>, keputusan berbasis data, dan kepatuhan proses (K3/SOP), siap mengikuti program Management Trainee lintas departemen.",
      kompetensi: [
        { t: "Leadership &amp; People Management", x: "Memimpin dan mengawasi 1 shift regu produksi (85+ orang) sebagai Acting Supervisor." },
        { t: "Cross-Functional Versatility",       x: "Menjalani 4 peran berbeda: operator, admin lapangan, admin SDM &amp; sistem, acting supervisor." },
        { t: "Data-Driven Decision Making",        x: "Analisis downtime dan OEE, visualisasi Pivot Table untuk laporan evaluasi manajemen." },
        { t: "Systems Proficiency",                x: "Oracle E-Business Suite, Pro-Int HRIS, OTLINK, Microsoft Office, Google Workspace." },
        { t: "Process &amp; Compliance",           x: "SOP produksi, kepatuhan K3, rekonsiliasi stok, audit dokumen pabrik." },
        { t: "Communication &amp; Problem Solving", x: "Complaint handling, koordinasi lintas departemen, public speaking." }
      ],
      kontakJudul: "Terbuka untuk program Management Trainee lintas departemen."
    }
  },

  /* ---- 4. FAKTA SINGKAT (kartu di bagian Profil) -------------------------- */
  fakta: [
    { k: "Lokasi",     v: "Tuban, Jawa Timur" },
    { k: "Pendidikan", v: "S1 Manajemen, Universitas Terbuka" },
    { k: "Pengalaman", v: "5+ tahun, manufaktur berskala besar" },
    { k: "Sistem",     v: "Oracle EBS, Pro-Int HRIS, OTLINK" },
    { k: "Bahasa",     v: "Indonesia (Native), Inggris (Intermediate)" }
  ],

  tools: ["Oracle E-Business Suite", "Pro-Int HRIS", "OTLINK", "Microsoft Excel", "Google Sheets", "Google Workspace", "Microsoft Office"],

  /* ---- 5. BUILD, GROW, SERVE (prinsip kerja + pencapaian) ----------------- */
  // Tambahkan angka sebelum/sesudah kalau kamu punya datanya, misalnya "dari 15 menit menjadi 2 menit".
  prinsip: {
    judul: "Prinsip kerja saya",
    intro: "Membangun sistem yang rapi, bertumbuh lewat tanggung jawab baru, dan melayani dengan membuat pekerjaan orang lain lebih mudah.",
    kolom: [
      {
        kata: "Build",
        tagline: "Membangun fondasi yang rapi dan bisa dipakai orang lain.",
        poin: [
          "Merapikan arsip dokumen dengan sistem ordner terstruktur: nomor urut, nama, dan desain label yang menyambung, serta mengidentifikasi rak form lengkap dengan nomor, nama, dan denah untuk memudahkan pencarian.",
          "Berkontribusi dalam digitalisasi pencatatan data produksi."

        ]
      },
      {
        kata: "Grow",
        tagline: "Bertumbuh lewat tanggung jawab dan ilmu baru.",
        poin: [
          "Dari Operator Produksi (2021) ke Admin Lapangan, Admin Absensi &amp; Support Produksi, hingga dua penugasan acting: Production System Admin dan Supervisor Shift.",
          "Menempuh S1 Manajemen sambil bekerja penuh waktu."
        ]
      },
      {
        kata: "Serve",
        tagline: "Melayani dengan membuat kerja orang lain lebih mudah.",
        poin: [
          "Menelusuri selisih stok fisik bahan kemas yang berkelanjutan sampai tuntas.",
          "Menyelesaikan keluhan karyawan terkait penggajian (<em>complaint handling</em>) secara tuntas."
        ]
      }
    ]
  },

  /* ---- 6. TANGGA KARIER (animasi di bagian Pengalaman) -------------------- */
  tangga: [
    { y: "2021",    t: "Operator Produksi" },
    { y: "2023",    t: "Admin Lapangan" },
    { y: "2024",    t: "Admin Absensi &amp; Support" },
    { y: "2024-25", t: "Acting Admin Oracle &amp; Supervisor Shift" }
  ],

  /* ---- 7. PENGALAMAN KERJA ------------------------------------------------ */
  // photo: nama file foto di assets/foto/ (boleh dikosongkan atau foto belum ada, otomatis disembunyikan)
    pengalaman: [
    {
      role: "Admin Absensi &amp; Support Produksi",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Apr 2024 – Sekarang",
      current: true,
      bullets: [
      "Merangkap fungsi administrasi SDM (penggajian, absensi, <em>complaint handling</em>) sekaligus support operasional produksi, menangani beban kerja lintas fungsi secara bersamaan.",
      "Penjadwalan kerja (<em>shift scheduling</em>) dan pengawasan operasional harian tim kebersihan area produksi 3 shift.",
      "Pengolahan data downtime mesin dan visualisasi Pivot Table untuk laporan evaluasi manajemen.",
      "Mengolah data OEE (Overall Equipment Effectiveness) divisi produksi di Google Sheets, serta input data akhir ke website OTLINK.",
      "Pengelolaan alur pengadaan barang operasional dan K3 (Purchase Requisition &amp; Purchase Order), serta pemantauan status persetujuan dari Manager hingga Finance melalui Oracle E-Business Suite.",
      "Pengarsipan laporan hasil produksi, formulir komplain pelanggan, dan dokumen audit pabrik."
      ],
      tools: "Pro-Int HRIS · Oracle EBS · OTLINK · Excel · Google Sheets",
      special: [
        {
          label: "Acting Supervisor Shift Produksi",
          period: "Jun – Jul 2025",
          text: "Dipercaya memimpin, menjadwalkan, dan mengawasi operasional 1 shift regu produksi (85+ orang), memastikan ketercapaian target output dan kepatuhan K3."
        },
        {
          label: "Acting Production System Admin (Oracle EBS)",
          period: "Agt – Okt 2024",
          text: "Dipercaya mengelola input dan integrasi data proses produksi, dari bahan baku sampai menjadi barang jadi melalui Oracle E-Business Suite, serta memimpin rekonsiliasi stok fisik vs sistem untuk seluruh bahan dan finished goods."
        }
      ],
      photo: "assets/foto/exp-absensi.jpg",
      photoAlt: "Bekerja sebagai Admin Absensi & Support Produksi"
    },
    {
      role: "Admin Lapangan Bahan Packing &amp; Finished Goods",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Jan 2023 – Apr 2024",
      bullets: [
        "Mengelola stok harian bahan kemas (<em>packaging material</em>) dan mengajukan permintaan ke gudang PPIC saat stok mencapai batas aman minimum.",
        "Stok opname harian bahan kemas dan barang jadi (<em>Finished Goods</em>), mencocokkan stok fisik di lapangan dengan stok di sistem.",
        "Menghitung inventaris barang jadi dan hasil setiap shift serta memproses transfer fisik dan sistem ke gudang logistik.",
        "Mengelola pengembalian (<em>return</em>) kelebihan bahan kemas saat terjadi perubahan varian, gramasi, atau stop produksi.",
        "Berkoordinasi lintas departemen: produksi, PPIC, dan logistik."
      ],
      photo: "assets/foto/exp-lapangan.jpg",
      photoAlt: "Mengelola stok bahan kemas dan finished goods"
    },
    {
      role: "Operator Produksi",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Jun 2021 – Jan 2023",
      bullets: [
        "Mengoperasikan mesin produksi (<em>carton box, ballmill, enrober, oven, packing machine</em>) secara aman dan efisien sesuai penempatan tugas harian.",
        "Setup dan penyesuaian (<em>adjustment</em>) parameter mesin sesuai spesifikasi standar produk dan QC.",
        "Memantau performa mesin, melakukan tindakan korektif awal saat timbul kendala, dan mencatat data hasil produksi 1 shift secara presisi."
      ],
      photo: "assets/foto/exp-operator.jpg",
      photoAlt: "Mengoperasikan mesin produksi"
    },
    {
      role: "Magang",
      org: "PT Purbaya Bagelen Mandiri",
      place: "Tuban, Jawa Timur",
      period: "Okt 2019 – Nov 2019",
      bullets: [
        "Pemeriksaan harian dan pemeliharaan rutin alat pemadam api ringan (APAR) sesuai standar K3.",
        "Memindah dan mengawasi proses transfer Liquefied Petroleum Gas (LPG) dari truk pengirim ke tangki penyimpanan.",
        "Mengecek stok LPG setiap hari serta pencatatan riwayat pemindahan kendaraan pengangkut."
      ],
      photo: "assets/foto/exp-magang.jpg",
      photoAlt: "Magang di PT Purbaya Bagelen Mandiri"
    }
  ],

  /* ---- 8. GALERI KEGIATAN ------------------------------------------------- */
  // Foto yang filenya belum ada otomatis tidak tampil. Kalau belum ada satu pun, bagian Galeri disembunyikan.
  // Urutan di sini = urutan tampil. Foto pertama yang ada akan tampil lebih besar.
  galeri: [
    { src: "assets/foto/galeri-upacara.jpg",    cap: "Apel pagi bersama tim dan manajemen pabrik" },
    { src: "assets/foto/galeri-produksi.jpg",   cap: "Bersama operator di lantai produksi" },
    { src: "assets/foto/galeri-tim.jpg",        cap: "Bersama tim admin PT Ultra Prima Abadi" },
    { src: "assets/foto/galeri-arsip.jpg",      cap: "Sistem ordner bernomor yang saya susun agar dokumen mudah dicari" },
    { src: "assets/foto/galeri-magang.jpg",     cap: "Pelatihan APAR saat magang di PT Purbaya Bagelen Mandiri" },
    { src: "assets/foto/galeri-ipnu.jpg",       cap: "Buka bersama anak yatim, kegiatan IPNU Desa Leranwetan" },
    { src: "assets/foto/galeri-lingkungan.jpg", cap: "Bersama tim Peduli Lingkungan Dusun Karangdowo" },
    { src: "assets/foto/galeri-kkn.jpg",        cap: "Sosialisasi UMKM Go Digital, kegiatan KKN Universitas Terbuka" }
    // Contoh menambah foto lain (hapus tanda // di depan baris):
    // ,{ src: "assets/foto/galeri-kkn.jpg", cap: "Kegiatan KKN" }
  ],

  /* ---- 9. PENDIDIKAN & ORGANISASI ----------------------------------------- */
  pendidikan: [
    {
      title: "S1 Manajemen",
      org: "Universitas Terbuka (3,12 / 4,00)",
      photo: "assets/foto/org-ut.jpg",
      period: "2022 – 2026",
      badge: "",           // hapus isi ini ("") kalau tidak mau menampilkan IPK
      note: "Kuliah jarak jauh sambil bekerja penuh waktu di industri manufaktur serta ikut dalam pemberdayaan masyarakat."
    },
    {
      title: "Teknik Pengolahan Minyak, Gas &amp; Petrokimia",
      org: "SMK Negeri 1 Tuban (89,20 / 100)",
      photo: "assets/foto/org-smk.jpg",
      period: "2018 – 2021",
      badge: "",
      note: "Melaksanakan pengukuran tangki minyak bumi menggunakan prosedur standar untuk memastikan akurasi data volume dan integritas operasional."
    }
  ],

  organisasi: [
    {
      title: "Sekretaris",
      org: "IPNU Desa Leranwetan",
      period: "2019 – 2021",
      note: "Berkontribusi mengatur berbagai kegiatan serta ikut melaksanakan kegiatan di lapangan.",
      photo: "assets/foto/org-ipnu.jpg",
      photoAlt: "Kegiatan IPNU Desa Leranwetan"
    },
    {
      title: "Anggota Kebersihan",
      org: "Peduli Lingkungan Dusun Karangdowo",
      period: "2019 – 2021",
      note: "Aktif dalam program kebersihan dusun yang berfokus pada pengelolaan sampah setiap minggu.",
      photo: "assets/foto/org-lingkungan.jpg",
      photoAlt: "Kegiatan Peduli Lingkungan Dusun Karangdowo"
    }
  ],

  /* ---- 10. FOTO LAIN ------------------------------------------------------ */
  foto: {
    profil: "assets/foto/profil.jpg",          // foto formal (bulat di bagian atas)
    hero: "assets/foto/hero.jpg",              // foto latar belakang bagian atas (lebar, landscape)
    profilKerja: "assets/foto/profil-kerja.jpg" // foto saat bekerja (bagian Profil)
  }
};
