"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-white shadow-2xl rounded-xl m-3">
            <ul className="flex justify-between items-center">
                <div>
                    <Image
                        src={"/img/logo-amuts.png"}
                        alt="..."
                        width={150}
                        height={150}
                        priority={true}
                        className="md:ml-4 ml-2 object-cover"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div className="flex gap-2">
                    <Link href="/">
                        <li className="ml-2 cursor-pointer hover:bg-orange md:p-4 p-2 rounded-xl font-semibold md:text-sm text-xs">
                            Home
                        </li>
                    </Link>
                    {!session ? (
                        <></>
                    ) : (
                        <>
                            <li className="md:text-sm text-xs md:p-4 p-2 font-semibold">
                                {session.user?.name ? session.user?.name : session.user?.email}
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        signOut();
                                    }}
                                    className="bg-hijau rounded-xl text-white font-semibold hover:bg-orange focus:outline-none focus:bg-red-800 md:text-sm text-xs md:p-4 p-2 mr-2"
                                >
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
