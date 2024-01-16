import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import productReducer from './product/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
  },
  devTools: import.meta.env.DEV,
});
