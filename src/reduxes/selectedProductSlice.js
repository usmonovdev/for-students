import { createSlice } from "@reduxjs/toolkit";
const key = "ADDED_ITEM"

export const selectedProductSlice = createSlice({
    name: 'products',
    initialState: {
        productSelected: JSON.parse(localStorage.getItem(key)) || [],
        open: false
    },
    reducers: {
        productIdAddSuccess: (state, action) => {
            state.productSelected = action.payload
        },
        drawerOpen: (state, action) => {
            state.open = !state.open
        }
    }
})

export const { productIdAddSuccess, drawerOpen } = selectedProductSlice.actions
export default selectedProductSlice.reducer
