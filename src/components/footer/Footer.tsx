import Image from 'next/image'
import React from 'react'
import logo from '../../assets/new-logo-dark.png'
const Footer = () => {
    return (
        <div className='footer-container  bg-[#77797D] h-[200px] '>
            <div className="title text-gray-footer">
                <div className="top flex">
                    <div className="logo ">
                        <Image className='w-9/10 w-28 h-20 ' src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer