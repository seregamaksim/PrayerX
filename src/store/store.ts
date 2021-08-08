import { configureStore } from '@reduxjs/toolkit'
import { authMiddleware } from './middlewares/authMiddleware'

export const store = configureStore({
    reducer: {},
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
      serializableCheck: false,
    }).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch