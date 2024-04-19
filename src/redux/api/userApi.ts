import { baseApi } from "./baseApi";

const userApi =  baseApi.injectEndpoints({
    endpoints : (builder)=>({
        registerUser :  builder.mutation({
            query : (body)=>({
                url : '/register',
                method : 'POST',
                body : body
            })
        }),
        getUser : builder.mutation({
            query : (body)=>({
                url : '/login',
                method : 'POST',
                body : body
            })
        })
    })
})

export const  { useRegisterUserMutation, useGetUserMutation } = userApi