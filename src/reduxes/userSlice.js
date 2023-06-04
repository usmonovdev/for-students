import { createSlice } from "@reduxjs/toolkit";
import { token } from "../constants"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        error: null,
        user: [],
        isLoggedIn: false
    },
    reducers: {
        registerUserStart: (state, action) => {
            state.loading = true
        },
        registerUserSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
            localStorage.setItem(token, JSON.stringify(action.payload.token))
            state.isLoggedIn = true
        },
        registerUserError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        loginUserStart: (state, action) => {
            state.loading = true
        },
        loginUserSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
            localStorage.setItem(token, JSON.stringify(action.payload.token))
            state.isLoggedIn = true
        },
        loginUserError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        logOut: (state, action) => {
            state.isLoggedIn = false
            state.user = []
        }
    }
})

export const { registerUserStart, registerUserSuccess, registerUserError, loginUserStart, loginUserSuccess, loginUserError, logOut } = userSlice.actions
export default userSlice.reducer