import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import FlashSaleCard from './FlashSaleCard';
import { product } from '@/type/product';

const PopularProduct = async() => {
    const res = await fetch('http://localhost:5000/api/v1/top-rating',{
        next :{
            revalidate : 30
        }
    })
    const products = await res.json()
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

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
                
                {
                    products?.map((product : product)=> <FlashSaleCard key={product._id} product={product} />)
                }
                
            </div>
        </div>
    );
};

export default PopularProduct;