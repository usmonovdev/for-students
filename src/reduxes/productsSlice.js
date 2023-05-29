import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        isFailure: null,
    },
    reducers: {
        productStart: (state, action) => {
            state.isLoading = true
        },
        productSuccess: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        productFailure: (state, action) => {
            state.isLoading = false
            state.isFailure = action.payload
        }
    }
})

export const { productStart, productSuccess, productFailure } = productSlice.actions
export default productSlice.reducer
