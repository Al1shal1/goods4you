import { RootState } from "./index";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "@models/ICart";
import { cartApi } from "@api/cartApi";
import { IProduct } from "@models/IProduct";


interface InitialState {
    carts: ICart | null;
}

const initialState: InitialState = {
    carts: null,
};

const USER_ID = 11;
export const selectUserId = () => USER_ID;

export const fetchUserCart = createAsyncThunk("user/fetchUserCart", async (_, { dispatch }) => {
    const result = await dispatch(cartApi.endpoints.fetchCartsByUser.initiate(USER_ID)).unwrap();
    return result.carts.length ? result.carts[0] : null;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<IProduct>) {
            if (!state.carts) {
                state.carts = {
                    discountedTotal: 0,
                    totalProducts: 1,
                    totalQuantity: 1,
                    total: action.payload.price,
                    userId: USER_ID,
                    products: [{ ...action.payload, quantity: 1 }],
                };
                return;
            }

            const product = state.carts.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity++;
            } else {
                state.carts.products.push({ ...action.payload, quantity: 1 });
            }

            userSlice.caseReducers.recalculateCarts(state);
        },

        removeItemFromCart(state, action: PayloadAction<number>) {
            if (!state.carts) return;

            state.carts.products = state.carts.products.filter((item) => item.id !== action.payload);
            if (!state.carts.products.length) state.carts = null;
            else userSlice.caseReducers.recalculateCarts(state);
        },

        updateItemQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            if (!state.carts) return;

            const product = state.carts.products.find((item) => item.id === action.payload.id);
            if (!product) return;

            product.quantity = action.payload.quantity;
            if (product.quantity <= 0) {
                state.carts.products = state.carts.products.filter((item) => item.id !== action.payload.id);
                if (!state.carts.products.length) state.carts = null;
            }

            userSlice.caseReducers.recalculateCarts(state);
        },

        recalculateCarts(state) {
            if (!state.carts) return;

            state.carts.totalProducts = state.carts.products.length;
            state.carts.totalQuantity = state.carts.products.reduce((sum, item) => sum + item.quantity, 0);
            state.carts.total = state.carts.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.carts = action.payload;
            })
            .addMatcher(cartApi.endpoints.fetchCartsByUser.matchFulfilled, (state, action) => {
                state.carts = action.payload.carts.length ? action.payload.carts[0] : null;
            });
    },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = userSlice.actions;

export const selectCartItemById = (state: RootState, productId: number) =>
    state.user.carts?.products.find((item) => item.id === productId) || null;

export default userSlice.reducer;
