import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `authors`,
    }),
    getBooks: builder.query({
      query: () => `books`,
    }),
    getSelectedBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    createUser: builder.mutation({
      query: ({ ...body }) => ({
        url: `authors`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useGetBooksQuery ,useGetSelectedBookQuery} = api;
