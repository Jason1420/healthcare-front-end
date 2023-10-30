import React from 'react'
import { BiSearch } from 'react-icons/bi'
const SearchBar = () => {
    return (
        <div className='search-bar-container h-20 bg-[#1EB9C4] flex justify-center items-center gap-4'>
            <div className="title text-white text-xl font-bold">Tìm kiếm</div>
            <div className="search relative">
                <input type="text" className='h-12 border-none rounded-full w-[500px] px-4 outline-[#0ddcef]' placeholder='Nhập thông tin cần tìm kiếm' />
                <div className="icon absolute top-2 right-2 text-[32px] text-[#1eb9c4] ">
                    <BiSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBar