'use client'
import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import avatar from '@/assets/expert/avatar.jpg'
import Image from 'next/image'
const Expert = () => {
    return (
        <div className="expert-page w-full sm:w-4/5 
         mx-auto ">
            <div className="sm:hidden title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                Đội Ngũ Chuyên Môn
            </div>
            {/* Sidebar */}
            {/* dich vu y te */}
            <input type="checkbox" hidden id='dvyt' className='dvyt' />
            <label htmlFor="dvyt" className="med-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto">
                    Đội ngũ bác sĩ
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="med-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 4</div>
            </div>
            {/* dv suc khoe */}
            <input type="checkbox" hidden id='dvsk' className='dvsk' />
            <label htmlFor="dvsk" className="health-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto ">
                    Đội ngũ điều dưỡng
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="health-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 1</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 2</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 3</div>
                <div className="serv-item w-[45%] bg-white rounded-sm px-4">Khoa 4</div>
            </div>
            {/* nội dung */}
            <div className="desktop  sm:flex sm:gap-5 h-full">
                <div className="hidden sm:flex sm:flex-col left w-1/5 h-full bg-white border border-b-[#d7d4d4] border-r-[#d7d4d4] border-l-[#d7d4d4] ">
                    <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                        Đội ngũ chuyên môn
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Đội ngũ bác sĩ
                    </div>
                    <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 4</div>
                    </div>
                    <div className="service bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Đội ngũ điều dưỡng
                    </div>
                    <div className="list border border-b-[1px] border-b-[#cbc9c9]">
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 1</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 2</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 3</div>
                        <div className="serv bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Khoa 4</div>
                    </div>
                </div>
                <div className="right w-[98%] sm:w-4/5 mx-auto text-[#444]">
                    <div className="title text-2xl font-semibold sm:m-6 my-7 w-full border-b-[2px] border-b-[#444]  ">
                        Khoa 1
                    </div>
                    <div className='flex flex-col'>
                        <div className="list-expert sm:mx-6 w-full ">
                            <div className="expert flex gap-4 pb-5 mb-6 border-b-[2px] border-b-[#444]">
                                <div className="avatar hidden sm:block aspect-[181/225] sm:h-[225px] sm:w-[181px]">
                                    <Image src={avatar} alt='avatar' className='float-left ' />
                                </div>
                                <div className="infor flex flex-col">
                                    <div className="name text-2xl font-semibold flex justify-center items-center gap-5">
                                        <Image src={avatar} alt='avatar' className='float-left sm:hidden h-[70px] w-[60px]' />
                                        Dr. Emma Wilson
                                    </div>
                                    <div className="detail border-y-[1px] border-b-[#444] border-t-[#444] py-2 flex flex-col gap-2 mt-3">
                                        <div className="specialty flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Chuyên Khoa:
                                            </div>
                                            <div className="flex items-center">
                                                Nội tiêu hóa
                                            </div>
                                        </div>
                                        <div className="pro-level flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Trình Độ Chuyên Môn:
                                            </div>
                                            <div className="flex items-center">
                                                Tiến sĩ Y học
                                            </div>
                                        </div>
                                        <div className="desc text-[15px]  ">
                                            <p className='float-left font-semibold pr-5'>Giới thiệu:</p>  Dr. Emma Wilson là một chuyên gia về các vấn đề về tiêu hóa và đường ruột. Cô có hơn 10 năm kinh nghiệm trong việc chẩn đoán và điều trị các bệnh lý tiêu hóa phức tạp.
                                        </div>
                                    </div>
                                    <div className="contact flex gap-4 justify-center sm:justify-end mt-auto  items-center pt-4 sm:pt-1">
                                        <div className="detail  text-sm font-semibold cursor-pointer text-[#444] border-[#444] border-[1px] py-1 px-3 hover:underline">
                                            Thông tin chi tiết
                                        </div>
                                        <div className="schedule text-sm font-semibold cursor-pointer text-white border-[px] border-main-color py-1 px-3 bg-main-color hover:underline  ">
                                            Đặt lịch khám
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="expert flex gap-4 pb-5 mb-6 border-b-[2px] border-b-[#444]">
                                <div className="avatar hidden sm:block aspect-[181/225] sm:h-[225px] sm:w-[181px]">
                                    <Image src={avatar} alt='avatar' className='float-left ' />
                                </div>
                                <div className="infor flex flex-col">
                                    <div className="name text-2xl font-semibold flex justify-center items-center gap-5">
                                        <Image src={avatar} alt='avatar' className='float-left sm:hidden h-[70px] w-[60px]' />
                                        Dr. John Smith
                                    </div>
                                    <div className="detail border-y-[1px] border-b-[#444] border-t-[#444] py-2 flex flex-col gap-2 mt-3">
                                        <div className="specialty flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Chuyên Khoa:
                                            </div>
                                            <div className="flex items-center">
                                                Tim mạch
                                            </div>
                                        </div>
                                        <div className="pro-level flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Trình Độ Chuyên Môn:
                                            </div>
                                            <div className="flex items-center">
                                                Bác sĩ Y khoa
                                            </div>
                                        </div>
                                        <div className="desc text-[15px]  ">
                                            <p className='float-left font-semibold pr-5'>Giới thiệu:</p>  Dr. John Smith là một chuyên gia về các vấn đề về tim mạch. Anh đã thực hiện hàng ngàn ca phẫu thuật tim và đang là một phần quan trọng của đội ngũ chăm sóc sức khỏe tim mạch hàng đầu.
                                        </div>
                                    </div>
                                    <div className="contact flex gap-4 justify-center sm:justify-end mt-auto  items-center pt-4 sm:pt-1">
                                        <div className="detail  text-sm font-semibold cursor-pointer text-[#444] border-[#444] border-[1px] py-1 px-3 hover:underline">
                                            Thông tin chi tiết
                                        </div>
                                        <div className="schedule text-sm font-semibold cursor-pointer text-white border-[px] border-main-color py-1 px-3 bg-main-color hover:underline  ">
                                            Đặt lịch khám
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="expert flex gap-4 pb-5 mb-6 border-b-[2px] border-b-[#444]">
                                <div className="avatar hidden sm:block aspect-[181/225] sm:h-[225px] sm:w-[181px]">
                                    <Image src={avatar} alt='avatar' className='float-left ' />
                                </div>
                                <div className="infor flex flex-col">
                                    <div className="name text-2xl font-semibold flex justify-center items-center gap-5">
                                        <Image src={avatar} alt='avatar' className='float-left sm:hidden h-[70px] w-[60px]' />
                                        Dr. John Smith
                                    </div>
                                    <div className="detail border-y-[1px] border-b-[#444] border-t-[#444] py-2 flex flex-col gap-2 mt-3">
                                        <div className="specialty flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Chuyên Khoa:
                                            </div>
                                            <div className="flex items-center">
                                                Nhi khoa
                                            </div>
                                        </div>
                                        <div className="pro-level flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Trình Độ Chuyên Môn:
                                            </div>
                                            <div className="flex items-center">
                                                Tiến sĩ Y học
                                            </div>
                                        </div>
                                        <div className="desc text-[15px]  ">
                                            <p className='float-left font-semibold pr-5'>Giới thiệu:</p>  Dr. Sarah Adams là một bác sĩ nhi khoa với niềm đam mê trong việc chăm sóc trẻ em. Cô đã làm việc trong lĩnh vực này suốt 15 năm và luôn tận tâm trong công việc.
                                        </div>
                                    </div>
                                    <div className="contact flex gap-4 justify-center sm:justify-end mt-auto  items-center pt-4 sm:pt-1">
                                        <div className="detail  text-sm font-semibold cursor-pointer text-[#444] border-[#444] border-[1px] py-1 px-3 hover:underline">
                                            Thông tin chi tiết
                                        </div>
                                        <div className="schedule text-sm font-semibold cursor-pointer text-white border-[px] border-main-color py-1 px-3 bg-main-color hover:underline  ">
                                            Đặt lịch khám
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="expert flex gap-4 pb-5 mb-6 border-b-[2px] border-b-[#444]">
                                <div className="avatar hidden sm:block aspect-[181/225] sm:h-[225px] sm:w-[181px]">
                                    <Image src={avatar} alt='avatar' className='float-left ' />
                                </div>
                                <div className="infor flex flex-col">
                                    <div className="name text-2xl font-semibold flex justify-center items-center gap-5">
                                        <Image src={avatar} alt='avatar' className='float-left sm:hidden h-[70px] w-[60px]' />
                                        Dr. Michael Johnson
                                    </div>
                                    <div className="detail border-y-[1px] border-b-[#444] border-t-[#444] py-2 flex flex-col gap-2 mt-3">
                                        <div className="specialty flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Chuyên Khoa:
                                            </div>
                                            <div className="flex items-center">
                                                Da liễu
                                            </div>
                                        </div>
                                        <div className="pro-level flex text-[15px] font-semibold">
                                            <div className="w-[180px]">
                                                Trình Độ Chuyên Môn:
                                            </div>
                                            <div className="flex items-center">
                                                Bác sĩ Y khoa
                                            </div>
                                        </div>
                                        <div className="desc text-[15px]  ">
                                            <p className='float-left font-semibold pr-5'>Giới thiệu:</p> Dr. Michael Johnson là một bác sĩ da liễu có kinh nghiệm trong việc chẩn đoán và điều trị các vấn đề về da, từ mụn trứng cá đến các bệnh da liễu nghiêm trọng.
                                        </div>
                                    </div>
                                    <div className="contact flex gap-4 justify-center sm:justify-end mt-auto  items-center pt-4 sm:pt-1">
                                        <div className="detail  text-sm font-semibold cursor-pointer text-[#444] border-[#444] border-[1px] py-1 px-3 hover:underline">
                                            Thông tin chi tiết
                                        </div>
                                        <div className="schedule text-sm font-semibold cursor-pointer text-white border-[px] border-main-color py-1 px-3 bg-main-color hover:underline  ">
                                            Đặt lịch khám
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Expert