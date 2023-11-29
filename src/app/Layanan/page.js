import React from 'react';
import Image from 'next/image';
import Link from "next/link"

const LayananSampah = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-center text-white py-24 relative opacity-90	brightness-90 contrast-125"
        style={{ backgroundImage: "url('/img/bg-layanan.png')" }}
      >
        <div className="p-2 container mx-auto text-center relative z-10">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4 text-shadow">Menerima Penukaran Sampah</h1>
          <p className="md:text-lg text-sm font-semi-bold mb-8 text-shadow">
            Banyak ataupun sedikit sampah yang ditukar sangat berarti bagi lingkungan kita. AMUTS siap menjadi mitra Anda dalam mengurangi, mendaur ulang, dan memanfaatkan sampah dengan baik  dan bertanggung jawab.
          </p>
          <button className="bg-hijau2 text-white px-6 py-3 rounded-full hover:bg-orange">
           Tukar Sampah 
          </button>
        </div>
        <div className="opacity-80	brightness-75 contrast-125 absolute top-0 left-0 w-full h-full  "></div>
      </section>

      {/* Main Content Section */}
      <section className="p-5 container mx-auto my-8">
        <h2 className="lg:text-2xl md:text-xl text-lg text-hijau2 font-bold mb-8 text-center">Jenis-jenis Sampah Yang Dapat Anda Setor </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gambar Sampah menggunakan next/image */}
          <div className="mb-8">
            <Image
              src="/img/kardus.png"
              alt="Kardus"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="text-xl text-hijau2 font-bold mb-2">Kardus</p>
            <p className="text-gray-600 font-semi-bold text-justify	">Asal: Biasanya berasal dari kemasan produk seperti kotak makanan, karton susu, atau bungkus barang. Dapat didaur ulang menjadi kertas daur ulang atau produk kardus lainnya.</p>
          </div>
          {/* Tambahkan gambar sampah lainnya sesuai kebutuhan */}
          <div className="mb-8">
            <Image
              src="/img/kaca.png"
              alt="Kaca"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="text-xl text-hijau2 font-bold mb-2">Kaca</p>
            <p className="text-gray-600 font-semi-bold text-justify">Asal: Umumnya berasal dari botol minuman, wadah makanan, atau kaca pecah.  Bisa diatur ulang tanpa kehilangan kualitas dan dapat menjadi bahan baku kaca baru.</p>
          </div>
          <div className="mb-8">
            <Image
              src="/img/plastik.png"
              alt="Plastik"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="text-xl text-hijau2 font-bold mb-2">Plastik</p>
            <p className="text-gray-600 font-semi-bold text-justify">Asal: Banyak digunakan dalam kemasan, botol minuman, tas belanja, dan berbagai produk konsumen. Plastik dapat didaur ulang dapat diolah kembali menjadi produk baru.</p>
          </div>

          <div className="mb-8">
            <Image
              src="/img/kaleng-1.png"
              alt="Kaleng"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="text-xl text-hijau2 font-bold mb-2">Kaleng</p>
            <p className="text-gray-600 font-semi-bold text-justify">Asal: Umumnya dari kemasan minuman atau makanan yang terbuat dari logam. Bisa didaur ulang menjadi logam baru dan digunakan untuk pembuatan produk lainnya.</p>
          </div>

          <div className="mb-8">
            <Image
              src="/img/kertas-1.png"
              alt="Kertas"
              width={500}
              height={500}
              className="w-full mb-2"
              priority
            />
            <p className="text-xl text-hijau2 font-bold mb-2">Kertas</p>
            <p className="text-gray-600 font-semi-bold text-justify ">Asal: Sumber utama adalah kemasan, surat, kardus, dan berbagai produk lainnya. Kertas daur ulang dapat digunakan kembali untuk membuat kertas yang baru.</p>
          </div>

        </div>
      </section>

        {/* Mari Berkontribusi Section */}
      <section className=" p-5 bg-green-200 py-16">
        <div className="container mx-auto">
          <div className="fitems-center justify-center grid md:grid-cols-2 ">
            <div className="md:ml-52 ml-20 w-2/3">
              <Image
                src="/img/kontribusi.png"
                alt="Mari Berkontribusi"
                width={600}
                height={400}
                className="w-full rounded"
                priority
              />
            </div>
            <div className="w-full ml-8">
              <div className="p-8 rounded">
                <h2 className="lg:text-3xl md:text-xl text-xl  font-bold mb-8">Mari Berkontribusi</h2>
                <p className="md:text-lg font-semi-bold text-justify  mb-8">
                  Tentukan dampak besar dengan tindakan kecil. Mulailah mengelola sampahmu sekarang.
                </p>
                <button className="bg-hijau2 text-white px-6 py-3 rounded-full hover:bg-orange">
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