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
            <div className=" font-Noto flex flex-col ">
                <Header />
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}
