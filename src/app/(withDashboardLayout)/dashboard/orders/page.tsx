"use client"
import { useChangeOrderStatusMutation, useGetOrderProductQuery } from "@/redux/api/orderApi";
const OrderPage = () => {
    const { data: products, isLoading } = useGetOrderProductQuery({})
    const [changeOrderStatus] = useChangeOrderStatusMutation()

    const handleStatus =(id: string)=>{
        changeOrderStatus(id)
    }
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


                                    {
                                        product.stats === "pending" ? <div className="flex gap-2 items-center "> 
                                            <p className="text-red-500">{product.stats}</p>
                                            <button onClick={()=>handleStatus(product?._id)}>Delivered</button>
                                        </div>

                                            : <p className="text-green-500 font-semibold">{product.stats}</p>
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