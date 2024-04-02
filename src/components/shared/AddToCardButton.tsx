import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';

const AddToCardButton = () => {
    return (
        <button className='flex gap-2 justify-center items-center bg-gray-200 rounded-full py-2 px-4 hover:bg-primary-color hover:text-white hover:transition-all'><CiShoppingBasket /> Add To Cart </button>
    );
};

export default AddToCardButton;