import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value+= Number(action.payload);
        },
        decrement: (state, action) => {
            state.value-= Number(action.payload);
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

// state selectors

//state.counter.value is the accessing the store, 
//and then the counter, 
//and then the value of the counter
export const selectCount = (state) => state.counter.value

//actions 
export const { increment, decrement, reset } = counterSlice.actions;


//reducer is a property that needs to be exported for this slice to be accessible in the store
export default counterSlice.reducer;