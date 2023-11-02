'use client'
import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import product1 from '@/assets/product/product1.jpg'
import product2 from '@/assets/product/product2.jpg'
import product3 from '@/assets/product/product3.jpg'
import product4 from '@/assets/product/product4.jpg'
import Image from 'next/image'
import './Products.scss'
const Products = () => {
    return (
        <div className="product-page w-full sm:w-4/5 
         mx-auto ">
            <div className="sm:hidden title mx-auto box-border border border-b-gray-300 w-full text-center font-bold py-2 text-xl h-[50px]">
                Sản phẩm
            </div>
            {/* Sidebar */}
            {/* dich vu y te */}
            <input type="checkbox" hidden id='dvyt' className='dvyt' />
            <label htmlFor="dvyt" className="med-product sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto">
                    Sản phẩm y tế
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="med-product-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 1</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 2</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 3</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 4</div>
            </div>
            {/* dv suc khoe */}
            <input type="checkbox" hidden id='dvsk' className='dvsk' />
            <label htmlFor="dvsk" className="health-product sm:hidden bg-[#f1f1f1] text-lg px-3 border-b-gray-300 border flex justify-between h-[50px]">
                <div className="title my-auto ">
                    Sản phẩm sức khỏe
                </div>
                <div className="icon ml-auto my-auto pr-3">
                    <PiCaretDownBold />
                </div>
            </label>
            <div className="health-product-list hidden flex-wrap bg-[#555] justify-around gap-y-3 py-3">
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 1</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 2</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 3</div>
                <div className="product-item w-[45%] bg-white rounded-sm px-4">Sản phẩm 4</div>
            </div>
            {/* nội dung */}
            <div className="desktop hidden sm:flex sm:gap-5 ">
                <div className="left w-1/5 h-full bg-white border border-b-[#d7d4d4] border-r-[#d7d4d4] border-l-[#d7d4d4] ">
                    <div className="title text-[26px] text-[#267376] text-right px-5 py-5 font-semibold   ">
                        Sản phẩm
                    </div>
                    <div className="product bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Sản phẩm y tế
                    </div>
                    <div className="list ">
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 1</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 2</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 3</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 4</div>
                    </div>
                    <div className="product bg-[#0e787c] h-[50px] text-[18px] text-white pr-7 justify-end flex items-center font-semibold ">
                        Sản phẩm sức khỏe
                    </div>
                    <div className="list ">
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 1</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 2</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 3</div>
                        <div className="product bg-[#f2f2f2] text-right pr-7 py-2 text-[15px] font-semibold text-[#444] hover:text-main-color hover:underline cursor-pointer ">Sản phẩm 4</div>
                    </div>
                </div>
                <div className="right w-4/5 flex justify-around flex-wrap gap-y-[40px]  text-[#393939] pt-7 pb-10">
                    <div className="product w-[45%] flex flex-col gap-4 cursor-pointer ">
                        <div className="img">
                            <Image className="w-[300px] h-[200px] aspect-[300/200] mx-auto " src={product1} alt='product-01' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            HIQILI Tea Tree Essential Oil (100 ML), 100% Pure for Toenail Fungus, Hair Damage, Add to Shampoo, Body Wash, Conditioner - 3.38 Fl Oz
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="product w-[45%] flex flex-col gap-4 cursor-pointer  ">

                        <div className="img">
                            <Image className="w-[300px] h-[200px] aspect-[300/200] mx-auto " src={product2} alt='product-02' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            Pure Enrichment® PureRelief™ XL Heating Pad - 12" x 24" Electric Heating Pad for Back Pain & Cramps, 6 InstaHeat™ Settings, Machine Wash, Soft Microplush, Auto Shut-Off & Moist Heat (Charcoal Gray)
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="product w-[45%] flex flex-col gap-4 cursor-pointer ">

                        <div className="img">
                            <Image className="w-[300px] h-[200px] aspect-[300/200] mx-auto " src={product3} alt='product-03' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            MAJESTIC PURE Lavender Essential Oil with Therapeutic Grade, for Aromatherapy, Massage and Topical uses, 4 fl oz
                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                    <div className="product w-[45%] flex flex-col gap-4 cursor-pointer ">
                        <div className="img">
                            <Image className="w-[300px] h-[200px] aspect-[300/200] mx-auto " src={product4} alt='product-04' />
                        </div>
                        <div className="desc text-base text-[#666]">
                            TUCKS Medicated Cooling Pads, 100 Count – Pads with Witch Hazel, Cleanses Sensitive Areas, Protects from Irritation, Hemorrhoid Treatment, Medicated Pads Used By Hospitals                        </div>
                        <div className="learn-more text-sm text-[#138385] border border-[#138385] w-2/5 text-center py-2 cursor-pointer hover:bg-orange-hover hover:text-white transition-colors mt-auto">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Products