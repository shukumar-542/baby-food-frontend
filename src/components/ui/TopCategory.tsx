import Image from 'next/image';
import React from 'react';

const TopCategory = () => {
    return (
        <div className='text-center my-20'>
            <div className='w-[50%] mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>Top Categories</h1>
                <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.!</h1>
            </div>
            <div className='my-20'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/6ZB6Vxz/milk.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>Milk</h1>
                    </div>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/FYC34f9/cereal.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>
                            Cereals</h1>
                    </div>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/KqvHt8b/cracker.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>crackers </h1>
                    </div>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/997zWpJ/snack.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>snacks </h1>
                    </div>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/Jt7bBTB/juices.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>juice </h1>
                    </div>
                    <div className='bg-gray-200 flex  flex-col items-center rounded-md shadow-md py-8'>
                        <Image src={'https://i.ibb.co/3NCRr1G/cookie.png'} width={100} height={100} alt='Cereals' />
                        <h1 className='text-2xl uppercase font-semibold mb-2'>cookies </h1>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TopCategory;