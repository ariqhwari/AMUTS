'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation"
import Link from 'next/link';

// fungsi Formulir, untuk menampung data menggunakan useState
const Formulir = () => {
    const [id, setId] = useState('');
    const [nama, setnama] = useState('');
    const [alamat, setalamat] = useState('');
    const [noTelp, setnoTelp] = useState('');
    const [jenisSampah, setjenisSampah] = useState('');
    const [jumlahSampah, setjumlahSampah] = useState('');
    const [hargaKilo, sethargaKilo] = useState('');
    const [totalHarga, setTotalHarga] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);

    const router = useRouter();

    // handle jika form diisi, dan datanya diinput ke variabel dalam fungsi Formulir
    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedPrice = hargaKilo;

        if (name === 'jenisSampah') {
            switch (value) {
                case 'Kertas':
                    updatedPrice = 3000;
                    break;
                case 'Kardus':
                    updatedPrice = 2000;
                    break;
                case 'Botolkaca':
                    updatedPrice = 1000;
                    break;
                case 'Kaleng':
                    updatedPrice = 500;
                    break;
                // Tambahkan case untuk jenis sampah lainnya di sini
                default:
                    updatedPrice = 0;
            }
        }
        const calculatedTotalPrice = updatedPrice * jumlahSampah;
        const generateId = Math.random().toString(36).substring(2)
        setId(generateId);
        setjenisSampah(value);
        sethargaKilo(updatedPrice);
        setTotalHarga(calculatedTotalPrice.toString());
    };

    // handle submit, jika button kirim disubmit akan menampilkan pop up
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    // handle konfirmasi setelah form disubmit, akan menampilkan isi dari form berupa pop up
    const handleConfirmation = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://amuts.vercel.app/api/data", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    nama,
                    alamat,
                    noTelp,
                    jenisSampah,
                    jumlahSampah,
                    hargaKilo,
                    totalHarga,
                }),
            });

            if (res.ok) {
                setIsUploaded(true);

                router.push("/SetorSampah");
            } else {
                throw new Error("Gagal mengumpulkan Sampah");
            }
        } catch (error) {
            console.log(error);
        }
        setShowConfirmation(false);
    };

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <label className='flex flex-col mb-4 font-semibold'>
                    Nama
                    <input type="text" name="nama" placeholder='Masukan Nama' required value={nama} onChange={(e) => setnama(e.target.value)} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <label className='flex flex-col mb-4 font-semibold'>
                    Alamat
                    <input type="text" name="alamat" placeholder='Masukan Alamat' value={alamat} onChange={(e) => setalamat(e.target.value)} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <label className='flex flex-col mb-4 font-semibold'>
                    No. Telp
                    <input type="number" name="noTelp" placeholder='Masukan No.Telp' value={noTelp} onChange={(e) => setnoTelp(e.target.value)} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <label className='flex flex-col mb-4 font-semibold'>
                    Jumlah Sampah
                    <input type="number" name="jumlahSampah" required placeholder='Masukan Berat Sampah Per Kilogram' value={jumlahSampah} onChange={(e) => setjumlahSampah(e.target.value)} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <label className='flex flex-col mt-4 font-semibold'>
                    Jenis sampah
                </label>
                <select name="jenisSampah" placeholder='Masukan Jenis Sampah' value={jenisSampah} onChange={handleChange} className='border border-1 w-full border-green-500 p-2 rounded font-normal appearance-none bg-white bg-opacity-90 bg-no-repeat bg-right pr-8'>
                    <option value="">Pilih Jenis Sampah</option>
                    <option value="Kertas">Kertas</option>
                    <option value="Kardus">Kardus</option>
                    <option value="Botolkaca">Botol Kaca</option>
                    <option value="Kaleng">Kaleng</option>
                </select>
                <label className='flex flex-col my-4 font-semibold'>
                    Harga per Kilo
                    <input type="number" name="hargaKilo" readOnly value={hargaKilo} onChange={handleChange} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <label className='flex flex-col my-4 font-semibold'>
                    Total Harga
                    <input type="number" name="totalHarga" readOnly value={totalHarga} onChange={handleChange} className='border border-1 w-full border-green-500 p-2 rounded font-normal' />
                </label>
                <button type="submit" className='bg-hijau4 hover:bg-orange w-1/2 py-2 text-white font-semibold rounded-xl mt-2'>Kirim</button>

            </form>

            {/* menampilkan pop up */}
            {showConfirmation && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white text-black text-sm p-4 border md:w-1/4 md:h-max w-11/2 rounded shadow-sm">
                        <h1 className='flex ml-18 font-bold text-xl text-color-hijautua mb-2'>Konfirmasi</h1>
                        <hr />
                        <div className='grid grid-cols-2 gap-2 px-4 mt-2'>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>Nama</h2>
                                <p>{nama}</p>
                            </div>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>Alamat</h2>
                                <p>{alamat}</p>
                            </div>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>No. Telp</h2>
                                <p>{noTelp}</p>
                            </div>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>Jenis Sampah</h2>
                                <p>{jenisSampah}</p>
                            </div>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>Jumlah Sampah</h2>
                                <p>{jumlahSampah}</p>
                            </div>
                            <div>
                                <h2 className='text-color-hijautua font-semibold'>Harga per Kilo</h2>
                                <p>{hargaKilo}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center my-2'>
                            <h2 className='text-color-hijautua font-semibold'>Total Harga</h2>
                            <p>Rp.{jumlahSampah * hargaKilo},00</p>
                        </div>

                        <div className='flex justify-between px-8 gap-3' >
                            <button onClick={handleConfirmation} className="p-2 detail">Konfirmasi</button>
                            <button onClick={() => setShowConfirmation(false)} className="p-2 batal">Batal</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Upload Confirmation */}
            {isUploaded && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="card">
                        <button className="dismiss" type="button">x</button>
                        <div className="header">
                            <div className="image">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                            <div className="content">
                                <span className="title">Thank you</span>
                                <p className="message">Terima kasih telah membuang sampah pada tempatnya</p>
                            </div>
                            <div className="actions">
                                <Link href={`/receipt/${id}`}>
                                    <button className="detail" type="button">Detail</button>
                                </Link>
                                <button className="batal mt-3" onClick={() => setIsUploaded(false)} type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Formulir;