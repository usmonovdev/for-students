import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";
import productBiIdSlice from "./productBiIdSlice";
import userSlice from "./userSlice";
import selectedProductSlice from "./selectedProductSlice";
import addProductSlice from "./addProductSlice";

export default configureStore({
    reducer: {
        product: productSlice,
        productById: productBiIdSlice,
        user: userSlice,
        selectedProduct: selectedProductSlice,
        new_product: addProductSlice
    }
});