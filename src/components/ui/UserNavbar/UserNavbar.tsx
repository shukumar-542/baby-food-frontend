import { useGetUserInformationQuery } from '@/redux/api/userApi';
import { getUserInfo } from '@/services/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

interface UserInfo {
    email: string;
    role: string;
    iat: number;
    exp: number;
}

const UserNavbar = () => {

    const [user, setUserRole] = useState<UserInfo | null>();


    // Get user email and phone number by using email
    const { data: userInfo, error, isLoading } = useGetUserInformationQuery(user?.email);
    // console.log(userInfo);
    useEffect(() => {
        const user = getUserInfo()
        setUserRole(user)
    }, [])
    return (
        <div className="shadow-md bg-gray-200 h-14 flex items-center justify-end text-end gap-3 pr-16 sticky top-0 z-10">
            <Link href={'/dashboard/update-profile'}>
                <div className='cursor-pointer hover:text-[#01B0B9]  '>
                    <p className="font-semibold ">{userInfo?.name} </p>
                    <p className='text-sm'>{user?.role} </p>
                </div>
            </Link>

            {
                userInfo?.image ? <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            height={50} width={50}
                            alt="Image"
                            src={userInfo?.image} />
                    </div>
                </div> : <FaUser size={25} />
            }


        </div>
    );
};

export default UserNavbar;