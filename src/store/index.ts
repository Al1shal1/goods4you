import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { baseApi } from "@api/baseApi";
import userReducer, { fetchUserCart } from "./userSlice";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });

    store.dispatch(fetchUserCart());

    return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
