import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginUser } from "@models/ILoginUser";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        loginUser: build.mutation<
            LoginUser,
            { username: string; password: string; expiresInMins?: number }
        >({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body,
            }),
        }),
        getCurrentUser: build.query<LoginUser, void>({
            query: () => "auth/me",
        }),
    }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;