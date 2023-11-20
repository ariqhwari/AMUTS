import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-hijau2">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl">My Anime App</Link>
                <input placeholder="cari anime.." className=""/>
            </div>
        </header>
    )
}

export default Navbar