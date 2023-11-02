import React from 'react'
import logo from '@/assets/new-logo.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname()
    const { t } = useTranslation('home')
    console.log(pathname)
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
                    <div className={` intro cursor-pointer ${pathname == Endpoint.INTRODUCTION ? "text-[#f68b1f] transition-colors" : ""}`} >
                        <Link href={Endpoint.INTRODUCTION}>
                            {t('navbar.introduce')}
                        </Link>
                    </div>
                    <div className={` services cursor-pointer ${pathname == Endpoint.SERVICES ? "text-[#f68b1f] transition-colors" : ""}`}>
                        <Link href={Endpoint.SERVICES}>
                            {t('navbar.service')}
                        </Link>
                    </div>
                    <div className={` expertTeam cursor-pointer ${pathname == Endpoint.EXPERT_TEAM ? "text-[#f68b1f] transition-colors" : ""}`}>
                        <Link href={Endpoint.EXPERT_TEAM}>
                            {t('navbar.expertTeam')}
                        </Link>
                    </div>
                    <div className={` products cursor-pointer ${pathname == Endpoint.PRODUCTS ? "text-[#f68b1f] transition-colors" : ""}`}>
                        <Link href={Endpoint.PRODUCTS}>
                            {t('navbar.products')}
                        </Link>
                    </div>
                    <div className={` news cursor-pointer ${pathname == Endpoint.NEWS ? "text-[#f68b1f] transition-colors" : ""}`}>
                        <Link href={Endpoint.NEWS}>
                            {t('navbar.news')}
                        </Link>
                    </div>
                    <div className={` support cursor-pointer ${pathname == Endpoint.SUPPORT ? "text-[#f68b1f] transition-colors" : ""}`}>
                        <Link href={Endpoint.SUPPORT}>
                            {t('navbar.support')}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar