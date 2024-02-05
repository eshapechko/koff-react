import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, PRODUCT_CATEGORIES } from '../../const';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;
    if (!token) return;

    const response = await fetch(`${API_URL}${PRODUCT_CATEGORIES}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return rejectWithValue({
          status: response.status,
          error: 'Не удалось получить каталог!',
        });
      }

      throw new Error('Не удалось получить каталог!');
    }

    return response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
