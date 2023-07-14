import { api } from "../api/api";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data ) => ({
        url: '/user/create-user',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['authUser'],
    }),
    getUser: builder.query({
        query: (token) => `/user/getUser?token=${token}`,
        providesTags: ['authUser'],
      }),
  }),
});

export const {
  useSignUpMutation,
  useGetUserQuery,
} = productApi;