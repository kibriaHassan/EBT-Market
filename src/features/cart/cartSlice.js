import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem('cart')) || []
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.push({ ...action.payload })
            handleSaveLocal(state)
        },
        increaseQuantity: (state, action) => {
            const target = state.find(item => item.id === action.payload.id)
            if (target) {
                target.quantity++;
                handleSaveLocal(state)
            }
        },
        decreaseQuantity: (state, action) => {
            const target = state.find(item => item.id === action.payload.id)
            if (target.quantity > 1) {
                target.quantity--;
                handleSaveLocal(state)
            }
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            console.log(index)
            state.splice(index, 1)
            handleSaveLocal(state)
        }
    }
})
export const { addtocart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

const handleSaveLocal = (state) => {
    localStorage.setItem('cart',JSON.stringify(state))
}