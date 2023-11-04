import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomScrollbars from '@/components/CustomScrollbars/CustomScrollbars'
import { IoCall } from 'react-icons/io5'
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
                    <div className="contact fixed left-10 bottom-28 z-80 ">

                        <a href='tel:+84987654321'  >
                            <div className="icon absolute bottom-[-48px] z-[81] left-[-20px] rounded-full text-white text-xl pulse ">
                                <IoCall />
                            </div>
                            <div className="  flex items-center gap-2 bg-[#15a082] text-white  text-xl pr-4 py-2 rounded-r-full">
                                <div className="title pl-9">
                                    Hồ Chí Minh
                                </div>
                            </div>
                        </a>
                        <a href='tel:+84987654321' className='absolute bottom-[-60px]' >
                            <div className="icon absolute bottom-[-48px] z-[81] left-[-20px] rounded-full text-white text-xl pulse-hn ">
                                <IoCall />
                            </div>
                            <div className="  flex items-center gap-2 bg-[#f89d42] text-white  text-xl pr-4 py-2 rounded-r-full">
                                <div className="title pl-9">
                                    Hà Nội
                                </div>
                            </div>
                        </a>
                    </div>
                </CustomScrollbars>
            </body>
        </html>
    )
}
