import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import babyFood from '@/assets/baby-food-.png'
const Sidebar = () => {
    return (
        <div className='bg-gray-200  h-screen sticky text-center'>
            <Link href="/">
                <div className='pb-10 pt-10 flex items-center gap-2 justify-center cursor-pointer'>
                    <Image src={babyFood} width={30} height={30} alt="brand logo" />
                    <div className="text-sm md:text-2xl font-semibold ">
                        Baby<span className="text-[#FD6A02]">Food</span>
                    </div>
                </div>
            </Link>
            <Link href={'/baby-foods'} className='bg-[#FD6A02] text-white py-2 mx-1 px-5 rounded-md hover:shadow-md truncate'>All Products</Link>
        </div>
    );
};

export default Sidebar;