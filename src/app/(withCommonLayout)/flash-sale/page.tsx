import CountDown from "@/components/CountDown/CountDown";
import FlashSaleCard from "@/components/ui/FlashSaleCard";
import { product } from "@/type/product";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'BabyFood | Flash Sale',
    description: 'Flash Sale products',
  }

const FlashSalePage = async () => {
    const res = await fetch('https://baby-food-server.vercel.app/api/v1/flashSale',{
        next :{
            revalidate : 30
        }
    })
    const products = await res.json();
    return (
        <div className="mb-10 mt-5 mx-5">
            <div className="text-center mb-5">
                <CountDown/>
            </div>
            <div >
                <h1 className="text-2xl font-bold mb-10">Flash Sale</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {
                    products.map((product: product) => <FlashSaleCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default FlashSalePage;