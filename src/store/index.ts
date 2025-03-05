import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { baseApi } from "@api/baseApi";
import userReducer from "./userSlice";
import { authApi } from "@api/authApi";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware, authApi.middleware),
    });

    return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
