import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import AddToCatButton from '../shared/AddToCardButton';

const FlashSaleCard = ({product} : {product : product}) => {
    return (
        <div className="card border rounded-md   hover:shadow-xl hover:transition-all cursor-pointer hover:duration-400">
            <figure className='relative w-full h-[250px] '>
                <Image src={product?.image} width={200} height={100} alt='Flash sale image' />
                <div className="badge bg-[#FD6A02] text-white py-1 absolute top-2 left-5">{product?.discount}%</div>
            </figure>
            <div className="card-body p-5 text-center">
                <h2 className="font-normal text-center hover:text-primary-color ">
                   {product?.productName}
                </h2>
                <div className='flex justify-between items-center'>
                    <p>
                        <del >$25</del>
                        <span className='font-semibold ml-2'>${product?.price}</span>
                    </p>
                </div>
                <div className='flex justify-center items-center my-2'>
                    <AddToCatButton/>

                </div>

            </div>
        </div>
    );
};

export default FlashSaleCard;