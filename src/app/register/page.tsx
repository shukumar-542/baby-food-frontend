"use client"
import { userLogin } from '@/services/action/loginUser';
import { registerUser } from '@/services/action/registeruser';
import { storeUserInfo } from '@/services/auth.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiUser } from 'react-icons/bi';
import { CiUnlock } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { toast } from 'sonner';

type TRegisterProps = {
    name: string
    email: string
    password: string
}

const RegisterPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterProps>()


    const onSubmit: SubmitHandler<TRegisterProps> = async(data) => {
        const res = await registerUser(data)
        if(res?.success){
            toast.success(res?.message)
            const login = await userLogin({email : data?.email , password : data?.password})
            if(login?.token){
                storeUserInfo(login?.token);
                toast.success(res?.message)
                router.push('/')
            }
        }
    }
    return (
        <div className='container'>
            <div className='flex  items-center  h-[100vh] my-auto'>
                <div className='w-1/2 mx-auto'>
                    <div className='border-b w-full pb-2'>
                        <h1 className='text-2xl font-semibold'>Create an account</h1>
                    </div>


                    <div className='mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                                <BiUser className="text-gray-500 mr-2 w-6  size-6" />
                                <input type="name" placeholder="User Name" className="flex-grow outline-none border-none" {...register("name")} />
                            </div>
                            <div className="flex mt-5 items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                                <MdEmail className="text-gray-500 mr-2 w-6  size-6" />
                                <input type="email" placeholder="Email" className="flex-grow outline-none border-none" {...register("email")} />
                            </div>
                            <div className="flex mt-5 items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                                <CiUnlock className="text-gray-500 mr-2 w-6  size-6" />
                                <input type="password" placeholder="password" className="flex-grow outline-none border-none" {...register("password")} />
                            </div>
                            <div className='flex items-center mt-3'>
                                <MdEmail className="text-gray-500 mr-2 w-6  " />
                                <p className='text-sm'>Forgot your <span className='text-blue-500'>Password?</span></p>
                            </div>
                            <div>
                                <p className='text-sm mt-3 ml-1'>If you have an account, please <Link href='/login'><span className='text-blue-500 '> Login Here</span></Link></p>
                            </div>
                            <button type='submit' className="mt-5 hover:bg-[#D3710F] px-5 py-2 bg-black text-white rounded-md">Register</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;