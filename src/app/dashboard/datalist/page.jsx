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
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Container */}
            <div className="flex flex-1 bg-slate-100">
                {/* Bagian 30% */}
                <div className="w-1/6 rounded-xl bg-white m-5">
                    {/* Konten untuk pemilihan data */}
                    <h2 className="p-4 text-xl text-center font-semibold">Pilihan Data</h2>
                    <ul className="p-4 grid grid-flow-row">
                        <Link href={'/dashboard/datalist'} className="m-2 text-center bg-orange rounded-full py-2 px-4">Data</Link>
                        <Link href={'/dashboard/userlist'} className="m-2 text-center border rounded-full py-2 px-4">Account</Link>
                    </ul>
                </div>
                {/* Bagian 70% */}
                <div className=" bg-white rounded-xl p-5 m-5 w-screen">
                    {/* Tampilan Data */}
                    <h2 className=" text-center py-10 text-xl font-semibold">Tampilan Data</h2>
                    <Datalist />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
