import React from 'react'
import logo from '../../assets/new-logo.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
const Navbar = () => {
    const { t } = useTranslation('home')
    return (
        <div className='navbar-container hidden lg:flex lg:border'>
            <div className="desktop w-4/5 mx-auto text-[#111] text-xl flex gap-5 h-24 items-center justify-between
            ">
                <div className="logo w-[140px] h-5 cursor-pointer">
                    <Link href={Endpoint.HOME}>
                        <Image className='w-9/10 h-[70px] mt-[-25px]' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-content flex gap-14 font-semibold">
                    <div className="intro cursor-pointer">
                        <Link href={Endpoint.INTRODUCTION}>
                            {t('navbar.introduce')}
                        </Link>
                    </div>
                    <div className="service cursor-pointer">
                        {t('navbar.service')}
                    </div>
                    <div className="specialty cursor-pointer">
                        {t('navbar.expertTeam')}
                    </div>
                    <div className="product cursor-pointer">
                        {t('navbar.products')}
                    </div>
                    <div className="news cursor-pointer">
                        {t('navbar.news')}
                    </div>
                    <div className="support cursor-pointer">
                        {t('navbar.support')}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar