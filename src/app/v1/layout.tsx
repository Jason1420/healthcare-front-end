'use client'
import React from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { IoCall } from 'react-icons/io5'
export default function V1Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className=" font-Noto flex flex-col">
                <div className="z-50 fixed">
                    <Header />
                </div>
                <div className="mt-12 sm:mt-[38px] fixed z-40 w-full bg-white">
                    <Navbar />
                </div>
                <div className="min-h-[100full] h-full sm:mt-[133px]">
                    {children}
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
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
            </div>
        </>
    )
}
