"use client"
import { useGetOrderProductQuery } from "@/redux/api/orderApi";
import Image from "next/image";
import { useState } from "react";

const OrderPage = () => {
    const [deliveryStatus, setDeliveryStatus] = useState('Pending');
    const { data: products, isLoading } = useGetOrderProductQuery({})
    // console.log(products);
    return (
        <div >


            <h1>All Orders :</h1>



            <div className="overflow-x-auto h-[100vh]" style={{ height: "calc(100vh - 130px)" }}>
                <table className="table">
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
                            products?.map((product: any, i: number) => <tr key={product._id}>
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
                                    {/* <select className="select select-primary  max-w-xs">

                                        <option>Pending</option>
                                        <option>Delivered</option>
                                    </select> */}

                                    {
                                        product.stats
                                    }
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

export default OrderPage;