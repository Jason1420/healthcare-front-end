import React, { useState } from 'react'
import menuIcon from '../../../public/menu.svg'
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { locales } from '@/i18n/i18n'
import { changeLanguage } from 'i18next'
const Header = () => {
    const { i18n, t } = useTranslation('home')
    const currentLanguage = locales[i18n.language as keyof typeof locales]
    const [dropdownLng, setDropdownLng] = useState<boolean>(false)
    const handleShowDropLng = () => {
        setDropdownLng(!dropdownLng)
    }
    const changLanguage = (lng: 'vi' | 'en') => {
        i18n.changeLanguage(lng)
    }
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
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8 h-8" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336" /></svg>
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


                    <div className="contact cursor-pointer hover:underline">
                        {t('header.contactUs').toUpperCase()}
                    </div>
                    <div className="location cursor-pointer hover:underline">
                        {t('header.location').toUpperCase()}
                    </div>
                    <div className="question  cursor-pointer hover:underline">
                        {t('header.question').toUpperCase()}
                    </div>
                    <div className=" relative language cursor-pointer h-[38px] bg-[#555] flex items-center px-2 gap-1 hover:underline"
                        onClick={() => handleShowDropLng()}>
                        <div className="">
                            {currentLanguage.toUpperCase()}
                        </div>
                        <div className="">
                            <AiFillCaretDown />
                        </div>
                        {dropdownLng &&
                            <div className='absolute top-[38px] w-[89px] left-0 px-3 text-[13px] text-white bg-[#555] flex flex-col gap-2 py-2 '>
                                <div className="eng hover:underline hover:text-orange-400 transition-colors"
                                    onClick={() => changeLanguage("en")}>English</div>
                                <div className="vi hover:underline hover:text-orange-400 transition-colors"
                                    onClick={() => changeLanguage("vi")}>Tiếng Việt</div>
                            </div>
                        }
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