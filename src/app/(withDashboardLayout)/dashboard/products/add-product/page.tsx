"use client"
import { useAddProductMutation } from '@/redux/api/productApi';
import { addNewProduct } from '@/services/action/addProducts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type TUpdateProduct = {
    productName: string,
    price: string,
    description: string,
    rating: string,
    image: string,
    category: string

}

const AddProductPage = (    ) => {
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
            if(res?.insertedId){
             toast.success('product added successfully')
             router.push('/dashboard/products')
            } 
        } catch (err: any) {
            console.error(err.message)
        }
       

    }

    return (
        <div className=''>
            <h1 className='mt-4 ml-4 text-xl font-semibold'>Add New Products</h1>


            <div className='mt-5 max-w-[50%] mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="title" className="text-gray-400">Product Name</label>
                        <input {...register("productName")} type="text" className="border rounded-md p-2" placeholder="Enter Product Name" name="productName" id="" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="price" className="text-gray-400">Price</label>
                        <input {...register("price")} type="text" className="border rounded-md p-2" placeholder="Enter Product Price" name="price" id="" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="category" className="text-gray-400">Product Category</label>
                        <input {...register("category")} type="text" className="border rounded-md p-2" placeholder="Enter Product Category" name="category" id="" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="category" className="text-gray-400">Image</label>
                        <input {...register("image")} type="text" className="border rounded-md p-2" placeholder="Enter Product image" name="image" id="" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="category" className="text-gray-400">Product rating</label>
                        <input {...register("rating")} type="text" className="border rounded-md p-2" placeholder="Enter Product Category" name="rating" id="" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="description" className="text-gray-400">Product Description</label>
                        <textarea {...register("description")} className="border rounded-md p-2" placeholder="Enter product description" name="description" id="" />
                    </div>


                    <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Upload</button>

                </form>

            </div>

        </div>
    );
};

export default AddProductPage;