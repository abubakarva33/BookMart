import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `authors`,
    }),
    getBooks: builder.query({
      query: () => `books?_sort=id&_order=desc`,
      providesTags: ["Post"],
    }),
    getSelectedBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    getComments: builder.query({
      query: (bookId) => `reviews?bookId=${bookId}&_sort=id&_order=desc`,
      providesTags: ["Post"],
    }),
    postAComment: builder.mutation({
      query: ({ ...body }) => ({
        url: `reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    postABook: builder.mutation({
      query: ({ ...body }) => ({
        url: `books`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: `cartData`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    getCartData: builder.query({
      query: () => `cartData`,
    }),
    removeCartData: builder.mutation({
      query: ({id, ...body}) => ({
        url: `cartData${id}`,
        method: "DELETE",
        body,
      }),
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

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useGetBooksQuery,
  useGetSelectedBookQuery,
  useGetCommentsQuery,
  usePostACommentMutation,
  usePostABookMutation,
  useGetCartDataQuery,
  useAddToCartMutation,
  useRemoveCartDataMutation
} = api;
