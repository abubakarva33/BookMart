import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `authors`,
    }),
    getBooks: builder.query({
      query: () => `books`,
      providesTags: ['Post'],
    }),
    getSelectedBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    getComments: builder.query({
      query: () => `reviews`,
      providesTags: ['Post'],
    }),
    postAComment: builder.mutation({
      query: ({ ...body }) => ({
        url: `reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    postABook: builder.mutation({
      query: ({ ...body }) => ({
        url: `books`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['Post'],
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

export const { useGetUserQuery, useCreateUserMutation, useGetBooksQuery ,useGetSelectedBookQuery, useGetCommentsQuery, usePostACommentMutation , usePostABookMutation} = api;
