import Image from 'next/image';
import React from 'react';
import done from '@/assets/order-done.gif'
import { IoHomeOutline } from 'react-icons/io5';
import { GrCube } from 'react-icons/gr';
import Link from 'next/link';

const PlaceOrderPage = () => {
    return (
        <div className='mb-20 flex justify-center items-center flex-col h-[50vh]'>
            <div className=''>
                <Image src={done} height={150} width={200} alt='done' />
            </div>
            <h1 className='text-3xl text-[#212529] font-bold' >Your order has been successful</h1>
            <div className='mt-5 flex items-center gap-5'>
                <Link href='/'>
                    <button className='text-[#02ADBC] uppercase font-semibold border border-[#02ADBC] px-5 py-2 rounded-md flex justify-center  items-center gap-2 hover:text-white hover:bg-gradient-to-r from-[#01B0B9] to-[#00C9AD]'>
                        <IoHomeOutline /> <span>Back To Home</span>
                    </button>
                </Link>
                <Link href='/dashboard/my-orders'>
                    <button className=' uppercase font-semibold  px-5 py-2 rounded-md flex justify-center  items-center gap-2 text-white bg-gradient-to-r from-[#01B0B9] to-[#00C9AD] hover:bg-gradient-t-r hover:from-[#00C9AD] hover:to-[#01B0B9] '>
                        <GrCube /> <span>My Order</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceOrderPage;