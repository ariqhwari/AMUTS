import React from 'react';
import Image from 'next/image';

const LayananSampah = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-16 relative"
        style={{ backgroundImage: "url('/img/hero-1.png')" }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Menerima Penukaran Sampah</h1>
          <p className="text-lg mb-8">
            Banyak ataupun sedikit sampah yang ditukar sangat berarti bagi lingkungan kita. AMUTS siap menjadi mitra Anda dalam mengurangi, mendaur ulang, dan memanfaatkan sampah secara terpercaya dan bertanggung jawab.
          </p>
          <button className="bg-orange text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Tukar Sampah
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-50  bg-hijau"></div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-8">Berikut adalah beberapa sampah yang dapat ditukar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gambar Sampah menggunakan next/image */}
          <div className="mb-8">
            <Image
              src="/img/kardus.jpg"
              alt="Kardus"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="font-semibold mb-2">Kardus</p>
            <p className="text-gray-600">Asal: Biasanya berasal dari kemasan produk seperti kotak makanan, karton susu, atau bungkus barang.</p>
            <p className="text-gray-600">Daur ulang: Dapat didaur ulang menjadi kertas daur ulang atau produk kardus lainnya.</p>
          </div>
          {/* Tambahkan gambar sampah lainnya sesuai kebutuhan */}
          <div className="mb-8">
            <Image
              src="/img/kaca.jpg"
              alt="Kaca"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="font-semibold mb-2">Kaca</p>
            <p className="text-gray-600">Asal: Umumnya berasal dari botol minuman, wadah makanan, atau kaca pecah.</p>
            <p className="text-gray-600">Daur ulang: Bisa diatur ulang tanpa kehilangan kualitas dan dapat menjadi bahan baku kaca baru.</p>
          </div>
          <div className="mb-8">
            <Image
              src="/img/plastik.jpg"
              alt="Plastik"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="font-semibold mb-2">Plastik</p>
            <p className="text-gray-600">Asal: Banyak digunakan dalam kemasan, botol minuman, tas belanja, dan berbagai produk konsumen.</p>
            <p className="text-gray-600">Daur ulang: Jenis plastik yang dapat didaur ulang dapat diolah kembali menjadi produk baru.</p>
          </div>

          <div className="mb-8">
            <Image
              src="/img/kaleng-1.jpg"
              alt="Kaleng"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="font-semibold mb-2">Kaleng</p>
            <p className="text-gray-600">Asal: Umumnya dari kemasan minuman atau makanan yang terbuat dari logam.</p>
            <p className="text-gray-600">Daur ulang: Bisa didaur ulang menjadi logam baru dan digunakan untuk pembuatan produk lainnya.</p>
          </div>

          <div className="mb-8">
            <Image
              src="/img/kertas-1.jpg"
              alt="Kertas"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="font-semibold mb-2">Kertas</p>
            <p className="text-gray-600">Asal: Sumber utama adalah kemasan, surat, kardus, dan berbagai produk lainnya.</p>
            <p className="text-gray-600">Daur ulang: Kertas daur ulang dapat digunakan kembali untuk membuat kertas baru.</p>
          </div>

        </div>
      </section>

        {/* Mari Berkontribusi Section */}
      <section className="bg-green-200 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-1/2">
              <Image
                src="/img/kontribusi.jpg"
                alt="Mari Berkontribusi"
                width={600}
                height={400}
                className="w-full rounded"
                priority
              />
            </div>
            <div className="w-1/2 ml-8">
              <div className="p-8 rounded">
                <h2 className="text-3xl font-bold mb-4">Mari Berkontribusi</h2>
                <p className="text-lg mb-8">
                  Tentukan dampak besar dengan tindakan kecil. Mulailah mengelola sampahmu sekarang.
                </p>
                <button className="bg-orange text-white px-6 py-3 rounded-full hover:bg-blue-600">
                  Tukar Sekarang!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LayananSampah;