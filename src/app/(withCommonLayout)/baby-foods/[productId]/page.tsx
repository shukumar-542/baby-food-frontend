import { product } from "@/type/product";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


type productId = {
    params: {
        productId: string
    }
}


export const generateStaticParams = async () => {
    const res = await fetch('https://baby-food-server.vercel.app/api/v1/product')
    const products = await res.json()
    return products.slice(0, 10).map((product: product) => ({
        productId: product._id
    }))
}


const ProductDetailsPage = async ({ params }: productId) => {
    const res = await fetch(`https://baby-food-server.vercel.app/api/v1/product/${params.productId}`, {
        cache: "no-store"
    })
    const product = await res.json()



    let rating = [];
    for (let i = 0; i < product.rating; i++) {

        rating.push(<FaStar fill="#FFBF00" size={25} />)
    }
    return (
        <div>
            <div className="grid grid-cols-2 items-center gap-8 my-10">
                <div className="grid grid-cols-8">
                    <div className="col-span-2 ">
                        <div className="flex flex-col gap-5">
                            <div className="border-sky-100 h-[100px]"><Image src={product?.image} className="w-[100%] h-[100%]" width={100} height={200} alt="product" /></div>
                            <div className="h-[100px]"><Image src={product?.image} className="w-[100%] h-[100%]" width={100} height={200} alt="product" /></div>
                            <div className="h-[100px]"><Image src={product?.image} className="w-[100%] h-[100px]" width={100} height={200} alt="product" /></div>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <div className=" h-[300px] w-[100%]">
                            <Image src={product?.image} className="w-[100%] h-[100%]" width={100} height={200} alt="product" />
                        </div>

                    </div>

                </div>
                <div>
                    <div className="border-b pb-10">
                        <h1 className="text-2xl font-bold">{product.productName}</h1>
                        <div className="flex gap-2 mt-5  items-center ">
                            <p>$ {product?.price}</p>
                            <p className="border-l-2 border-black pl-2 flex gap-2">
                                {
                                    rating
                                }
                            </p>
                        </div>

                    </div>

                    <p className="my-5">
                        Absolutely, here a description for a baby food product:

                        Introducing our delicious and nutritious Baby Bliss Purees! Crafted with utmost care and the finest organic ingredients, Baby Bliss Purees are specially designed to provide your little one with a wholesome start to their culinary journey.

                        Each spoonful bursts with vibrant flavors and essential nutrients essential for your baby growth and development. Our range includes a variety of flavors, from the creamy sweetness of ripe bananas to the earthy goodness of garden-fresh carrots. </p>
                    <div>
                        <p className="flex gap-2 items-center"><MdCategory /> Category : <span className="uppercase font-semibold">{product.category}</span></p>
                        <p className="flex gap-2 items-center">
                            <TbTruckDelivery />
                            <span>Free worldwide shipping on all orders over $100</span>
                        </p>

                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-10 px-5 rounded-md mb-5">
                <h1 className="text-xl font-semibold"> Description</h1>
                <p>{product?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;