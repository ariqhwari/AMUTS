import React from 'react'
import RemoveData from "../button/removeData";

const getdata = async () => {
    try {
        const res = await fetch("https://amuts.vercel.app/api/data", {
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

            <table className="w-auto border-collapse border">
                <thead>
                    <tr className='bg-hijau3'>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Nama</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Alamat</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Telepon</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Kg</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Sampah</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Harga (Rp.)</th>
                        <th className=" border border-gray-400 md:text-sm text-xs  md:py-2 md:p-5">Act</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d._id} className='text-center'>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">{d.nama}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">{d.alamat}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0 px-1">{d.noTelp}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">{d.jumlahSampah}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">{d.jenisSampah}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">{d.totalHarga}</td>
                            <td className="bg-slate-50 border border-gray-400 md:text-sm text-xs  md:py-2 py-0">
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