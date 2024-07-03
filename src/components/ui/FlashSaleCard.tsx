import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import AddToCatButton from '../shared/AddToCardButton';
import Link from 'next/link';

const FlashSaleCard = ({ product }: { product: product }) => {
    return (
        <div className="card border rounded-md   hover:shadow-xl hover:transition-all cursor-pointer hover:duration-400">
            <figure className='relative w-full h-[250px] serviceCard '>
                <Image src={product?.image} width={200} height={100} alt='Flash sale image' />
                {
                    product?.discount ? <div className="text-sm px-4 rounded-tr-full rounded-br-full bg-[#FD6A02] text-white py-1 absolute top-2 left-0">Save : {product?.discount}%</div> : ""
                }
            </figure>
            <div className="card-body p-5 text-center">
                <Link href={`/baby-foods/${product?._id}`}>
                    <h2 className="font-normal text-center hover:underline hover:text-primary-color ">
                        {product?.productName}
                    </h2>
                </Link>
                <div className='flex justify-between items-center'>
                    <p>
                        <del >$25</del>
                        <span className='font-semibold ml-2 text-primary-color'>${product?.price}</span>
                    </p>
                </div>
                <div className='flex justify-center items-center my-2'>
                    <AddToCatButton product={product} />

                </div>

            </div>
        </div>
    );
};

export default FlashSaleCard;