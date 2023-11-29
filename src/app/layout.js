import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amuts',
  description: 'Ayo Mungut Sampah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${inter.className}`}>
        {/* panggil navbar dari components, akan ada disetiap page */}
        <Header />
        {children}
        {/* panggil footer dari components, akan ada disetiap page */}
        <Footer />
      </body>
    </html>
  )
}
