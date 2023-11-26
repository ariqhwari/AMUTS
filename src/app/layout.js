import './globals.css'
import Navbar from '@/components/Navbar'
import Beranda from '@/pages/Beranda/page'
import Footer from '@/components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Beranda/>
      <Footer/>
        </body>
    </html>
  )
}
