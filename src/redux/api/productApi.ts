import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const userApi =  baseApi.injectEndpoints({
    endpoints : (builder)=>({
        allProduct :  builder.query({
            query : ()=>({
                url : 'product',
                method : 'GET',
            }),
            providesTags : [tagTypes.products]
        }),
        deleteProduct : builder.mutation({
            query : (id)=>({
                url : `product/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags :[tagTypes.products]
        })
    })
})

export const  { useAllProductQuery , useDeleteProductMutation} = userApi