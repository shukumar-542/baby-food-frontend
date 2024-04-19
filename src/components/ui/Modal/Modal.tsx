import { useGetProductByIdQuery, useUpdateProductMutation } from "@/redux/api/productApi";
import { useForm } from "react-hook-form";
import { FaCircleXmark } from "react-icons/fa6";
import { toast } from "sonner";

type MType = {
    onClose: () => void,
    pId: string
}
type SData = {
    productName: string,
    price: string,
    category: string,
    description: string,

}
const Modal = ({ onClose, pId }: MType) => {
    const { register, handleSubmit, reset } = useForm<SData>();
    const { data, isLoading } = useGetProductByIdQuery(pId)
    const [updateProduct] = useUpdateProductMutation()
    const onSubmit = (data: SData) => {
        updateProduct({ id: pId, data })
        toast.success('Product update successfully')

        onClose()
        reset()
    }

    if (isLoading) {
        return 'Loading..'
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[600px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md  rounded-2xl  overflow-hidden">
                    <div className="absolute right-2 top-3 cursor-pointer" onClick={onClose}>
                        <FaCircleXmark className="size-8 text-red-400 " />
                    </div>
                    <div className="p-5 lg:p-11">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="title" className="text-gray-400">Product Name</label>
                                <input {...register("productName")} defaultValue={data?.productName} type="text" className="border rounded-md p-2" placeholder="Enter Product Name" name="productName" id="" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="title" className="text-gray-400">Price</label>
                                <input {...register("price")} defaultValue={data?.price} type="text" className="border rounded-md p-2" placeholder="Enter Product Price" name="price" id="" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="category" className="text-gray-400">Product Category</label>
                                <input {...register("category")} defaultValue={data?.category} type="text" className="border rounded-md p-2" placeholder="Enter Product Category" name="category" id="" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="description" className="text-gray-400">Product Description</label>
                                <textarea {...register("description")} defaultValue={data?.description} className="border rounded-md p-2" placeholder="Enter product description" name="description" id="" />
                            </div>


                            <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Product</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
