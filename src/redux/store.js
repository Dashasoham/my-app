import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,

    // cart: ,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
