import { useAppSelector } from "@/redux/hooks";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const CartTotal = () => {

    const { tax, grandTotal, totalPrice } = useAppSelector((store) => store.cart)
    return (
        <div className="flex justify-end pt-3 mr-5">
            <div className="space-y-1 font-bold ">
                <p className="border-b py-2 flex items-center ">
                    <span >Sub Total</span> :<span className=" flex items-center gap-1 ml-5 text-[#EF4A23]"> <FaBangladeshiTakaSign />
                    {(totalPrice).toFixed(2)}</span></p>
                <p className="border-b py-2 flex items-center ">
                    <span >Shipping</span> :<span className=" flex items-center gap-1 ml-5 text-[#EF4A23]"> <FaBangladeshiTakaSign />
                    15</span></p>
                <p className="border-b py-2 flex items-center ">
                    <span >Total Tax</span> :<span className=" flex items-center gap-1 ml-5 text-[#EF4A23]"> <FaBangladeshiTakaSign />
                    {(tax).toFixed(2)}</span></p>
                <p className="border-b py-2 flex items-center ">
                    <span >Grand Total</span> :<span className=" flex items-center gap-1 ml-5 text-[#EF4A23]"> <FaBangladeshiTakaSign />
                    {(grandTotal + 15).toFixed(2)}</span></p>
                
          
               <CheckoutButton/>
            </div>
        </div>
    );
};

export default CartTotal;