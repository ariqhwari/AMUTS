'use client'
import { useRouter } from 'next/navigation';

// masih belum bekerja, data yang dikirim dari query (formData) error ketika dipush. jadi untuk datanya belum bisa tampil

const receipt = () => {
    const router = useRouter();

    return (
        <div className="">

            <h1 className='flex justify-center items-center'>Konfirmasi</h1>
            <hr />
            <div className=''>
                <div>
                    <h2>ID</h2>
                    <p placeholder='id'>budi</p>
                </div>
                <div>
                    <h2>Nama</h2>
                    <p placeholder='Nama'>budi</p>
                </div>
                <div>
                    <h2>Alamat</h2>
                    <p>adada</p>
                </div>
                <div>
                    <h2>No. Telp</h2>
                    <p>123121</p>
                </div>
                <div>
                    <h2>Jenis Sampah</h2>
                    <p>gg</p>
                </div>
                <div>
                    <h2>Jumlah Sampah</h2>
                    <p>12</p>
                </div>
                <div>
                    <h2>Harga per Kilo</h2>
                    <p>11223</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-2'>
                <h2>Total Harga</h2>
                <p>Rp.23123123,00</p>
            </div>
        </div>
    );
};

export default receipt;