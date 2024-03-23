import FlashSaleCard from "@/components/ui/FlashSaleCard";
import { product } from "@/type/product";
import Link from "next/link";

const ProductsPage = async () => {
    const res = await fetch('http://localhost:5000/api/v1/product')
    const products = await res.json()


    return (
        <div className="grid grid-cols-12 gap-5 my-10">
            <div className="col-span-2">
                <div>
                    <h1 className="border-l-2 border-black pl-2">Price Range</h1>
                </div>
            </div>
            <div className="col-span-10">
                <div>
                    <h1 className="font-bold text-2xl mb-10">Our Collection Of Products</h1>
                </div>
                
                    <div className="grid grid-cols-3 gap-5 cursor-pointer">
                        {
                            products.map((product: product) =>  { return (<Link key={product._id} href={`/baby-foods/${product._id}`}><FlashSaleCard  product={product} /> </Link>)})
                        }

                    </div>
            </div>
        </div>
    );
};

export default ProductsPage;