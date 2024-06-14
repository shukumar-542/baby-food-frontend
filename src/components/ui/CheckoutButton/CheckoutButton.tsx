"use client"

import { useOrderProductMutation } from "@/redux/api/orderApi";
import { clearCart } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
type ProductNameAndQuantity = {
    productName: string;
    quantity: number;
    image : string,
    price : number
};

const CheckoutButton = () => {
    const [orderProduct] = useOrderProductMutation()
    const dispatch = useAppDispatch()

    const { tax, grandTotal, totalPrice, products } = useAppSelector((store) => store.cart)



    const handleCheckout = async () => {
        const productNameAndQuantity: ProductNameAndQuantity[] = products.map(({ productName, quantity,image,price }) => ({ productName, quantity, image,price }));
        const orderDetails = {
            products: productNameAndQuantity,
            tax, grandTotal,
            totalPrice,

        }
        try {
            const res = await orderProduct(orderDetails).unwrap()


            if (res?.insertedId) {
                toast.success('Your order completed')
                dispatch(clearCart())
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