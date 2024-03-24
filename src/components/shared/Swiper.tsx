"use client"
import React from 'react';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import img1 from '../../assets/cat-banner-food-2.jpg'
const SwiperSilder = () => {
    return (
        <Swiper

            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
                delay: 2500,

                disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper my-10 ">
            <SwiperSlide className='' >
                <div className=' w-[100%] mx-auto relative'>
                    <Image src={'https://i.ibb.co/sHYJ2jG/download-6.jpg'} width={400} height={200} className='h-[200px] w-full rounded-md' alt="" />
                </div>

                <div className="badge bg-[#FD6A02] text-white rounded-md absolute top-5 left-5 ">20% off</div>


            </SwiperSlide>
            <SwiperSlide >
                <div className=' w-[100%] mx-auto relative'>
                    <Image src={img1} width={400} height={200} className='h-[200px] w-full rounded-md' alt="" />
                </div>
                <div className="badge bg-[#FD6A02] text-white rounded-md  absolute top-5 left-5 ">60% off</div>
            </SwiperSlide>
            <SwiperSlide >
            <div className=' w-[100%] mx-auto relative'>
                    <Image src={'https://i.ibb.co/qsSsL06/juice2.jpg'} width={400} height={200} className='h-[200px] w-full rounded-md' alt="" />
                </div>
                <div className="badge bg-[#FD6A02] text-white rounded-md absolute top-5 left-5 ">10% off</div>
            </SwiperSlide>
            <SwiperSlide >
            <div className=' w-[100%] mx-auto relative'>
                    <Image src={'https://i.ibb.co/6Xb0gDD/cookies2.jpg'} width={400} height={200} className='h-[200px] w-full rounded-md' alt="" />
                </div>
                <div className="badge bg-[#FD6A02] text-white rounded-md absolute top-5 left-5 ">20% off</div>
            </SwiperSlide>
            <SwiperSlide >
            <div className=' w-[100%] mx-auto relative'>
                    <Image src={'https://i.ibb.co/Gv30zMQ/download-16.jpg'} width={400} height={200} className='h-[200px] w-full rounded-md' alt="" />
                </div>
                <div className="badge bg-[#FD6A02] text-white rounded-md absolute top-5 left-5 ">30% off</div>
            </SwiperSlide>



        </Swiper>
    );
};

export default SwiperSilder;