import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from "next";
import { getServerSession } from 'next-auth';
import SessionProvider from "../utils/SessionProvider"

const inter = Inter({ subsets: ['latin'] })

export const viewport = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

export const metadata: Metadata = {
    title: 'Amuts',
    description: 'Ayo Mungut Sampah',
    manifest: '/manifest.json',
    generator: "Next.js",
    icons: [
        { rel: "apple-touch-icon", url: "/icon-128x128.png" },
        { rel: "icon", url: "/icon-128x128.png" },
    ],
};

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
    const session = await getServerSession();
    return (
        <html lang="en">
            <head>
                <meta name="dicoding" content="yasirfahmi60@gmail.com"/>
                <meta name="viewport" content={viewport} />
                <meta name="theme-color" content="#fff" />
            </head>
            <body className={inter.className}>
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
