// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './cartReducer'

// export const store = configureStore({
//     reducer:{
//         counter: counterReducer
//     }
// })

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>

// export default store

import { createStore } from "@reduxjs/toolkit";

const initialState = {count: 0}

function counterReducer(state = initialState, actions){
    switch(actions.type){
        case 'INCREMENT':
            return {count: state.count + 1}
       case 'DECREMENT':
            return {count: state.count -1}
        default: 
            return state;
    }
}

const store = createStore(counterReducer)
export default store
