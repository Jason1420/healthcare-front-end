'use client'
import React from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

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
                <div className="mt-12 lg:mt-[38px] fixed z-40 w-full bg-white">
                    <Navbar />
                </div>
                <div className="min-h-[100vh] sm:mt-[144px]">
                    {children}
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
}
