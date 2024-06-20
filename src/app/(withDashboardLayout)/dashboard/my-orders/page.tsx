"use client"
import CheckoutCart from '@/components/ui/CheckoutCart/CheckoutCart';
import { useGetOrderProductQuery } from '@/redux/api/orderApi';
import { product } from '@/type/product';
import Image from 'next/image';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { MdPending } from 'react-icons/md';

const MyOrdersPage = () => {

    const { data: orderProduct, isLoading } = useGetOrderProductQuery({})
    // console.log(orderProduct);
    return (
        <div className='mt-10 mx-10'>
            <div className='flex items-center gap-2 '>
                <h1 className='text-2xl font-semibold '>Order Details</h1>
                <p className='bg-[#EEF2FF] px-2 py-1 text-[#4F4BFF] font-bold'>Shipping</p>
            </div>

            <div className='flex justify-around   items-center mt-5 px-5 mx-auto py-10 '>

                <div className=' w-full'>
                    <div className='flex w-full items-center'>
                        <p className='bg-[#4F4BFF] p-2 rounded-full text-white'>
                            <BiCheckCircle size={20} className='text-[#EEF2FF]' />

                        </p>
                        <div className='border-t w-full '></div>
                    </div>
                    <p className='mt-2'>Order Confirmed</p>

                </div>


                <div className=' flex flex-col '>
                    <div className='flex  items-center justify-end'>
                        <div className='border-t w-full '></div>
                        <p className='bg-[#4F4BFF] p-2 rounded-full text-white'>

                            <MdPending size={20} className='text-[#EEF2FF]' />
                            {/* <BiCheckCircle size={20} className='text-[#EEF2FF]' /> */}


                        </p>


                    </div>
                    <p className='mt-2  text-start'>Delivredy</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className="overflow-x-auto h-[100vh] col-span-8 " style={{ height: "calc(100vh - 130px)" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                {/* <th>status</th> */}
                            </tr>
                        </thead>

                        <>
                            {
                                orderProduct?.map((product: any, i: number) => <tbody key={product._id}>


                                    {
                                        product?.products?.map((order: any, i: number) =>

                                            <tr key={product?._id}>
                                                <td>
                                                    <Image src={order?.image}
                                                        height={40} width={40} alt="product" />
                                                </td>
                                                <td>{order?.productName}</td>
                                                <td>{order?.price}</td>
                                                <td >

                                                    {order?.quantity}

                                                </td>
                                                {/* <td>{order?.stats}</td> */}
                                                {/* <td className='flex justify-start gap-5'>
                                                <input type="text" placeholder="Type here" className="border-1 input-bordered w-full max-w-4" />
                                                <button>Send</button>
                                            </td> */}
                                            </tr>


                                        )
                                    }



                                    <td>


                                    </td>
                                </tbody>)
                            }


                        </>
                    </table>
                </div>

            </div>




        </div >
    );
};

export default MyOrdersPage;