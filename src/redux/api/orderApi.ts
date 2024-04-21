import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        orderProduct: builder.mutation({
            query: (data) => ({

                url: `order`,
                method: "POST",
                body: data
            }),
        }),
        getOrderProduct : builder.query({
            query : ()=>({
                url : 'order',
                method : "GET"
            })
        })
    })
})

export const { useOrderProductMutation, useGetOrderProductQuery } = orderApi;