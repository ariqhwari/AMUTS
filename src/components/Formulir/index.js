'use client'

import { useState } from 'react';

// fungsi Formulir, untuk menampung data menggunakan useState
const Formulir = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    noTelp: '',
    jenisSampah: '',
    jumlahSampah: '',
    hargaKilo: '',
    totalHarga: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // handle jika form diisi, dan datanya diinput ke variabel dalam fungsi Formulir
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit, jika button kirim disubmit akan menampilkan pop up
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  // handle konfirmasi setelah form disubmit, akan menampilkan isi dari form berupa pop up
  const handleConfirmation = () => {
    onSubmit(formData);
    setShowConfirmation(false);
  };

  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label className='flex flex-col mb-4 font-semibold'>
          Nama
          <input type="text" name="nama" placeholder='Masukan Nama' value={formData.name} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal'/>
        </label>
        <label className='flex flex-col mb-4 font-semibold'>
          Alamat
          <input type="text" name="alamat" placeholder='Masukan Alamat' value={formData.alamat} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal' />
        </label>
        <label className='flex flex-col mb-4 font-semibold'>
          No. Telp
          <input type="number" name="noTelp" placeholder='Masukan No.Telp' value={formData.noTelp} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal'/>
        </label>
        <label className='font-semibold'>
        Jenis sampah
        </label>
          <select name="jenisSampah" placeholder='Masukan Jenis Sampah' value={formData.jenisSampah} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal'>
            <option value="">Pilih Jenis Sampah</option>
            <option value="Kertas">Kertas</option>
            <option value="Kardus">Kardus</option>
            <option value="Botol Kaca">Botol Kaca</option>
            <option value="Kaleng">Kaleng</option>
          </select>
        <label className='flex flex-col my-4 font-semibold'>
          Jumlah Sampah
          <input type="number" name="jumlahSampah" placeholder='Masukan Jumlah Sampah' value={formData.jumlahSampah} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal'/>
        </label>
        <label className='flex flex-col mb-4 font-semibold'>
          Harga per Kilo
          <input type="number" name="hargaKilo" placeholder='Masukan Jumlah Sampah' value={formData.hargaKilo} onChange={handleChange} className='border border-1 w-11/12 border-color-hijautua p-2 rounded font-normal'/>
        </label>
        <button type="submit" className='bg-color-secondary w-11/12 py-2 text-color-putih font-semibold rounded'>Kirim</button>
      </form>

      {/* menampilkan pop up */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-color-putih p-4 border md:w-1/4 md:h-max w-11/2 rounded shadow-sm">
            <h1 className='flex justify-center items-center font-bold text-xl text-color-hijautua mb-2'>Konfirmasi</h1>
            <hr />
            <div className='grid grid-cols-2 gap-2 px-4 mt-2'>
              <div>
                <h2 className='text-color-hijautua font-semibold'>Nama</h2>
                <p placeholder='Nama'>{formData.nama}</p>
              </div>
              <div>
                <h2 className='text-color-hijautua font-semibold'>Alamat</h2>
                <p>{formData.alamat}</p>
              </div>
              <div>
                <h2 className='text-color-hijautua font-semibold'>No. Telp</h2>
                <p>{formData.noTelp}</p>
              </div>
              <div>
                <h2 className='text-color-hijautua font-semibold'>Jenis Sampah</h2>
                <p>{formData.jenisSampah}</p>
              </div>
              <div>
                <h2 className='text-color-hijautua font-semibold'>Jumlah Sampah</h2>
                <p>{formData.jumlahSampah}</p>
              </div>
              <div>
                <h2 className='text-color-hijautua font-semibold'>Harga per Kilo</h2>
                <p>{formData.hargaKilo}</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center my-2'>
              <h2 className='text-color-hijautua font-semibold'>Total Harga</h2>
              <p>Rp.{formData.hargaKilo * formData.jumlahSampah},00</p>
            </div>

            <div className='flex justify-between px-8 gap-3' >
            <button onClick={handleConfirmation} className="bg-color-secondary text-color-putih w-1/2 rounded hover:scale-105">Konfirmasi</button>
            <button onClick={() => setShowConfirmation(false)} className="underline w-1/2 rounded hover:border border-color-secondary">Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulir;