import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }

//slice of global state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState, //JS recognizes automatically 
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

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});



const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;