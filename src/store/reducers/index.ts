import gamesReducer, { gamesActions } from './gamesSlice';
import themeReducer, { themeActions } from './themeSlice';
import standingsReducer, { standingsActions } from './standingsSlice';

export const reducers = {
  gamesReducer,
  themeReducer,
  standingsReducer,
};

export const actions = {
  ...gamesActions,
  ...themeActions,
  ...standingsActions,
};
