import {
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { ReturnErrorType, ReturnSuccessType } from "../constants";
import { API_BASE_URL } from "../../config/config.env";
import { LoginFormData } from "@/components/pages/Login/useLogin";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}`,
        prepareHeaders: headers => {
            // if (accessToken) {
            //     headers.set("authorization", `${accessToken}`);
            // }

            return headers;
        },
    }),

    endpoints: builder => ({
        login: builder.mutation<ReturnSuccessType<string>, LoginFormData>({
            query: body => ({
                url: "/api/login",
                method: "POST",
                body,
                refetchOnMountOrArgChange: true,
            }),
            transformResponse: (response: ReturnSuccessType<string>) =>
                response,
            transformErrorResponse: (
                response: FetchBaseQueryError | ReturnErrorType,
            ) => response,
        }),
    }),
});

export const { useLoginMutation } = authApi;
