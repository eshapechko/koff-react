import { configureStore } from '@reduxjs/toolkit';
import { apiTokenErrorMiddleware } from './middleware';
import authReducer from './auth/authSlice';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import productReducer from './product/productSlice';
import favoriteReducer from './favorite/favoriteSlice';
import cartReducer from './cart/cartSlice';
import formCartReducer from './formCart/formCartslice';
import orderReducer from './order/orderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    formCart: formCartReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
  devTools: import.meta.env.DEV,
});
