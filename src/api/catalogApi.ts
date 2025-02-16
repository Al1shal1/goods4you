import { IProduct } from "@models/IProduct";
import { baseApi } from "./baseApi";

interface CatalogProduct {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
  query: string;
}

export const catalogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCatalog: build.query<CatalogProduct, { query: string; limit: number; skip: number }>
      ({
        query: ({ query, limit, skip }) => ({
          url: "/products/search",
          params: { q: query, limit, skip },
        }),
      }),
  }),
  overrideExisting: true,
});

export const { useGetCatalogQuery } = catalogApi;