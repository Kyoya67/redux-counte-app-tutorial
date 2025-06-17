import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    //State
    initialState: {
        value: 0,
    },
    //Reducers
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

//ActionCreators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;