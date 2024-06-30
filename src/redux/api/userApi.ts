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
        }),
        getUserInformation : builder.query({
            query : (email)=>({
                url : `/userInfo/${email}`,
                method : 'GET',
            })
        }),
        updateUserInformation : builder.mutation({
            query:({id,info})=>({
                url : `/user/${id}`,
                method : 'PATCH',
                body : info
            })
        })
    })
})

export const  { useRegisterUserMutation, useGetUserMutation,useGetUserInformationQuery,useUpdateUserInformationMutation } = userApi