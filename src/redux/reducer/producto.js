import { createSlice } from '@reduxjs/toolkit';
import { product } from '../action/producto';

const productSlice = createSlice({
  name: 'producto',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: product,
  },
});

export const { increment } = productSlice.actions;

export default productSlice.reducer;