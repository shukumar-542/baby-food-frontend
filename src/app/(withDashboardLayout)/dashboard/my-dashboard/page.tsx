"use client"
import { useGetOrderProductQuery } from '@/redux/api/orderApi';
import { getUserInfo } from '@/services/auth.service';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const MyDashboard = () => {
    const userInfo = getUserInfo();
    const { data: orderProduct, isLoading } = useGetOrderProductQuery({})
    const allProducts = orderProduct?.filter((product: any) => product.email === userInfo?.email)

    const pendingProduct = allProducts?.filter((product: any) => product.stats === 'pending')
    // console.log(allProducts);

    const totalProductPrice = allProducts?.reduce((acc: any, prod: { grandTotal: any; }) => acc + prod.grandTotal, 0)
    const totalPendingProducePrice = pendingProduct?.reduce((acc: any, prod: { grandTotal: any; }) => acc + prod.grandTotal, 0)
    return (
        <div className='px-8 py-5 '>
            <h1><span className='text-xl'>Dashboard: </span> <span className='text-xs text-gray-500'>Welcome to dashboard Panel!</span> </h1>
            <div className='my-5 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 items-center'>
                <div className='bg-gradient-to-r from-[#1DCBDE] to-[#1DE7B9] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center' >
                    <div>
                        <h1>Total Order : <span>{allProducts?.length}</span></h1>
                        <h1>Total Price  : <span className='text-3xl'>{totalProductPrice?.toFixed(2)}</span></h1>
                    </div>
                    <FaBangladeshiTakaSign size={30} className='text-[#77EADD] size-16' />


                </div>
                <div className='bg-gradient-to-r from-[#9F8CD4] to-[#8C9DD4] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center'>
                    <div><h1>Total Delivered : {allProducts?.length - pendingProduct?.length}</h1>
                        <h1>Total Price : <span className='text-3xl '>{(totalProductPrice - totalPendingProducePrice)?.toFixed(2)}</span></h1></div>
                    <FaBangladeshiTakaSign size={30} className='text-[#BDC1E5] size-16' />
                </div>
                <div className='bg-gradient-to-r from-[#04A9F5] to-[#04A9F5] text-white p-2 w-full rounded-md space-y-2 py-8 px-4 flex gap-5 items-center '>
                    <div>
                        <h1>Total Pending : <span>{pendingProduct?.length}</span></h1>
                        <h1>Total Price : <span className='text-3xl '>{totalPendingProducePrice?.toFixed(2)}</span></h1>
                    </div>
                    <FaBangladeshiTakaSign size={30} className='text-[#68CBF9] size-16' />
                </div>
            </div>


            {/* product Table */}

            <div className="overflow-x-auto bg-white py-10 h-[60vh]">
                <table className="table table-zebra z-0">
                    {/* head */}
                    <thead>
                        <tr>
                        <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Grand Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            allProducts?.map((product: any, i: number) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td className='flex flex-col  gap-5'>

                                    {
                                        product?.products.map((order: any, i: number) =>
                                            <p key={i} >{order?.productName}</p>

                                        )
                                    }
                                </td>
                                <td>{(product.totalPrice).toFixed(2)}</td>
                                <td>{(product.grandTotal).toFixed(2)}</td>
                                <td>
                                    <p className={`${product.stats === 'delivered' ? "text-green-500" : "text-red-500"}  font-semibold uppercase`} >{product.stats}</p>

                                </td>
                                <td>


                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashboard;