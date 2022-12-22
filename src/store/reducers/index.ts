import gamesReducer, { gamesActions } from './gamesSlice';
import themeReducer, { themeActions } from './themeSlice';
import standingsReducer, { standingsActions } from './standingsSlice';
import shotChartReducer, { shotChartActions } from './shotChartSlice';

export const reducers = {
  gamesReducer,
  themeReducer,
  standingsReducer,
  shotChartReducer,
};

export const actions = {
  ...gamesActions,
  ...themeActions,
  ...standingsActions,
  ...shotChartActions,
};
