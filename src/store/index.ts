import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { scoreboardApi } from '@/services/scoreboardService';
import { reducers } from './reducers';

const rootReducer = combineReducers({
  ...reducers,
  [scoreboardApi.reducerPath]: scoreboardApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(scoreboardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
