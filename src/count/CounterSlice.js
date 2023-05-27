import { createSlice } from "@reduxjs/toolkit";

export const CounterSLice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },
    reducers: {
        addCounter: (state, action) => {
            state.value += 1
        },
        removeCounter: (state, action) => {
            state.value -= 1
        },
        resetCounter: (state, action) => {
            state.value = 0
        },
        addLocalcounter: (state, action) => {
            state.value += action.payload
        }
    }
});

export const { addCounter, removeCounter, resetCounter, addLocalcounter } = CounterSLice.actions
export default CounterSLice.reducer