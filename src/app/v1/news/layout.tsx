'use client'
import React from 'react'
import axios from 'axios'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
export default function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const params = useParams()
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllNews, CMSToken],
        ([url, token]) => fetchWithToken(url, token))

    return (
        <div className="sm:w-4/5 sm:flex sm:gap-5 sm:h-full min-h-[100vh] mx-auto">

            <div className="hidden sm:flex sm:flex-col left w-1/5 h-full bg-white border border-b-[#d7d4d4] border-r-[#d7d4d4] border-l-[#d7d4d4] ">
                <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                    Tin tức
                </div>
                <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                    Tin tức nổi bật
                </div>
                <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div key={index} className={`serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ${params.news === data.attributes.slug ? "text-main-color" : ""}`} >
                                <Link href={`${Endpoint.NEWS}/${data.attributes.slug}`}>{data.attributes.title}</Link>
                            </div>
                        )
                    })}

                </div>

            </div>
            {children}
        </div>
    )
}
