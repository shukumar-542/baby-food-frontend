import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';

const DashboardAllProductPage = async () => {
    const res = await fetch('https://baby-food-server.vercel.app/api/v1/product',{
        cache : "no-store"
    })
    const products = await res.json()
    return (
        <div className='p-4 '>
            <p className='text-2xl font-bold py-2'><span className='text-[#2C188D]'>All</span> <span className='text-[#FD6A02]'>Products</span></p>




            <div className="overflow-x-auto h-[100vh]" style={{height: "calc(100vh - 130px)"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product: product ,i : number) => <tr key={product._id}>
                                <th>{i+1}</th>
                                <td className='flex  items-center gap-5'>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={product?.image} width={100} height={100} alt="image" />
                                    </div>
                                    <p>{product.productName}</p>
                                </td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardAllProductPage;