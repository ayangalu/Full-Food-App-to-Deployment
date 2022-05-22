import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const foodHeaders = {
  'X-RapidAPI-Host': import.meta.env.REACT_APP_Api_Host,
  'X-RapidAPI-Key': import.meta.env.REACT_APP_Api_Key
}

const baseUrl = 'https://tasty.p.rapidapi.com'

const createRequest = (url) => ({url, headers: foodHeaders})

export const foodApi= createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFoodCategory: builder.query({
      query: (tags) => createRequest(`/recipes/list?from=0&size=20&tags=${tags}`),
    }),
    getFoodSimilarity: builder.query({
      query: (recipeId) => createRequest(`/recipes/list-similarities/${recipeId}`),
    }),
    getMoreInfo: builder.query({
      query: (id) => createRequest(`/recipes/get-more-info/${id}`),
    }),
    getTips: builder.query({
      query: (recipeId) => createRequest(`/tips/list/${recipeId}`),
    }),
    getTags: builder.query({
      query: () => createRequest(`/tags/list`),
    }),
    getAll: builder.query({
      query: () => createRequest(`/recipes/list?from=0&size=200`),
    }),
  }),
})

export const { 
    useGetFoodCategoryQuery,
    useGetFoodSimilarityQuery,
    useGetMoreInfoQuery,
    useGetTagsQuery,
    useGetTipsQuery,
    useGetAllQuery
} = foodApi


