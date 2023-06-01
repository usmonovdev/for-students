import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        user: [],
        isFailure: null,
    },
    reducers: {
        userRegisterStart: (state, action) => {
            state.isLoading = true
        },
        userRegisterSuccess: (state, action) => {
            state.isLoading = false
            state.user = action.payload
        },
        userregisterFailure: (state, action) => {
            state.isLoading = false
            state.isFailure = action.payload
        },
        userLoginStart: (state, action) => {
            state.isLoading = true
        },
        userLoginSuccess: (state, action) => {
            state.isLoading = false
            state.user = action.payload
        },
        userLoginFailure: (state, action) => {
            state.isLoading = false
            state.isFailure = action.payload
        },

    }
});

export const { userRegisterStart, userRegisterSuccess, userregisterFailure, userLoginStart, userLoginSuccess, userLoginFailure } = userSlice.actions
export default userSlice.reducer