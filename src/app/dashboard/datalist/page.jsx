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

    console.log(session);

    if (!session) {
        redirect("/");
    }
    return (
        <div className="flex flex-col h-screen bg-slate-50">
            {/* Navbar */}
            <Navbar />
            {/* Container */}
            <div className="sm:flex">
                {/* Bagian 30% */}
                <div className="inline rounded-xl bg-white md:m-2 m-0 shadow-xl ">
                    {/* Konten untuk pemilihan data */}
                    <h2 className="md:p-4 p-2 md:text-lg text-base text-center font-semibold mt-2 ">Pilihan Data</h2>
                    <ul className="md:p-4 p-2 grid grid-flow-row md:text-lg text-sm mt-8 w-auto justify-center">
                        <Link href={'/dashboard/datalist'} className="md:m-2 m-0 mb-2 text-center font-medium shadow-lg bg-orange rounded-2xl py-2 px-4">Data</Link>
                        <Link href={'/dashboard/userlist'} className="md:m-2 m-0 mb-2 text-center font-medium border rounded-2xl py-2 px-4">Account</Link>
                    </ul>
                </div>
                {/* Bagian 70% */}
                <div className="w-full bg-white rounded-xl p-2 md:m-2 m-0 shadow-xl">
                    {/* Tampilan Data */}
                    <h2 className=" pt-10 pb-5 text-left text-xl font-semibold">Tampilan Data</h2>
                    <Datalist />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
