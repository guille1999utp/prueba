import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cart';

const store = configureStore({
  reducer: {
    product:cartReducer
  },
});

export default store;