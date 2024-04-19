
const CheckoutPage = () => {
    return (
        <div className='bg-[#F2F4F8] h-[100vh] pt-10 '>
            <div className=' bg-white container rounded-md shadow-md   p-4'>
                <h1 className='text-2xl font-serif mb-5 '>Shopping Cart</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr className="bg-[#F2F4F8]">
                                <th className="border-r-2 border-white">Image</th>
                                <th className="border-r-2 border-white">Product Name</th>
                                <th className="border-r-2 border-white">Category</th>
                                <th className="border-r-2 border-white">Quantity</th>
                                <th className="border-r-2 border-white">Unit Price</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Cy Ganderton</td>
                                <td>iPhone 15 128GB Blue (Singapore Unofficial)</td>
                                <td>iphone 15</td>
                                <td>2</td>
                                <td>$17000</td>
                                <td>$17000</td>
                            </tr>
                           
                        </tbody>
                    </table>

                    <div className="flex justify-end pt-3 mr-5">
                        <div className="space-y-1 font-bold ">
                            <p className="border-b py-2"><span >Sub Total</span> : <span className="ml-5 text-[#EF4A23]">$17000</span></p>
                            <p  className="border-b py-2">Shipping  : <span className="ml-5 text-[#EF4A23]">$17000</span></p>
                            <p  className="border-b py-2">Total Tax :  <span className="ml-5 text-[#EF4A23]">$5</span></p>
                            <p  className="border-b py-2 mb-10">Grand Total :  <span className="ml-5 text-[#EF4A23]">$17005</span></p>
                            <button className="bg-[#EF4A23] text-white px-3 py-2 rounded-md w-full ">Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;