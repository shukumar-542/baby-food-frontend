"use client"
import { useRouter } from "next/navigation";

type itemProps = {
    rating : number
}
const RatingCard = ({item} : {item : itemProps}) => {
    const router = useRouter();

    return (
        <div className="cursor-pointer hover:bg-[#FD6A02] pl-3 hover:text-white hover:rounded-md"  onClick={()=> router.push(`/baby-foods?rating=${item.rating}`)}>
           <p >{item.rating} star </p> 
        </div>
    );
};

export default RatingCard;