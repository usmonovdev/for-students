import { createSlice } from "@reduxjs/toolkit";

export const productIdSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        products: [],
        isFailure: null,
    },
    reducers: {
        productIdStart: (state, action) => {
            state.isLoading = true
        },
        productIdSuccess: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        productIdFailure: (state, action) => {
            state.isLoading = false
            state.isFailure = action.payload
        }
    }
})

export const { productIdStart, productIdSuccess, productIdFailure } = productIdSlice.actions
export default productIdSlice.reducer
