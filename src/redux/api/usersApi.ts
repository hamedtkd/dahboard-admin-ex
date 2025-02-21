import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { ReturnErrorType, ReturnSuccessType } from "../constants";
import { API_BASE_URL } from "../../config/config.env";
import { UserTableDataT } from "@/components/pages/UserManagement/UserManagementTable";
import { NewMemberFormDataT } from "@/components/pages/UserManagement/MemberForm/useMember";
import Cookies from "js-cookie";  

export type ReturnSuccessUserType<T> = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data:T
};
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("token");

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: ({ 
        body,
      }: {
        body: NewMemberFormDataT; 
      }) => ({
        url: `/api/users`,
        body,
        method: "POST",
     
      }),
      transformResponse: (response: ReturnSuccessType<any>) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | ReturnErrorType,
      ): ReturnErrorType => {
        return response as ReturnErrorType;
      },
    }),
    editUser: builder.mutation({
      query: ({ 
        body, 
        id
      }: {
        body: NewMemberFormDataT; 
        id?: string;
      }) => ({
        url: `/api/users/${id}`,
        body,
        method: "PATCH",
      }),
      transformResponse: (response: ReturnSuccessType<any>) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | ReturnErrorType,
      ): ReturnErrorType => {
        return response as ReturnErrorType;
      },
    }),
    deleteUser: builder.mutation({
      query: ({  id
      }: { 
        id?: string;
      }) => ({
        url: `/api/users/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: ReturnSuccessType<any>) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | ReturnErrorType,
      ): ReturnErrorType => {
        return response as ReturnErrorType;
      },
    }),
   
 
    getUser: builder.query({
      query: ({ id }: { id?: string }) => {
        return {
          url: `/api/users/${id}`,
          method: "GET",
        };
      },
      transformResponse: (
        response: ReturnSuccessUserType<UserTableDataT>,
      ) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | ReturnErrorType,
      ): ReturnErrorType => {
        return response as ReturnErrorType;
      },
    }),
    getUsers: builder.query({
      query: ({ page }: { page?: number }) => {
        return {
          url: `/api/users?page=${page}`,
          method: "GET",
        };
      },
      transformResponse: (
        response: ReturnSuccessUserType<UserTableDataT[]>,
      ) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | ReturnErrorType,
      ): ReturnErrorType => {
        return response as ReturnErrorType;
      },
    }),
  }),
});

export const {
  useGetUserQuery,
useGetUsersQuery,
useDeleteUserMutation,
  useCreateNewUserMutation,
  useEditUserMutation,
} = usersApi;
