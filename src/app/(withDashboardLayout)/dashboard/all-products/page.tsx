"use client"
import { useAllProductQuery, useDeleteProductMutation } from '@/redux/api/productApi';
import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'sonner';

const DashboardAllProductPage =  () => {
    // const res = await fetch('https://baby-food-server.vercel.app/api/v1/product', {
    //     cache: "no-store"
    // })
    // const products = await res.json()
    const {data : products, isLoading} = useAllProductQuery({})

    const [deleteProduct] = useDeleteProductMutation()


    // handle delete product 
    const handleDelete = (id  : string)=>{
        deleteProduct(id);
        toast.success('Product deleted successfully')
       
    }
    
    return (
        <div className='p-4 '>
            <p className='text-2xl font-bold py-2'><span className='text-[#2C188D]'>All</span> <span className='text-[#FD6A02]'>Products</span></p>




            <div className="overflow-x-auto h-[100vh]" style={{ height: "calc(100vh - 130px)" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product: product, i: number) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td className='flex  items-center gap-5'>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={product?.image} width={100} height={100} alt="image" />
                                    </div>
                                    <p>{product.productName}</p>
                                </td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <div className='flex gap-4'>
                                        <span className='cursor-pointer'><FaRegEdit size={20} /></span>
                                        <span onClick={() => handleDelete(product?._id)} className='bg-red-500 hover:bg-red-600 text-white p-1 rounded-md cursor-pointer'><AiOutlineDelete size={20} /></span>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardAllProductPage;