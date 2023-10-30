import React from 'react'
import logo from '../../assets/new-logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='navbar-container hidden lg:flex lg:border'>
            <div className="desktop w-4/5 mx-auto text-[#111] text-xl flex gap-5 h-24 items-center justify-between
            ">
                <div className="logo w-[140px] h-5">
                    <Image className='w-9/10 h-[70px] mt-[-25px]' src={logo} alt="logo" />
                </div>
                <div className="nav-content flex gap-14 font-semibold">
                    <div className="intro cursor-pointer">
                        Giới thiệu
                    </div>
                    <div className="service cursor-pointer">
                        Dịch vụ
                    </div>
                    <div className="specialty cursor-pointer">
                        Đội ngũ chuyên môn
                    </div>
                    <div className="product cursor-pointer">
                        Sản phẩm
                    </div>
                    <div className="news cursor-pointer">
                        Tin tức
                    </div>
                    <div className="support cursor-pointer">
                        Hỗ trợ
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar