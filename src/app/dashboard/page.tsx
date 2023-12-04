import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar-admin";

const Dashboard = async () => {
    const session = await getServerSession();
    if (!session) {
        redirect("/");
    }
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Container */}
            <div className="flex flex-1">
                {/* Bagian 30% */}
                <div className="w-1/5 bg-gray-200">
                    {/* Konten untuk pemilihan data */}
                    <h2 className="p-4 text-xl font-semibold">Pilihan Data</h2>
                    <ul className="p-4">
                        <li className="py-2">Data 1</li>
                        <li className="py-2">Data 2</li>
                        {/* Tambahkan pilihan data lainnya */}
                    </ul>
                </div>

                {/* Bagian 70% */}
                <div className="w-7/10 bg-white">
                    {/* Tampilan Data */}
                    <h2 className="p-4 text-xl font-semibold">Tampilan Data</h2>
                    {/* Tabel untuk data dummy */}
                    <div className="p-4">
                        <div className="border rounded-2xl shadow-xl overflow-hidden p-10 ">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2">No.</th>
                                        <th className="py-2">Nama</th>
                                        <th className="py-2">Usia</th>
                                        <th className="py-2">Alamat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Data dummy */}
                                    <tr className="border-b">
                                        <td className="py-2">1</td>
                                        <td className="py-2">John Doe</td>
                                        <td className="py-2">28</td>
                                        <td className="py-2">Jl. Contoh No. 123</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">2</td>
                                        <td className="py-2">Jane Smith</td>
                                        <td className="py-2">25</td>
                                        <td className="py-2">Jl. Contoh No. 456</td>
                                    </tr>
                                    {/* Tambahkan baris data lain sesuai kebutuhan */}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;