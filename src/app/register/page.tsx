"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
    const [error, setError] = useState("");
    const router = useRouter();
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

        try {
            const res = await fetch("https://amuts.vercel.app/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (res.status === 400) {
                setError("This email is already registered");
            }
            if (res.status === 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Error, try again");
            console.log(error);
        }
    };

    if (sessionStatus === "loading") {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="p-8 rounded-lg">
                    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                    </svg>
                </div>
            </div>
        );
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex  flex-col items-center justify-between p-24 ">
                <div className="w-full max-w-md px-3 mx-auto mt-0 md:flex-0 shrink-0 mb-24">
                    <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border shadow-2xl rounded-2xl bg-clip-border">
                        <div className="p-6 mb-0 font-extrabold text-center text-2xl bg-white border-b-0 rounded-t-2xl">
                            <h5><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Register</span></h5>
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
                                        Sign up
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

export default Register;
