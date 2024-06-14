import React from 'react';
import styles from "../shared/Banner.module.css"
import Image from 'next/image';
import straw from "@/assets/p11-318x318.jpg"
const SpecialProduct = () => {
    return (
        <div className={`${styles.special_product} mb-14 py-5`}>
            <div className='py-10 text-center'>
                <h1 className='text-xl text-white'>FRESH ORGANIC FOODS DELIVERY MADE EASY
                </h1>
                <p className='text-3xl text-white font-bold'>SPECIAL PRODUCT</p>
            </div>
            <div className=' relative py-10 container grid grid-cols-1 md:grid-cols-2 text-white  gap-10'>
                <div className='space-y-5'>
                    <div className='bg-[#685C88] rounded-lg p-10'>
                        <div className='w-[70%] '>
                            <h1 className='font-semibold text-xl'>FRESH FROM OUR FARM</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi</p>
                        </div>
                    </div>
                    <div className='bg-[#6EC3F0] rounded-lg p-10'>
                        <div className='w-[70%] '>
                            <h1 className='font-semibold text-xl'>GOOD FOR HEALTH</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='bg-[#1BBC9B] rounded-lg p-10 flex justify-end'>
                        <div className='w-[75%] '>
                            <h1 className='font-semibold text-xl'>100% ORGANIC FOODS</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi</p>
                        </div>

                    </div>
                    <div className='bg-[#E31837] rounded-lg p-10 flex justify-end '>
                        <div className='w-[75%] '>
                            <h1 className='font-semibold text-xl'>SAFE FROM PESTICIDES</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi</p>
                        </div>
                    </div>
                </div>
                <div className='absolute hidden md:block  top-[5%] left-[32%] '>
                    <Image src={straw} height={300} width={300} className='bg-white shadow-2xl rounded-full size-96' alt='strabarry' />
                </div>
            </div>

        </div>
    );
};

export default SpecialProduct;