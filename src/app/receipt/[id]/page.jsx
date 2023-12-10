import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const getDataById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/data/${id}`, {
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
            <div className="h-screen flex items-center justify-center">
                <div className="invoice-box">
                    <div className="items-center justify-center flex">
                        <Image src={"/img/logo-amuts.png"}
                            alt="Company logo"
                            className='max-w-full w-56'
                            width={290}
                            height={290}
                            priority
                        />
                    </div>
                    <table>
                        <thead>
                            <tr className="information">
                                <td>
                                    {nama}<br />
                                    {alamat}<br />
                                    {noTelp}
                                </td>
                                <td>
                                    Invoice: {id}<br />
                                    Created: {formattedDate}<br />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="heading">
                                <td>Jenis</td>
                                <td>Item</td>
                            </tr>
                            <tr className="item">
                                <td>Berat Sampah</td>
                                <td>{jumlahSampah} Kg</td>
                            </tr>
                            <tr className="item last">
                                <td>{jenisSampah}</td>
                                <td>Rp.{hargaKilo} / Kg</td>
                            </tr>
                            <tr className="total">
                                <td></td>
                                <td>Total: Rp.{totalHarga}.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link href={`/`}>
                                        <button className='p-2 bg-hijau2 text-black w-1/2 rounded-xl hover:scale-105'>Home</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        );

    } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error fetching data</div>;
    }

};

export default Receipt;