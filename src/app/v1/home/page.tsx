'use client'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'
import '@/i18n/i18n'
import { BsCalendar2Minus } from 'react-icons/bs'
import { LuStethoscope } from 'react-icons/lu'
import { RiSearch2Line } from 'react-icons/ri'
import SearchBar from '@/components/searchBar/SearchBar'
import { Endpoint } from '@/routes/Route'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ApiURL } from '@/routes/ApiUrl'
import useSWR, { Fetcher } from 'swr'
import { CMSToken } from '@/constant/CMSToken'
import Image from 'next/image'
const V1Home = () => {
  const { t } = useTranslation()
  const fetchWithToken = (url: string, token: string) =>
    axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then((res) => res.data);
  // const fetcher = (url:string) => fetch(url).then((res)=>res.json())
  const { data, error, isLoading } = useSWR([ApiURL.getAllNews, CMSToken],
    ([url, token]) => fetchWithToken(url, token))
  console.log(data)

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {

    let imgFiles = event.target.files;
    console.log('---------> file before handle', imgFiles)
    if (imgFiles) {
      const file = imgFiles[0];
      readFile(file)

    }
  }
  const readFile = (file: File) => {
    const fileReader = new FileReader()
    if (file) {
      console.log('---------> file after handle', file)
      console.log('---------> file last', fileReader.readAsDataURL(file));
    }
  }
  return (
    <div className="home-page">
      <Banner />
      <SearchBar />
      {/* main service */}
      <div className="main-service flex flex-col items-center my-5">
        <div className="title font-bold text-2xl mb-5">
          {t("mainService.title")}
        </div>
        <div className="box flex items-center w-4/5 px-8  gap-4 bg-[#f9f9f9] rounded-lg py-8 justify-around">
          <div className="schedule flex flex-col items-center text-center gap-2 ">
            <div className="icon text-[28px] sm:text-[5vw] text-[#009999]">
              <BsCalendar2Minus />
            </div>
            <div className="title text-[16px] sm:text-xl  lg:text-2xl">
              {t("mainService.schedule")}
            </div>
          </div>
          <div className="search-doctor flex flex-col items-center text-center gap-2 ">
            <div className="icon text-[28px] sm:text-[5vw] text-[#009999]">
              <LuStethoscope />
            </div>
            <div className="title text-[16px] sm:text-xl  min-w-[320px]:text-[12px] lg:text-2xl">
              {t("mainService.searchDoctor")}
            </div>
          </div>
        </div>

      </div>
      {/* search bar */}
      <div className="search-bar w-4/5 mx-auto rounded-full flex lg:hidden bg-[#f9f9f9] h-[70px] mb-5 flex items-center relative">
        <div className="main h-[60px] bg-[#009999] w-full flex items-center  border rounded-full ">
          <input type="text" className='h-[50px] mx-[4px] px-7 outline-none w-full  rounded-full border-[1px]' placeholder={t('search.placeHolder')} />

        </div>
        <div className="icon-search text-3xl absolute bg-[#009999] px-5 h-[58px] flex justify-center items-center right-0 rounded-tr-full rounded-br-full border-[#009999]  my-[1px] text-white">
          <RiSearch2Line />
        </div>
      </div>
      {/* news */}
      <div className="title text-2xl font-bold mb-3 mx-auto text-center">
        {t('news')}
      </div>
      <div className="news flex flex-col gap-4 px-5 mx-auto bg-white
      sm:w-4/5 sm:bg-[#f9f9f9f9] mb-5 rounded-lg p-5">
        {!data ? <div>
          No data
        </div >
          : data.data.map((item: any, index: number) => {
            return (
              <div className="" key={index}>
                <div className="createAt sm:text-start text-center text-[13px] text-gray-header ]">
                  {item.attributes.createAt}
                </div>

                <div className="content flex-col sm:flex-row flex gap-2 ">
                  <div className="image mx-auto sm:mx-0 ">
                    <Image src={'http://localhost:1337' + item.attributes.img.data.attributes.formats.thumbnail.url} alt='thumbnail'
                      width={156} height={156} />
                  </div>
                  <div className=" w-full sm:w-4/5 sm:mx-4">
                    <div className="font-bold title text-sm text-center sm:text-start sm:text-base ">
                      {item.attributes.title}
                    </div>
                    <div className="italic desc text-sm text-center sm:text-start sm:text-base hidden sm:flex
                    sm:text-sm
                    sm:py-2
                    sm:text-justify ">
                      {item.attributes.des}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
      </div>
    </div>

  )
}
export default V1Home;