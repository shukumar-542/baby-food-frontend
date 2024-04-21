import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        orderProduct: builder.mutation({
            query: (data) => ({

                url: `order`,
                method: "POST",
                body: data
            }),
            invalidatesTags :[tagTypes.order]
        }),
        getOrderProduct : builder.query({
            query : ()=>({
                url : 'order',
                method : "GET"
            }),

            providesTags : [tagTypes.order]

        }),
        changeOrderStatus: builder.mutation({
            query : (id)=>({
                url : `order/${id}`,
                method : 'PATCH'
            }),
            invalidatesTags :[tagTypes.order]


        })
    })
})

export const { useOrderProductMutation, useGetOrderProductQuery, useChangeOrderStatusMutation } = orderApi;