'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
const Support = () => {
    const { t } = useTranslation('contact');
    return (
        <div className=" support-page flex py-10 mx-auto  w-4/5 ">

            <div className="left w-[50%] ">
                <div className="title text-xl mb-3">
                    {t('title')}
                </div>
                <div className=" flex flex-col gap-2 mb-5">


                    <div className="address text-base">
                        {t('address')}: <span className='pl-2'>4060 Stanley Avenue, Levittown, New York, US</span>
                    </div>
                    <div className="phone text-base">
                        {t('phone')}:
                        <a className='pl-2 text-main-color' href='tel:+84987654321'>098 765 4321</a>
                    </div>
                    <div className="email text-base">

                        Email:
                        <a className='pl-2 text-main-color' href='mailto:health-care-example@gmail.com'>health-care-example@gmail.com</a>
                    </div>
                </div>

                <div className="form-title text-2xl mb-3">
                    {t('contactUs')}
                </div>
                <div className="form-contact flex flex-wrap justify-between gap-y-3 w-[90%]">
                    <input className="u-name w-[49%] border-black border-[1px] rounded-md px-4 h-[45px]" type="text" placeholder={t('u-name')} />
                    <input className="u-email w-[49%] border-black border-[1px] rounded-md px-4 h-[45px]" type="email" placeholder='Email*' />

                    <input className="u-phone w-full border-black border-[1px] rounded-md px-4 h-[45px]" type="phone" placeholder={t('u-phone')} />
                    <textarea className="u-content w-full border-black border-[1px] py-2 rounded-md px-4 h-[45px]" placeholder={t('content')} />
                    <div className="submi cursor-pointer border-black border-[1px] rounded-md px-4  px-5 py-2 bg-main-color text-white">
                        {t('submit')}
                    </div>
                </div>

            </div>
            <div className="right w-[50%]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.108167309642!2d106.7194431749824!3d10.803026889347382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a29300e28f%3A0xe559edb53c021dcb!2zMjkyIFVuZyBWxINuIEtoacOqbSwgUGjGsOG7nW5nIDI1LCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1698911674245!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div >
    )
}

export default Support