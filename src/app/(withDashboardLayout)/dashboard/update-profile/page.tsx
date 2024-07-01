"use client";
import { useGetUserInformationQuery, useUpdateUserInformationMutation } from '@/redux/api/userApi';
import { getUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface UserInfo {
    email: string;
    role: string;
    iat: number;
    exp: number;
}

const UpdateProfile = () => {
    const [user, setUserRole] = useState<UserInfo | null>(null);
    const router = useRouter();

    useEffect(() => {
        const user = getUserInfo();
        setUserRole(user);
    }, []);

    // Get user email and phone number by using email
    const { data: userInfo, error, isLoading } = useGetUserInformationQuery(user?.email);
    // Update user information
    const [userUpdate] = useUpdateUserInformationMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            address: { value: string };
            image: { value: string };
        };

        const name = target.name.value;
        const email = target.email.value;
        const phone = target.phone.value;
        const image = target.image.value;
        const address = target.address.value;
        const info = { name, email, phone, image, address };
        const id = userInfo?._id;
        try {
            const res = await userUpdate({ id, info }).unwrap();
            if (res?.acknowledged) {
                toast.success(' User Update Successfully');
                router.push(`/dashboard/${user?.role}`); // Navigate to the home page
            } else {
                toast.error('Failed to Update User');
            }
        } catch (error: any) {
            console.log(error.message);
        }
        // You can add your form submission logic here
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const form = e.currentTarget.form as HTMLFormElement;
        if (form) {
            form.reset();
        }
    };

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div className='mx-10 h-[93vh] flex items-center justify-center w-[90%]'>
            <div className=' w-[40%]'>
                <h1 className='text-2xl font-bold mb-5 text-center'>Update Your Information</h1>
                <div className=' bg-white p-8 rounded-md shadow-md'>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="name" className="text-gray-400">Name</label>
                            <input type="text" defaultValue={userInfo?.name} className="border rounded-md p-2" placeholder="Enter Your Name" id="name" name="name" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="name" className="text-gray-400">Email</label>
                            <input type="text" defaultValue={userInfo?.email} className="border rounded-md p-2" placeholder="Enter Your Email" id="email" name="email" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="image" className="text-gray-400">Image</label>
                            <input defaultValue={userInfo?.image} type="text" className="border rounded-md p-2" placeholder="Enter Your Image Url" id="image" name="image" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="phone" className="text-gray-400">Phone Number</label>
                            <input defaultValue={userInfo?.phone} type="text" className="border rounded-md p-2" placeholder="Enter Your Phone" id="phone" name="phone" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="address" className="text-gray-400">Address</label>
                            <textarea defaultValue={userInfo?.address} className="border rounded-md p-2" placeholder="Enter Your Address" name="address" id="address" />
                        </div>

                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md uppercase cursor-pointer hover:bg-slate-200 transition-all mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Information</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
