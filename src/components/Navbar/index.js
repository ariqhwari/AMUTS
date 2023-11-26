import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
    return (
        <header className="bg-hijau">
            <div className="flex justify-between p-3">
                <Link href="/" className="bg-white rounded-2xl"> <Image src="/img/logo-amuts.png" width={150} height={100} className="items-center"/> </Link>
                {/* <Link href="/" className=" font-bold text-white text-2xl p-4">Amuts</Link> */}
                <nav className="flex font-bold md:gap-5 text-white text-xl p-4">
                <Link href="/Beranda" className="hover:bg-orange px-8 py-2 rounded-full">Beranda</Link>
                <Link href="/Layanan" className="hover:bg-orange px-8 py-2 rounded-full" >Layanan</Link>
                <Link href="/Setorsampah" className="hover:bg-orange px-8 py-2 rounded-full">Setor Sampah</Link>
                <Link href={'/Tentangkami'} className="hover:bg-orange px-8 py-2 rounded-full">Tentang Kami</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar