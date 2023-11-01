'use client'
import React from 'react'
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'
import './Services.scss'
import serv1 from '@/assets/service-image/serv1.jpg'
import serv2 from '@/assets/service-image/serv2.jpg'
import serv3 from '@/assets/service-image/serv3.jpg'
import serv4 from '@/assets/service-image/serv4.jpg'
import Image from 'next/image'
const Services = () => {
    return (
        <div className="services-page w-full sm:w-4/5 
        h-full mx-auto  ">
            <div className="sm:hidden title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                Dịch Vụ
            </div>
            {/* Sidebar */}
            {/* dich vu y te */}
            <input type="checkbox" hidden id='dvyt' className='dvyt' />
            <label htmlFor="dvyt" className="med-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
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
            <label htmlFor="dvsk" className="health-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
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
            <div className="desktop hidden sm:flex sm:gap-5 sm:h-full">
                <div className="left w-1/5  border border-[#f2f2f2]  shadow-sm
                ">
                    <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                        Dịch vụ
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Dịch vụ y tế
                    </div>
                    <div className="list ">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 4</div>
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Dịch vụ sức khỏe
                    </div>
                    <div className="list ">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444]">Dịch vụ 4</div>
                    </div>
                </div>
                <div className="right w-4/5 flex justify-around flex-wrap gap-y-4 text-[#393939] pt-7 pb-10">

                    <div className="serv w-[45%] flex flex-col gap-4">
                        <div className="item text-[20px]">
                            Customized and Individualized Scheduling
                        </div>
                        <div className="img">
                            <Image src={serv1} alt='service-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Our regular opening time is 8:30 AM to 5:30 PM Monday through Friday. There are many ways to make an appointment when you want to see a doctor. You can call, email or use our website. You will be able to see primary doctors and specialists depending on your conditions. First time visitors are well advised to use our website for a more efficient scheduling service.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv w-[45%] flex flex-col gap-4 ">
                        <div className="item text-[20px]">
                            Language Assistance
                        </div>
                        <div className="img">
                            <Image src={serv2} alt='service-02' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            The International Healthcare Center provides in-hospital concierge service through coordinators. They offer English, Chinese, Japanese, Russian, Arabic, Mongolian translation, escort, and counseling services throughout the overall medical process from appointment, treatment, billing, examination and administration.                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv w-[45%] flex flex-col gap-4">
                        <div className="item text-[20px]">
                            Financial Counseling for your conveniences
                        </div>
                        <div className="img">
                            <Image src={serv3} alt='service-03' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            For most organizations, we can arrange direct billing services. This means that if ever you have to use our hospital, our administrators can bill your embassies or your insurance companies directly.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv w-[45%] flex flex-col gap-4">
                        <div className="item text-[20px]">
                            One-to-one Escort                        </div>
                        <div className="img">
                            <Image src={serv4} alt='service-04' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            There are more than 100 volunteers, helping international patients use our hospital more conveniently. Most of them are hospital employees, including doctors, nurses, and technicians. They are always willing to help you like your best friends.                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services