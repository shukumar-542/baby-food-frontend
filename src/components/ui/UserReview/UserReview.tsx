import React from 'react';
import { IoIosPaper } from 'react-icons/io';

const UserReview = () => {
    return (
        <div className='bg-[#F2F4F8]  rounded-md '>
            <div className='flex justify-between items-center border-b p-4 my-5 '>
                <div>

                    <h1 className='text-bold text-xl'>Review</h1>
                    <p>Get specific details about this product from customers who own it.</p>
                </div>
                <button className="btn btn-outline btn-primary">Write a Review</button>
            </div>

            <div className='flex items-center justify-center flex-col min-h-[250px]'>
                    <IoIosPaper className='text-[#3749BB]' size={30} />
                    <p>This product has no reviews yet. Be the first one to write a review.</p>

            </div>

        </div>
    );
};

export default UserReview;