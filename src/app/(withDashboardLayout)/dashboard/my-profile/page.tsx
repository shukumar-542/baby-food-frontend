"use client"
import { useGetUserInformationQuery } from '@/redux/api/userApi';
import { getUserInfo } from '@/services/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';


interface UserInfo {
    email: string;
    role: string;
    iat: number;
    exp: number;
}
const MyProfile = () => {
    const [user, setUserRole] = useState<UserInfo | null>();


    // Get user email and phone number by using email
    const { data: userInfo, error, isLoading } = useGetUserInformationQuery(user?.email);
    // console.log(userInfo);
    useEffect(() => {
        const user = getUserInfo()
        setUserRole(user)
    }, [])
    if (isLoading) {
        return <>Loading</>
    }
    return (
        <div className='h-[93vh]'>
            <h1 className='text-center  py-10 text-2xl font-semibold'>My Profile</h1>

            <div className='py-11 flex justify-center items-center relative'>
                <div className='bg-white p-10 rounded-md shadow-md '>

                    <div className='flex justify-center items-center flex-col'>
                        <div className='absolute top-0'>
                            {
                                userInfo?.image ? <Image className='rounded-full h-36 w-36 shadow-md border-gray-300 border-4' height={200} width={200} src={userInfo?.image} alt='image' /> : <RxAvatar size={100} />
                            }
                        </div>

                        <h1 className='text-3xl pt-20 font-bold flex justify-center items-center gap-2  text-[#01B0B9]'>{userInfo?.name}<span className='cursor-pointer text-[#01B0B9] hover:text-[#37cbd3]' ><Link href={'/dashboard/update-profile'}><FaRegEdit /></Link></span></h1>
                        <p>Admin</p>

                    </div>
                    <p>Email : {userInfo?.email}</p>
                    <p>Phone Number :
                        {userInfo?.phone}
                    </p>
                    <p>Address : {userInfo?.address}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;