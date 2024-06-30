import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypeList } from './tag-types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
  endpoints: () => ({}),
  tagTypes : tagTypeList
})

// https://baby-food-server.vercel.app