import { baseApi } from "./baseApi";
import { ICart } from "@models/ICart";

export interface CartListResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCartsByUser: build.query<CartListResponse, number>({
            query: (id) => `/carts/user/${id}`,
        }),
    }),
    overrideExisting: true,
});

export const { useFetchCartsByUserQuery } = cartApi;
