'use client'
import React from 'react'
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'
import '@/app/v1/services/Services.scss'
import news1 from '@/assets/news-image/news1.jpg'
import news2 from '@/assets/news-image/news2.jpg'
import news3 from '@/assets/news-image/news3.jpg'
import news4 from '@/assets/news-image/news4.jpg'

import Image from 'next/image'
const News = () => {
    return (
        <div className="services-page w-full sm:w-4/5 
        h-full mx-auto  ">
            <div className="sm:hidden title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                Tin Tức
            </div>
            {/* Sidebar */}
            {/* dich vu y te */}
            <input type="checkbox" hidden id='dvyt' className='dvyt' />
            <label htmlFor="dvyt" className="med-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto">
                    Tin tức y tế
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />

                </div>
            </label>
            <div className="med-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 4</div>
            </div>
            {/* dv suc khoe */}
            <input type="checkbox" hidden id='dvsk' className='dvsk' />
            <label htmlFor="dvsk" className="health-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto ">
                    Tin tức sức khỏe
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />

                </div>
            </label>
            <div className="health-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Tin tức 4</div>
            </div>
            {/* nội dung */}
            <div className="desktop  sm:flex sm:gap-5 sm:h-full ">
                <div className="hidden sm:flex left w-1/5 h-full bg-white border border-b-[#d7d4d4] border-r-[#d7d4d4] border-l-[#d7d4d4] ">
                    <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                        Tin tức
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Tin tức y tế
                    </div>
                    <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 4</div>
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Tin tức sức khỏe
                    </div>
                    <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Tin tức 4</div>
                    </div>
                </div>
                <div className="right w-[98%] sm:w-4/5 mx-auto flex justify-around flex-wrap gap-y-10 text-[#393939] pt-7 pb-10">

                    <div className="serv sm:w-[45%] flex flex-col gap-4">
                        <div className="item h-[60px] text-[20px] ">
                            Managing Inflammatory Bowel Disease
                        </div>
                        <div className="create-at text-xs py-1 my-[-10px] text-[#9c9c9c]">
                            22/09/2023, 16:24 GMT+7
                        </div>
                        <div className="img ">
                            <Image src={news1} className='h-[250px] object-cover w-full' alt='service-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Get insights into effective management of Inflammatory Bowel Disease (IBD) as Professor Sang Hyoung Park consults with a patient. Learn about the latest advancements in IBD treatment and the importance of patient-centered care. Discover how expert guidance can make a difference in the journey to better health.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv sm:w-[45%] flex flex-col gap-4">
                        <div className="item h-[60px] text-[20px] ">
                            Professor Yun, Tae-jin Observes Patient Srijan's Post-Surgery Recovery
                        </div>
                        <div className="create-at text-xs py-1 my-[-10px] text-[#9c9c9c]">
                            22/09/2023, 16:24 GMT+7
                        </div>
                        <div className="img ">
                            <Image src={news2} className='h-[250px] object-cover w-full' alt='service-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Join Professor Yun, Tae-jin as he closely monitors the recovery of patient Srijan following a successful surgery. Witness the dedication and expertise of medical professionals in ensuring the well-being of patients during the post-operative phase. Learn how meticulous care and observation play a vital role in the healing process.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv sm:w-[45%] flex flex-col gap-4">
                        <div className="item h-[60px] text-[20px] ">
                            Pioneering Cancer Treatment: Meeting the World Leader
                        </div>
                        <div className="create-at text-xs py-1 my-[-10px] text-[#9c9c9c]">
                            22/09/2023, 16:24 GMT+7
                        </div>
                        <div className="img ">
                            <Image src={news3} className='h-[250px] object-cover w-full' alt='service-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Explore the forefront of cancer treatment as we meet the world leader in the field. Discover the groundbreaking innovations and advancements that are revolutionizing the way we combat cancer. Learn about the dedication and expertise of the individuals shaping the future of cancer care.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="serv sm:w-[45%] flex flex-col gap-4">
                        <div className="item h-[60px] text-[20px] ">
                            Nursing Care: Where the Heart Speaks Louder Than Words
                        </div>
                        <div className="create-at text-xs py-1 my-[-10px] text-[#9c9c9c]">
                            22/09/2023, 16:24 GMT+7
                        </div>
                        <div className="img ">
                            <Image src={news4} className='h-[250px] object-cover w-full' alt='service-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Delve into the world of nursing care, where compassion and empathy are at the core of healing. Experience the extraordinary dedication of nurses whose actions communicate care and concern more profoundly than words. Learn how these healthcare heroes make a difference in the lives of patients through the language of the heart.
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default News