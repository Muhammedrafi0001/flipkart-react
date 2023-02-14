
import {createSlice} from '@reduxjs/toolkit'
const initialState={
    cart:[],

}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
        state.cart=[...state.cart, action.payload];;

            
        },
        removeCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !== action.payload)
        },
    },
})
export const {addCart,removeCart} =cartSlice.actions

export default cartSlice.reducer;
