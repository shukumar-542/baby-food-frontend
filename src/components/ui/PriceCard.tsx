"use client"
import { useRouter } from "next/navigation";

type priceProps = {
    min : number,max:number
}
const PriceCard = ({price}  : {price : priceProps}) => {
    const router = useRouter();

    return (
        <div>
            <div className="cursor-pointer hover:bg-[#FD6A02] pl-3 hover:text-white hover:rounded-md"  onClick={()=> router.push(`/baby-foods?min=${price.min}&max=${price.max}`)}>
           <p >$ {price.min} - $ {price.max} </p> 
        </div>
        </div>
    );
};

export default PriceCard;