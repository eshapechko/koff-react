import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, CART } from '../../const';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

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
      console.log('data: ', data);
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

// export const removeProductFromCart = createAsyncThunk(
//   'cart/removeProductFromCart',
//   async (_, { getState, rejectWithValue }) => {
//     const token = getState().auth.accessToken;

//     try {
//       const response = await fetch(`${API_URL}${CART}/product/id`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Не удалось загрузить содержимое корзины!');
//       }

//       return response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const updateProductToCart = createAsyncThunk(
//   'cart/updateProductToCart',
//   async (_, { getState, rejectWithValue }) => {
//     const token = getState().auth.accessToken;

//     try {
//       const response = await fetch(`${API_URL}${CART}/products`, {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Не удалось загрузить содержимое корзины!');
//       }

//       return response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

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
        state.products = action.payload.products;
        state.totalCount = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
