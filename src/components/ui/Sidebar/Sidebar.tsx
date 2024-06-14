"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import babyFood from '@/assets/baby-food-.png'
import { getUserInfo } from '@/services/auth.service';
import { sideBarMenus } from '@/utils/sideBarMenu';
const Sidebar = () => {
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const { role } = getUserInfo()
        setUserRole(role)
    }, [])
    // console.log(userRole);
    return (
        <div className='bg-gray-200  h-full  '>
            <Link href="/">
                <div className='pb-10 pt-10 flex items-center gap-2  justify-center cursor-pointer'>
                    <Image src={babyFood} width={30} height={30} alt="brand logo" />
                    <div className="text-sm md:text-2xl font-semibold ">
                        Baby<span className="text-[#FD6A02]">Food</span>
                    </div>
                </div>
            </Link>

           

            <div className='flex flex-col gap-2'>
                {
                    sideBarMenus(userRole).map((item, index) => (
                        <Link key={index} href={`/dashboard/${item?.path}`} className='bg-[#FD6A02] text-white py-2  px-5  hover:shadow-md truncate'>{item?.title}</Link>

                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;