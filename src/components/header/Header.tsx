import React from 'react'
import menuIcon from '../../../public/menu.svg'
import { AiOutlineSearch } from 'react-icons/ai'
const Header = () => {
    return (
        <div className=' header-container flex items-center justify-between px-2 h-12 bg-gray-header text-white 
        lg:bg-[#313334]
        lg:h-[38px]
        lg:text-[#ddd]
        lg:text-[11px]
        lg: border-t-[1px]
        lg: border-orange-400
          '>
            {/* --- mobile --- */}
            {/* menu */}
            <div className="menu lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8 h-8" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336" /></svg>
            </div>
            {/* logo */}
            <div className="logo lg:hidden">
                Healthcare App
            </div>
            {/* search */}
            <div className="search text-[32px] lg:hidden">
                <AiOutlineSearch />
            </div>

            {/* --- desktop --- */}
            <div className="desktop hidden
            lg:w-4/5
            lg:mx-auto
            lg:flex
            lg: justify-between
            lg: gap-5
            lg: items-center">
                <div className="left flex justify-start gap-5">
                    <div className="email text-xs">
                        <label className='mr-1  text-[13px]  opacity-80' htmlFor="">
                            Email:
                        </label>
                        <a href="mailto:health-care-example@gmail.com"
                            className='  text-sm'>
                            health-care-example@gmail.com
                        </a>
                    </div>
                    <div className="hotline ">
                        <label className='mr-1  text-[13px]  opacity-80' htmlFor="">
                            Hotline:
                        </label>
                        <a href='tell:+84987654321 ' className=' text-sm'>
                            098 765 4321
                        </a>
                    </div>
                </div>
                <div className="right justify-end items-center gap-5 flex">


                    <div className="contact cursor-pointer">
                        CONTACT US
                    </div>
                    <div className="location cursor-pointer">
                        LOCATION
                    </div>
                    <div className="question  cursor-pointer">
                        QUESTIONS
                    </div>
                    <div className="language cursor-pointer">
                        LANGUAGE
                    </div>
                    <div className="search h-[38px] w-[38px] cursor-pointer bg-orange-400 text-3xl  flex items-center justify-center">
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header