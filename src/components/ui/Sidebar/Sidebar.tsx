import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='bg-gray-200  h-screen sticky text-center'>
            <div className='pb-10 pt-4'>
                <h1>Baby Food</h1>
            </div>
            <Link href={'/dashboard/all-products'} className='bg-gray-300 py-2 px-6'>Alls Products</Link>
        </div>
    );
};

export default Sidebar;