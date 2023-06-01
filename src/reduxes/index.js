import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";
import productBiIdSlice from "./productBiIdSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        product: productSlice,
        productById: productBiIdSlice,
        user: userSlice
    }
});