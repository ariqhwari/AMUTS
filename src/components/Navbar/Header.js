'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    // usepathname untuk validasi bar yang aktif
    const pathname = usePathname()
    return (
        <header className="">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-hijau w-full p-5"></div>
                <div>
                    <Image src={'/img/logo-amuts.png'} alt='...' width={290} height={290} className=" md:w-full md:h-full w-28 h-14 object-cover"/>
                </div>
                <div className="flex md:gap-4 gap-3 mb-10 md:p-10 p-0 md:text-sm text-xs font-semibold items-center text-center">
                    {/* jika page aktif, maka navbar akan diberi background, jika tidak bakal normal */}
                    <Link className={`link ${pathname === '/' ? 'bg-orange rounded-full py-2 px-4' : ''}`} href={'/'} >Beranda</Link>
                    <Link className={`link ${pathname === '/Layanan' ? ' bg-orange rounded-full py-2 px-4' : ''}`} href={'/Layanan'} >Layanan</Link>
                    <Link className={`link ${pathname === '/SetorSampah' ? 'bg-orange rounded-full py-2 px-4' : ''}`} href={'/SetorSampah'} >Setor Sampah</Link>
                    <Link className={`link ${pathname === '/TentangKami' ? 'bg-orange rounded-full py-2 px-4 ' : ''}`} href={'/TentangKami'} >Tentang Kami</Link>  
                </div>
            </div>
        </header>
    )
}

export default Navbar
