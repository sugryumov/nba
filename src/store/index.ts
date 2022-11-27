import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gamesApi } from '@/services/gamesService';
import { reducers } from './reducers';

const rootReducer = combineReducers({
  ...reducers,
  [gamesApi.reducerPath]: gamesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
