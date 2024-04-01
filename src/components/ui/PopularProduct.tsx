import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { product } from '@/type/product';
import PopularProductCard from './PopularProductCard';

const PopularProduct = async () => {
    const res = await fetch('https://baby-food-server.vercel.app/api/v1/top-rating', {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()
    return (
        <div className='mx-5 md:mx-0'>
            <div className='flex justify-between items-center my-10'>
                <div className='max-w-[45%]'>
                    <h1 className='font-bold text-2xl'><span className='text-[#FD6A04]'>Most</span> <span className='text-[#2C188D]'>Popular </span>
                         <span className='text-[#FD6A04] '>
                            Products
                        </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</p>
                </div>
                <div>
                    <Link href={'/popular-products'} className="btn rounded-full bg-[#FD6A04] text-white hover:bg-[#2C188D]">
                        View All
                        <IoIosArrowForward />
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>

                {
                    products.slice(0,6)?.map((product: product) => <PopularProductCard key={product._id} product={product} />)
                }

            </div>
        </div>
    );
};

export default PopularProduct;