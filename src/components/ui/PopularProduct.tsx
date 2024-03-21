import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import FlashSaleCard from './FlashSaleCard';

const PopularProduct = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-10'>
                <div className='max-w-[45%]'>
                    <h1 className='font-bold text-2xl'>Most Popular Products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</p>
                </div>
                <div>
                    <Link href={'/'} className="btn rounded-full ">
                        View All
                        <IoIosArrowForward />
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-10'>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
                <FlashSaleCard/>
            </div>
        </div>
    );
};

export default PopularProduct;