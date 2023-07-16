import { api } from "../api/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    bookAdd: builder.mutation({
      query: (data ) => ({
        url: '/book/create-book',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bookAdded'],
    }),
    getAllBook: builder.query({
      query: () => '/book/getAllBook',
      providesTags: ['bookAdded'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/getSingleBookController/${id}`,
 
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/deleteBook/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['bookAdded'],
    }),
    bookEdit: builder.mutation({
      query: (data ) => ({
        url: '/book/updateBook',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['bookAdded'],
    }),
  }),
});

export const {
  useBookAddMutation,
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
  useBookEditMutation,
} = bookApi;