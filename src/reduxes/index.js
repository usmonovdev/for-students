import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";
import productBiIdSlice from "./productBiIdSlice";

export default configureStore({
    reducer: {
        product: productSlice,
        productById: productBiIdSlice
    }
});