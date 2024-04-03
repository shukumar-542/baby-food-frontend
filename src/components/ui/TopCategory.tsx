"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation'
const category = [
    {
        image: "https://i.ibb.co/6ZB6Vxz/milk.png",
        name: 'Milk',
        color: 'third-color'
    },
    {
        image: "https://i.ibb.co/FYC34f9/cereal.png",
        name: 'Cereals',
        color: 'secondary-color'
    },
    {
        image: "https://i.ibb.co/KqvHt8b/cracker.png",
        name: 'Crackers',
        color: 'third-color'
    },
    {
        image: "https://i.ibb.co/997zWpJ/snack.png",
        name: 'Snacks',
        color: 'secondary-color'
    },
    {
        image: "https://i.ibb.co/Jt7bBTB/juices.png",
        name: 'Juice',
        color: 'third-color'
    },
    {
        image: "https://i.ibb.co/3NCRr1G/cookie.png",
        name: 'Cookies',
        color: 'secondary-color'

    }
]

const TopCategory = () => {
    const router = useRouter();

    return (
        <div className='container'>
            <div className='text-center my-20 mx-5 md:mx-0 '>
                <div className='  md:w-[50%] mx-auto'>
                    <h1 className='text-3xl font-bold mb-5'><span className='text-[#2C188D]'>Top</span> <span className='text-[#FD6A02]'>Categories</span></h1>
                    <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.!</h1>
                </div>
                <div className='my-20'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                        {
                            category.map(cat => (
                                <button key={cat.name} onClick={() => router.push(`/baby-foods?category=${cat.name}`)}>
                                    <div key={cat.name} className={`bg-${cat?.color} cursor-pointer flex hover:shadow-slate-600 hover:transition-all   flex-col items-center rounded-md shadow-md py-8`}>
                                        <Image src={cat.image} width={100} height={100} alt='Cereals' />
                                        <h1 className='text-2xl uppercase font-semibold my-2 text-[#4A4326]'>{cat.name}</h1>
                                    </div>
                                </button>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>

    );
};

export default TopCategory;