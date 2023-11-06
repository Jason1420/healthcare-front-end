'use client'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { CMSToken } from '@/constant/CMSToken'
import useSWR from 'swr'
import { ApiURL } from '@/routes/ApiUrl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Endpoint } from '@/routes/Route'
import { FaTimes } from 'react-icons/fa'
import CustomScrollbars from '@/components/CustomScrollbars/CustomScrollbars'
import { SelectOption } from '@/types/SelectOption'
import SelectComponent from '@/components/SelectComponent/SelectComponent'
import { RegisterForm } from '@/@types/registerForm'
import { ToastContainer, toast } from 'react-toastify'
import { PiCaretDownBold } from 'react-icons/pi'
export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const params = useParams()
    // Fetching default data
    const fetchWithToken = (url: string, token: string) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR([ApiURL.getAllServices, CMSToken],
        ([url, token]) => fetchWithToken(url, token))

    //Custom select component
    const [service, setService] = useState<SelectOption[]>([])
    const [serviceSelected, setServiceSelected] = useState<SelectOption | undefined>({ name: "Chọn dịch vụ", id: 0 });
    const handleOnChangeService = (o: SelectOption | undefined) => {
        setServiceSelected(o)
    }
    useEffect(() => {
        data?.data.map((data: any, index: number) => {
            setService((s) => [...s, {
                name: data.attributes.title,
                id: index + 1
            }])
        })
    }, [data])

    // Register form
    const initRegisterInfo: RegisterForm = {
        fullName: "",
        phone: "",
        email: "",
        note: "",
        address: "hcm",
        service: null
    }
    const [registerInfo, setRegisterInfo] = useState<RegisterForm>(initRegisterInfo)
    useEffect(() => {
        setRegisterInfo({ ...registerInfo, service: data?.data.find((data: any) => data.attributes.title === serviceSelected?.name) })
    }, [serviceSelected])

    const createARegisterForm = async () => {
        const res = await axios.post(ApiURL.ApiRegisterForm, { data: registerInfo }, { headers: { Authorization: "Bearer " + CMSToken } })
        if (res.status == 200) {
            setRegisterInfo(initRegisterInfo)
            setServiceSelected({ name: "Chọn dịch vụ", id: 0 })
            toast.success("Đăng ký thành công", {
                icon: "✔️"
            });
        }
    }

    return (
        <div className="desktop relative ">

            <div className="sm:w-4/5 sm:flex sm:gap-5 sm:h-full min-h-[100vh] mx-auto">
                {/*  */}
                <div className="sm:hidden mt-12 title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                    Dịch Vụ
                </div>
                {/* Sidebar */}
                {/* dich vu y te */}
                <input type="checkbox" hidden id='dvyt' className='dvyt' />
                <label htmlFor="dvyt" className="med-service sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                    <div className="title my-auto">
                        Dịch vụ y tế tại nhà
                    </div>
                    <div className="icon ml-auto my-auto pr-3">
                        <PiCaretDownBold />
                    </div>
                </label>
                <div className="med-service-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                    {data?.data.map((data: any, index: number) => {
                        return (
                            <div key={index} className={`serv sm:hidden rounded-md flex justify-center flex-wrap bg-[#f2f2f2] px-2 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ${params.service === data.attributes.slug ? "text-white bg-orange-400" : ""}`} >
                                <Link href={`${Endpoint.SERVICES}/${data.attributes.slug}`}>{data.attributes.title}</Link>
                            </div>
                        )
                    })}
                    <label htmlFor='show-regis-form' className="serv sm:hidden rounded-md flex justify-center flex-wrap bg-[#15a082] text-white px-2 py-2 text-[15px] font-semibold">
                        Đăng ký ngay
                    </label>
                    <label htmlFor='show-consult-form' className="serv rounded-md sm:hidden flex justify-center flex-wrap bg-[#15a082] text-white px-2 py-2 text-[15px] font-semibold">
                        Tư vấn ngay
                    </label>
                </div>
                {/*  */}
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

                    <label htmlFor='show-regis-form' className="regis flex  justify-center border py-3 mb-4 mt-8 mx-2 bg-[#15a082] text-white rounded-lg font-semibold cursor-pointer hover:text-xl hover:bg-opacity-80 hover:text-[#444] transition-all ">
                        Đăng ký ngay
                    </label>
                    <label htmlFor='show-consult-form' className="regis flex mb-5  justify-center font-semibold border py-3 my-2 mx-2 bg-[#15a082] text-white rounded-lg cursor-pointer hover:text-xl hover:bg-opacity-80 hover:text-[#444] transition-all">
                        Tư vấn ngay
                    </label>

                </div>
                {children}
            </div>
            {/* Form register */}
            <input type="checkbox" hidden id='show-regis-form' className='input-regis-form' />
            <label className="overplay-regis hidden absolute z-[70] top-[-144px] bottom-0 right-0 left-0 w-[100vw] mr-auto
            bg-[rgba(0,0,0,0.3)] " htmlFor='show-regis-form'>
            </label>
            <div className="regis-form hidden fixed mx-auto  top-[100px] form:left-[calc(50%-200px)] rounded-tl-xl rounded-b-xl z-[80] bg-white form:w-[400px] w-full h-[80vh] overflow-hidden">
                <CustomScrollbars universal style={{ height: "80vh" }} >
                    <div className="title text-center text-xl font-semibold pt-3">
                        THÔNG TIN ĐĂNG KÝ
                    </div>
                    <label className='times absolute top-0 right-0 bg-main-color p-2 text-white cursor-pointer' htmlFor="show-regis-form">
                        <FaTimes />
                    </label>
                    <div className="info flex flex-col gap-2 mt-5 w-[90%] mx-auto mb-4">
                        <input type="text" className="full-name  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Họ và tên*' value={registerInfo.fullName} onChange={(event) => setRegisterInfo({ ...registerInfo, fullName: event.target.value })} />
                        <input type="tel" className="phone  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Số điện thoại*' value={registerInfo.phone} onChange={(event) => setRegisterInfo({ ...registerInfo, phone: event.target.value })} />
                        <input type="email" className="email  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Email* ' value={registerInfo.email} onChange={(event) => setRegisterInfo({ ...registerInfo, email: event.target.value })} />
                        <div className="address">
                            Địa chỉ sử dụng dịch vụ
                        </div>
                        <div className="address-detail flex justify-center gap-5 ">
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' defaultChecked onClick={() => setRegisterInfo({ ...registerInfo, address: "hcm" })} />
                                <label htmlFor="address"> TP.Hồ Chí Minh</label>
                            </div>
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' onClick={() => setRegisterInfo({ ...registerInfo, address: "hanoi" })} />
                                <label htmlFor="address"> Hà Nội</label>
                            </div>
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' onClick={() => setRegisterInfo({ ...registerInfo, address: "khac" })} />
                                <label htmlFor="address"> Khác</label>
                            </div>
                        </div>

                        <label htmlFor="brand">Dịch vụ sử dụng</label>
                        <SelectComponent options={service} id={serviceSelected}
                            selectOnChange={(o) => handleOnChangeService(o)} />
                        <div className="note">
                            Lời nhắn
                        </div>
                        <textarea className="u-content w-full border-black border-[1px] py-2 rounded-md px-4 h-[105px] cursor-pointer" placeholder="Nhập lời nhắn (nếu có)" value={registerInfo.note} onChange={(event) => setRegisterInfo({ ...registerInfo, note: event.target.value })} />
                        <label htmlFor="show-regis-form" className="submit border bg-main-color w-2/5 py-2 text-center text-white rounded-md "
                            onClick={() => createARegisterForm()}>
                            Gửi đăng ký
                        </label>
                    </div>
                </CustomScrollbars>
            </div>
            {/* Form consult */}
            <input type="checkbox" hidden id='show-consult-form' className='input-consult-form' />
            <label className="overplay-consult hidden absolute z-[70] top-[-144px] bottom-0 right-0 left-0 w-[100vw] mr-auto
            bg-[rgba(0,0,0,0.3)] " htmlFor='show-consult-form'>
            </label>
            <div className="consult-form hidden fixed mx-auto  top-[100px] form:left-[calc(50%-200px)] rounded-tl-xl rounded-b-xl z-[80] bg-white form:w-[400px] w-full  h-[65vh] overflow-hidden">
                <CustomScrollbars universal style={{ height: "65vh", width: 400 }} >
                    <div className="title text-center text-xl font-semibold pt-3">
                        ĐĂNG KÝ TƯ VẤN
                    </div>
                    <label className='times absolute top-0 right-0 bg-main-color p-2 text-white cursor-pointer' htmlFor="show-consult-form">
                        <FaTimes />
                    </label>
                    <div className="info flex flex-col gap-2 mt-5 w-[90%] mx-auto mb-4">
                        <input type="text" className="full-name  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Họ và tên*' />
                        <input type="tel" className="phone  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Số điện thoại*' />
                        <input type="email" className="email  border border-[#444] focus:outline-main-color  rounded-md py-2 pl-3" placeholder='Email*' />
                        <div className="address">
                            Địa chỉ sử dụng dịch vụ
                        </div>
                        <div className="address-detail flex justify-center gap-5 ">
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' className='bg-main-color' />
                                <label htmlFor="address"> TP.Hồ Chí Minh</label>
                            </div>
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' />
                                <label htmlFor="address"> Hà Nội</label>
                            </div>
                            <div className="input-radio flex items-center gap-1 text-base">
                                <input type="radio" name='address' />
                                <label htmlFor="address"> Khác</label>
                            </div>
                        </div>

                        <textarea className="u-content w-full border-black border-[1px] py-2 rounded-md px-4 h-[105px] cursor-pointer" placeholder="Nhập lời nhắn (nếu có)" />
                        <div className="submit border bg-main-color w-2/5 py-2 text-center text-white rounded-md ">
                            Gửi Đăng Ký
                        </div>
                    </div>
                </CustomScrollbars>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div >
    )
}
