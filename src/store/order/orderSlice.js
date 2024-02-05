import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async (orderId, { getState, rejectedWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Оишбка при получении данных заказа!');
      }

      return await response.json();
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

const initialState = {
  orderData: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.loading = false;
      state.error = null;
      state.orderData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orderData = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
