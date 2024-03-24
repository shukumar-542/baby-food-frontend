import CategoryCard from "@/components/ui/CategoryCard";
import FlashSaleCard from "@/components/ui/FlashSaleCard";
import PriceCard from "@/components/ui/PriceCard";
import RatingCard from "@/components/ui/RatingCard";
import { product } from "@/type/product";
import Link from "next/link";

interface SearchParams {
    category?: string;
    rating ? : string;
    min? : string;
    max? : string

    // Other properties if needed
}

interface Props {
    searchParams: SearchParams;
}

const categoriesName = [
    {
        name: 'Milk'
    },
    {
        name: 'Cereals'
    },
    {
        name: 'Crackers'
    },
    {
        name: 'Snacks'
    },
    {
        name: 'Juice'
    },
    {
        name: 'Cookies'
    },
]
const ratingNumber = [
    {
        rating: 1
    },
    {
        rating: 2
    },
    {
        rating: 3
    },
    {
        rating: 4
    },
    {
        rating: 5
    },
]

const priceRange = [
    {
        min : 1,
        max : 5
    },
    {
        min : 6,
        max : 11,
    },
    {
        min : 12,
        max : 16
    },
    {
        min : 17,
        max : 26
    }
]


const ProductsPage = async ({ searchParams }: Props) => {
    let products = []
    if (searchParams.category) {
        const res = await fetch(`http://localhost:5000/api/v1/category/${searchParams.category}`)
        products = await res.json()
    }
    else if(searchParams.rating){
        const res = await fetch(`http://localhost:5000/api/v1/rating/${searchParams.rating}`)
        products = await res.json()
    }
    else if(searchParams.max && searchParams.max){
        const res = await fetch(`http://localhost:5000/api/v1/price/${searchParams.min}/${searchParams.max}`)
        products = await res.json()
    }
    else {
        const res = await fetch('http://localhost:5000/api/v1/product')
        products = await res.json()
    }



    // console.log(searchParams);

    return (
        <div className="grid grid-cols-12 gap-5 my-10">
            <div className="col-span-2 ">
                <div className="mt-2 border border-gray-300 p-2">
                    <h1 className="border-l-2 border-black pl-2">Price Range</h1>
                    <div className="ml-4 mt-2 space-y-2 ">
                        {
                            priceRange.map((price) => <PriceCard key={price.min} price={price} />)
                        }

                    </div>
                </div>

                <div className="mt-2 border border-gray-300 p-2">
                    <h1 className="border-l-2 border-black pl-2">Categories</h1>
                    <div className="ml-4 mt-2 space-y-2 ">
                        {
                            categoriesName.map((category) => <CategoryCard key={category.name} category={category} />)
                        }

                    </div>

                </div>

                <div className="mt-5  border border-gray-300 p-2">
                    <h1 className="border-l-2 border-black pl-2">Rating</h1>

                    <div className="ml-4 mt-2 space-y-2 ">
                        {
                            ratingNumber.map((item) => <RatingCard key={item.rating} item={item} />)
                        }

                    </div>
                </div>
            </div>
            <div className="col-span-10">
                <div>
                    <h1 className="font-bold text-2xl mb-10">Our Collection Of Products</h1>
                </div>

                <div className="grid grid-cols-3 gap-5 cursor-pointer">
                    {
                        products?.map((product: product) => { return (<Link key={product._id} href={`/baby-foods/${product._id}`}><FlashSaleCard product={product} /> </Link>) })
                    }

                </div>
            </div>
        </div>
    );
};



export default ProductsPage;