import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});