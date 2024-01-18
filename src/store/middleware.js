import { fetchAccessToken } from './auth/authSlice';

export const apiTokenErrorMiddleware = (store) => (next) => async (action) => {
  const state = store.getState();

  if (action.type.endsWith('rejected') && action.payload?.status === 401) {
    if (!state.auth.loading) {
      await store.dispatch(fetchAccessToken());
    }
  }

  next(action);
};
