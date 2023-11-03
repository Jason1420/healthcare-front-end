'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import { CMSToken } from '@/constant/CMSToken'
const page = () => {
    const params = useParams()
    console.log(params.service)
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    console.log(`${ApiURL.getAllServices}&filters[slug]=${params.service}`)
    const { data, error, isLoading } = useSWR([`${ApiURL.getAllServices}&filters[slug]=${params.service}`, CMSToken],
        ([url, token]) => fetchWithToken(url, token))
    console.log(data?.data[0].attributes.detail)
    return (
        <div className="right  w-4/5 mx-auto flex justify-around flex-wrap gap-y-4 text-[#393939] pt-7 pb-10">
            {data ?
                <div className='data'>
                    <div className="detail" dangerouslySetInnerHTML={{ __html: data?.data[0].attributes.detail }}>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default page