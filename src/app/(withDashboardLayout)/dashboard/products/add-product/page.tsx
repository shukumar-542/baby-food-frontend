"use client"
import Button from '@/components/ui/Button/Button';
import { useAddProductMutation } from '@/redux/api/productApi';
import { addNewProduct } from '@/services/action/addProducts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import { toast } from 'sonner';

type TUpdateProduct = {
    productName: string,
    price: string,
    description: string,
    rating: string,
    image: string,
    category: string

}

const AddProductPage = () => {
    // const [addProduct] = useAddProductMutation()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TUpdateProduct>()

    const onSubmit: SubmitHandler<TUpdateProduct> = async (data) => {
        try {
            const res = await addNewProduct(data)
            if (res?.insertedId) {
                toast.success('product added successfully')
                router.push('/dashboard/products')
            }
        } catch (err: any) {
            console.error(err.message)
        }


    }

    return (
        <div className=' bg-[#F2F4F8] pb-5 '>
            <h1 className=' ml-4 text-xl font-semibold text-center py-10'>Add New Products</h1>


            <div className=' max-w-[50%] mx-auto pt-5 flex justify-center items-center bg-white px-5 rounded-md shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5'>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="title" className="text-gray-400">Product Name</label>
                            <input {...register("productName")} type="text" className="border rounded-md p-2" placeholder="Enter Product Name" name="productName" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="price" className="text-gray-400">Price</label>
                            <input {...register("price")} type="text" className="border rounded-md p-2" placeholder="Enter Product Price" name="price" id="" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5'>

                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="category" className="text-gray-400">Product Category</label>
                            <input {...register("category")} type="text" className="border rounded-md p-2" placeholder="Enter Product Category" name="category" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="category" className="text-gray-400">Product rating</label>
                            <input {...register("rating")} type="text" className="border rounded-md p-2" placeholder="Enter Product Category" name="rating" id="" />
                        </div>
                    </div>


                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="category" className="text-gray-400">Image</label>
                        <input {...register("image")} type="text" className="border rounded-md p-2" placeholder="Enter Product image" name="image" id="" />
                    </div>

                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="description" className="text-gray-400">Product Description</label>
                        <textarea {...register("description")} className="border rounded-md p-2" placeholder="Enter product description" name="description" id="" />
                    </div>

                    <div className='flex justify-center items-center'>
                        <Button type="submit" className='gap-2 flex items-center rounded-md justify-center px-4 py-2 text-[white]  my-5' >
                            <FaUpload />
                            <span>Upload Products</span>
                        </Button>
                    </div>


                </form>

            </div>

        </div>
    );
};

export default AddProductPage;