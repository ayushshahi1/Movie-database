import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, baseUrl } from './constants';



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl , headers: {Authorization: api_key}}),
  endpoints: (builder) => ({


    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        params:{
          page: query.page ?? 1
        }
      
      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
      params:{
        query:query
      }
      })
    }),

    getMovieDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
     
      })
    }),

    getMovieVideo: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
     
      })
    }),


  })
});

export const {
  useGetMovieByCategoryQuery,
  useGetMovieVideoQuery, 
  useGetMovieDetailQuery,
  useGetSearchMovieQuery} = movieApi