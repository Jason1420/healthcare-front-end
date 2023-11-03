'use client'
import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import './Services.scss'
import serv1 from '@/assets/service-image/serv1.jpg'
import Image from 'next/image'
import axios from 'axios'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
const Services = () => {
    // axios.defaults.headers.common['Authorization'] = `Bearer: ${CMSToken}`

    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllServices, CMSToken],
        ([url, token]) => fetchWithToken(url, token))
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
            <div className="desktop sm:flex  sm:h-full">

                <div className="right w-[98%] mx-auto flex justify-around flex-wrap gap-y-4 text-[#393939] pt-7 pb-10">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div className="serv sm:w-[45%] flex flex-col gap-4 " key={index}>
                                <div className="item text-[20px]">
                                    {data.attributes.title}
                                </div>
                                <div className="img">
                                    <Image src={'http://localhost:1337' + data.attributes.thumbnail.data.attributes.url} alt='thumbnail'
                                        width={data.attributes.thumbnail.data.attributes.width} height={data.attributes.thumbnail.data.attributes.height} />
                                </div>
                                <div className="desc text-base text-[#666]">
                                    {data.attributes.desc}
                                </div>
                                <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                                    <Link href={`${Endpoint.SERVICES}/${data.attributes.slug}`}>TÌM HIỂU THÊM</Link>
                                </div>
                            </div>
                            // <Link  href={`${Endpoint.SERVICES}/${data.attributes.slug}`}>{data.attributes.title}</Link>
                        )
                    })}


                </div>

            </div>
        </div >
    )
}

export default Services