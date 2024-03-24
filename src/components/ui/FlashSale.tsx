import Link from "next/link";
import FlashSaleCard from "./FlashSaleCard";
import { IoIosArrowForward } from "react-icons/io";

const FlashSale = async() => {
    const res = await fetch('http://localhost:5000/api/v1/flashSale',{
        next : {
            revalidate : 30
        }
    })
    const products = await res.json()
   
    products.sort((a : any,b : any)=>{
        const timeA = new Date(a.creationTime);
        const timeB = new Date(b.creationTime);
        return timeB.getTime() - timeA.getTime();
    })
    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-bold mb-5'><span className='text-[#2C188D]'>Flash</span> <span className='text-[#FD6A02]'>Sale</span></h1>

                <Link href={'/flash-sale'} className="btn rounded-full bg-[#FD6A04] text-white hover:bg-[#2C188D]">
                    View All
                    <IoIosArrowForward  />
                </Link>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                
                {
                    products.slice(0,6).map((product : any)=><FlashSaleCard key={product._id} product={product}  />) 
                }
                
            </div>
        </div>
    );
};

export default FlashSale;