'use client'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'
import '../i18n/i18n'
import { BsCalendar2Minus } from 'react-icons/bs'
import { LuStethoscope } from 'react-icons/lu'
import { RiSearch2Line } from 'react-icons/ri'
import SearchBar from '@/components/searchBar/SearchBar'
import { Endpoint } from '../routes/Route'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const { t } = useTranslation()
  return (
    <div className=" font-Noto flex flex-col ">
      <Header />
      <Navbar />
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
      <div className="title">
        Thông tin mới
      </div>
      <div className="news">
        Fetching data......
      </div>
      <Footer />
    </div>

  )
}
export default Home;