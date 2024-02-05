import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const submitCartForm = createAsyncThunk(
  'formCart/submitCartForm',
  async (formData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных заказа');
      }

      const responseData = await response.json();
      return responseData.orderId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
};

const formCartSlice = createSlice({
  name: 'formCart',
  initialState,
  reducers: {
    clearFormCart(state) {
      state.success = false;
      state.orderId = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitCartForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitCartForm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.orderId = action.payload;
      })
      .addCase(submitCartForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { clearFormCart } = formCartSlice.actions;

export default formCartSlice.reducer;
