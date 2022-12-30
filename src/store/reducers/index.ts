import gamesReducer, { gamesActions } from './gamesSlice';
import gameInfoReducer, { gameInfoActions } from './gameInfoSlice';
import themeReducer, { themeActions } from './themeSlice';
import standingsReducer, { standingsActions } from './standingsSlice';
import shotChartReducer, { shotChartActions } from './shotChartSlice';

export const reducers = {
  gamesReducer,
  gameInfoReducer,
  themeReducer,
  standingsReducer,
  shotChartReducer,
};

export const actions = {
  ...gamesActions,
  ...gameInfoActions,
  ...themeActions,
  ...standingsActions,
  ...shotChartActions,
};
