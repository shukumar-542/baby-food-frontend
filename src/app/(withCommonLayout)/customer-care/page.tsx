import React from 'react';
import img from "@/assets/customer-service-agent.png"
import Image from 'next/image';
const CustomerCarePage = () => {
    return (
        <div className='grid grid-cols-2 justify-center items-center gap-10 w-3/4 mx-auto h-screen'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-serif'><span className='text-[#2C188D]'>Customer</span> <span className='text-[#FD6A02]'>care service</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis iure iste quas ipsum perferendis amet dolore tempora, recusandae qui!</p>
                <button className="btn btn-warning rounded text-white">Learn More</button>

            </div>
            <div>
                <Image src={img} width={300} height={300} alt='image' />
            </div>
        </div>
    );
};

export default CustomerCarePage;