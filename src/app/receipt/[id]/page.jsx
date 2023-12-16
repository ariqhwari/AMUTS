import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const getDataById = async (id) => {
    try {
        const res = await fetch(`https://amuts.vercel.app/api/data/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const Receipt = async ({ params }) => {

    const { id } = params;

    try {
        const { data } = await getDataById(id);
        const {
            nama,
            alamat,
            noTelp,
            jenisSampah,
            jumlahSampah,
            hargaKilo,
            totalHarga,
            createdAt,
        } = data;

        // Ubah createdAt menjadi objek Date
        const formattedCreatedAt = new Date(createdAt);

        // Buat format tanggal-bulan-jam yang diinginkan
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        const formattedDate = formattedCreatedAt.toLocaleDateString('id-ID', options);



return (
  <div className="pt-16 flex items-center justify-center">
    <div className="pt-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-xl rounded-xl">
      <div className="text-center">
        <Image
          src="/img/logo-amuts.png"
          alt="Company logo"
          className="mx-auto max-w-full w-56"
          width={290}
          height={290}
          priority
        />
      </div>
      <div className="border-collapse border gap-10 flex p-4 ">
        <p className='ml-0 text-justify'>
          {nama}
          <br />
          {alamat}
          <br />
          {noTelp}
        </p>
        <p className='mr-0 text-right'>
          Invoice: {id}
          <br />
          Created: {formattedDate}
        </p>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="border-collapse border bg-gray-200">
            <th className="p-2">Jenis</th>
            <th className="p-2">Item</th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td className="p-2">Berat Sampah</td>
            <td className="p-2 text-right">{jumlahSampah} Kg</td>
          </tr>
          <tr>
            <td className="p-2">{jenisSampah}</td>
            <td className="p-2 text-right">Rp.{hargaKilo} / Kg</td>
          </tr>
          <tr>
            <td className="p-2"></td>
            <td className="p-2 font-bold text-right">Total: Rp.{totalHarga}.00</td>
          </tr>
          <tr className='text-right'>
            <td className="p-2"></td>
            <td className="p-2">
              <Link  href={`/`}>
                <button className="p-4 font-bold bg-hijau text-white hover:scale-105 rounded-xl">
                  Home
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);



    } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error fetching data</div>;
    }

};

export default Receipt;