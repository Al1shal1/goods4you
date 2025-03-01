import { RootState } from "./index";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "@models/ICart";
import { cartApi } from "@api/cartApi";
import { IProduct } from "@models/IProduct";


interface InitialState {
    userId : number | null;
    carts: ICart | null;
    removedProducts: IProduct[];
}

const initialState: InitialState = {
    userId: localStorage.getItem("userId") ? Number(localStorage.getItem("userId")) : null,
    carts: null,
    removedProducts: [],
};

export const selectUserId = (state: RootState) => state.user.userId;

export const fetchUserCart = createAsyncThunk(
    "user/fetchUserCart",
    async (_, { dispatch, getState }) => {
        const state = getState() as RootState;
        
        const userId = state.user.userId;
        if (!userId) return null;

        const result = await dispatch(cartApi.endpoints.fetchCartsByUser.initiate(userId)).unwrap();

        return result.carts.length ? result.carts[0] : null;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number | null>) => {
            state.userId = action.payload;
            state.carts = null; // Очищаем корзину при смене пользователя
            state.removedProducts = [];
        },

        addItemToCart(state, action: PayloadAction<IProduct>) {
            if (!state.carts) {
                state.carts = {
                    discountedTotal: action.payload.price - (action.payload.price * action.payload.discountPercentage) / 100,
                    totalProducts: 1,
                    totalQuantity: 1,
                    total: action.payload.price,
                    userId: state.userId!,
                    products: [{ ...action.payload, quantity: 1 }],
                };
                return;
            }

            state.removedProducts = state.removedProducts.filter(item => item.id !== action.payload.id);

            const product = state.carts.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity++;
            } else {
                state.carts.products.push({ ...action.payload, quantity: 1 });
            }

            recalculateCarts(state);
        },

        removeItemFromCart(state, action: PayloadAction<number>) {
            if (!state.carts) return;

            const product = state.carts.products.find((item) => item.id === action.payload);
            if (!product) return;

            state.removedProducts.push(product);
            state.carts.products = state.carts.products.filter((item) => item.id !== action.payload);

            if (!state.carts.products.length) state.carts = null;
            else {
                recalculateCarts(state);
            }
        },

        updateItemQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            if (!state.carts) return;

            const product = state.carts.products.find((item) => item.id === action.payload.id);
            if (!product) return;

            product.quantity = action.payload.quantity;
            if (product.quantity <= 0) {
                state.removedProducts.push(product);
                state.carts.products = state.carts.products.filter((item) => item.id !== action.payload.id);
                if (!state.carts.products.length) state.carts = null;
            }

            recalculateCarts(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                console.log("Fetched cart:", action.payload);
                state.carts = action.payload;
            })
    },
});

function recalculateCarts(state: InitialState) {
    if (!state.carts) return;

    state.carts.totalProducts = state.carts.products.length;
    state.carts.totalQuantity = state.carts.products.reduce((sum, item) => sum + item.quantity, 0);
    state.carts.total = state.carts.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    state.carts.discountedTotal = state.carts.products.reduce(
        (sum, item) => sum + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
        0
    );
}

export const { setUserId, addItemToCart, removeItemFromCart, updateItemQuantity } = userSlice.actions;

export const selectRemovedProducts = (state: RootState) => state.user.removedProducts;

export const selectCartItemById = (state: RootState, productId: number) =>
    state.user.carts?.products.find((item) => item.id === productId) || null;

export default userSlice.reducer;


