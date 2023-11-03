'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [ShowRegister, isShowRegister] = useState<boolean>(false)
    const [ShowConsult, isShowConsult] = useState<boolean>(false)

    const params = useParams()
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllServices, CMSToken],
        ([url, token]) => fetchWithToken(url, token))

    return (
        <div className="desktop  sm:flex sm:gap-5 sm:h-full sm:w-4/5 mx-auto">
            <div className="hidden sm:flex sm:flex-col left w-1/5 h-full bg-white border border-b-[#d7d4d4] border-r-[#d7d4d4] border-l-[#d7d4d4] ">
                <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                    Dịch vụ y tế tại nhà
                </div>
                <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                    Dịch vụ
                </div>
                <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div key={index} className={`serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ${params.service === data.attributes.slug ? "text-main-color" : ""}`} >
                                <Link href={`${Endpoint.SERVICES}/${data.attributes.slug}`}>{data.attributes.title}</Link>
                            </div>
                        )
                    })}

                </div>

                <div className="regis flex justify-center border py-3 mb-4 mt-8 mx-2 bg-[#15a082] text-white rounded-lg font-semibold cursor-pointer hover:text-xl hover:bg-opacity-80 hover:text-[#444] transition-all">
                    Đăng ký ngay
                </div>
                <div className="regis flex mb-5 justify-center font-semibold border py-3 my-2 mx-2 bg-[#15a082] text-white rounded-lg cursor-pointer hover:text-xl hover:bg-opacity-80 hover:text-[#444] transition-all">
                    Tư vấn ngay
                </div>
            </div>

            {children}
        </div>
    )
}
