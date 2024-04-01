"use client"
import { useRouter } from "next/navigation";

type propsType = {
    name :  string
}

const CategoryCard = ({category} : {category : propsType}) => {
    const router = useRouter();

    return (
        <div className="cursor-pointer text-[10px] lg:text-[16px] hover:bg-[#FD6A02] pl-3 hover:text-white hover:rounded-md"  onClick={()=> router.push(`/baby-foods?category=${category.name}`)}>
           <p >{category.name}</p> 
        </div>
    );
};

export default CategoryCard;