import { configureStore } from "@reduxjs/toolkit";
import { CounterSLice } from "../count/CounterSlice";

export default configureStore({
    reducer: CounterSLice
});