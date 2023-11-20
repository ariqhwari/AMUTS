import Link from "next/link"

const Navbar = () => {
    return (
        <header class="Navbar" className="bg-red">
            <div className="flex gap-2 justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl p-4">My Anime App</Link>
               <ul className="flex gap-2 justify-between p-4">
                 <li><a>Beranda</a></li>
                 <li><a>Layanan</a></li>
                 <li><a>Setor Sampah</a></li>
                 <li><a>Tentang Kami</a></li>
               </ul>
            </div>
        </header>
    )
}

export default Navbar