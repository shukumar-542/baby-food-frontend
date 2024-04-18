import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { CiUnlock } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';

const RegisterPage = () => {
    return (
        <div className='container'>
            <div className='flex  items-center  h-[100vh] my-auto'>
                <div className='w-1/2 mx-auto'>
                    <div className='border-b w-full pb-2'>
                        <h1 className='text-2xl font-semibold'>Create an account</h1>
                    </div>


                    <div className='mt-5'>
                        <div className="flex items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                            <BiUser className="text-gray-500 mr-2 w-6  size-6" />
                            <input type="email" placeholder="User Name" className="flex-grow outline-none border-none" />
                        </div>
                        <div className="flex mt-5 items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                            <MdEmail className="text-gray-500 mr-2 w-6  size-6" />
                            <input type="email" placeholder="Email" className="flex-grow outline-none border-none" />
                        </div>
                        <div className="flex mt-5 items-center gap-2 border hover:border-red-400 border-gray-300 rounded-lg p-2">
                            <CiUnlock className="text-gray-500 mr-2 w-6  size-6" />
                            <input type="password" placeholder="password" className="flex-grow outline-none border-none" />
                        </div>
                        <div className='flex items-center mt-3'>
                            <MdEmail className="text-gray-500 mr-2 w-6  " />
                            <p className='text-sm'>Forgot your <span className='text-blue-500'>Password?</span></p>
                        </div>
                        <div>
                            <p className='text-sm mt-3 ml-1'>If you have an account, please <Link href='/login'><span className='text-blue-500 '> Login Here</span></Link></p>
                        </div>
                        <button className="mt-5 hover:bg-[#D3710F] px-5 py-2 bg-black text-white rounded-md">LOGIN</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;