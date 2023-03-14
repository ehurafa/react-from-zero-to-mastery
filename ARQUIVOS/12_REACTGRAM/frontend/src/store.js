import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})