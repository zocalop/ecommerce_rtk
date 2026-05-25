
import { configureStore } from '@reduxjs/toolkit';
import CartSlice.reducer from './Components/CartSlice.jsx'

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export default store;
