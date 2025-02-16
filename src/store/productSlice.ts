import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@models/IProduct";

interface ProductsData {
    products: IProduct[];
    skip: number;
    total: number;
}

interface ProductState {
    catalogData: ProductsData;
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    catalogData: {
        products: [],
        skip: 0,
        total: 0,
    },
    isLoading: false,
    error: null,
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resetProducts(state) {
            state.catalogData.products = [];
            state.catalogData.skip = 0;
            state.catalogData.total = 0;
        },
    },
});

export const { resetProducts } = productSlice.actions;
export default productSlice.reducer;
