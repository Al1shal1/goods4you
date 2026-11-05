import { IProduct } from "@models/IProduct";
import { baseApi } from "./baseApi";
import { ICart } from "@models/ICart";

export interface CartListResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}

export interface UpdateCartRequest {
    id: number;
    products: IProduct[];
    totalQuantity: number;
}

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCartsByUser: build.query<CartListResponse, number>({
            query: (id) => `/carts/user/${id}`,
        }),
        updateCart: build.mutation<ICart, UpdateCartRequest>({
            query: ({ id, products }) => ({
                url: `/carts/${id}`,
                method: "PUT",
                body: { merge: false, products },
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useFetchCartsByUserQuery, useUpdateCartMutation } = cartApi;
