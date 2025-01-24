import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import { baseApi } from "../api/baseApi";


const rootReducer = combineReducers({
    productReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });
};


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];