"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-white shadow-md rounded-xl">
            <ul className="flex justify-between items-center">
                <div>
                    <Image src={'/img/logo-amuts.png'} alt='...' width={150} height={150} className="md:ml-4 ml-2 object-cover" />
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <li className="cursor-pointer text-black hover:bg-orange p-3 rounded-xl font-semibold  md:text-base text-sm">
                            Home
                        </li>
                    </Link>
                    {!session ? (
                        <>
                            <Link href="/login">
                                <li className="cursor-pointer text-black hover:bg-orange p-3 rounded-xl font-semibold md:text-base text-sm">
                                    Login
                                </li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <li className="text-black font-semibold mr-2">
                                {session.user?.name ? session.user?.name : session.user?.email}
                            </li>
                            <li>
                                <button onClick={() => { signOut(); }}
                                    className="p-1 px-2 mt-1 bg-hijau rounded-full text-white font-semibold hover:bg-orange focus:outline-none focus:bg-red-800">
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
