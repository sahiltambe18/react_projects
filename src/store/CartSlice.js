import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: false,
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle: (state) => {
            state.cart = !state.cart
        },
        addItem: (state, action) => {
            const product =  action.payload
            
            
            const existingItem = state.items.find(item => item.id === product.id)
            if (!existingItem) {
                state.items.push(product)
                state.totalPrice += product.price
            }else{
                existingItem.quantity++
                state.totalPrice += product.price
            }
            
            // state.items = state.items.map(item => {
            //     if (item.id === action.payload.id) {
            //         item.quantity += 1
            //         state.totalPrice += action.payload.price
            //         flage = false
            //     }
            // })
            // if(flage){
            //     state.items.push(product)
            //     state.totalPrice += action.payload.price
            // }
        },
        removeItem: (state,action ) => {
            const id = action.payload.id

            let item =  state.items.find(item => item.id === id)
            if(item.quantity===1){
                state.totalPrice -= item.price
                state.items = state.items.filter(item => item.id!== id)
            }else{
                item.quantity--
                state.totalPrice -= item.price
            }
        }
    }
})

export const { toggle, addItem ,removeItem} = cartSlice.actions;

export default cartSlice.reducer;