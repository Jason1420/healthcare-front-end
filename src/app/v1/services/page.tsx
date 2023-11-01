'use client'
import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import './Services.scss'
const Services = () => {
    return (
        <div className=" font-Noto flex flex-col w-full border border-gray-400
        h-[100vh] mx-auto ">
            <div className="sm:hidden title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                Dịch Vụ
            </div>
            {/* Sidebar */}
            {/* dich vu y te */}
            <input type="checkbox" hidden id='dvyt' className='dvyt' />
            <label htmlFor="dvyt" className="med-service sm: bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto">
                    Dịch vụ y tế
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="med-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 4</div>
            </div>
            {/* dv suc khoe */}
            <input type="checkbox" hidden id='dvsk' className='dvsk' />
            <label htmlFor="dvsk" className="health-service sm: bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto ">
                    Dịch vụ sức khỏe
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="health-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Dịch vụ 4</div>
            </div>
            {/* nội dung */}
            <div className="right">

            </div>
        </div>
    )
}

export default Services