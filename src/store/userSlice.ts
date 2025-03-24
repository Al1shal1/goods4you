import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "@models/ICart";
import { IProduct } from "@models/IProduct";
import { RootState } from "./index";
import { cartApi } from "@api/cartApi";

export type CartItem = IProduct & { quantity: number };

interface InitialState {
    userId: number;
    carts: ICart | null;
    removedProducts: IProduct[];
}

const initialState: InitialState = {
    userId: 0,
    carts: null,
    removedProducts: [],
};

export const fetchUserCart = createAsyncThunk(
    "user/fetchUserCart",
    async (_, { dispatch, getState }) => {
            const userId = (getState() as RootState).user.userId;
            if (!userId) return null;
            const { carts } = await dispatch(cartApi.endpoints.fetchCartsByUser.initiate(userId)).unwrap();
            return carts.length ? carts[0] : null;
    }
);

export const fetchUpdateCart = createAsyncThunk<ICart, { id: number; products: CartItem[]; totalQuantity: number }, { rejectValue: string }>(
    "carts/fetchUpdate",
    async (params, { rejectWithValue, dispatch }) => {
        try {
            return await dispatch(cartApi.endpoints.updateCart.initiate(params)).unwrap();
        } catch{
            return rejectWithValue("Update failed");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number | null>) => {
            Object.assign(state, { userId: action.payload || 0, carts: null, removedProducts: [] });
        },

        addItemToCart(state, { payload: product }: PayloadAction<IProduct>) {
            if (!state.carts) {
                state.carts = { discountedTotal: 0, totalProducts: 0, totalQuantity: 0, total: 0, userId: state.userId, products: [] };
            }
            state.removedProducts = state.removedProducts.filter(item => item.id !== product.id);
            const existing = state.carts.products.find(item => item.id === product.id);
            if (existing) {
                existing.quantity++;
            } else {
                state.carts.products.push({ ...product, quantity: 1 });
            }
            recalculateCarts(state);
        },

        removeItemFromCart(state, { payload: productId }: PayloadAction<number>) {
            if (!state.carts) return;
            state.removedProducts.push(...state.carts.products.filter(item => item.id === productId));
            state.carts.products = state.carts.products.filter(item => item.id !== productId);
            recalculateCarts(state);
            if (state.carts.products.length === 0) {
                state.carts = null;
            }
        },

        updateItemQuantity(state, { payload: { id, quantity } }: PayloadAction<{ id: number; quantity: number }>) {
            if (!state.carts) return;
            const productIndex = state.carts.products.findIndex(item => item.id === id);
            if (productIndex === -1) return;
            const product = state.carts.products[productIndex];
            if (quantity === 0) {
                state.carts.products.splice(productIndex, 1);
                state.removedProducts.push(product);
            } else {
                product.quantity = quantity;
            }
            recalculateCarts(state);
            if (state.carts.products.length === 0) {
                state.carts = null;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.fulfilled, (state, { payload }) => Object.assign(state, { carts: payload, removedProducts: [] }))
            .addCase(fetchUpdateCart.fulfilled, (state, action) => {
                state.carts = action.payload;
            });
    },
});

function recalculateCarts(state: InitialState) {
    if (!state.carts) return;
    Object.assign(state.carts, {
        totalProducts: state.carts.products.length,
        totalQuantity: state.carts.products.reduce((sum, { quantity }) => sum + quantity, 0),
        total: state.carts.products.reduce((sum, { price, quantity }) => sum + price * quantity, 0),
        discountedTotal: state.carts.products.reduce(
            (sum, { price, discountPercentage, quantity }) => sum + (price - (price * discountPercentage) / 100) * quantity, 0
        ),
    });
}

export const { setUserId, addItemToCart, removeItemFromCart, updateItemQuantity } = userSlice.actions;
export const selectUserId = (state: RootState) => state.user.userId;
export const selectRemovedProducts = (state: RootState) => state.user.removedProducts;
export const selectCartItemById = (state: RootState, productId: number) =>
    state.user.carts?.products.find((item) => item.id === productId) || null;

export default userSlice.reducer;
