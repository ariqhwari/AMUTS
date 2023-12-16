"use client";

import { useState } from 'react';
import React from 'react'
import { useRouter } from "next/navigation";

const EditForm = (props) => {
    const { id, nama, alamat, noTelp, jenisSampah, jumlahSampah, totalHarga, hargaKilo } = props;
    const [newId, setNewId] = useState(id);
    const [newNama, setNewNama] = useState(nama);
    const [newAlamat, setNewAlamat] = useState(alamat);
    const [newNoTelp, setNewnoTelp] = useState(noTelp);
    const [newJenisSampah, setNewJenisSampah] = useState(jenisSampah);
    const [newJumlahSampah, setNewJumlahSampah] = useState(jumlahSampah);
    const [newHargaKilo, setNewHargaKilo] = useState(hargaKilo);
    const [newTotalHarga, setNewTotalHarga] = useState(totalHarga);

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedPrice = newHargaKilo;

        if (name === 'newJenisSampah') {
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


        const calculatedTotalPrice = updatedPrice * newJumlahSampah;
        setNewJenisSampah(value);
        setNewHargaKilo(updatedPrice);
        setNewTotalHarga(calculatedTotalPrice.toString());
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://amuts.vercel.app/api/data/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    newId,
                    newNama,
                    newAlamat,
                    newNoTelp,
                    newJenisSampah,
                    newJumlahSampah,
                    newHargaKilo,
                    newTotalHarga,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.refresh();
            router.push("/dashboard");
        } catch (error) {

        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <div className="bg-gradient-to-r from-green-500 to-green-200 text-white rounded-t-lg p-4 text-center">
                    <h1 className="text-2xl font-bold">Update Data</h1>
                </div>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            name="newNama"
                            onChange={(e) => setNewNama(e.target.value)}
                            value={newNama}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="text"
                            placeholder="Nama"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name='newAlamat'
                            onChange={(e) => setNewAlamat(e.target.value)}
                            value={newAlamat}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="text"
                            placeholder="Alamat"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name='newNoTelp'
                            onChange={(e) => setNewnoTelp(e.target.value)}
                            value={newNoTelp}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="number"
                            placeholder="No Telepon"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name='newJumlahSampah'
                            onChange={(e) => setNewJumlahSampah(e.target.value)}
                            value={newJumlahSampah}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="number"
                            placeholder="Jumlah Sampah (KG)"
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            name="newJenisSampah"
                            placeholder='Jenis Sampah'
                            value={newJenisSampah}
                            onChange={handleChange}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                        >
                            <option value="">Pilih Jenis Sampah</option>
                            <option value="Kertas">Kertas</option>
                            <option value="Kardus">Kardus</option>
                            <option value="Botolkaca">Botol Kaca</option>
                            <option value="Kaleng">Kaleng</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            name='newHargaKilo'
                            value={newHargaKilo}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="number"
                            placeholder="Harga Kilo"
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name='newTotalHarga'
                            value={newTotalHarga}
                            className="border border-gray-400 px-4 py-2 rounded w-full"
                            type="number"
                            placeholder="Total Harga"
                            readOnly
                        />
                    </div>
                    <button type='submit' className="bg-green-600 text-white py-2 px-4 rounded w-full">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditForm