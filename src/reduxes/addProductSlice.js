import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        new_product: [],
        isFailure: null,
    },
    reducers: {
        newProductStart: (state, action) => {
            state.isLoading = true
        },
        NewProductSuccess: (state, action) => {
            state.isLoading = false
            state.new_product = action.payload
        },
        NewProductFailure: (state, action) => {
            state.isLoading = false
            state.isFailure = action.payload
        }
    }
})

export const { newProductStart, NewProductSuccess, NewProductFailure } = addProductSlice.actions
export default addProductSlice.reducer
