"use client"
import { useGetOrderProductQuery } from '@/redux/api/orderApi';
import { useAllProductQuery } from '@/redux/api/productApi';
import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const AdminDashboard = () => {
    const { data: products, isLoading } = useAllProductQuery({});
    const { data: orderProducts } = useGetOrderProductQuery({})

    // Total Product price
    const totalProductPrice = products?.reduce((acc: any, prod: { price: any; }) => acc + parseFloat(prod.price), 0)


    const totalDeliveredProduct = orderProducts?.filter((product: any) => product?.stats === 'delivired')
    const totalDeliveredGrandTotal = totalDeliveredProduct?.reduce((acc: any, order: { grandTotal: any; }) => acc + order.grandTotal, 0);
    // console.log(totalGrandTotal);

    return (
        <div className='px-8 py-5 '>
            <h1><span className='text-xl'>Dashboard: </span> <span className='text-xs text-gray-500'>Welcome to Admin dashboard Panel!</span> </h1>

            <div className='my-5 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 items-center'>
                <div className='bg-gradient-to-r from-[#1DCBDE] to-[#1DE7B9] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center' >
                    <div className=''>
                        <h1>Total Products : <span>{products?.length}</span></h1>
                        <h1>Total Price  : <span className='text-3xl'>{totalProductPrice?.toFixed(2)}</span></h1>
                    </div>
                    <FaBangladeshiTakaSign size={30} className='text-[#77EADD] size-16' />


                </div>
                <div className='bg-gradient-to-r from-[#9F8CD4] to-[#8C9DD4] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center'>
                    <div><h1>Total Delivered : <span>{totalDeliveredProduct?.length}</span></h1>
                        <h1>Total Price : <span className='text-3xl'></span>{totalDeliveredGrandTotal?.toFixed(2)}</h1></div>
                    <FaBangladeshiTakaSign size={30} className='text-[#BDC1E5] size-16' />
                </div>
                <div className='bg-gradient-to-r from-[#04A9F5] to-[#04A9F5] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center '>
                    <div>
                        <h1>Total Pending : <span>{(products?.length - totalDeliveredProduct?.length)}</span></h1>
                        <h1>Total Price : <span className='text-3xl '>{(totalProductPrice - totalDeliveredGrandTotal).toFixed(2)}</span></h1>
                    </div>
                    <FaBangladeshiTakaSign size={30} className='text-[#68CBF9] size-16' />
                </div>
            </div>


            <h1 className='py-2 text-xl'>All Products</h1>

            <div className="overflow-x-auto h-[100vh] bg-white" style={{ height: "calc(100vh - 130px)" }}>
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
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AdminDashboard;