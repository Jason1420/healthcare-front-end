import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomScrollbars from '@/components/CustomScrollbars/CustomScrollbars'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Healthcare App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </head>

            <body className={`${inter.className} overflow-hidden`}>
                <CustomScrollbars universal style={{ height: "100vh" }}>
                    {children}
                </CustomScrollbars>
            </body>
        </html>
    )
}
