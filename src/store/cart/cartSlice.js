import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, CART } from '../../const';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}${CART}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Не удалось загрузить содержимое корзины!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async (productData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URL}${CART}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Не удалось добавить товар в корзину!');
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeProductFromCart = createAsyncThunk(
  'cart/removeProductFromCart',
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URL}${CART}/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Не удалось удалить товар из корзины!');
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateProductToCart = createAsyncThunk(
  'cart/updateProductToCart',
  async (productData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URL}${CART}/products`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Не удалось изменить содержимое корзины!');
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUdpate: false,
  loadingRemove: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.products = action.payload?.products;
        state.totalCount = action.payload?.totalCount;
        state.totalPrice = action.payload?.totalPrice;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      })

      .addCase(addProductToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload?.product];
        state.totalCount = action.payload?.totalCount;
        state.totalPrice = action.payload?.totalPrice;
        state.loadingAdd = false;
        state.error = null;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      })

      .addCase(removeProductFromCart.pending, (state) => {
        state.loadingRemove = true;
        state.error = null;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        const removeProduct = state.products?.filter(
          (item) => item.id === action.payload.id,
        );

        state.products = state.products?.filter(
          (item) => item.id !== action.payload.id,
        );
        state.totalCount = action.payload.totalCount;
        state.totalPrice -= removeProduct[0].price;
        state.loadingRemove = false;
        state.error = null;
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.loadingRemove = false;
        state.error = action.error.message;
      })

      .addCase(updateProductToCart.pending, (state) => {
        state.loadingUdpate = true;
        state.error = null;
      })
      .addCase(updateProductToCart.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload.product];
        state.totalCount = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
        state.loadingUdpate = false;
        state.error = null;
      })
      .addCase(updateProductToCart.rejected, (state, action) => {
        state.loadingUdpate = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
