import { product } from "@/type/product";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";

const PopularProductCard = ({product}: {product : product}) => {

    let rating = [];
    for (let i = 0; i < product.rating; i++) {

        rating.push(<FaStar fill="#FFBF00" size={15} />)
    }
    return (
        <div className="card  bg-base-100 shadow-md ">
            <figure className='relative w-full h-[200px]'>
                <Image src={product?.image} width={200} height={100} alt='Flash sale image' />
                <span className="flex gap-2 py-1 absolute top-2 left-5">{rating}</span>
                
            </figure>
            <div className="card-body p-5">
                <h2 className="font-semibold ">
                   {product?.productName}
                </h2>
                <div className='flex justify-between items-center'>
                    <p >
                        <del >$15</del>
                        <span className='font-semibold ml-2'>${product?.price}</span>
                    </p>
                    <GoPlusCircle />
                </div>

            </div>
        </div>
    );
};

export default PopularProductCard;