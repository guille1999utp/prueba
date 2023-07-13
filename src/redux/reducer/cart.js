import { createSlice } from '@reduxjs/toolkit';
import { addCartAction, emptyCartAction, removeCartAction } from '../action/cart';


const storedCart = localStorage.getItem('shoppingCart');
const cart = storedCart ? JSON.parse(storedCart) : [];

const initialState = {
  cart
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:addCartAction,
    removeCart:removeCartAction,
    emptyCart:emptyCartAction
  },
});

export const { addCart,removeCart,emptyCart } = productSlice.actions;

export default productSlice.reducer;