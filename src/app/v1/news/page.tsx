'use client'
import React from 'react'
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'
import '@/app/v1/services/Services.scss'
import news1 from '@/assets/news-image/news1.jpg'
import news2 from '@/assets/news-image/news2.jpg'
import news3 from '@/assets/news-image/news3.jpg'
import news4 from '@/assets/news-image/news4.jpg'
import axios from 'axios'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
import Image from 'next/image'
const News = () => {
    // axios.defaults.headers.common['Authorization'] = `Bearer: ${CMSToken}`

    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllNews, CMSToken],
        ([url, token]) => fetchWithToken(url, token))
    return (
        <div className="services-page w-full sm:w-4/5 
        h-full mx-auto  ">

            {/* nội dung */}
            <div className="desktop  sm:flex sm:gap-5 sm:h-full ">
                <div className="right w-[98%] mx-auto  flex justify-between px-5 flex-wrap gap-y-4 text-[#393939] pt-7 pb-10">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div className="serv sm:w-[45%] flex flex-col gap-4 " key={index}>
                                <div className="item text-[20px] h-[60px] overflow-hidden">
                                    {data.attributes.title}
                                </div>
                                <div className="img">
                                    <Image className='max-h-[276px] object-fill' src={data.attributes.thumbnail.data.attributes.url} alt='thumbnail'
                                        width={data.attributes.thumbnail.data.attributes.width} height={data.attributes.thumbnail.data.attributes.height} />
                                </div>
                                <div className="desc text-base text-[#666]">
                                    {data.attributes.desc}
                                </div>
                                <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                                    <Link href={`${Endpoint.NEWS}/${data.attributes.slug}`}>TÌM HIỂU THÊM</Link>
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

export default News