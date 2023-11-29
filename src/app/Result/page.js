'use client'
import { useRouter } from 'next/navigation';

// masih belum bekerja, data yang dikirim dari query (formData) error ketika dipush. jadi untuk datanya belum bisa tampil

const ResultPage = () => {
  const router = useRouter();
  const { nama, alamat, noTelp, jenisSampah, jumlahSampah, hargaKilo, totalHarga} = router.query;

  return (
    <>
      <div className="bg-color-putih p-4 border md:w-1/4 md:h-max w-11/2 rounded shadow-sm">
        <h1 className='flex justify-center items-center'>Konfirmasi</h1>
        <hr />
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <h2>Nama</h2>
            <p placeholder='Nama'>{nama}</p>
          </div>
          <div>
            <h2>Alamat</h2>
            <p>{alamat}</p>
          </div>
          <div>
            <h2>No. Telp</h2>
            <p>{noTelp}</p>
          </div>
          <div>
            <h2>Jenis Sampah</h2>
            <p>{jenisSampah}</p>
          </div>
          <div>
            <h2>Jumlah Sampah</h2>
            <p>{jumlahSampah}</p>
          </div>
          <div>
            <h2>Harga per Kilo</h2>
            <p>{hargaKilo}</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center my-2'>
          <h2>Total Harga</h2>
          <p>Rp.{hargaKilo * jumlahSampah},00</p>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
