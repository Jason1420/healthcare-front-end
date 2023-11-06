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
import { useParams } from 'next/navigation'
const Services = () => {
    // axios.defaults.headers.common['Authorization'] = `Bearer: ${CMSToken}`
    const params = useParams()
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllServices, CMSToken],
        ([url, token]) => fetchWithToken(url, token))
    return (
        <div className="services-page w-full sm:w-4/5 
        h-full mx-auto  ">


            {/* nội dung */}
            <div className="desktop sm:flex  sm:h-full">

                <div className="right w-[98%] mx-auto flex justify-between px-5 flex-wrap gap-y-4 text-[#393939] pt-7 pb-10">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div className="serv sm:w-[45%] flex flex-col gap-4 " key={index}>
                                <div className="item text-[20px] h-[60px] overflow-hidden">
                                    {data.attributes.title}
                                </div>
                                <div className="img">
                                    <Image src={data.attributes.thumbnail.data.attributes.url} alt='thumbnail'
                                        width={data.attributes.thumbnail.data.attributes.width} height={data.attributes.thumbnail.data.attributes.height} />
                                </div>
                                <div className="desc text-base text-[#666]">
                                    {data.attributes.desc}
                                </div>
                                <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                                    <Link href={`${Endpoint.SERVICES}/${data.attributes.slug}`}>TÌM HIỂU THÊM</Link>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </div >
    )
}

export default Services