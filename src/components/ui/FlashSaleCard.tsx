import Image from 'next/image';
import React from 'react';
import { GoPlusCircle } from 'react-icons/go';

const FlashSaleCard = () => {
    return (
        <div className="card  bg-base-100 shadow-md">
            <figure className='relative'>
                <Image src={'https://i.ibb.co/bFBgSqf/juice1.jpg'} width={200} height={300} alt='Flash sale image' />
                <div className="badge badge-secondary absolute top-0 left-5">40%</div>
            </figure>
            <div className="card-body p-5">
                <h2 className="font-normal ">
                    Double Bed & Side Tables
                </h2>
                <div className='flex justify-between items-center'>
                    <p>
                        <del >$25</del>
                        <span className='font-semibold ml-2'>$20</span>
                    </p>
                    <GoPlusCircle />
                </div>

            </div>
        </div>
    );
};

export default FlashSaleCard;