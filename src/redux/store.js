import { configureStore, createReducer } from '@reduxjs/toolkit';

import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    // data: ,
    // cart: ,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
