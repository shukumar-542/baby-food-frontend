"use client"

import { useOrderProductMutation } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
type ProductNameAndQuantity = {
    productName: string;
    quantity: number;
};

const CheckoutButton = () => {
    const [orderProduct] = useOrderProductMutation()
    const { tax, grandTotal, totalPrice, products } = useAppSelector((store) => store.cart)


    const handleCheckout = async () => {
        const productNameAndQuantity: ProductNameAndQuantity[] = products.map(({ productName, quantity }) => ({ productName, quantity }));
        const orderDetails = {
            products: productNameAndQuantity,
            tax, grandTotal,
            totalPrice
        }
        try {
           const res = await orderProduct(orderDetails).unwrap()


            if(res?.insertedId){
                toast.success('Your order completed')
            }

        } catch (err: any) {
            console.error(err.message)
        } 



    }
    return (
        <button onClick={() => handleCheckout()} className="bg-[#EF4A23] text-white px-3 py-2 rounded-md w-full ">Proceed Checkout</button>
    );
};

export default CheckoutButton;