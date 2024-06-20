import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <h1 className='text-2xl font-bold text-[#FD6A02]'>Loading..</h1> */}
            <span className="loading loading-dots loading-lg text-[#FD6A02]"></span>
        </div>
    );
};

export default loading;