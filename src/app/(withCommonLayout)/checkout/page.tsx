"use client"
import CartTotal from "@/components/ui/CartTotal/CartTotal";
import { removedFormCart, updateProductQuantity } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const CheckoutPage = () => {
    const cartProducts = useAppSelector((store) => store.cart.products);
    const {totalPrice} = useAppSelector((store) => store.cart);
    const dispatch = useAppDispatch()

    // const {totalPrice, tax, grandTotal} = useAppSelector((store)=> store.cart)

    // product quantity update functionality
    const handleUpdateProductsQuantity = (id: string, type: string) => {
        const payload = { type, id }
        dispatch(updateProductQuantity(payload))
    }

    // removed selected product from cart
    const handleRemovedCartProduct =(id : string)=>{
        dispatch(removedFormCart({id}))
    }


    return (
        <div className='bg-[#F2F4F8] h-[100vh] pt-10 '>
            <div className=' bg-white container rounded-md shadow-md   p-4'>
                <h1 className='text-2xl font-serif mb-5 '>Shopping Cart</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr className="bg-[#F2F4F8]">
                                <th className="border-r-2 border-white">Image</th>
                                <th className="border-r-2 border-white">Product Name</th>
                                <th className="border-r-2 border-white">Category</th>
                                <th className="border-r-2 border-white">Quantity</th>
                                <th className="border-r-2 border-white">Unit Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cartProducts.map(product =>
                                    <tr key={product?._id}>
                                        <td>
                                            <Image src={product?.image}
                                                height={30} width={30} alt="product" />
                                        </td>
                                        <td>{product?.productName}</td>
                                        <td>{product?.category}</td>
                                        <td className="flex gap-3 justify-center items-center">
                                            <button className="bg-gray-200 p-1 rounded-sm " onClick={() => handleUpdateProductsQuantity(product?._id, 'decrement')}>
                                                <FiMinus />

                                            </button>
                                            {product?.quantity}
                                            <button className="bg-gray-200 p-1 rounded-sm " onClick={() => handleUpdateProductsQuantity(product?._id, 'increment')}>
                                                <GoPlus />

                                            </button>

                                        </td>
                                        <td>{product?.price}</td>
                                        <td >
                                            <button onClick={()=>handleRemovedCartProduct(product?._id)} className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600">
                                                <MdDeleteOutline size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>

                    <CartTotal/>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;