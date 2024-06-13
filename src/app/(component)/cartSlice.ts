import { createStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    item: []
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item.push({
                ...action.payload
            })
        }
    }
})

export default cartSlice.reducer;
export const {addItem} = cartSlice.actions
