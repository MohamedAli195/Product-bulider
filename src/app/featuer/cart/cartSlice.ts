import { IProduct, IProduct2 } from '../../../interfaces';
import { addToCart } from '../../../utilites/utility';
import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
 

// Define a type for the slice state
interface counterSlice {
  cartItems:IProduct2[]
}
// Define the initial state using that type
const initialState: counterSlice = {
  cartItems:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      addItemsToCart :(state,actionPayload:PayloadAction<IProduct2>)=>{
        state.cartItems=addToCart(state.cartItems,actionPayload.payload)
      }
  }
})

export const { addItemsToCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartItems

export default cartSlice.reducer