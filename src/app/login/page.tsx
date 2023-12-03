"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    // const session = useSession();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!password || password.length < 3) {
            setError("Password is invalid");
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/dashboard");
        } else {
            setError("");
        }
    };

    if (sessionStatus === "loading") {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="p-8 rounded-lg">
                    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                    </svg>
                </div>
            </div>
        )
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex  flex-col items-center justify-between p-24 ">
                <div className="w-full max-w-md px-3 mx-auto mt-0 md:flex-0 shrink-0 mb-24">
                    <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border shadow-2xl rounded-2xl bg-clip-border">
                        <div className="p-6 mb-0 font-extrabold text-center text-2xl bg-white border-b-0 rounded-t-2xl">
                            <h5><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Login</span></h5>
                        </div>
                        <div className="flex flex-wrap justify-center  ">
                            <div className="max-w-full text-center px-1 flex">
                                <button
                                    className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                    onClick={() => {
                                        signIn("github");
                                    }}
                                >
                                    <Image src={'/img/GitHub-Logo.png'} alt='...' width={100} height={100} className="object-cover" />
                                </button>
                            </div>
                            <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                            </div>
                        </div>
                        <div className="flex-auto p-6">
                            <form onSubmit={handleSubmit} role="form text-left">
                                <div className="mb-4">
                                    <input type="email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                                </div>
                                <div className="mb-4">
                                    <input type="password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                                        {" "}
                                        Sign in
                                    </button>
                                </div>
                                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Login;
