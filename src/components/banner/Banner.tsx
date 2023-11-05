import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import banner1 from '@/assets/banner/banner1.png'
import banner2 from '@/assets/banner/banner2.png'
import banner3 from '@/assets/banner/banner3.png'
import './Banner.css'
const Banner = () => {
    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='banner-container overflow-hidden '>
            <Slider {...setting} className=''>
                <Image className='sm:h-[500px] sm:w-9/10 sm:mx-auto bg-cover' src={banner1} alt="logo" />
                <Image className='sm:h-[500px] sm:w-9/10 sm:mx-auto bg-cover' src={banner2} alt="logo" />
                <Image className='sm:h-[500px] sm:w-9/10 sm:mx-auto bg-cover' src={banner3} alt="logo" />
            </Slider>
        </div>
    )
}

export default Banner