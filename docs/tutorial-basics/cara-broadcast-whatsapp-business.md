---
sidebar_position: 2
---

# Cara Membuat Campaign/Broadcast WhatsApp Business

Tutorial ini menjelaskan cara membuat template dan menjalankan broadcast menggunakan WhatsApp Business API melalui ChatbotNesia.

## Masuk ke halaman Broadcast

Masuk ke halaman **Broadcast** melalui menu di samping.

![Menu Broadcast](../../static/panduan/broadcast-whatsapp-business/step-01.jpeg)

## Buat template message

Pada halaman Broadcast, pilih tab **Template Message**, kemudian klik tombol **Create Template** untuk membuat template baru.

![Create Template](../../static/panduan/broadcast-whatsapp-business/step-01.jpeg)

Kemudian pilih bagian **WhatsApp Business**.

![Pilih WhatsApp Business](../../static/panduan/broadcast-whatsapp-business/step-02.jpeg)

Pilih **Create New Template in Meta** pada tampilan **WhatsApp Business Template**.

![Create New Template in Meta](../../static/panduan/broadcast-whatsapp-business/step-03.jpeg)

Pada bagian **Template Name** dan **Category**, isi sesuai kebutuhan, kemudian pilih **Continue**.

![Template Name dan Category](../../static/panduan/broadcast-whatsapp-business/step-04.jpeg)

## Isi konten template

Pada Step 3 terdapat beberapa fitur yaitu **Header Type**, **Body Text**, **Footer Text**, **Button**, dan **Template Preview**. Isi template sesuai kebutuhan.

Pada bagian **Header Type**, pilih opsi **Image Header**, kemudian upload foto yang akan dikirim pada bagian **Upload Image**.

![Header Type dan Upload Image](../../static/panduan/broadcast-whatsapp-business/step-05.jpeg)

Pada bagian **Body Text**, isi pesan yang akan dibagikan. Sebagai contoh, tambahkan variable `{{nama}}` agar pesan menyesuaikan penerima. Untuk penulisan variable wajib menggunakan tanda `{{ }}`.

![Body Text dengan Variable](../../static/panduan/broadcast-whatsapp-business/step-06.jpeg)

Pada bagian **Button** (opsional), pilih fitur **URL Button**, ubah bagian **Button Text** dengan custom text seperti "Baca Selengkapnya" atau sesuai kebutuhan. Kemudian paste link atau URL yang ingin dicantumkan. Jika template sudah sesuai, pilih **Create Template**.

![URL Button](../../static/panduan/broadcast-whatsapp-business/step-07.jpeg)

## Import template dari Meta

Setelah template terbuat, pilih **Create Template** lagi untuk kembali ke halaman **Template Message**, kemudian pilih **Import from Existing Template**. Klik tombol **Fetch Templates from Meta** untuk melihat daftar template yang sudah dibuat.

![Import Template dari Meta](../../static/panduan/broadcast-whatsapp-business/step-08.jpeg)

Pada daftar template yang sudah dibuat ada beberapa keterangan status:

- **APPROVED**: Template yang sudah dikonfirmasi oleh Meta dan siap digunakan
- **REJECTED**: Template ditolak oleh Meta karena tidak sesuai dengan ketentuan Meta
- **PENDING**: Template sedang dalam masa peninjauan oleh Meta

Pilih template yang berstatus **APPROVED** karena sudah siap digunakan, kemudian klik **Save Template to Local Database**.

![Simpan Template APPROVED](../../static/panduan/broadcast-whatsapp-business/step-09.jpeg)

## Buat broadcast campaign

Kembali ke halaman **Broadcast**, pilih menu **Broadcast Campaign** pada tab, lalu klik tombol **Create New Campaign**.

![Create New Campaign](../../static/panduan/broadcast-whatsapp-business/step-10.jpeg)

Pada halaman **Create New Campaign**, isi kolom berikut:

- **Campaign Name**
- Pilih **WhatsApp Business** pada bagian Platform
- Pilih **Device/Account**
- Atur **Schedule Date & Time**
- Pilih template yang akan digunakan

![Form Create Campaign](../../static/panduan/broadcast-whatsapp-business/step-11.jpeg)

## Siapkan file penerima (CSV)

Download contoh CSV melalui link **Download Example CSV**, kemudian ubah kolom CSV sesuai kebutuhan variable yang ada pada template.

Sebagai contoh, jika template membutuhkan `{{nama}}`, maka di dalam CSV harus ada kolom `phone` (wajib) dan `nama`. Untuk kolom phone, pastikan tambahkan tanda petik satu (`'`) agar nomor tidak berubah saat disimpan.

![Download Example CSV](../../static/panduan/broadcast-whatsapp-business/step-12.jpeg)

![Edit file CSV](../../static/panduan/broadcast-whatsapp-business/step-13.jpeg)

Drop atau pilih file yang sudah diedit sebelumnya pada bagian **Drop CSV/XLS/XLSX here or click to browse**, lalu klik tombol **Create Campaign**.

![Upload file CSV](../../static/panduan/broadcast-whatsapp-business/step-14.jpeg)

## Pantau hasil broadcast

Broadcast akan otomatis terkirim sesuai tanggal dan waktu yang telah diatur sebelumnya dan berstatus **Scheduled**.

![Status Scheduled](../../static/panduan/broadcast-whatsapp-business/step-15.jpeg)

## Video tutorial

Tonton juga panduan video berikut untuk mempelajari langkah broadcast WhatsApp Business secara visual:

<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/yjvD0dK5LXI"
  title="Tutorial Broadcast WhatsApp Business"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

Atau buka langsung di YouTube: [Tutorial Broadcast WhatsApp Business](https://youtu.be/yjvD0dK5LXI)
