import { IProduct } from "@models/IProduct";
import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleProduct: build.query<IProduct, number>({
            query: (id) => `/products/${id}`,
        }),
    }),
    overrideExisting: true,
});

export const { useGetSingleProductQuery } = productApi;
