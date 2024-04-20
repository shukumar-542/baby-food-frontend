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
    })
})

export const { useOrderProductMutation } = orderApi;