'use client'
import Image from 'next/image'
import React from 'react'
import intro1 from '@/assets/introduction/intro1.jpg'
import intro2 from '@/assets/introduction/intro2.jpg'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import axios from 'axios'

const Introduction = () => {
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.ApiIntroduction, CMSToken],
        ([url, token]) => fetchWithToken(url, token))
    if (data) {
        console.log(data.data[0].attributes.template)
    }
    return (
        // <div className=" introduction-page w-full sm:w-4/5 
        // h-full mx-auto mb-10">
        //     <div className="title text-center sm:text-start text-2xl text-[#333] pt-5 hover:text-main-color cursor-pointer pb-2">
        //         Giới thiệu
        //     </div>
        //     <div className="title-1 mt-5 text-center sm:text-start text-lg text-main-color sm:pl-5">
        //         Chào mừng đến với Healthcare APP - Dịch vụ Đặt Lịch Khám Bệnh Tại Nhà
        //     </div>
        //     <Image className='h-[400px] object-obtain my-5 border rounded-lg' src={intro1} alt='image 1' />
        //     <div className="desc-1 px-2  sm:pb-5 sm:pl-10 pt-2">
        //         Chúng tôi biết rằng sức khỏe là quý giá và việc duyệt qua hàng giờ trong các phòng chờ bệnh viện có thể là một trải nghiệm khó chịu. Vì vậy, chúng tôi hãnh diện giới thiệu <span className='text-[#69a4d1]'>Healthcare APP</span> - một giải pháp hiện đại cho sức khỏe và chăm sóc cá nhân của bạn.
        //     </div>
        //     <div className="title-2 mt-5 text-center sm:text-start text-lg text-main-color sm:pl-5">
        //         Chăm Sóc Sức Khỏe Tận Nhà
        //     </div>
        //     <div className="desc-2 px-2  sm:pb-5 sm:pl-10 pt-2">
        //         Tại <span className='text-[#69a4d1]'>Healthcare APP</span>, chúng tôi tập trung vào sự thuận tiện và chất lượng trong việc chăm sóc sức khỏe của bạn. Chúng tôi cho phép bạn đặt lịch khám bệnh tại nhà, với một danh sách đa dạng các dịch vụ chăm sóc sức khỏe. Bạn không cần phải rời khỏi nhà, không cần phải chờ đợi lâu trong phòng chờ, và không cần phải lo lắng về việc thực hiện các cuộc hẹn quan trọng.
        //     </div>
        //     <div className="title-3 mt-5 text-center sm:text-start text-lg text-main-color sm:pl-5">
        //         Làm Cho Sức Khỏe Của Bạn Là Ưu Tiên
        //     </div>
        //     <Image className='h-[400px] object-obtain my-5 border rounded-lg' src={intro2} alt='image 2' />
        //     <div className="desc-3 px-2  sm:pb-5 sm:pl-10 pt-2">
        //         Với <span className='text-[#69a4d1]'>Healthcare APP</span>, sức khỏe của bạn là ưu tiên hàng đầu. Chúng tôi cung cấp một nền tảng dễ sử dụng để bạn có thể dễ dàng đặt lịch, theo dõi lịch sử khám bệnh, và trò chuyện với các chuyên gia y tế qua ứng dụng di động của chúng tôi.
        //     </div>
        //     <div className="title-4 mt-5 text-center sm:text-start text-lg text-main-color sm:pl-5">
        //         Dịch Vụ Chăm Sóc Sức Khỏe Hoàn Hảo
        //     </div>
        //     <div className="desc-4 px-2  sm:pb-5 sm:pl-10 pt-2">
        //         <span className='text-[#69a4d1]'>Healthcare APP</span> cung cấp một loạt các dịch vụ chăm sóc sức khỏe, bao gồm kiểm tra sức khỏe chung, điều trị y tế, tư vấn dinh dưỡng, và nhiều dịch vụ khác. Chúng tôi luôn đảm bảo rằng bạn sẽ được phục vụ bởi các chuyên gia có kinh nghiệm và tận tâm.
        //     </div>
        //     <div className="title-5 mt-5 text-center sm:text-start text-lg text-main-color sm:pl-5">
        //         Hãy Bắt Đầu Ngay Hôm Nay
        //     </div>

        //     <div className="desc-5 px-2  sm:pb-5 sm:pl-10 pt-2">
        //         Dễ dàng đặt lịch khám bệnh và chăm sóc sức khỏe cá nhân với <span className='text-[#69a4d1]'>Healthcare APP</span>. Chúng tôi đã làm cho quá trình này trở nên đơn giản và tiện lợi hơn bao giờ hết. Hãy bắt đầu chăm sóc sức khỏe của bạn ngay hôm nay và trải nghiệm sự khác biệt mà chúng tôi mang lại.
        //     </div>
        // </div >
        <div className=" introduction-page w-full min-h-[100vh] sm:w-4/5 
        h-full mx-auto mb-10">

            {data ?

                <div className="title-1 mt-5 text-center sm:text-start text-lg sm:pl-5" dangerouslySetInnerHTML={{ __html: data.data[0].attributes.template }}>

                </div>
                : null}

        </div >
    )
}

export default Introduction