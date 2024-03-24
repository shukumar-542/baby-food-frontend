import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { GoPlusCircle } from 'react-icons/go';

const FlashSaleCard = ({product} : {product : product}) => {
    return (
        <div className="card  bg-base-100 shadow-md">
            <figure className='relative w-full h-[200px]'>
                <Image src={product?.image} width={200} height={100} alt='Flash sale image' />
                <div className="badge bg-[#FD6A02] text-white py-1 absolute top-2 left-5">{product?.discount}%</div>
            </figure>
            <div className="card-body p-5">
                <h2 className="font-normal ">
                   {product?.productName}
                </h2>
                <div className='flex justify-between items-center'>
                    <p>
                        <del >$25</del>
                        <span className='font-semibold ml-2'>${product?.price}</span>
                    </p>
                    <GoPlusCircle />
                </div>

            </div>
        </div>
    );
};

export default FlashSaleCard;