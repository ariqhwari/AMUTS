import './globals.css'
import Navbar from '@/components/Navbar'
import Beranda from '@/pages/Beranda/page'
import Footer from '@/components/Footer'
import Setorsampah from '@/pages/Setorsampah/page'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Setorsampah/>
      <Footer/>
        </body>
    </html>
  )
}
