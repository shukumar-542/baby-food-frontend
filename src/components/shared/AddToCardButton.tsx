"use client"
import { addToCart } from '@/redux/feature/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { product } from '@/type/product';
import { CiShoppingBasket } from 'react-icons/ci';

const AddToCardButton = ({product}: {product : product}) => {

    const dispatch = useAppDispatch()
    const handleProduct = (product :  product)=>{
        // console.log(product);
        dispatch(addToCart(product))
    }
    return (
        <button onClick={()=>handleProduct(product)} className='flex gap-2 justify-center items-center bg-gray-200 rounded-full py-2 px-4 hover:bg-primary-color hover:text-white hover:transition-all'><CiShoppingBasket /> Add To Cart </button>
    );
};

export default AddToCardButton;