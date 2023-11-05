import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
const SearchBar = () => {
    const { t } = useTranslation('home')
    return (
        <div className='hidden search-bar-container h-20 bg-[#1EB9C4] sm:flex justify-center items-center gap-4'>
            <div className="title text-white text-xl font-bold">
                {t('search.title')}
            </div>
            <div className="search relative">
                <input type="text" className='h-12 border-none rounded-full w-[500px] px-6 outline-[#0ddcef]' placeholder={t('search.placeHolder')} />
                <div className="icon absolute top-2 right-2 text-[32px] text-[#1eb9c4] ">
                    <BiSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBar