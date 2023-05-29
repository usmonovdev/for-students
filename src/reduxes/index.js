import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";

export default configureStore({
    reducer: {
        product: productSlice
    }
});