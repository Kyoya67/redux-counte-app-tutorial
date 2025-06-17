import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice"

export const store = configureStore({
    reducer: {
        //App.jsのuseSelector((state) => state.counter.value);のcounterと一致する
        counter: counterReducer
    },
});