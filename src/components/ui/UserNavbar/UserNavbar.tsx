import { getUserInfo } from '@/services/auth.service';
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

    useEffect(() => {
        const user = getUserInfo()
        setUserRole(user)
    }, [])
    return (
        <div className="shadow-md bg-gray-200 h-14 flex items-center justify-end text-end gap-5 pr-16 sticky top-0 z-10">
            <div>
                <p className="font-semibold">{user?.email} </p>
                <p>{user?.role} </p>
            </div>
            <FaUser size={25} />

        </div>
    );
};

export default UserNavbar;