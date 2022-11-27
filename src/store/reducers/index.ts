import gamesReducer, { gamesActions } from './gamesSlice';
import themeReducer, { themeActions } from './themeSlice';

export const reducers = {
  gamesReducer,
  themeReducer,
};

export const actions = {
  ...gamesActions,
  ...themeActions,
};
