"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-white shadow-md m-3 rounded-xl">
            <ul className="flex justify-between m-2 items-center">
                <div>
                    <Image src={'/img/logo-amuts.png'} alt='...' width={150} height={150} className="ml-8 object-cover" />
                </div>
                <div className="flex gap-5 items-center mx-10">
                    <Link href="/">
                        <li className="cursor-pointer text-black hover:text-hijau3 font-semibold mr-6">
                            Home
                        </li>
                    </Link>
                    {!session ? (
                        <>
                            <Link href="/login">
                                <li className="cursor-pointer text-black hover:text-hijau3 font-semibold mr-6">
                                    Login
                                </li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <li className="text-black font-semibold mr-6">
                                {session.user?.name ? session.user?.name : session.user?.email}
                            </li>
                            <li>
                                <button onClick={() => { signOut(); }}
                                    className="p-2 px-5 -mt-1 bg-blue-900 rounded-full text-white font-semibold hover:bg-red-800 focus:outline-none focus:bg-red-800">
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
