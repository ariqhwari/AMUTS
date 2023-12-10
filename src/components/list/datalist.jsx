import React from 'react'
import RemoveData from "../button/removeData";

const getdata = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/data", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading data: ", error);
    }
};

const Datalist = async () => {

    try {
        const { data } = await getdata();
        return (

            <table className="border-collapse border bg-slate-100 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Nama</th>
                        <th className="border border-gray-400 px-4 py-2">Alamat</th>
                        <th className="border border-gray-400 px-4 py-2">No. Telepon</th>
                        <th className="border border-gray-400 px-4 py-2">Jumlah Sampah (Kg)</th>
                        <th className="border border-gray-400 px-4 py-2">Jenis Sampah</th>
                        <th className="border border-gray-400 px-4 py-2">Total Harga (Rp.)</th>
                        <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d._id} className='text-center'>
                            <td className="border border-gray-400 px-4 py-2">{d.nama}</td>
                            <td className="border border-gray-400 px-4 py-2">{d.alamat}</td>
                            <td className="border border-gray-400 px-4 py-2">{d.noTelp}</td>
                            <td className="border border-gray-400 px-4 py-2">{d.jumlahSampah}</td>
                            <td className="border border-gray-400 px-4 py-2">{d.jenisSampah}</td>
                            <td className="border border-gray-400 px-4 py-2">{d.totalHarga}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                <RemoveData id={d._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )

    } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error fetching data</div>;
    }

}

export default Datalist