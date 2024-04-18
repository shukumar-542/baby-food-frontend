"use client"
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CiUnlock } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';


type Inputs = {
    email: string
    password: string
  }
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()


      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    return (
        <div className='container'>
            <div className='flex  items-center  h-[100vh] my-auto'>
                <div className='w-1/2 mx-auto'>
                    <div className='border-b w-full pb-2'>
                        <h1 className='text-2xl font-semibold'>Sign In</h1>
                    </div>
                    <p className='mt-2 text-sm'>Insert your account information:</p>


                    <div className='mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
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
                                <p className='text-sm mt-3 ml-1'>If you have an account, please <Link href='/register'><span className='text-blue-500 '> Register Here</span></Link></p>
                            </div>
                            <button type='submit' className="mt-5 hover:bg-[#D3710F] px-5 py-2 bg-black text-white rounded-md">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;