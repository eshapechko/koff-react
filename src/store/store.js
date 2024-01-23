import { configureStore } from '@reduxjs/toolkit';
import { apiTokenErrorMiddleware } from './middleware';
import authReducer from './auth/authSlice';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import productReducer from './product/productSlice';
import favoriteReducer from './favorite/favoriteSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
  devTools: import.meta.env.DEV,
});
