import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => {
    return {
      fetchData: builder.query({
        query() {
          return `/`;
        },
      }),
    };
  },
});

export const { useFetchDataQuery } = apiSlice;
