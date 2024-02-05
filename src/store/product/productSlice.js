import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;
    if (!token) return;

    const response = await fetch(`${API_URL}api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return rejectWithValue({
          status: response.status,
          error: 'Не удалось получить товар!',
        });
      }

      throw new Error('Не удалось получить товар!');
    }

    return response.json();
  },
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearProduct } = productSlice.actions;

export default productSlice.reducer;
