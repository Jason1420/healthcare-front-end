'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import onlineGif from '@/assets/support/online-support.gif'
import onlinePng from '@/assets/support/online-support.png'
import poliCyGif from '@/assets/support/privacy-policy.gif'
import poliCyPng from '@/assets/support/privacy-policy.png'
import calendarGif from '@/assets/support/calendar.gif'
import calendarPng from '@/assets/support/calendar.png'
import documentGif from '@/assets/support/document.gif'
import documentPng from '@/assets/support/document.png'
import faqGif from '@/assets/support/faq.gif'
import faqPng from '@/assets/support/faq.png'
import ratingGif from '@/assets/support/rating.gif'
import ratingPng from '@/assets/support/rating.png'
import warningGif from '@/assets/support/warning.gif'
import warningPng from '@/assets/support/warning.png'
import Image from 'next/image'
import './Support.scss'
import { useTranslation } from 'react-i18next'
const Support = () => {
    const { t } = useTranslation('support');
    return (
        <div className=" support-page w-full 
         mx-auto ">
            <div className="top h-[200px] flex flex-col justify-center items-center gap-4 ">
                <div className="title text-3xl">
                    {t('title')}
                </div>
                <div className="search-bar flex ">
                    <input className=' border-[2px] border-[#01acb9] outline-none h-[50px] w-[550px] px-5 rounded-bl-md rounded-tl-md' type="text" placeholder={t('placeHolder')} />
                    <div className="icon-search h-[50px] w-[50px] flex items-center bg-[#01acb9]  text-white text-3xl  justify-center rounded-br-md rounded-tr-md cursor-pointer">
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>
            <div className="bottom w-4/5 flex flex-1 mx-auto flex-wrap justify-center gap-y-8 mb-10">
                {/* support online */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={onlineGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={onlinePng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('onlineSupport')}
                    </div>
                </div>
                {/* policy */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={poliCyGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={poliCyPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('policy')}
                    </div>
                </div>
                {/* Ratting */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={ratingGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={ratingPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('rating')}
                    </div>
                </div>
                {/* report issues */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={warningGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={warningPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('report')}
                    </div>
                </div>
                {/* FAQ */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={faqGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={faqPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('faq')}
                    </div>
                </div>
                {/* Document */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={documentGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={documentPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('document')}
                    </div>
                </div>
                {/* calendar */}
                <div className="card w-[22%] h-[200px]  flex justify-center items-center gap-2 flex-col hover:text-main-color cursor-pointer transition-all">
                    <Image className='gif w-3/5 mx-auto hidden' src={calendarGif} alt='support poliCy' />
                    <Image className='png w-1/3 mx-auto ' src={calendarPng} alt='support online' />
                    <div className="support-title text-xl text-center ">
                        {t('openTime')}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Support