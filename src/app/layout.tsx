import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth';
import SessionProvider from "../utils/SessionProvider"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Amuts',
    description: 'Ayo Mungut Sampah',
}

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
    const session = await getServerSession();
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
