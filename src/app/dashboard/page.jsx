import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/navbar-admin";
import Link from "next/link";
import Datalist from "@/components/list/datalist";

export const metadata = {
    title: 'Dashboard',
    description: 'Ayo Mungut Sampah',
}

const Dashboard = async () => {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }
    return (
        <div className="flex flex-col h-screen bg-slate-50">
            {/* Navbar */}
            <Navbar />
            {/* Container */}
            <div className="sm:flex flex flex-1">
                {/* Bagian 30% */}
                <div className="inline w-1/6 md:w-1/12 rounded-xl bg-white md:m-2 m-4 shadow-xl ">
                    {/* Konten untuk pemilihan data */}
                    <h2 className="md:p-4 p-2 md:text-lg text-base text-center font-semibold mt-2 ">Pilihan Data</h2>
                    <ul className="md:p-4 p-2 grid grid-flow-row md:text-lg text-sm mt-8 w-auto justify-center">
                        <Link href={'/dashboard'} className="md:m-2 mb-2 text-center shadow-lg bg-orange rounded-xl py-2 px-4">Data</Link>
                        <Link href={'/dashboard/userlist'} className="md:m-2 mb-2 text-center border rounded-xl py-2 px-4">Account</Link>
                    </ul>
                </div>
                {/* Bagian 70% */}
                <div className=" bg-white rounded-xl md:p-2 p-5 md:m-2 m-4 shadow-xl w-screen md:w-full">
                    {/* Tampilan Data */}
                    <h2 className=" md:py-5 py-10 text-center text-xl font-semibold">Tampilan Data</h2>
                    <Datalist />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
