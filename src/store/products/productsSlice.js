import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, PRODUCTS } from '../../const';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (param, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    const queryParams = new URLSearchParams();

    if (param) {
      for (const key in param) {
        if (Object.hasOwnProperty.call(param, key) && param[key]) {
          queryParams.append(key, param[key]);
        }
      }
    }

    const response = await fetch(`${API_URL}${PRODUCTS}?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return rejectWithValue({
          status: response.status,
          error: 'Не удалось получить список товаров!',
        });
      }

      throw new Error('Не удалось получить список товаров!');
    }

    return response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  pagination: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }

        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.pagination = null;
      });
  },
});

export default productsSlice.reducer;
