import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData,
            })
        })
    })
});

export const { useRegisterMutation } = authApi