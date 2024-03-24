import PopularProductCard from '@/components/ui/PopularProductCard';
import { product } from '@/type/product';
import React from 'react';

const PopularProductsPage = async() => {
    const res = await fetch('http://localhost:5000/api/v1/top-rating', {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()
    return (
        <div className="mb-10 mt-5">
            <div className="text-center">
            </div>
            <div >
                <h1 className="text-2xl font-bold mb-10">Popular Products</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    products?.map((product: product) => <PopularProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProductsPage;