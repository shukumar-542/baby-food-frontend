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
        }),
        updateProduct: builder.mutation({
            query: ({id, data}) => ({
                
                
              url : `product/${id}`,
              method : "PATCH",
              body : data
            }),
            invalidatesTags : [tagTypes.products]
          }),
          getProductById: builder.query({
            query: (id) => ({
             url : `product/${id}`,
             method : "GET",
            }),
            providesTags : [tagTypes.products]
          })
    })
})

export const  { useAllProductQuery , useDeleteProductMutation, useUpdateProductMutation, useGetProductByIdQuery} = userApi