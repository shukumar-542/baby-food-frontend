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
        <button onClick={()=>handleProduct(product)} className='flex gap-2 justify-center items-center rounded-full py-2 px-4 bg-gradient-to-r from-[#01B0B9] to-[#00C9AD] hover:bg-gradient-t-r hover:from-[#00C9AD] hover:to-[#01B0B9] hover:transition-all text-white'><CiShoppingBasket /> Add To Cart </button>
    );
};

export default AddToCardButton;