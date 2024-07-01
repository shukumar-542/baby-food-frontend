import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <h1 className='text-2xl font-bold text-[#FD6A02]'>Loading..</h1> */}
            {/* <span className="loading loading-dots loading-lg text-[#FD6A02]"></span> */}
            <span className="loading loading-bars loading-lg text-[#01B4B7]"></span>
        </div>
    );
};

export default loading;