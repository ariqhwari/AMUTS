"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    // usepathname untuk validasi bar yang aktif
    const pathname = usePathname();
    return (
        <div className="flex flex-col justify-center items-center bg-transparent">
            <div className="w-full bg-hijau p-5"></div>
            <div>
                <Image
                    src={"/img/logo-amuts.png"}
                    alt="logo-amuts"
                    width={290}
                    height={290}
                    className="object-cover w-full h-auto"
                    priority
                />
            </div>
            <div className="flex md:gap-4 gap-2 mb-4 md:p-2 p-2 md:text-sm text-xs text-hijau4 font-semibold items-center text-center">
                {/* jika page aktif, maka navbar akan diberi background, jika tidak bakal normal */}
                <Link className={`link ${pathname === "/" ? "bg-orange rounded-full py-2 px-4" : ""}`} href={"/"}>
                    Beranda
                </Link>
                <Link className={`link ${pathname === "/Layanan" ? " bg-orange rounded-full py-2 px-4" : ""}`} href={"/Layanan"}>
                    Layanan
                </Link>
                <Link className={`link ${pathname === "/SetorSampah" ? "bg-orange rounded-full py-2 px-4" : ""}`} href={"/SetorSampah"}>
                    Setor Sampah
                </Link>
                <Link className={`link ${pathname === "/TentangKami" ? "bg-orange rounded-full py-2 px-4 " : ""}`} href={"/TentangKami"}>
                    Tentang Kami
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
