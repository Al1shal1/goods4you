import { IProduct } from "models/Product";
import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleProduct: build.query<IProduct, string>({
        query: (id) => `/products/${id}`,
        }),
    }),
    overrideExisting: true,
})

export const { useGetSingleProductQuery } = productApi;
