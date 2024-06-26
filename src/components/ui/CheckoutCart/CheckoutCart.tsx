// "use client"
import { MdDeleteOutline } from "react-icons/md";
import CartTotal from "../CartTotal/CartTotal";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";

const CheckoutCart = ({orderProducts} : {orderProducts : any} ) => {
    return (
        <div>
            <div className=' bg-white container rounded-md shadow-md   p-4'>
                <h1 className='text-2xl font-serif mb-5 '>Shopping Carts</h1>

                 {
                    orderProducts?.length > 0 ? <div className="overflow-x-auto">
                        <table className="table">
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
                            </tbody>
                        </table>

                        <CartTotal />
                    </div> : "Your Shopping Cart Is Empty!!"
                }  


            </div>
        </div>
    );
};

export default CheckoutCart;