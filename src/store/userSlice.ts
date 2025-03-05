import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "@models/ICart";
import { IProduct } from "@models/IProduct";
import { RootState } from "./index";
import { cartApi } from "@api/cartApi";

export type CartItem = IProduct & { quantity: number };

interface InitialState {
    userId: number | null;
    carts: ICart | null;
    removedProducts: IProduct[];
}

const initialState: InitialState = {
    userId: null,
    carts: null,
    removedProducts: [],
};

export const fetchUserCart = createAsyncThunk(
    "user/fetchUserCart",
    async (_, { dispatch, getState }) => {
        try {
            const state = getState() as RootState;
        
            const userId = state.user.userId;
            if (!userId) return null;

            const result = await dispatch(cartApi.endpoints.fetchCartsByUser.initiate(userId)).unwrap();

            return result.carts.length ? result.carts[0] : null;
        } catch (error) {
            console.error("Error fetching user cart:", error);
            return null;
        }
    }
);

export const fetchUpdateCart = createAsyncThunk<ICart, { id: number; products: CartItem[]; totalQuantity: number }, { rejectValue: string }>(
    "carts/fetchUpdate",
    async (params, { rejectWithValue, dispatch }) => {
        try {
            return await dispatch(cartApi.endpoints.updateCart.initiate(params)).unwrap();
        } catch (e) {
            return rejectWithValue(`Error ${e}`);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number | null>) => {
            state.userId = action.payload;
            state.carts = null;
            state.removedProducts = [];
        },

        addItemToCart(state, action: PayloadAction<IProduct>) {
            const product = action.payload;
            if (!state.carts) {
                state.carts = {
                    discountedTotal: product.price - (product.price * product.discountPercentage) / 100,
                    totalProducts: 1,
                    totalQuantity: 1,
                    total: product.price,
                    userId: state.userId!,
                    products: [{ ...product, quantity: 1 }],
                };
            } else {
                state.removedProducts = state.removedProducts.filter(item => item.id !== product.id);
                const existing = state.carts.products.find(item => item.id === product.id);
                if (existing) {
                    existing.quantity++;
                } else {
                    state.carts.products.push({ ...product, quantity: 1 });
                }
            }
            recalculateCarts(state);
        },

        removeItemFromCart(state, action: PayloadAction<number>) {
            if (!state.carts) return;
            const prod = state.carts.products.find(item => item.id === action.payload);
            if (!prod) return;
            state.removedProducts.push(prod);
            state.carts.products = state.carts.products.filter(item => item.id !== action.payload);
            if (state.carts.products.length === 0) state.carts = null;
            else recalculateCarts(state);
        },

        updateItemQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            if (!state.carts) return;
            const prod = state.carts.products.find(item => item.id === action.payload.id);
            if (!prod) return;
            prod.quantity = action.payload.quantity;
            if (prod.quantity <= 0) {
                state.removedProducts.push(prod);
                state.carts.products = state.carts.products.filter(item => item.id !== action.payload.id);
                if (state.carts.products.length === 0) state.carts = null;
            }
            recalculateCarts(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.carts = action.payload;
                state.removedProducts = [];
            })
            .addCase(fetchUpdateCart.fulfilled, (state, action) => {
                state.carts = action.payload;
            });
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
export const selectUserId = (state: RootState) => state.user.userId;
export const selectRemovedProducts = (state: RootState) => state.user.removedProducts;
export const selectCartItemById = (state: RootState, productId: number) =>
    state.user.carts?.products.find((item) => item.id === productId) || null;

export default userSlice.reducer;
