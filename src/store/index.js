import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true }

//slice of global state
const counterSlice = createSlice({
    name: 'counter',
    initialState, //JS recognizes automatically 
    reducers: {
        increment(state) {
            state.counter++;  //this is now possible because redux toolkit uses Immer package, which detects code like this and automatically clones the existing state 
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
});


export const counterActions =  counterSlice.actions;

export default store;