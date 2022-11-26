import scoreboardReducer, { scoreboardActions } from './scoreboardSlice';
import themeReducer, { themeActions } from './themeSlice';

export const reducers = {
  scoreboardReducer,
  themeReducer,
};

export const actions = {
  ...scoreboardActions,
  ...themeActions,
};
