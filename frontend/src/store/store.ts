import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../assets/api/baseApi";
import authReducer from "./authSlise";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootStore = ReturnType<typeof store.getState>;

