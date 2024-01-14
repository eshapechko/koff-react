import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ACCESS_KEY, API_URL } from '../../const';

export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async () => {
    const response = await fetch(`${API_URL}${ACCESS_KEY}`);

    if (!response.ok) {
      throw new Error('Не удалось получить токен доступа!');
    }

    const data = await response.json();
    return data.accessKey;
  },
);

const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        localStorage.setItem('accessToken', action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeToken } = authSlice.actions;

export default authSlice.reducer;
