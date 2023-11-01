'use client'
import React from 'react'

const Services = () => {
    return (
        <div className=" font-Noto flex flex-col w-4/5 border border-gray-400
        h-[100vh] mx-auto">
            {/* Sidebar */}
            <div className="left w-1/5 border border-gray-600">

                {/* dich vu y te */}
                <div className="med-service">
                    <div className="title bg-[#2662da] ">
                        Dịch vụ y tế
                    </div>
                    <div className="service-list"></div>
                </div>
                {/* dv suc khoe */}
                <div className="health-service">
                    <div className="title bg-[#2662da] ">
                        Dịch vụ sức khỏe
                    </div>
                    <div className="service-list"></div>

                </div>
            </div>
            {/* nội dung */}
            <div className="right">

            </div>
        </div>
    )
}

export default Services