'use client'
import Image from 'next/image'
import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import intro1 from '@/assets/introduction/intro1.jpg'
import intro2 from '@/assets/introduction/intro2.jpg'
const Introduction = () => {
    return (
        <div className=" introduction-page w-full sm:w-4/5 
        h-full mx-auto mb-10">
            <script>

            </script>
            <div className="title text-2xl text-[#333] pt-5 hover:text-[#289ca0] cursor-pointer pb-2">
                Giới thiệu
            </div>
            <div className="title-1 text-lg text-[#289ca0] pl-5">
                Chào mừng đến với Healthcare APP - Dịch vụ Đặt Lịch Khám Bệnh Tại Nhà
            </div>
            <Image className='h-[400px] object-obtain my-5 border rounded-lg' src={intro1} alt='image 1' />
            <div className="desc-1 pb-5 pl-10 pt-1">
                Chúng tôi biết rằng sức khỏe là quý giá và việc duyệt qua hàng giờ trong các phòng chờ bệnh viện có thể là một trải nghiệm khó chịu. Vì vậy, chúng tôi hãnh diện giới thiệu <span className='text-[#69a4d1]'>Healthcare APP</span> - một giải pháp hiện đại cho sức khỏe và chăm sóc cá nhân của bạn.
            </div>
            <div className="title-2 text-lg text-[#289ca0] pl-5">
                Chăm Sóc Sức Khỏe Tận Nhà
            </div>
            <div className="desc-2 pb-5 pl-10 pt-1">
                Tại <span className='text-[#69a4d1]'>Healthcare APP</span>, chúng tôi tập trung vào sự thuận tiện và chất lượng trong việc chăm sóc sức khỏe của bạn. Chúng tôi cho phép bạn đặt lịch khám bệnh tại nhà, với một danh sách đa dạng các dịch vụ chăm sóc sức khỏe. Bạn không cần phải rời khỏi nhà, không cần phải chờ đợi lâu trong phòng chờ, và không cần phải lo lắng về việc thực hiện các cuộc hẹn quan trọng.
            </div>
            <div className="title-3 text-lg text-[#289ca0] pl-5">
                Làm Cho Sức Khỏe Của Bạn Là Ưu Tiên
            </div>
            <Image className='h-[400px] object-obtain my-5 border rounded-lg' src={intro2} alt='image 2' />
            <div className="desc-3 pb-5 pl-10 pt-1">
                Với <span className='text-[#69a4d1]'>Healthcare APP</span>, sức khỏe của bạn là ưu tiên hàng đầu. Chúng tôi cung cấp một nền tảng dễ sử dụng để bạn có thể dễ dàng đặt lịch, theo dõi lịch sử khám bệnh, và trò chuyện với các chuyên gia y tế qua ứng dụng di động của chúng tôi.
            </div>
            <div className="title-4 text-lg text-[#289ca0] pl-5">
                Dịch Vụ Chăm Sóc Sức Khỏe Hoàn Hảo
            </div>
            <div className="desc-4 pb-5 pl-10 pt-1">
                <span className='text-[#69a4d1]'>Healthcare APP</span> cung cấp một loạt các dịch vụ chăm sóc sức khỏe, bao gồm kiểm tra sức khỏe chung, điều trị y tế, tư vấn dinh dưỡng, và nhiều dịch vụ khác. Chúng tôi luôn đảm bảo rằng bạn sẽ được phục vụ bởi các chuyên gia có kinh nghiệm và tận tâm.
            </div>
            <div className="title-5 text-lg text-[#289ca0] pl-5">
                Hãy Bắt Đầu Ngay Hôm Nay
            </div>

            <div className="desc-5 pb-5 pl-10 pt-1">
                Dễ dàng đặt lịch khám bệnh và chăm sóc sức khỏe cá nhân với <span className='text-[#69a4d1]'>Healthcare APP</span>. Chúng tôi đã làm cho quá trình này trở nên đơn giản và tiện lợi hơn bao giờ hết. Hãy bắt đầu chăm sóc sức khỏe của bạn ngay hôm nay và trải nghiệm sự khác biệt mà chúng tôi mang lại.
            </div>
        </div >
    )
}

export default Introduction